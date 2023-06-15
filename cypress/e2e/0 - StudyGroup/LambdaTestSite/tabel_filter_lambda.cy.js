/// <reference types="cypress" />

describe('Test for Study group on Lambda Test - Tabel', () => {

  beforeEach(() => {
    cy.setCookie('exit_popup_dismissed', 'closed');
    cy.visit('https://www.lambdatest.com/selenium-playground/table-records-filter-demo')
  });

  Cypress.on('uncaught:exception', () => false)

  it('Filter by Green', () => {
    cy.get('button[data-target="pagado"]')
      .click()
      cy.get('tr[data-status="pagado"]')
      .should('be.visible')
      .should('contain', 'Green')
      .its('length').should('eq', 2)
  });

  it('Filter by Orange', () => {
    cy.get('button[data-target="pendiente"]')
      .click()
      cy.get('tr[data-status="pendiente"]')
      .should('be.visible')
      .should('contain', 'Orange')
      .its('length').should('eq', 2)
  });

  it('Filter by Red', () => {
    cy.get('button[data-target="cancelado"]')
      .click()
      cy.get('tr[data-status="cancelado"]')
      .should('be.visible')
      .should('contain', 'Red')
      .its('length').should('eq', 1)
  });

  it('Show All', () => {
    cy.get('button[data-target="all"]')
      .click()
      cy.get('.table-filter > tbody > tr')
      .should('be.visible')
      .its('length').should('eq', 5)
  });
})
