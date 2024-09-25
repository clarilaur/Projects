describe('Creating booking with Cypress', () => {

    it('should create a new booking', () => {
  
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
          // Executing POST request here in the body
         cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            body: createBooking,
            headers: {
              'Content-Type': 'application/json'
            }
         // Asserting with the body
         }) .then((response) => {
          expect(response.body).to.have.property('booking');
          expect(response.status).to.eq(200);
  
        });
  
    });
  
  });