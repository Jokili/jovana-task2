import lpselectors from '../selectors/loginPageSelectors.js'
import ppselectors from '../selectors/productPageSelectors.js'
import udselectors from '../selectors/userDataSelectors.js'

describe('template spec', () => {
  

  beforeEach(() => {
    cy.fixture('data.json').then(  (userData) => {
      cy.visit(Cypress.env('baseUrl'))
    cy.get(lpselectors.username).type(userData[0].username);
    cy.get(lpselectors.password).type(userData[0].password);
    cy.get(lpselectors.loginBtn).click();})
  })

  
  it('addProductsToCart', function() {
    cy.fixture('data.json').then(  (userData) => {
    cy.get(ppselectors.product1).click();
    cy.get(ppselectors.product2).click();
    cy.get(ppselectors.cartButton).click();
    cy.get(ppselectors.product1NameAssertion).should('have.text', 'Sauce Labs Backpack');
    cy.get(ppselectors.product2NameAssertion).should('have.text', 'Sauce Labs Bike Light');
    cy.get(ppselectors.product1quantity).should('have.text', '1');
    cy.get(ppselectors.product2quantity).should('have.text', '1');
    cy.get(ppselectors.checkoutButton).click();
    cy.get(udselectors.firstName).clear('J');
    cy.get(udselectors.firstName).type(userData[0].firstName);
    cy.get(udselectors.lastName).clear('J');
    cy.get(udselectors.lastName).type(userData[0].lastName);
    cy.get(udselectors.postalCode).clear('1');
    cy.get(udselectors.postalCode).type(userData[0].postalCode);
    cy.get(udselectors.continueButton).click();
    cy.get(udselectors.finishButton).click();
    cy.get(udselectors.backToProductsButton).click();
    })
  });
})