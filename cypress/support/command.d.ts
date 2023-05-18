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
       authenticate()

       /**
       * filter the results by text in Tasks table in Table Data Search
       *
       * @example
       * cy
       *   .authenticate()
       */
       tasks()

       /**
       * filter the results by username in Listed Users table in Table Data Search
       *
       * @example
       * cy
       *   .listedusers()
       */
       listedUsers()

    }}