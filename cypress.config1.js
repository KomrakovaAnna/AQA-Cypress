const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  e2e: {
    chromeWebSecurity: false,

    retries: {
      runMode: 3,
    },
    env: {
      BASE_URL2: "https://qauto2.forstudy.space/",
      AUTH_USERNAME: "guest",
      AUTH_PASSWORD: "welcome2qauto",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
