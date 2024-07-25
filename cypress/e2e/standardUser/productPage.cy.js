import { login }  from '../../support/commonActionLogin.js'
import ppselectors from '../../selectors/productPageSelectors.js'
import atcselectors from '../../selectors/addToCartSelectors.js'


describe('Add product to cart', () => {
  

    beforeEach(() => {
      login();
    })

    it('Testing sorts for product', function() {
        cy.fixture('productPageData.json').then((data) => {
        cy.get(ppselectors.sort).select(data.lowToHigh);
        cy.get(ppselectors.priceForProduct).should('have.text', data.lowPrice);
      })
      });

      it('Checking the quantity of products in cart after adding product and than removing on the home page', function() {

        cy.fixture('usersData.json').then(  (userData) => {
        cy.get(atcselectors.product1AddToCartButton).click();
        cy.get(atcselectors.product2AddToCartButton).click();
        cy.get(atcselectors.cartButton).should('have.text', '2')
        cy.get(atcselectors.product1RemoveButton).click();
        cy.get(atcselectors.product2RemoveButton).click();
        cy.get(atcselectors.cartButton).should('have.text', '')
    
        })
      })
      it('Checking the quantity of products in cart after adding all product and than removing on the home page', function() {
        cy.fixture('usersData.json').then(  (userData) => {
        
          cy.get(atcselectors.product1AddToCartButton).click();
          cy.get(atcselectors.product2AddToCartButton).click();
          cy.get(atcselectors.product3AddToCartButton).click();
          cy.get(atcselectors.product4AddToCartButton).click();
          cy.get(atcselectors.product5AddToCartButton).click();
          cy.get(atcselectors.product6AddToCartButton).click();
          cy.get(atcselectors.cartButton).should('have.text', '6');
          cy.get(atcselectors.product4RemoveButton).click();
          cy.get(atcselectors.cartButton).should('have.text', '5');
          cy.get(atcselectors.product6RemoveButton).click();
          cy.get(atcselectors.product5RemoveButton).click();
          cy.get(atcselectors.product3RemoveButton).click();
          cy.get(atcselectors.product2RemoveButton).click()
          cy.get(atcselectors.product1RemoveButton).click();
          cy.get(atcselectors.cartButton).should('have.text', '')
        })
      })






})  