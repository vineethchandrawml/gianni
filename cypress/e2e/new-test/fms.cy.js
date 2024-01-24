/// <reference types="cypress" />

describe('Job Details test suite',() => {

  it.only('Personal Details test suite 1', () => {
      // submitting as it is
    // cy.get('tbody tr').eq(2).contains('Assign Leave Type').click()
    // cy.get('button').contains('Job Details').click()
    // cy.get('svg[id="edit-job-details"]').click()
    // cy.get('button').contains('Save Changes').click({force: true})
     // NavigateTo.employeePage()
       cy.visit('https://mines-ui.mybuilder.in/user/login');
    // cy.get('nav').contains('Login').click();
    cy.get('[id="username"]').clear().type('ram@wmltech.com');
      cy.get('[id="password"]').clear().type('Wml@1234');
       cy.pause();
    cy.get('button').contains('Sign In').click().wait(1000);
  })
})




// it(() => {
//   cy.visit('/');
//   cy.get('nav').contains('Login').click();
//   cy.get('[data-cy="login-input-email"]').type('vijay@wmltech.com');
//   cy.get('[data-cy="login-input-password"]').type('Wml@1234');

//   // Pause the test execution here
//   cy.pause();

//   // Manually solve the CAPTCHA on the application or website

//   // After solving the CAPTCHA, press Enter in the Cypress CLI to resume the test

//   // Click the Submit button after resuming the test
//   cy.get('button').contains('Submit').click();
// });
