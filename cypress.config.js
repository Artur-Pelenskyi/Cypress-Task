const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "h4k3r1",
    viewportHeight:1080,
    viewportWidth:1920,
    pageLoadTimeout: 20000,
    defaultCommandTimeout: 30000,
    e2e: {
        specPattern: 'cypress/tests/*.spec.js',
    },
});