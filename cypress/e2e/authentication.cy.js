import lpselectors from '../selectors/loginPageSelectors.js'

describe('template spec', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
  })

  const testData = require('../fixtures/users.json')

  testData.forEach((credentials) => {
  it('passes', () => {
    
    cy.get(lpselectors.userName).clear('s');
    cy.get(lpselectors.userName).type(credentials.username);
    cy.get(lpselectors.password).clear('s');
    cy.get(lpselectors.password).type(credentials.password);
    cy.get(lpselectors.loginBtn).click();
    if(credentials.status==="passed"){
      cy.get(lpselectors.successLoginMessage).should('have.text', 'Swag Labs');
    }else{
      cy.get(lpselectors.failedLoginMsg).should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    }
    
  })
})
})