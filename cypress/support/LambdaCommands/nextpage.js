export class NextPage {

    nxtPage() {
        cy.get('select[id="maxRows"]')
            .should('have.value', '5')
        cy.get('div[class="pagination-container"]')
            .should('be.visible')
        cy.get('#prev')
            .click()
        cy.get('table tbody > :nth-child(6)')
            .should('be.visible')
    }
}