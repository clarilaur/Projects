describe('lesson3spec', () => {
   
    it('passes', () => {
        const username = `standard_user`;

        const password = `secret_sauce`;

        cy.visit('https://www.saucedemo.com')
        
        function login(username, password) {
            cy.get('[data-test="username"]').type(username);
            cy.get('#password').type(password); 
            cy.get('[data-test="login-button"]').click();
        }
        login (username,password) 


        cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').should('contain', 'Sauce Labs Bike Light')
        cy.get('[data-test="item-0-title-link"] > [data-test="inventory-item-name"]').click()

       
        cy.get('[data-test="add-to-cart"]').click()
    })
  })