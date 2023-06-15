export class Modals {

    smallModal() {
        cy.get('#showSmallModal')
            .click()
        cy.get('.modal-content').within(() => {
            cy.get('.modal-body')
                .should('be.visible')
                .should('have.text', 'This is a small modal. It has very less content')
            cy.get('#closeSmallModal')
                .click()
        })
        cy.get('.modal-content')
            .should('not.exist')
    }
}