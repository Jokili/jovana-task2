const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
        experimentalStudio: true,
        chromeWebSecurity: false,
        experimentalSessionAndOrigin: true,
        
    setupNodeEvents(on, config) {
      // implement node event listeners here


    },
    env: {
          
      baseUrl: "https://www.saucedemo.com/"
     
   
  },
  reporter: 'mochawesome',
   reporterOptions: {
     reportDir: 'cypress/reports',
     overwrite: false,
     html: true,
     json: true
   }
  },
});
