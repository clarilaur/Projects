describe('login_spec.cy', () => {
    
    it('passes', () => {
        function launchApplication() {
            cy.visit('https://demo.applitools.com/')
        }
    
        function enterUsername(username) {
            cy.get('.action-username').should('have.value', 'apple') 
        }
        
        function enterPassword(password) {
            cy.get('.action-password').should('have.value', 'berry') 
        }
        
        function clickLoginButton(){ 
            cy.get('.action-log-in').click()
        }

        function  verifyLoginSuccess() {
            cy.get('.auth-header')
          .should('have.class', 'user has successfully signed in')
          }
    })
})