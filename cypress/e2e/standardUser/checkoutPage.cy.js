import lpselectors from '../../selectors/loginPageSelectors.js'
import atcselectors from '../../selectors/addToCartSelectors.js'
import udselectors from '../../selectors/userDataSelectors.js'
import { login }  from '../../support/commonActionLogin.js'
import cselectors from '../../selectors/checkoutSelector.js'


describe('Testing checkout page', () => {
  

    beforeEach(() => {
      login();
    })
  

    
 it('Checking the price in checkout page', function() {
   cy.fixture('usersData.json').then(  (userData) => {
   cy.get(atcselectors.product1AddToCartButton).click();
   cy.get(atcselectors.product2AddToCartButton).click();
   cy.get(atcselectors.cartButton).click();
   cy.get(atcselectors.checkoutButton).click();
   cy.get(udselectors.firstName).type(userData[0].firstName);
   cy.get(udselectors.lastName).type(userData[0].lastName);
   cy.get(udselectors.postalCode).type(userData[0].postalCode);
   cy.get(udselectors.continueButton).click();

     const priceInCartForFirstProduct = cselectors.priceOfTheFirstProduct
     const priceInCartForSecondProduct= cselectors.priceOfTheSecondProduct
     const itemTotalPriceWithoutTax = cselectors.itemTotalPriceWithoutTax
     const taxForProducts = cselectors.taxForProducts
     const total = cselectors.total


     cy.xpath(itemTotalPriceWithoutTax).then((price) => {
       const text = price.text();
       const match = text.match(/\d+\.\d{2}/);
       const itemTotalPrice = match ? parseFloat(match[0]) : null;

       cy.xpath(taxForProducts).then((tax) => {
         const text = tax.text();
         const match = text.match(/\d+\.\d{2}/);
         const taxForProducts = match ? parseFloat(match[0]) : null;


         cy.xpath(priceInCartForSecondProduct).then(($secondProduct) => {
           const text = $secondProduct.text();
           const match = text.match(/\d+\.\d{2}/);
           const secondProduct = match ? parseFloat(match[0]) : null;

           cy.xpath(priceInCartForFirstProduct).then(($firstProduct) => {
             const text = $firstProduct.text();
             const match = text.match(/\d+\.\d{2}/);
             const firstProduct = match ? parseFloat(match[0]) : null;

             cy.xpath(total).then(($total) => {
               const text = $total.text();
               const match = text.match(/\d+\.\d{2}/);
               const total = match ? parseFloat(match[0]) : null;
               
                         const sum = secondProduct + firstProduct
                         expect(itemTotalPrice).to.equal(sum)

                         const totalSumWithTax = itemTotalPrice + taxForProducts
                         expect(totalSumWithTax).to.equal(total)

             })
           })
         })
       })
     });

     cy.get(udselectors.finishButton).click();
     cy.get(udselectors.message).should('have.text', userData[0].messageForCompletedOrder);
     
   });
 });



  it('Checkout after buying', function() {
      cy.fixture('usersData.json').then(  (userData) => {
      cy.get(atcselectors.cartButton).click();
      cy.get(atcselectors.checkoutButton).click();
      cy.get(udselectors.firstName).type(userData[0].firstName);
      cy.get(udselectors.lastName).type(userData[0].lastName);
      cy.get(udselectors.postalCode).type(userData[0].postalCode);
      cy.get(udselectors.continueButton).click();
      cy.get(udselectors.finishButton).click();
      cy.get(udselectors.message).should('have.text', userData[0].messageForCompletedOrder);
      cy.get(udselectors.backToProductsButton).click();
      cy.get(atcselectors.homePageTitle).should('have.text', 'Swag Labs');
      })
    });

    it('Checking checkout with empty data for field first name', function() {
        cy.fixture('usersData.json').then(  (userData) => {
        cy.get(atcselectors.cartButton).click();
        cy.get(atcselectors.checkoutButton).click();
        cy.get(udselectors.continueButton).click();
        cy.get(udselectors.errorMessage).should('have.text',userData[0].errorMesageForEmptyFieldFirstName );
        })
      });
      it('Checking checkout with empty data for field Last name', function() {
        cy.fixture('usersData.json').then(  (userData) => {
        cy.get(atcselectors.cartButton).click();
        cy.get(atcselectors.checkoutButton).click();
        cy.get(udselectors.firstName).type(userData[0].firstName);
        cy.get(udselectors.postalCode).type(userData[0].postalCode);
        cy.get(udselectors.continueButton).click();
        cy.get(udselectors.errorMessage).should('have.text',userData[0].errorMesageForEmptyFieldLastName );
        })
      });
      it('Checking checkout with empty data for field postal code', function() {
        cy.fixture('usersData.json').then(  (userData) => {
        cy.get(atcselectors.cartButton).click();
        cy.get(atcselectors.checkoutButton).click();
        cy.get(udselectors.firstName).type(userData[0].firstName);
        cy.get(udselectors.lastName).type(userData[0].lastName);
        cy.get(udselectors.continueButton).click();
        cy.get(udselectors.errorMessage).should('have.text',userData[0].errorMesageForEmptyFieldPostalCode );
        })
      });

      it('Checking checkout with step cancel after adding data for user on page your information', function() {
        cy.fixture('usersData.json').then(  (userData) => {
        cy.get(atcselectors.cartButton).click();
        cy.get(atcselectors.checkoutButton).click();
        cy.get(udselectors.cancelButton).click();
        cy.url().should('eq', userData[0].urlForCartPage);
        cy.get(atcselectors.checkoutButton).click();
        cy.get(udselectors.firstName).type(userData[0].firstName);
        cy.get(udselectors.lastName).type(userData[0].lastName);
        cy.get(udselectors.postalCode).type(userData[0].postalCode);
        cy.get(udselectors.cancelButton).click();
        cy.url().should('eq', userData[0].urlForCartPage);
        cy.get(atcselectors.checkoutButton).click();
        cy.get(udselectors.firstName).should('have.id', 'first-name');
        cy.get(udselectors.lastName).should('have.id', 'last-name');
        cy.get(udselectors.postalCode).should('have.id', 'postal-code');
        })
      
      });

      it('Step cancellation after going to the payment overview page', function() {
        cy.fixture('usersData.json').then(  (userData) => {
        cy.get(atcselectors.cartButton).click();
        cy.get(atcselectors.checkoutButton).click();
        cy.get(udselectors.firstName).type(userData[0].firstName);
        cy.get(udselectors.lastName).type(userData[0].lastName);
        cy.get(udselectors.postalCode).type(userData[0].postalCode);
        cy.get(udselectors.continueButton).click();
        cy.get(udselectors.cancelButton).click();
        cy.get(lpselectors.successLoginMessage).should('have.text', 'Swag Labs');
        cy.get(atcselectors.cartButton).click();
        cy.get(atcselectors.checkoutButton).click();
        cy.get(udselectors.firstName).should('have.id', 'first-name');
       // cy.get(udselectors.lastName).should('have.id', 'last-name');
        //cy.get(udselectors.postalCode).should('have.id', 'postal-code');
        })
      });

  
})