export class Rows {

    fiveRows() {
        cy.get('select[id="maxRows"]')
            .should('have.value', '5')
        cy.get('div[class="pagination-container"]')
            .should('be.visible')
        cy.get('table tbody > :nth-child(5)')
            .should('not.have.css', 'style="display: none;"')
    }
}