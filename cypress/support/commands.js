 Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('william')
    cy.get('#lastName').type('cruz')
    cy.get('#email').type('william@teste.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
})