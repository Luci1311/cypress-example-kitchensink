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

//---------------------------------- Lambda COMMANDS -------------------------------
Cypress.Commands.add('_5rows', () => {
      cy.get('select[id="maxRows"]')
            .should('have.value', '5')
      cy.get('div[class="pagination-container"]')
            .should('be.visible')
      cy.get('table tbody > :nth-child(5)')
            .should('not.have.css', 'style="display: none;"')
})

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
            .click({ force: true })
      cy.get('table tbody > :nth-child(5)')
            .should('not.have.css', 'style="display: none;"')
      cy.get('table tbody > :nth-child(6)')
            .should('not.be.visible')
})

Cypress.Commands.add('_tasks', () => {
      const text = 'la'
      cy.get('#task-table-filter')
        .type(text)
      cy.get('#task-table > tbody > tr > td')
        .each(($el) => {
          if ($el.text().toLowerCase().trim().includes(text)) {
            expect($el.text().toLowerCase().trim()).to.include(text)
          }
        })
})

Cypress.Commands.add('_listedUsers', () => {
      const text2 = 'Wi'
    cy.get('.filters > th > .form-control')
      .should('have.attr', 'disabled')
    cy.contains('.btn-default', 'Filter')
      .click()
    cy.get('.filters > th > .form-control')
      .should('not.have.attr', 'disabled')
    cy.get('.filters > :nth-child(2) > .form-control')
      .should('have.attr', 'placeholder', 'Username')
      .type(text2)
    cy.get('.input-section > .py-10 > .table-hover > tbody > tr > td')
      .each(($el) => {
        if ($el.text().trim().includes(text2)) {
          expect($el.text().trim()).to.include(text2)
        }
      })
})

//---------------------------------- DEMO QA COMMANDS -------------------------------

Cypress.Commands.add('_authenticate', () => {
      cy.request({
        method: 'POST',
        url: `${Cypress.env('baseUrl')}/Account/v1/User`,
        body: {
          userName: Cypress.env('bookstoreUser').username,
          password: Cypress.env('bookstoreUser').password,
        },
      }).then(($response) => {
        expect($response.status).to.eq(201);
      });
    });


