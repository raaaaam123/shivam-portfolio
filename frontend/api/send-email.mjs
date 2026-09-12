import { Resend } from "resend";

export default async function handler(request) {
  if (request.method !== "POST") {
    return Response.json(
      { ok: false, message: "Method not allowed. Use POST." },
      { status: 405 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return Response.json(
      {
        ok: false,
        message:
          "RESEND_API_KEY is not set in .env.local. Add it and restart the dev server.",
      },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, subject, message } = body;
  if (!name || !email || !subject || !message) {
    return Response.json(
      { ok: false, message: "All fields (name, email, subject, message) are required." },
      { status: 400 }
    );
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!to || !from) {
    return Response.json(
      {
        ok: false,
        message:
          "CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL must be set in .env.local.",
      },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
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
  });

  if (error) {
    console.error("[send-email]:", error);
    return Response.json(
      { ok: false, message: "Could not send the email. Please try again later." },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
}