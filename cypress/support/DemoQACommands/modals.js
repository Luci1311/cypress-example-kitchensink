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

    largeModal() {
        cy.get('#showLargeModal')
            .click()
        cy.get('.modal-content').within(() => {
            cy.get('.modal-body')
                .should('be.visible')
                .should('contain', 'Lorem Ipsum')
            cy.get('#closeLargeModal')
                .click()
        })
        cy.get('.modal-content')
            .should('not.exist')
    }
}