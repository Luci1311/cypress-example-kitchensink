export class LogInComponent {

    static get USER_LOCATOR() {
        return cy.get('#userName')
    }

    static get PASS_LOCATOR() {
        return cy.get('#password')
    }

    static get LOGINBTN_LOCATOR() {
        return cy.get('#login')
    }

    static get MESSAGE_LOCATOR() {
        return cy.get('#name')
    }

    static get NEWUSER_LOCATOR() {
        return cy.get('#newUser')
    }

    static get REGISTERBUTTON_LOCATOR() {
        return cy.get('#register')
    }

    static get EMPTYFIELDMSG_LOCATOR() {
        return cy.get('#register')
    }

    static get FIRSTNAME_LOCATOR() {
        return cy.get('#firstname')
    }

    static get LASTNAME_LOCATOR() {
        return cy.get('#lastname')
    }

    static get USERNAME_LOCATOR() {
        return cy.get('#userName')
    }

    static get SUBMIT_LOCATOR() {
        return cy.get('#submit')
    }

    static get OKMODAL_LOCATOR() {
        return cy.get('#closeSmallModal-ok')
    }


    loginempty() {
        LogInComponent.LOGINBTN_LOCATOR
            .click()
        LogInComponent.USERNAME_LOCATOR
            .should('have.class', 'is-invalid');
        LogInComponent.PASS_LOCATOR
            .should('have.class', 'is-invalid');

    }

    logininvalid() {
        LogInComponent.USER_LOCATOR
            .type('Invalid')
        LogInComponent.PASS_LOCATOR
            .type('Invalid')
        LogInComponent.LOGINBTN_LOCATOR
            .click()
        LogInComponent.MESSAGE_LOCATOR
            .should('be.visible')
            .should('have.attr', 'style', 'color: red;')
            .should('have.text', 'Invalid username or password!')
    }

    loginvalid() {
        LogInComponent.USER_LOCATOR
            .type(Cypress.env('bookstoreUser').username)
        LogInComponent.PASS_LOCATOR
            .type(Cypress.env('bookstoreUser').password)
        LogInComponent.LOGINBTN_LOCATOR
            .click()
        cy.url().should('include', `${Cypress.env('baseUrl')}/profile`)
    }

    userEmptyFields() {
        LogInComponent.NEWUSER_LOCATOR
            .click()
        LogInComponent.REGISTERBUTTON_LOCATOR
            .click()
        LogInComponent.FIRSTNAME_LOCATOR
            .should('have.class', 'mr-sm-2 is-invalid form-control')
    }

    completeFields() {
        LogInComponent.NEWUSER_LOCATOR
            .click()
        LogInComponent.FIRSTNAME_LOCATOR
            .type('Lucian')
        LogInComponent.LASTNAME_LOCATOR
            .type('I.')
        LogInComponent.USERNAME_LOCATOR
            .type('Maverick')
        LogInComponent.PASS_LOCATOR
            .type('Parola123')
    }

    registerNoCaptcha() {
        LogInComponent.REGISTERBUTTON_LOCATOR
            .click()
        LogInComponent.MESSAGE_LOCATOR
            .should('be.visible')
            .should('have.attr', 'style', 'color: red;')
            .should('have.text', 'Please verify reCaptcha to register!')
    }

    registerCaptcha() {
        cy.get('iframe[title="reCAPTCHA"]')
            .first()
            .its('0.contentDocument.body')
            .should('not.be.undefined')
            .and('not.be.empty')
            .then(cy.wrap)
            .find('#recaptcha-anchor')
            .should('be.visible')
            .click();
    }

    logOut() {
        cy.get('#books-wrapper').within(() => {
            LogInComponent.SUBMIT_LOCATOR
                .click()
            cy.url().should('include', `${Cypress.env('baseUrl')}/login`)
        });
    }

    deleteAccount() {
        cy.contains('#submit', 'Delete Account')
            .click()
        cy.get('.modal-content').within(() => {
            LogInComponent.OKMODAL_LOCATOR
                .click()
        })
        cy.url().should('include', `${Cypress.env('baseUrl')}/login`)
            ;
    }

}