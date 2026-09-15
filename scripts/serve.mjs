import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.resolve(fileURLToPath(new URL("../dist/", import.meta.url)));
const mime = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".txt": "text/plain",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
};
const base = (process.env.BASE_PATH || "").replace(/\/$/, "");
http
  .createServer(async (req, res) => {
    try {
      let urlPath = decodeURIComponent(
        new URL(req.url, "http://localhost").pathname,
      );
      if (base) {
        if (urlPath === base) {
          res.writeHead(302, { Location: base + "/" });
          res.end();
          return;
        }
        if (!urlPath.startsWith(base + "/")) throw Error();
        urlPath = urlPath.slice(base.length);
      }
      let file = path.resolve(root, "." + urlPath);
      if (file !== root && !file.startsWith(root + path.sep)) throw Error();
      if ((await stat(file)).isDirectory()) {
        if (!urlPath.endsWith("/")) {
          res.writeHead(302, { Location: base + urlPath + "/" });
          res.end();
          return;
        }
        file = path.join(file, "index.html");
      }
      const bytes = await readFile(file);
      res.writeHead(200, {
        "Content-Type":
          (mime[path.extname(file)] || "application/octet-stream") +
          "; charset=utf-8",
      });
      res.end(bytes);
    } catch {
      res.writeHead(404);
      res.end("Not found. Build first with npm run build.");
    }
  })
  .listen(4173, "127.0.0.1", () =>
    console.log(`Open http://localhost:4173${base}/`),
  );
