const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  e2e: {
    chromeWebSecurity: false,
    baseUrl: "https://qauto.forstudy.space/",
    retries: {
      runMode: 3,
    },
    env: {
      BASE_URL: "https://qauto.forstudy.space/",
      AUTH_USERNAME: "guest",
      AUTH_PASSWORD: "welcome2qauto",
    },

    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
