import atcselectors from '../../selectors/addToCartSelectors.js'
import { login }  from '../../support/commonActionLogin.js'


describe('Add product to cart', () => {
  beforeEach(() => {
    login();
    
  
  })

  
    it('Add products to cart and remove then in the cart page', function() {
      cy.fixture('usersData.json').then(  (userData) => {
      cy.get(atcselectors.product1AddToCartButton).click();
      cy.get(atcselectors.product2AddToCartButton).click();
      cy.get(atcselectors.cartButton).click();
      cy.get(atcselectors.product1NameAssertion).should('have.text', userData[0].productName1);
      cy.get(atcselectors.product2NameAssertion).should('have.text', userData[0].productName2);
      cy.get(atcselectors.product1quantity).should('have.text', '1');
      cy.get(atcselectors.product2quantity).should('have.text', '1');
      cy.get(atcselectors.cartItem).should('have.length', 2)
      cy.get(atcselectors.cartButton).should('have.text', '2')
      cy.get(atcselectors.product1RemoveButton).click();
      cy.get(atcselectors.product2RemoveButton).click();
      cy.get(atcselectors.cartButton).should('have.text', '')
      cy.get(atcselectors.continueShopingButton).click();
      cy.get(atcselectors.homePageTitle).should('have.text', 'Swag Labs');
    })
    });



    it('Test button remove for products in cart ', function() {
      cy.get(atcselectors.product1AddToCartButton).click();
      cy.get(atcselectors.product2AddToCartButton).click();
      cy.get(atcselectors.cartButton).click();
      cy.get(atcselectors.cartItem).should('have.length', 2)
      cy.get(atcselectors.cartButton).should('have.text', '2')
      cy.get(atcselectors.cartButton).should('have.text', '2');
      cy.get(atcselectors.product1RemoveButton).click();
      cy.get(atcselectors.cartButton).should('have.text', '1');
      cy.get(atcselectors.product2RemoveButton).click();
      cy.get(atcselectors.cartButton).should('have.text', '');
    });

    it('Test product element in cart', function(){

     cy.fixture('addProductData.json').then((addProduct)=>{
     cy.get(atcselectors.product1AddToCartButton).click();
     cy.get(atcselectors.cartButton).click();
     cy.get(atcselectors.nameOfProduct).should('have.text', addProduct.nameOf1Product);
     cy.get(atcselectors.desriptionOfProduct).should('have.text', addProduct.productDescription);
     cy.get(atcselectors.productPrice).should('have.text', addProduct.productPrice);

     })
    })

    it('Testing whether clicking on a product name in the cart leads to details about that product',function(){
      cy.fixture('addProductData.json').then((addProduct)=>{
      cy.get(atcselectors.product1AddToCartButton).click();
      cy.get(atcselectors.cartButton).click();
      cy.get(atcselectors.nameOfProduct).click();
      cy.get(atcselectors.nameOfProduct).should('have.text', addProduct.nameOf1Product);
      cy.get(atcselectors.desriptionOfProduct).should('have.text', addProduct.productDescription);
      cy.get(atcselectors.productPrice).should('have.text', addProduct.productPrice);
      cy.get(atcselectors.product1Image).should('be.visible');
      cy.get(atcselectors.removeButton).should('have.text', addProduct.removeButtonName);
      cy.url().should('eq', atcselectors.urlForProduct1);
      })
    })



    
 

  


})