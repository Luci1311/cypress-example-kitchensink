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

  //1
  it('Show all rows', () => {
    cy.log('**Show all rows and check the last item text id**')
    cy.get('select[id="maxRows"]')
      .select('Show ALL Rows')
    cy.get('div[class="pagination-container"]')
      .should('not.be.visible')
    cy.get('table tr')
      .last()
      .should('contain', '30')
      .should('be.visible')
  });


  //2
  it('The cells of a row are not empty and contain expected text', () => {
    cy._5rows()
    cy.log('**get the 3rd row and check it is not empty and has expected text**')
    cy.get('table tr')
      .eq(3)
      .should('not.be.empty')
      .should('have.text', "3Ira ParkerVivamus.molestie.dapibus@quisturpisvitae.edu1-584-906-8572Sep 15, 2015")
  });


  //3
  it('Show 5 rows', () => {
    cy.log('**show 5 rows and check number of pages and check if only 5 rows are displayed**')
    cy._5rows()
    cy.get('table tbody > :nth-child(6)')
      .should('not.be.visible')
    cy.log('**length of 8 means 2 buttons and 6 pages**')
    cy.get('li[data-page]')
      .should('have.lengthOf', 8)
  });


  //4
  it('Check if next pg button works', () => {
    cy.nextPage()
  })

  //5
  it('Check if prev pg button works', () => {
    cy.prevPage()
  })


  //6
  it('Go to random page', () => {
    cy._5rows()
    cy.log('**check if the page we are on is the active one**')
    cy.get('li[data-page="3"]')
      .click({ force: true })
      .should('have.class', 'active')
  })
})
