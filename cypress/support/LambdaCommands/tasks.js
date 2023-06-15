export class Task {

    tasks() {
      const text = 'la'
      cy.get('#task-table-filter')
            .type(text)
      cy.get('#task-table > tbody > tr > td')
            .each(($el) => {
                  if ($el.text().toLowerCase().trim().includes(text)) {
                        expect($el.text().toLowerCase().trim()).to.include(text)
                  }
            })
    }
}