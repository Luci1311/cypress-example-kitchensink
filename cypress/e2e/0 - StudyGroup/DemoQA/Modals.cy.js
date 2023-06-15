/// <reference types="cypress" />

describe('Test for Study group on DemoQA Modals', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/modal-dialogs')
    });

    Cypress.on('uncaught:exception', () => false)
    it('Small modal', () => {
        cy._smallmodals();
    });

    it('Large modal', () => {
        cy._largemodals();
    });

})