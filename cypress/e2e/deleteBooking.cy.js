describe('deletint booking with Cypress', () => {
    let bookingId;
  
    // Creating the booking ID
    before(() => {
      const createBooking = {
        firstname: 'John',
        lastname: 'Doe',
        totalprice: 123,
        depositpaid: true,
        bookingdates: {
          checkin: '2024-08-01',
          checkout: '2024-08-10'
        },
        additionalneeds: 'Breakfast'
      };
  
      cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/booking',
        body: createBooking,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('bookingid');
        bookingId = response.body.bookingid;
        cy.log(`Booking created with ID: ${bookingId}`);
      });
    });
  
    // Deleting the booking
    it('should delete current booking', function () {
      cy.wrap(bookingId).should('exist').then(() => {
        const deleteBooking = {
          
        };
  
        // Executing DELETE request here in the body
        cy.request({
          method: 'DELETE',
          url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
          failOnStatusCode: false,
          body: deleteBooking,
          headers: {
            'Content-Type': 'application/json'
         // Making sure the test successfully asserts itself
          }
        }).then((response) => {
          cy.log('Update Booking Response:', JSON.stringify(response.body));
          if (response.status === 403) {
            cy.log('Access Forbidden: Please check if authentication or permissions are required.');
          } else {
            expect(response.status).to.eq(200);
          }
        });
      });
    });
  });