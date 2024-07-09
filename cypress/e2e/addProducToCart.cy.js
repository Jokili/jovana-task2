import lpselectors from '../selectors/loginPageSelectors.js'
import ppselectors from '../selectors/productPageSelectors.js'
import udselectors from '../selectors/userDataSelectors.js'
import { login }  from '../support/commonActionLogin.js'

describe('Add product to cart', () => {
  

  beforeEach(() => {
    login();
  })

  
  it('Add products to cart', function() {
    cy.fixture('usersData.json').then(  (userData) => {
    cy.get(ppselectors.product1AddToCartButton).click();
    cy.get(ppselectors.product2AddToCartButton).click();
    cy.get(ppselectors.cartButton).click();

    cy.get(ppselectors.product1NameAssertion).should('have.text', userData[0].productName1);
    cy.get(ppselectors.product2NameAssertion).should('have.text', userData[0].productName2);
    cy.get(ppselectors.product1quantity).should('have.text', '1');
    cy.get(ppselectors.product2quantity).should('have.text', '1');

    cy.get(ppselectors.checkoutButton).click();
    cy.get(udselectors.firstName).type(userData[0].firstName);
    cy.get(udselectors.lastName).type(userData[0].lastName);
    cy.get(udselectors.postalCode).type(userData[0].postalCode);
    cy.get(udselectors.continueButton).click();
    cy.get(udselectors.finishButton).click();
    cy.get(udselectors.message).should('have.text', userData[0].messageForCompletedOrder);
    cy.get(udselectors.backToProductsButton).click();
    })
  });



  it('Checking the quantity of products in cart after adding product and than removing', function() {

    cy.fixture('usersData.json').then(  (userData) => {
    cy.get(ppselectors.product1AddToCartButton).click();
    cy.get(ppselectors.product2AddToCartButton).click();
    cy.get(ppselectors.cartButton).should('have.text', '2')
    cy.get(ppselectors.product1RemoveButton).click();
    cy.get(ppselectors.product2RemoveButton).click();
    cy.get(ppselectors.cartButton).should('have.text', '')

    })
  })





  


})