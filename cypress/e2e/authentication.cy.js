import lpselectors from '../selectors/loginPageSelectors.js'

describe('Authentication', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'))
  })

  const credentialsList = require('../fixtures/users.json')


  credentialsList.forEach((credentials) => {
    it('passes', () => {
    
    cy.get(lpselectors.userName).type(credentials.username);
    cy.get(lpselectors.password).type(credentials.password);
    cy.get(lpselectors.loginBtn).click();
    if(credentials.status==="passed"){
      cy.get(lpselectors.successLoginMessage).should('have.text', 'Swag Labs');
    }else{
      cy.get(lpselectors.failedLoginMsg).should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
    }
    
    })  
  })

  it('Checking login with incorrect credentials', () => {
    cy.fixture('usersForUnhappyPath.json').then(  (data) => {
      cy.get(lpselectors.userName).type(data.invalidUsername.username);
      cy.get(lpselectors.password).type(data.invalidUsername.password);
      cy.get(lpselectors.loginBtn).click();
      cy.get(lpselectors.failedLoginMsg).should('have.text', data.invalidUsername.message);

    })
  })

  it('Checking login with empty user name', () => {
    cy.fixture('usersForUnhappyPath.json').then(  (data) => {
  
      cy.get(lpselectors.userName).clear();
      cy.get(lpselectors.password).type(data.emptyUsername.password);
      cy.get(lpselectors.loginBtn).click();
      cy.get(lpselectors.failedLoginMsg).should('have.text', data.emptyUsername.message);

    })
  })

  
})