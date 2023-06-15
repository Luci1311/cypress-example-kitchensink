/// <reference types="cypress" />

describe('Test for Study group on Lambda Test - Tabel', () => {

  beforeEach(() => {
    cy.setCookie('exit_popup_dismissed', 'closed');
    cy.visit('https://www.lambdatest.com/selenium-playground/table-search-filter-demo')
  });

  Cypress.on('uncaught:exception', () => false)

  it('Filter search results', () => {
    cy._tasks()
  });

  it('Enables filters and search by username', () => {
    cy._listedUsers();
  })
})
