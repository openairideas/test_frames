# Validation

Production builds passed for React, Next.js, Vue, Svelte and Angular using Node 24.19.0.

Browser checks passed in headless Chromium for all five apps at the nested path `/framework-lab/`: quantity increments and decrements, 1–10 bounds, computed totals, size selection, reset, direct reload, readable source links, back navigation, desktop and 390px mobile page widths, and the homepage framework switcher. No page errors or failed application asset requests were observed. Next.js exported HTML was checked for the rendered product.

Resolved framework versions:

- react: 19.3.0
- next: 16.3.5
- vue: 3.5.42
- svelte: 5.57.0
- @angular/core: 21.2.23
- vite: 7.3.6

GitHub Actions deployment has not been run in your account. You must upload the files and enable Pages as described in README.md.

The ZIP contains source and a preview image; dependency folders and generated app build files are excluded. GitHub Actions builds from the included lockfile.
