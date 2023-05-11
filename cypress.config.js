module.exports = {
  'projectId': '4b7344',
  viewportWidth: 2560,
  viewportHeight: 1440,
  chromeWebSecurity: false,
  e2e: {
    scrollBehavior: 'center',
    experimentalRunAllSpecs: true,
    defaultCommandTimeout: 10000,
    env: {
      // https://github.com/bahmutov/cypress-slow-down
      commandDelay: 1500,
    },
  },
}
