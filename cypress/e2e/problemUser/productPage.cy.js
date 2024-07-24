import lpselectors from '../../selectors/loginPageSelectors.js'
import ppselectors from '../../selectors/productPageSelectors.js'
import atcselectors from '../../selectors/addToCartSelectors.js'


describe('Add product to cart', () => {
  beforeEach(() => {
    cy.fixture('users.json').then(  (userData) => {
      cy.visit(Cypress.env('baseUrl'))
      cy.get(lpselectors.userName).type(userData[2].username);
      cy.get(lpselectors.password).type(userData[2].password);
      cy.get(lpselectors.loginBtn).click();
    })
  })

  it('Testing sorts for product- the sort option is not working,we have a bug', function() {
      cy.fixture('productPageData.json').then((data) => {
      cy.get(ppselectors.sort).select(data.lowToHigh);
      cy.get(ppselectors.priceForProduct).should('not.have.text', data.lowPrice);
    })
    });

  it('Checking the quantity of products in cart after adding product and than removing on the home page- remove button does not work- we have a bug', function() {

    cy.fixture('usersData.json').then(  (userData) => {
    cy.get(atcselectors.product1AddToCartButton).click();
    cy.get(atcselectors.product2AddToCartButton).click();
    cy.get(atcselectors.cartButton).should('have.text', '2')
    cy.get(atcselectors.product1RemoveButton).click();
    cy.get(atcselectors.product2RemoveButton).click();
    cy.get(atcselectors.cartButton).should('not.have.text', '')

    })
  })
  it('Checking the quantity of products in cart after adding all product and than removing on the home page- we cant add all product, we have a bug', function() {
    cy.fixture('usersData.json').then(  (userData) => {
    
      cy.get(atcselectors.product1AddToCartButton).click();
      cy.get(atcselectors.product2AddToCartButton).click();
      cy.get(atcselectors.product3AddToCartButton).click();
      cy.get(atcselectors.product4AddToCartButton).click();
      cy.get(atcselectors.product5AddToCartButton).click();
      cy.get(atcselectors.product6AddToCartButton).click();
      cy.get(atcselectors.cartButton).should('not.have.text', '6');
      cy.get(atcselectors.cartButton).should('have.text', '3');
    })
  })

  it('Checking picture for product- we have a bug, picture of dog is on all pictures of the product', function() {
    cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible');
    cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('have.attr', 'src', '/static/media/sl-404.168b1cce.jpg');
    cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('not.have', 'src', '/static/media/sauce-backpack-1200x1500.0a0b85a3.jpg')
    
  });
})  