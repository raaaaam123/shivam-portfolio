import { Resend } from "resend";

const REQUEST_TIMEOUT_MS = 25000;

export default async function handler(request, response) {
  const isWebRequest =
    typeof Request !== "undefined" && request instanceof Request;

  const respond = (status, body) => {
    if (status === 204) {
      if (isWebRequest) {
        return new Response(null, { status: 204 });
      }
      response.status(204).end();
      return undefined;
    }

    if (isWebRequest) {
      return Response.json(body, { status });
    }

    response.status(status).json(body);
    return undefined;
  };

  try {
    if (request.method === "OPTIONS") {
      return respond(204);
    }

    if (request.method !== "POST") {
      return respond(405, {
        ok: false,
        message: "Method not allowed. Use POST.",
      });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return respond(500, {
        ok: false,
        message:
          "RESEND_API_KEY is not set on the server. Contact the site owner.",
      });
    }

    let body;
    try {
      body = await readRequestBody(request);
    } catch {
      return respond(400, { ok: false, message: "Invalid request body." });
    }

    const { name, email, subject, message } = body ?? {};
    if (!name || !email || !subject || !message) {
      return respond(400, {
        ok: false,
        message: "All fields (name, email, subject, message) are required.",
      });
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!to || !from) {
      return respond(500, {
        ok: false,
        message:
          "CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL must be set on the server.",
      });
    }

    const resend = new Resend(apiKey);
    const { error } = await withTimeout(
      resend.emails.send({
        from,
        to,
        replyTo: email,
        subject: `${subject} — from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
            <h2 style="color: #111827; margin: 0 0 16px;">New contact message</h2>
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 6px 0; color: #6b7280; width: 90px;">From</td>
                <td style="padding: 6px 0; color: #111827; font-weight: 600;">${name} &lt;${email}&gt;</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #6b7280;">Subject</td>
                <td style="padding: 6px 0; color: #111827; font-weight: 600;">${subject}</td>
              </tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; border: 1px solid #e5e7eb; border-radius: 8px; color: #111827; white-space: pre-wrap;">${message}</div>
            <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">Sent from your portfolio contact form.</p>
          </div>
        `,
      }),
      REQUEST_TIMEOUT_MS
    );

    if (error) {
      console.error("[send-email]:", error);
      return respond(500, {
        ok: false,
        message: "Could not send the email. Please try again later.",
      });
    }

    return respond(200, { ok: true });
  } catch (err) {
    console.error("[send-email]:", err);
    return respond(500, {
      ok: false,
      message: "Could not send the email. Please try again later.",
    });
  }
}

async function readRequestBody(request) {
  if (typeof request.json === "function") {
    return await request.json();
  }

  const text = await new Promise((resolve, reject) => {
    const chunks = [];
    request.on("data", (chunk) => chunks.push(chunk));
    request.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    request.on("error", reject);
  });

  return text ? JSON.parse(text) : {};
}

function withTimeout(promise, ms) {
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(
      () => reject(new Error(`Request timed out after ${ms}ms`)),
      ms
    );
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}