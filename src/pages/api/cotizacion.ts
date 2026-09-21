// Recibe el POST de SeccionCotizacion.astro: valida el captcha de Turnstile
// del lado del servidor (la validación del cliente solo evita fricción, no
// es seguridad) y reenvía el lead por correo vía la API de Brevo.
//
// `prerender = false` es lo que convierte esta ruta en función serverless
// dentro de un sitio que, por lo demás, se construye estático.
export const prerender = false;

import type { APIRoute } from 'astro';

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const BREVO_EMAIL_URL = 'https://api.brevo.com/v3/smtp/email';
const BREVO_SENDER_NAME = 'TLE - Carrier Nacional';

const CAMPOS_REQUERIDOS = [
  'nombre', 'empresa', 'correo', 'telefono', 'ruta', 'servicio', 'carga', 'frecuencia', 'volumen',
] as const;

const ETIQUETAS: Record<string, string> = {
  nombre: 'Nombre y apellido',
  empresa: 'Empresa',
  correo: 'Correo corporativo',
  telefono: 'Teléfono',
  ruta: 'Origen y destino',
  servicio: 'Tipo de servicio',
  carga: 'Tipo de carga',
  frecuencia: 'Frecuencia',
  volumen: 'Volumen aproximado',
  formulario: 'Sección de origen',
  origen: 'Página de origen',
  pagina_completa: 'URL completa',
  referente: 'Referente',
  utm_source: 'UTM source',
  utm_medium: 'UTM medium',
  utm_campaign: 'UTM campaign',
  utm_term: 'UTM term',
  utm_content: 'UTM content',
  gclid: 'Google Click ID',
  fbclid: 'Facebook Click ID',
};

// Campos de negocio primero, en orden de lectura; el resto (procedencia) va
// después, solo si llegó con valor.
const ORDEN_CAMPOS = [
  ...CAMPOS_REQUERIDOS,
  'formulario', 'origen', 'pagina_completa', 'referente',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid',
];

const escapeHtml = (v: string) =>
  v.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string);

const json = (body: Record<string, unknown>, status: number) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export const POST: APIRoute = async ({ request }) => {
  const TURNSTILE_SECRET_KEY = import.meta.env.TURNSTILE_SECRET_KEY;
  const BREVO_API_KEY = import.meta.env.BREVO_API_KEY;
  const FORM_DESTINATARIO = import.meta.env.FORM_DESTINATARIO;
  // Remitente en Brevo: debe ser una dirección o dominio validado en esa
  // cuenta de Brevo, así que se puede apuntar a otro remitente sin tocar
  // código si algún día cambia.
  const BREVO_SENDER_EMAIL = import.meta.env.BREVO_SENDER_EMAIL || 'noreply@futurite.info';

  if (!TURNSTILE_SECRET_KEY || !BREVO_API_KEY || !FORM_DESTINATARIO) {
    console.error('[api/cotizacion] Falta configurar TURNSTILE_SECRET_KEY, BREVO_API_KEY o FORM_DESTINATARIO.');
    return json({ error: 'El formulario no está disponible en este momento.' }, 500);
  }

  let datos: Record<string, unknown>;
  try {
    datos = await request.json();
  } catch {
    return json({ error: 'Solicitud inválida.' }, 400);
  }

  for (const campo of CAMPOS_REQUERIDOS) {
    const valor = datos[campo];
    if (typeof valor !== 'string' || !valor.trim()) {
      return json({ error: `Falta el campo "${campo}".` }, 400);
    }
  }

  const token = datos['cf-turnstile-response'];
  if (typeof token !== 'string' || !token) {
    return json({ error: 'Falta la verificación de seguridad.' }, 400);
  }

  const ip = request.headers.get('cf-connecting-ip') ?? request.headers.get('x-forwarded-for') ?? undefined;

  const verificacion = await fetch(TURNSTILE_VERIFY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ secret: TURNSTILE_SECRET_KEY, response: token, remoteip: ip }),
  });
  const resultadoVerificacion = await verificacion.json();
  if (!resultadoVerificacion.success) {
    console.warn('[api/cotizacion] Turnstile rechazó el token:', resultadoVerificacion['error-codes']);
    return json({ error: 'No pudimos verificar la solicitud. Recarga la página e inténtalo de nuevo.' }, 403);
  }

  const filas = ORDEN_CAMPOS
    .filter((campo) => typeof datos[campo] === 'string' && (datos[campo] as string).trim())
    .map((campo) => {
      const etiqueta = ETIQUETAS[campo] ?? campo;
      const valor = escapeHtml(datos[campo] as string);
      return `<tr><td style="padding:6px 12px;font-weight:bold;white-space:nowrap;">${etiqueta}</td><td style="padding:6px 12px;">${valor}</td></tr>`;
    })
    .join('');

  const nombre = datos.nombre as string;
  const correo = datos.correo as string;
  const empresa = datos.empresa as string;

  const envio = await fetch(BREVO_EMAIL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'api-key': BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: { name: BREVO_SENDER_NAME, email: BREVO_SENDER_EMAIL },
      to: [{ email: FORM_DESTINATARIO }],
      replyTo: { email: correo, name: nombre },
      subject: `Nueva solicitud de cotización nacional — ${empresa}`,
      htmlContent: `
        <div style="font-family: Arial, Helvetica, sans-serif;">
          <h1 style="font-size:28px;font-weight:800;color:#111111;margin:0 0 12px;">Nueva solicitud de cotización nacional</h1>
          <p style="font-size:15px;color:#333333;margin:0 0 24px;">Recibida desde la landing page de Carrier Nacional (TLE).</p>
          <table style="border-collapse:collapse;font-size:14px;">${filas}</table>
        </div>
      `,
    }),
  });

  if (!envio.ok) {
    console.error('[api/cotizacion] Brevo respondió', envio.status, await envio.text());
    return json({ error: 'No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos por correo.' }, 502);
  }

  return json({ ok: true }, 200);
};
