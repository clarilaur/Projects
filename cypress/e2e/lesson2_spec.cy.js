describe('lesson2spec', () => {

    it('passes', () => {
  
        cy.visit('https://example.cypress.io')
        cy.get('h1').should('contain', 'Kitchen Sink')
        cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)').should('contain', 'Querying')
        cy.get('.home-list > :nth-child(3) > :nth-child(1)').click()
        cy.get('.action-email').type('apple@email.com')
cy.get('.action-email').should('have.value', 'apple@email.com')

    })
  
  })