module.exports = {
  'projectId': '4b7344',
  viewportWidth: 1440,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  e2e: {
    scrollBehavior: 'nearest',
    experimentalRunAllSpecs: true,
    defaultCommandTimeout: 10000,
    blockHosts: [
      "*www.google-analytics.com*",
      "*tpc.googlesyndication.com*",
      "*static.criteo.net*",
      "*securepubads.g.doubleclick.net*",
      "*pagead2.googlesyndication.com*",
      "*serving.stat-rock.com*",
      "*cdn.linkedin.oribi.io*",
      "*salesiq.zohopublic.com*",
      "*server.recotap.com*"
    ],
    env: {
      // https://github.com/bahmutov/cypress-slow-down
      commandDelay: 0,
      baseUrl: "https://demoqa.com",

      waitForAnimations: true,

      bookstoreUser: {
        username: "Maverick",
        password: "Parola1234!"
      },
    },
  },
}
