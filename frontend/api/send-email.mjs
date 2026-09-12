import { Resend } from "resend";

const REQUEST_TIMEOUT_MS = 25000;
const TO_EMAIL = "collegeuse.it@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev";

export default async function handler(req, res) {
  try {
    if (req.method === "OPTIONS") {
      res.status(204).end();
      return;
    }

    if (req.method !== "POST") {
      res.status(405).json({
        ok: false,
        message: "Method not allowed. Use POST.",
      });
      return;
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      res.status(500).json({
        ok: false,
        message:
          "RESEND_API_KEY is not set on the server. Contact the site owner.",
      });
      return;
    }

    let body;
    try {
      body = await readRequestBody(req);
    } catch {
      res.status(400).json({ ok: false, message: "Invalid request body." });
      return;
    }

    const { name, email, subject, message } = body ?? {};
    if (!name || !email || !subject || !message) {
      res.status(400).json({
        ok: false,
        message: "All fields (name, email, subject, message) are required.",
      });
      return;
    }

    const resend = new Resend(apiKey);
    const { error } = await withTimeout(
      resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
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
      res.status(500).json({
        ok: false,
        message: "Could not send the email. Please try again later.",
      });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (err) {
    console.error("[send-email]:", err);
    res.status(500).json({
      ok: false,
      message: "Could not send the email. Please try again later.",
    });
  }
}

function readRequestBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
      const text = Buffer.concat(chunks).toString("utf8");
      try {
        resolve(text ? JSON.parse(text) : {});
      } catch {
        reject(new Error("Invalid JSON body"));
      }
    });
    req.on("error", reject);
  });
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