/// <reference types="cypress" />

import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()


describe('Test for Study group on DemoQA Modals', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/modal-dialogs')
    });

    Cypress.on('uncaught:exception', () => false)
    it('Small modal', () => {
        cy.get('#showSmallModal')
            .click()
        cy.get('.modal-content').within(() => {
            cy.get('.modal-body')
                .should('be.visible')
                .should('have.text', 'This is a small modal. It has very less content')
            cy.get('#closeSmallModal')
                .click()
        })
        cy.get('.modal-content')
            .should('not.exist')
    });

})