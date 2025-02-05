const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.executablePath = "C:\\Users\\Win\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe";
          return launchOptions;
        }
      });
    },
  },
});
