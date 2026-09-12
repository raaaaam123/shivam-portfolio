import { loadEnv } from "vite";
import sendEmail from "./api/send-email.mjs";

export default function devApi() {
  return {
    name: "dev-api",
    configureServer(server) {
      const env = loadEnv(server.config.mode, server.config.root, "");
      Object.assign(process.env, env);

      server.middlewares.use("/api/send-email", async (req, res) => {
        try {
          let body;
          if (req.method !== "GET" && req.method !== "HEAD") {
            body = await new Promise((resolve, reject) => {
              const chunks = [];
              req.on("data", (c) => chunks.push(c));
              req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
              req.on("error", reject);
            });
          }
          const headers = new Headers(req.headers);
          headers.delete("content-length");
          const request = new Request(
            `http://localhost:${server.config.server?.port || 5173}${req.url}`,
            { method: req.method, headers, body }
          );
          const response = await sendEmail(request);
          res.statusCode = response.status;
          response.headers.forEach((value, key) => res.setHeader(key, value));
          res.end(await response.text());
        } catch {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ ok: false, message: "Local dev API error. Check the terminal for details." }));
        }
      });
    },
  };
}