/// <reference types="cypress" />

const dayjs = require('dayjs')



describe('Test for Study group on Lambda Test - Date picker', () => {

  beforeEach(() => {
    cy.setCookie('exit_popup_dismissed', 'closed');
    cy.visit('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo')
  });

  Cypress.on('uncaught:exception', () => false)


  it('date range picker ex1', () => {
    const todaysDate = dayjs().format('YYYY-MM-DD')
    cy.log('**Inputs in the date field the current date**')
    cy.get('input[id="birthday"]')
      .type(todaysDate)
    cy.log('**this command will clear the field and checks if it is empty**')
    cy.get('input[id="birthday"]')
      .should('have.value', todaysDate)
      .clear()
      .should('have.value', "")
  });

  it('date range picker ex2', () => {
    const startDate = '2023-05-10'
    const endDate = '2023-05-13'
    const startDateINT = Number(startDate.slice(0, 10).split('-').join(''))
    const endDateINT = Number(endDate.slice(0, 10).split('-').join(''))

    cy.get('input[placeholder="Start date"]')
      .type(startDate)
    cy.get('input[placeholder="End date"]')
      .type(endDate)

    expect(startDateINT).to.be.lt(endDateINT)
  })
})
