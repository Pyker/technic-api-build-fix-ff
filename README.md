# Technic API Build Fix

This is a very simple Firefox addon which automatically adds "build=999" to the query parameters on requests to <https://api.technicpack.net/>, unless a different build number is already specified in the URL.

Development requires Node.js 26 LTS (pinned in `.node-version`) and npm. Install dependencies with `npm ci`, then use `npm run start:firefox` to run the addon locally or `npx --no-install web-ext lint` to lint it.
