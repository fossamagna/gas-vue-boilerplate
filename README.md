# gas-vue-boilerplate

*Read this in other languages: [English](README.md), [日本語](README.ja.md).*

This is a boilerplate for developing web apps with Google Apps Script. Local development with modern development tools is possible.

- [TypeScript](https://www.typescriptlang.org/)
- [Webpack](https://webpack.js.org/)
- [Vue.js](https://vuejs.org/)
- [Vuetify](https://vuetifyjs.com/en)
- [gas-test](https://github.com/fossamagna/gas-test)
- CI/CD (GitHub Actoins)

## Getting Started

```sh
git clone https://github.com/fossamagna/gas-vue-boilerplate.git my-awesome-project
cd my-awesome-project
yarn # Install dependencies
yarn init-repo # Initialize your project's git repository
yarn clasp login # Login to Google
yarn clasp create --rootDir ./dist # Create an Apps Script project
yarn deploy # Compile the example project and Push the compiled script to the server
yarn clasp open --webapp # Open your web app by Browser
```

## Test

### frontend

```sh
cd frontend
yarn test
```

### backend

Test in Google Apps Script execute with `gas-test`
The Google Apps Script test uses [gas-test](https://github.com/fossamagna/gas-test).
`gas-test` is remotely executes an Apps Script function.

The step-by-step information on how to use gas-test run is available below:

1. Create Google Apps Script project for tests.
   ```sh
   mv .clasp.json .clasp.app.json # Backup .clasp.json for application.
   yarn clasp create \
    --rootDir dist \
    --title my-awesome-project-test # Create GAS project for tests.
   mv .clasp.json .clasp.test.json
   mv .clasp.app.json .clasp.json
   ```
2. `cd backend`.
3. Create `gas-test.json` file.

   Note: Add to `scopes` values used by your test script.

   gas-test.json:
   ```json
   {
     "scriptId": "<YOUR_SCRIPT_ID_FOR_TEST>",
     "scopes": ["https://www.googleapis.com/auth/script.webapp.deploy"]
   }
   ```
4. Open your GCP project with browser.
5. Create an OAuth Client ID (Other). Download as creds.json.
6. `yarn gas-test auth creds.json` with this downloaded file.
   Save as `gas-test-credentials.json` generated file by this command.
   Note: `gas-test-credentials.json` should be private!
7. Enable Apps Script API.
8. Enable any APIs that are used by the script.
9. Have the following in your appsscript.json. Be sure it's pushed:
   ```json
   "executionApi": {
     "access": "MYSELF"
   },
   ```
10. `yarn test` to execute tests.

See below for more information: https://github.com/fossamagna/gas-test-cli#usage
