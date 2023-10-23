const { defineConfig } = require("cypress");
const env = require("./cypress.env.json")

module.exports = defineConfig({
  e2e: {
    baseUrl: `${env.url}/mobileapp/#/app/`,
    testIsolation: false,
    "viewportHeight": 520,
    "viewportWidth": 368,
    setupNodeEvents(on, config) {
    },
  },
});