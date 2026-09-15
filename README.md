# The Nesavu Framework Lab

Five real apps, one small learning playground, one GitHub Pages deployment.

The same illustrative product demo is implemented independently in React, Next.js, Vue, Svelte and Angular. It includes a quantity selector (1–10), size selection, computed total, reset button, code examples and a comparison homepage. No API keys, external product images or database are needed. This is an educational demo, not a production shop.

## Upload to GitHub and publish

1. Extract the ZIP on your computer. GitHub does not unpack an uploaded ZIP.
2. Create a **public** GitHub repository with the default branch named **main**. Any repository name is fine. Initialize it with a README so Settings is available.
3. Open **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Return to **Code → Add file → Upload files**. Upload the extracted contents to the repository root, then commit to `main`. `package.json`, `package-lock.json`, `apps/`, `portal/` and `scripts/` must be directly at the root, not inside an extra folder.
5. Ensure `.github/workflows/deploy.yml` is present. It is included in the ZIP. macOS Finder may hide dot folders; press **Command + Shift + .** to show them. If the uploader skips it, choose **Add file → Create new file**, enter `.github/workflows/deploy.yml`, and paste the full contents of the included `DEPLOY-WORKFLOW.txt`. Commit it.
6. Open **Actions → Build and deploy framework lab** and wait for it to finish. If it ran before Pages was enabled, use **Re-run all jobs**. You can also select **Run workflow**.
7. Open the deployment URL shown in the successful workflow, or use **Settings → Pages → Visit site**.

Your URL will normally be `https://YOUR-USERNAME.github.io/YOUR-REPO/`. The workflow detects the Pages base path automatically. No repository-name replacement is necessary. Do not use **Deploy from a branch** for these source files: the five apps require a build first.

GitHub's one-time Pages setting and the initial upload still require your action. Every later commit to `main` rebuilds and republishes automatically. Build errors prevent a new deployment; check the first failed Actions step.

## Run everything locally

Install Node.js **24 LTS** (npm included), then open a terminal in the extracted folder:

```bash
npm ci
npm run build
npm run preview
```

Visit `http://localhost:4173/`. Stop with Ctrl+C. Use an HTTP server, not a double-clicked HTML file, for the compiled apps.

To work on just one framework:

```bash
npm run dev:react
npm run dev:next
npm run dev:vue
npm run dev:svelte
npm run dev:angular
```

Run one command at a time and use the URL printed in the terminal. In individual development mode, the component's cross-app/source links are available only in the combined built preview. Framework navigation is designed for the combined deployment.

## Where to edit

| App                 | Main code                                                  | UI style                 |
| ------------------- | ---------------------------------------------------------- | ------------------------ |
| React               | `apps/react/src/App.jsx`                                   | `apps/react/style.css`   |
| Next.js             | `apps/next/app/page.jsx`                                   | `apps/next/style.css`    |
| Vue                 | `apps/vue/src/App.vue`                                     | `apps/vue/style.css`     |
| Svelte              | `apps/svelte/src/App.svelte`                               | `apps/svelte/style.css`  |
| Angular             | `apps/angular/src/main.ts` and `apps/angular/src/app.html` | `apps/angular/style.css` |
| Comparison homepage | `portal/index.html` and `portal/portal.js`                 | `portal/style.css`       |

Each implementation owns its state and event handling. Shared appearance is intentional. A static HTML homepage links to five separately bundled apps; this is not one production app loading all five frameworks into a shared component tree.

## Learn by changing something

1. Try each demo: increase quantity, change size, reset. Note the identical result.
2. Read each component's state code. React and Next use `useState`; Vue uses `ref`; Svelte uses `$state`; Angular uses `signal`.
3. Rename the product in just one app. Commit and watch the deployment. Only that app's title should change.
4. Change the price: update both the `1290` calculation and the displayed `₹1,290` unit price.
5. Change the quantity limit from 10 to 5: update the increment clamp, disabled condition and visible limit label.
6. Compare page source, not just the Elements panel: Next's exported HTML contains the rendered product. These React/Vue/Svelte/Angular demos render their product in the browser. Other rendering modes exist in their ecosystems.
7. Add a second product after you understand the first. This is a good point to extract a reusable component with input properties.

These demos show component syntax, local reactive state, events, derived values and static deployment. They do not benchmark performance or demonstrate authentication, databases, server rendering per request or framework routers.

## Why Next.js is different here

React is a UI library. Next.js is a framework built on React. Its interactive page uses React state, while its build creates static HTML with `output: 'export'`. GitHub Pages serves static files and cannot run a Next.js server, server actions or request-time rendering. To explore those features later, use a host that supports a Next.js server.

## Repository structure

- `apps/`: the five actual framework projects.
- `portal/`: homepage, styles and browser-readable learning guide.
- `scripts/build.mjs`: builds apps into `dist/react`, `dist/next`, `dist/vue`, `dist/svelte`, `dist/angular` and copies the homepage and readable source examples.
- `scripts/serve.mjs`: local preview server, only listening on your computer.
- `.github/workflows/deploy.yml`: installs locked dependencies, builds and publishes.
- `package-lock.json`: exact resolved versions; use `npm ci` for repeatable installation.
- `DEPLOY-WORKFLOW.txt`: visible backup of the workflow for browser uploading.

## Troubleshooting

- **No workflow listed:** `.github/workflows/deploy.yml` was not uploaded at the repository root.
- **Pages configuration error:** choose GitHub Actions in Settings → Pages, then rerun.
- **No run after upload:** verify the branch is `main`, or edit the workflow branch to match your default branch.
- **Missing package file:** the project is nested inside an extra folder. Move its contents to the repository root.
- **Blank app or asset 404:** do not hand-edit the base path. Keep the supplied build script and configure-pages step together, and rebuild after changing repository name or domain.
- **npm ci fails after editing dependencies:** run `npm install` locally to update `package-lock.json`, then commit both package files.
- **Unknown Node version or Angular build failure:** use Node 24 and install dependencies from the repository root.
- **GitHub Desktop alternative:** clone the repository, copy the extracted contents including `.github`, commit and push to `main`.

## Official references

- [React learning guide](https://react.dev/learn)
- [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports)
- [Vue reactivity](https://vuejs.org/guide/essentials/reactivity-fundamentals.html)
- [Svelte state](https://svelte.dev/docs/svelte/$state)
- [Angular signals](https://angular.dev/guide/signals)
- [Vite deployment to GitHub Pages](https://vite.dev/guide/static-deploy)
- [Angular version compatibility](https://angular.dev/reference/versions)
