import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";
const root = fileURLToPath(new URL("../", import.meta.url));
process.chdir(root);
const base = (
  "/" + (process.env.BASE_PATH || "").replace(/^\/+|\/+$/g, "")
).replace(/\/$/, "");
rmSync("dist", { recursive: true, force: true });
mkdirSync("dist/source", { recursive: true });
cpSync("portal", "dist", { recursive: true });
const sources = {
  react: "src/App.jsx",
  next: "app/page.jsx",
  vue: "src/App.vue",
  svelte: "src/App.svelte",
  angular: "src/main.ts",
};
for (const app of Object.keys(sources)) {
  const args = ["run", "build", "-w", `apps/${app}`];
  if (app === "angular") args.push("--", "--base-href", `${base}/${app}/`);
  const result = spawnSync(
    process.platform === "win32" ? "npm.cmd" : "npm",
    args,
    {
      stdio: "inherit",
      shell: process.platform === "win32",
      env: {
        ...process.env,
        NEXT_TELEMETRY_DISABLED: "1",
        APP_BASE: `${base}/${app}`,
      },
    },
  );
  if (result.status !== 0) process.exit(result.status || 1);
  const output =
    app === "next" ? "out" : app === "angular" ? "dist/browser" : "dist";
  cpSync(path.join("apps", app, output), path.join("dist", app), {
    recursive: true,
  });
  cpSync(path.join("apps", app, sources[app]), `dist/source/${app}.txt`);
  if (app === "angular")
    cpSync("apps/angular/src/app.html", "dist/source/angular-template.txt");
}
writeFileSync("dist/.nojekyll", "");
console.log("Built all five apps into dist. Run npm run preview.");
