/// <reference types="cypress" />

import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown(0)

describe('Test for Study group on DemoQA', () => {

    beforeEach(() => {
        cy.visit('https://demoqa.com/login')
        cy.viewport(1440, 1080)
    });

    Cypress.on('uncaught:exception', () => false)

    it('Invalid credentials', () => {
        cy.get('#userName')
            .type('Invalid')
        cy.get('#password')
            .type('Invalid')
        cy.get('#login')
            .click()
        cy.get('#name')
            .should('be.visible')
            .should('have.attr', 'style', 'color: red;')
            .should('have.text', 'Invalid username or password!')
    })

    it('Create new user - not completing fields', () => {
        cy.get('#newUser')
            .click()
        cy.get('#register')
            .click()
        cy.get('#firstname')
            .should('have.class', 'mr-sm-2 is-invalid form-control')
    })

    it('Create new user - not checking captcha', () => {
        cy.LogIn()
        cy.get('#register')
            .click()
        cy.get('#name')
            .should('be.visible')
            .should('have.attr', 'style', 'color: red;')
            .should('have.text', 'Please verify reCaptcha to register!')
    })

    it('Create new user', () => {
        cy.RegisterFields()
        cy.get('iframe[title="reCAPTCHA"]')
        .first()
        .its('0.contentDocument.body')
        .should('not.be.undefined')
        .and('not.be.empty')
        .then(cy.wrap)
        .find('#recaptcha-anchor')
        .should('be.visible')
        .click();
    })
})