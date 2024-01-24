import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
     baseUrl: 'https://webdriveruniversity.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    retries: {
      runMode: 0, // this apply without opening cypress (running without head)
      openMode: 1, // this apply opening with cypress
    },
    env: {
      webdriveruni_homepage: "https://webdriveruniversity.com",
      first1Name: "yyyyyeeeew"
    },
    chromeWebSecurity: false,
    // screenshotOnRunFailure: true, // to take screenshorts need to run this type of command  ./node_modules/.bin/cypress run --browser chrome --spec cypress/e2e/webdriver-uni/contact-us.js
    // trashAssetsBeforeRuns: true,
    // specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    // excludeSpecPattern: "cypress/e2e/other/*.{js,jsx,ts,tsx,feature}",
    // experimentalSessionAndOrigin: true,
    // defaultCommandTimeout: 10000,
    // pageLoadTimeout: 120000,
    // videoCompression: 15 // (min value is 1 and max value is 51)
    // video: false // (it will disable video recording)
    // viewportHeight: 1080,
    // viewportWidth:1920,
   },
});

// ./node_modules/.bin/cypress run --browser chrome --headed --spec cypress/e2e/webdriver-uni/contact-us.js --env first_name=tim

////Note:-  --headed means browser will if not it will run headless
// ./node_modules/.bin/cypress run --browser chrome --spec cypress/e2e/webdriver-uni/contact-us.js

//// without npx
// ./node_modules/.bin/cypress run --browser chrome --headed --spec cypress/e2e/webdriver-uni/contact-us.js

//// with npx
// npx cypress run --browser chrome --headed --spec cypress/e2e/webdriver-uni/contact-us.js
// npx cypress open
