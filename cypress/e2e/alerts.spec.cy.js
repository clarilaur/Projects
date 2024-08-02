describe('alerts', () => {

    it('passes', () => {
  
      cy.visit('https://demoqa.com/alerts');
      cy.wait(5000)
      //Testing alert
      cy.get('#alertButton').then(($btn) => {
        if ($btn.hasClass('active')) {
            cy.get('#alertButton').click();
        } else {
            cy.get('#alertButton').should('have.value', '');
        }
       });
  // Testing timer alert
      cy.get('#timerAlertButton').then(($btn) => {
        if ($btn.hasClass('active')){
        cy.get('#timerAlertButton').click();
        } else {
        cy.get('#timerAlertButton').should('have.value', '')
        }
        });
  // Testing confirm alert
       cy.get('#confirmButton').then(($btn) => {
        if ($btn.hasClass('active')) {
        cy.get('#confirmButton').click();
        } else {
        cy.get('#confirmButton').should('have.value', '');
        }
       });

    });
  
  });