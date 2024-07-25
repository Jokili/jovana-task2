import lpselectors from '../../selectors/loginPageSelectors.js'
import atcselectors from '../../selectors/addToCartSelectors.js'
import udselectors from '../../selectors/userDataSelectors.js'
import cselectors from '../../selectors/checkoutSelector.js'


describe('Testing checkout page', () => {
  

    beforeEach(() => {
      cy.fixture('users.json').then(  (userData) => {
        cy.visit(Cypress.env('baseUrl'))
        cy.get(lpselectors.userName).type(userData[2].username);
        cy.get(lpselectors.password).type(userData[2].password);
        cy.get(lpselectors.loginBtn).click();
      })
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
      cy.get(udselectors.errorMessage).should('have.text', userData[0].errorMesageForEmptyFieldLastName);
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