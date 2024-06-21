import lpselectors from '../selectors/loginPageSelectors.js'
import bmselectors from '../selectors/burgerMenuSelectors.js'


describe('Burger menu', () => {
  beforeEach(() => {
    cy.fixture('data.json').then(  (userData) => {
      cy.visit(Cypress.env('baseUrl'))
    cy.get(lpselectors.userName).type(userData[0].username);
    cy.get(lpselectors.password).type(userData[0].password);
    cy.get(lpselectors.loginBtn).click();})
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
  
    
})