/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        /**
       * create new user via API
       *
       * @example
       * cy
       *   .authenticate()
       */
       _authenticate()

       /**
       * filter the results by text in Tasks table in Table Data Search
       *
       * @example
       * cy
       *   .authenticate()
       */
       _tasks()

       /**
       * filter the results by username in Listed Users table in Table Data Search
       *
       * @example
       * cy
       *   .listedusers()
       */
       _listedUsers()

    }}