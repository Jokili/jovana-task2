describe('template spec', () => {

  const users = [
                 {username: "standard_user", password: "secret_sauce",},
                 {username: "locked_out_user", password: "secret_sauce",},
                 {username: "problem_user", password: "secret_sauce",},
                 {username: "performance_glitch_user", password: "secret_sauce",},
                 {username: "error_user", password: "secret_sauce",},
                 {username: "visual_user", password: "secret_sauce",},
  ]

  it('passes', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').clear('s');
    cy.get('[data-test="username"]').type(users[0].username);
    cy.get('[data-test="password"]').clear('s');
    cy.get('[data-test="password"]').type(users[0].password);
    cy.get('[data-test="login-button"]').click();
    cy.get('.app_logo').should('have.text', 'Swag Labs');
  })
})