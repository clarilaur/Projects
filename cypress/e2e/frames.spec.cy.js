describe('alertsandframes', () => {

    it('passes', () => {
 // Testing frames:
       cy.visit('https://demoqa.com/frames');
       cy.frameLoaded('#frame1');
       cy.iframe('#frame1').type('This is a sample page');
       
        // Here, I want to load frame and assert: 
       cy.get('ul li').each(($li) => {
        //Single frame
        cy.frameLoaded('#frame1'); // Ensure the iframe is loaded
        cy.iframe('#frame1').click(); // Example action, adjust as needed
        cy.iframe('#frame1').should('have.value', ''); // Example assertion, adjust as needed
          
        // Nested frame:
        cy.frameLoaded('#frame2'); 
        cy.iframe('#frame2').click(); 
        cy.iframe('#frame2').should('have.value', ''); // Example assertion, adjust as needed
      
     });

    });
  
  });