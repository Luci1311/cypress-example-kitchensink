export class BooksComponent {

    static get SEARCH_LOCATOR() {
        return cy.get('#searchBox')
    }

    static get ADDBOOK_LOCATOR() {
        return cy.get('#addNewRecordButton')
    }

    static get DELBOOK_LOCATOR() {
        return cy.get('#delete-record-undefined')
    }

    static get OKMODAL_LOCATOR() {
        return cy.get('#closeSmallModal-ok')
    }


    searchBook() {
        const book = "Java"
        cy.visit(`${Cypress.env('baseUrl')}/books`)
        BooksComponent.SEARCH_LOCATOR
            .type(book)
        cy.get('.rt-tr-group').each(($ele) => {
            if ($ele.text().trim().includes(book)) {
                expect($ele.text().trim()).to.include(book)
            }
        })
    }

    addBookToProfile() {
        const title = 'Git Pocket Guide'
        cy.visit(`${Cypress.env('baseUrl')}/books`)
        BooksComponent.SEARCH_LOCATOR
            .type(title)
        cy.contains('a', title)
            .should('be.visible')
            .click();
        cy.contains('#addNewRecordButton', 'Add')
            .click()
        cy.visit(`${Cypress.env('baseUrl')}/profile`);
        cy.contains('.rt-tr-group', title).should('be.visible');

    }

    removeBookFromProfile() {
        const title = 'Git Pocket Guide'
        cy.contains('.rt-tr-group', title).within(() => {
            BooksComponent.DELBOOK_LOCATOR
                .click();
        })
        cy.get('.modal-content').within(() => {
            BooksComponent.OKMODAL_LOCATOR
                .click()
        })
        cy.contains('.rt-tr-group', title).should('not.exist');
        ;

    }

}