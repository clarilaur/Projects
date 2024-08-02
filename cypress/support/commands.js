import 'cypress-iframe';
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  import './commands'
  Cypress.Commands.add('login', (user) => {
    cy.session(
      user.username,
      () => {
        cy.visit('https://demo.applitools.com/');
        cy.get('#username').type(user.username); // Use user.username here
        cy.get('#password').type(user.password); // Add this to type the password
        cy.get('#log-in').click();
        cy.url().should('exist');
      },
      
    );
  });
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })