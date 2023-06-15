export class PrevPage {

    prevPage() {
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
    }
}