/// <reference types="cypress" />

import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()

describe('Test for Study group on Lambda Test - Tabel', () => {

  beforeEach(() => {
    cy.setCookie('exit_popup_dismissed', 'closed');
    cy.visit('https://www.lambdatest.com/selenium-playground/')
    cy.contains('Table Data Search').click()
  });

  Cypress.on('uncaught:exception', () => false)

  it('Filter search results', () => {
    cy._tasks()
  });

  it('Enables filters and search by username', () => {
    cy._listedUsers();
  })
})
