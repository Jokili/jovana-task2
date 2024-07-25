import lpselectors from '../../selectors/loginPageSelectors.js'
import ppselectors from '../../selectors/productPageSelectors.js'
import atcselectors from '../../selectors/addToCartSelectors.js'


describe('Add product to cart', () => {
  

    beforeEach(() => {
      cy.fixture('users.json').then(  (userData) => {
        cy.visit(Cypress.env('baseUrl'))
        cy.get(lpselectors.userName).type(userData[4].username);
        cy.get(lpselectors.password).type(userData[4].password);
        cy.get(lpselectors.loginBtn).click();
      })
    })

    it('Testing sorts for product', function() {
        cy.fixture('productPageData.json').then((data) => {
        cy.get(ppselectors.sort).select(data.lowToHigh);

        cy.on('window:alert',(alert)=>{
        expect(alert).to.contains('Sorting is broken! This error has been reported to Backtrace.');
        })
       
      })
      });

      it('Checking the quantity of products in cart after adding product and than removing on the home page', function() {

        cy.fixture('usersData.json').then(  (userData) => {
        cy.get(atcselectors.product1AddToCartButton).click();
        cy.get(atcselectors.product2AddToCartButton).click();
        cy.get(atcselectors.cartButton).should('have.text', '2')
        cy.get(atcselectors.product1RemoveButton).click()
        cy.on('uncaught:exception', (err, runnable) => {
        
          return false
          
         })
      
        cy.get(atcselectors.product2RemoveButton).click();
        cy.get(atcselectors.cartButton).should('have.text', '2')
    
        })
      })
     






})  