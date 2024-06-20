describe('template spec', () => {
  

  beforeEach(() => {
    cy.fixture('data.json').then(  (userData) => {
      cy.visit(Cypress.env('baseUrl'))
    cy.get('[data-test="username"]').type(userData[0].username);
    cy.get('[data-test="password"]').type(userData[0].password);
    cy.get('[data-test="login-button"]').click();})
  })

  
  it('addProductsToCart', function() {
    cy.fixture('data.json').then(  (userData) => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Backpack');
    cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').should('have.text', 'Sauce Labs Bike Light');
    cy.get(':nth-child(4) > [data-test="item-quantity"]').should('have.text', '1');
    cy.get(':nth-child(3) > [data-test="item-quantity"]').should('have.text', '1');
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').clear('J');
    cy.get('[data-test="firstName"]').type(userData[0].firstName);
    cy.get('[data-test="lastName"]').clear('J');
    cy.get('[data-test="lastName"]').type(userData[0].lastName);
    cy.get('[data-test="postalCode"]').clear('1');
    cy.get('[data-test="postalCode"]').type(userData[0].postalCode);
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="back-to-products"]').click();
    })
  });
})