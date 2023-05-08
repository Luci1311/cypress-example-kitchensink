/// <reference types="cypress" />

const dayjs = require('dayjs')

import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()

describe('Test for Study group on Lambda Test', () => {

  beforeEach(() => {
    cy.setCookie('exit_popup_dismissed', 'closed');
    cy.visit('https://www.lambdatest.com/selenium-playground/')
    cy.contains('Bootstrap Date Picker').click()
  });

  Cypress.on('uncaught:exception', () => false)


  it('date range picker ex1', () => {
    const todaysDate = dayjs().format('YYYY-MM-DD')
    cy.get('input[id="birthday"]')
      .type(todaysDate)
    cy.get('input[id="birthday"]')
      .clear()
      .should('have.value', "")
  });

  it('date range picker ex2', () => {
    const startDate = '2023-05-10'
    const endDate = '2023-05-13'
    const startDateINT =   Number(startDate.slice(0, 10).split('-').join(''))
    const endDateINT = Number(endDate.slice(0, 10).split('-').join(''))

    cy.get('input[placeholder="Start date"]')
      .type(startDate)
    cy.get('input[placeholder="End date"]')
      .type(endDate)

    expect (startDateINT).to.be.lt(endDateINT)  
  })
})
