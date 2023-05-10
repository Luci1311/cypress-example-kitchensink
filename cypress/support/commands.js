// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('nextPage', () => {
    cy.get('select[id="maxRows"]')
        .should('have.value', '5')
    cy.get('div[class="pagination-container"]')
        .should('be.visible')
    cy.get('#prev')
        .click()
    cy.get('table tbody > :nth-child(6)')
        .should('be.visible')
})

Cypress.Commands.add('prevPage', () => {
    cy.get('select[id="maxRows"]')
        .should('have.value', '5')
    cy.get('div[class="pagination-container"]')
        .should('be.visible')
    cy.get('#prev')
        .click()
    cy.get('table tbody > :nth-child(6)')
        .should('be.visible')
    cy.get('li[data-page="prev"]')
        .click({force: true})
    cy.get('table tbody > :nth-child(5)')
        .should('not.have.css', 'style="display: none;"')
    cy.get('table tbody > :nth-child(6)')
        .should('not.be.visible')
})