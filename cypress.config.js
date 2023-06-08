const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bnfxpc',
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
