describe('template spec', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
  })

  const testData = require('../fixtures/users.json')

  testData.forEach((credentials) => {
  it('passes', () => {
    
    cy.get('[data-test="username"]').clear('s');
    cy.get('[data-test="username"]').type(credentials.username);
    cy.get('[data-test="password"]').clear('s');
    cy.get('[data-test="password"]').type(credentials.password);
    cy.get('[data-test="login-button"]').click();
    if(credentials.status==="passed"){
      cy.get('.app_logo').should('have.text', 'Swag Labs');
    }else{
      cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    }
    
  })
})
})