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

    }}