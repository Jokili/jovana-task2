import lpselectors from '../selectors/loginPageSelectors.js'
import bmselectors from '../selectors/burgerMenuSelectors.js'
import { login }  from '../support/commonActionLogin.js'


describe('Burger menu', () => {
  beforeEach(() => {

    login();
    
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