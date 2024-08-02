describe('login_spec.cy', () => {
    
    it('should successfully use the custom login command', () => {
       
        cy.visit('https://demo.applitools.com/');
        cy.log('Debug Message');
        // Use the custom command with both username and password
        cy.login({ username: 'apple@gmail.com', password: 'berry' });
        cy.url().should('exist')
        
    })
})
//1. visit website, log in user name and password, assert that we are in the site, 
//click on a link on the website
//take screenshot of it logged in, remember you can chain command together 