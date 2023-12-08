const { defineConfig } = require("cypress");
const env = require("./cypress.env.json")

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Teste de automação de tema mobile.',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    baseUrl: `${env.url}/mobileapp/#/app/`,
    testIsolation: false,
    "viewportHeight": 520,
    "viewportWidth": 368,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});