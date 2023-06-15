export class AddUser {

    addUser() {
        cy.request({
            method: 'POST',
            url: `${Cypress.env('baseUrl')}/Account/v1/User`,
            body: {
                userName: Cypress.env('bookstoreUser').username,
                password: Cypress.env('bookstoreUser').password,
            },
        }).then(($response) => {
            expect($response.status).to.eq(201);
        })
    }
}