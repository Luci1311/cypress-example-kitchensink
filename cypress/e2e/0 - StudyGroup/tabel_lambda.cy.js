/// <reference types="cypress" />

import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()

describe('Test for Study group on Lambda Test - Tabel', () => {

  beforeEach(() => {
    cy.setCookie('exit_popup_dismissed', 'closed');
    cy.visit('https://www.lambdatest.com/selenium-playground/')
    cy.contains('Table Pagination').click()
  });

  Cypress.on('uncaught:exception', () => false)

  //Show all rows 
  it('Show all rows', () => {
    cy.get('select[id="maxRows"]')
      .select('Show ALL Rows')
    cy.get('div[class="pagination-container"]')
      .should('not.be.visible')
    cy.get('table tr')
      .last()
      .should('contain', '30')
      .should('be.visible')
  });

  //show 5 rows and check number of pages 
  //check if only 5 rows are displayed
  it('Show 5 rows', () => {
    cy.get('select[id="maxRows"]')
      .select('5')
    cy.get('div[class="pagination-container"]')
      .should('be.visible')
    cy.get('table tbody > :nth-child(5)')
      .should('not.have.css', 'style="display: none;"')
    cy.get('table tbody > :nth-child(6)')
      .should('not.be.visible')
    cy.get('li[data-page]')
      .should('have.lengthOf', 8) // 2 buttons and 6 pages
  });

  //check next button 
  it('Check if next pg button works', () => {
    cy.nextPage()
  })

  it.only('Check if prev pg button works', () => {
    cy.prevPage()
  })
})
