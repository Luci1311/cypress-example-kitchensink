/// <reference types="cypress" />


describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('http://localhost:8080/')
  })


  it('finds the content "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type')
  })

  it('clicks the link "type"', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()
  })

  it('clicking "type" navigates to a new url', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    cy.url().should('include', '/commands/actions')
  })

  it('Gets, types and asserts', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()


    cy.url().should('include', '/commands/actions')


    cy.get('.action-email').type('fake@email.com')


    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})


