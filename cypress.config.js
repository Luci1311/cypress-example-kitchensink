const { defineConfig } = require('cypress')
module.exports = {
  'projectId': '4b7344',
  e2e: {
    env: {
      // https://github.com/bahmutov/cypress-slow-down
      commandDelay: 500,
    },
  },
}
