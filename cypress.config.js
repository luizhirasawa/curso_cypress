const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "sgqqee",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome-report',
      reportFilename: 'mochawesome.html',
      overwrite: false,
      html: true,
      jsonFile: false,
      timestamp: 'mmddyyyy_HHMMss',
    },
  },
});
