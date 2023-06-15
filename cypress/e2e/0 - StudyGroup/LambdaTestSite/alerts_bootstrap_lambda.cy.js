/// <reference types="cypress" />

describe('Test for Study group on Lambda Test - Tabel', () => {

  beforeEach(() => {
    cy.setCookie('exit_popup_dismissed', 'closed');
    cy.visit('https://www.lambdatest.com/selenium-playground/bootstrap-alert-messages-demo')
  });

  Cypress.on('uncaught:exception', () => false)


  it('Autoclosable Success Message', () => {
    cy.contains('button', 'Autoclosable Success Message')
      .click()
    cy.contains('div', 'Autocloseable success message. Hide in 5 seconds.')
      .should('be.visible')
    cy.wait(5000)
    cy.contains('div', 'Autocloseable success message. Hide in 5 seconds.')
      .should('not.exist')
  });



  it('Normal success message', () => {
    cy.contains('button', 'Normal Success Message')
      .click()
    cy.contains('div', 'Normal success message')
      .should('be.visible')
    cy.get('.alert-success-manual > .close')
      .click()
    cy.contains('div', 'Normal success message')
      .should('not.exist')
  });

})
