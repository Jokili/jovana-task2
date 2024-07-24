import lpselectors from '../../selectors/loginPageSelectors.js'
import bmselectors from '../../selectors/burgerMenuSelectors.js'
import atcselectors from '../../selectors/addToCartSelectors.js'


describe('Burger menu', () => {
  beforeEach(() => {
    cy.fixture('users.json').then(  (userData) => {
      cy.visit(Cypress.env('baseUrl'))
      cy.get(lpselectors.userName).type(userData[4].username);
      cy.get(lpselectors.password).type(userData[4].password);
      cy.get(lpselectors.loginBtn).click();
       

    })
    
  })

  
  it('Burger menu', function() {
   
    cy.get(bmselectors.burgerMenuBtn).click();
    cy.get(bmselectors.allItems).should('have.text', 'All Items');
    cy.get(bmselectors.about).should('have.text', 'About');
    cy.get(bmselectors.resetAppState).should('have.text', 'Reset App State');
    cy.get(bmselectors.logout).should('have.text', 'Logout');
  
  });

  it('Burger menu options', function() {
   
    cy.get(bmselectors.burgerMenuBtn).click();
    cy.get(bmselectors.cartButton).click()
    cy.get(bmselectors.burgerMenuBtn).click();
    cy.get(bmselectors.allItems).click();
    cy.url().then((url) => {

      cy.log('https://www.saucedemo.com/', url);

      expect(url).to.include('inventory');
    });
    cy.get(bmselectors.burgerMenuBtn).click();
    cy.get(bmselectors.logout).click();
    cy.url().then((url) => {

        cy.log('https://www.saucedemo.com/', url);
  
        expect(url).to.include('https://www.saucedemo.com/');
    });
  }); 


  it('Testing logout button', function(){
    cy.fixture('burgerMenu.json').then(  (burger) => {
    cy.url().should('eq', burger.homePageUrl );
    cy.get(bmselectors.burgerMenuBtn).click();
    cy.get(bmselectors.logout).click();
    cy.url().should('eq', burger.logInPageUrl);

    })
  })

  it('Testing rest button', function(){
    cy.fixture('burgerMenu.json').then((burger) => {

    cy.get(atcselectors.product1AddToCartButton).click();
    cy.get(atcselectors.product2AddToCartButton).click();
    cy.get(atcselectors.cartButton).click();
    cy.get(atcselectors.cartButton).should('have.text', '2');
    cy.get(atcselectors.cartButton).click();
    cy.get(bmselectors.burgerMenuBtn).click();
    cy.get(bmselectors.resetAppState).click();
    cy.get(atcselectors.cartButton).should('have.text','')

    })
  })


  it('Test About page', function() {
    cy.get(bmselectors.burgerMenuBtn).click();
    cy.get(bmselectors.about).click()
    cy.get(bmselectors.sauceLabsLogo).should('be.visible');
  });

  

 
  
})