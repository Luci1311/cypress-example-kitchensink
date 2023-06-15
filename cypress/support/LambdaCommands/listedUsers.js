export class ListedUsers {

    lstUsers() {
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
      }
}