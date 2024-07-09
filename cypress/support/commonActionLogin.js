import lpselectors from '../selectors/loginPageSelectors.js'

export function login() {
    cy.fixture('users.json').then(  (userData) => {
      cy.visit(Cypress.env('baseUrl'))
      cy.get(lpselectors.userName).type(userData[0].username);
      cy.get(lpselectors.password).type(userData[0].password);
      cy.get(lpselectors.loginBtn).click();
    })
  }