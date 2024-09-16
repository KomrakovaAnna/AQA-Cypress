const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,

    retries: {
      runMode: 3,
    },
    env: {
      BASE_URL: "https://qauto.forstudy.space/",
      AUTH_USERNAME: "guest",
      AUTH_PASSWORD: "welcome2qauto",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
