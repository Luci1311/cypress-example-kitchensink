/// <reference types="cypress" />


describe('Test for Study group on Lambda Test', () => {

    beforeEach(() => {
        cy.visit('https://www.lambdatest.com/selenium-playground/')
        cy.contains('Simple Form Demo').click()
    });

    //Cypress.on('uncaught:exception', () => false)
    
    it('input text and validate it', () => {
        const newItem = 'Test 1234'

        cy.get('input[id="user-message"]')
            .type(newItem)
        cy.get('button[id="showInput"]')
            .click()
        cy.get('p[id="message"]')
            .should('have.text', newItem)
    });

    it.only('input two values and validate the sum', () => {
        const val1 = 3
        const val2 = 4
        const sum = val1 + val2

        cy.get('input[id="sum1"]')
            .type(val1)
        cy.get('input[id="sum2"]')
            .type(val2)
        cy.get('#gettotal > button')
        //cy.get('button[class="mt-20 mb-10 bg-black text-white rounded px-15 py-5 hover:bg-lambda-900 focus:outline-none"]').eq(1)
        //cy.get('button[class="mt-20 mb-10 bg-black text-white rounded px-15 py-5 hover:bg-lambda-900 focus:outline-none"]').last()
        //cy.contains("Get values")
            .click()
        cy.get('p[id="addmessage"]')
            .should('have.text', sum)
    });


})
