/// <reference types="cypress" />

describe('Test for Study group on Lambda Test - Tabel', () => {

  beforeEach(() => {
    cy.setCookie('exit_popup_dismissed', 'closed');
    cy.visit('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
  });

  Cypress.on('uncaught:exception', () => false)


  it('Js ALert', () => {
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alert')
    })
    cy.get('div[class="mt-30 rounded"]')
      .eq(0)
      .within(() => {
        cy.get('button')
          .contains('Click Me')
          .click()
        cy.get('@alert').should('have.been.calledOnce')
      })
  });

  it('Confirm Box', () => {
    cy.window().then((win) => {
      cy.stub(win, 'confirm', () => true).as('conf')
    })
    cy.get('div[class="mt-30 rounded"]')
      .eq(1)
      .within(() => {
        cy.contains('button', 'Click Me')
          .click()
        cy.get('@conf').should('have.been.calledOnce')
        cy.get('#confirm-demo')
          .should('be.visible')
          .should('have.text', 'You pressed OK!')
      })
  });

  it('Prompt Box', () => {
    const text = "Lucian Hackerman"

    cy.window().then((win) => {
      cy.stub(win, 'prompt').as('prompt')
        .returns(text)
    })
    cy.get('div[class="mt-30 rounded"]')
      .eq(2)
      .within(() => {
        cy.contains('button', 'Click Me')
          .click()
        cy.get('@prompt')
          .should('have.been.calledOnceWith', 'Please enter your name')
        cy.get('#prompt-demo')
          .should('be.visible')
          .should('have.text', `You have entered '${text}' !`)
      })
  });
})

