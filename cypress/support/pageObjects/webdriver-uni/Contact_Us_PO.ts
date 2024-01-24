class Contact_Us_PO {
  contactForm_submission(firstName, lastName, email, comment, $selector, textToLocate) {
  cy.get('[name="first_name"]').type(firstName);
  cy.get('[name="last_name"]').type(lastName);
  cy.get('[name="email"]').type(email);
  cy.get('textarea.feedback-input').type(comment);
  cy.get('[type="submit"]').click();
  cy.get($selector).contains(textToLocate, { timeout: 1000 });
  // cy.screenshot();
  // cy.screenshot("Make a contact us form submission")
   }
}
export default Contact_Us_PO;


// another way example
// export class FormLayoutPage {
//   submitInlineFormWithNameAndEmail(name, email) {
//     cy.contains('nb-card', 'Inline form').find('form').then(form => {
//          cy.wrap(form).find('[placeholder="Jane Doe"]').type(name)
//          cy.wrap(form).find('[placeholder="Email"]').type(email)
//          cy.wrap(form).find('[type="checkbox"]').check({ force: true })
//          cy.wrap(form).submit()
//        })
//   }

//   submitBasicFormWithEmailAndPassword(email,password) {
//     cy.contains('nb-card', 'Basic form').find('form').then(form => {
//       cy.wrap(form).find('[placeholder="Email"]').type(email)
//       cy.wrap(form).find('[placeholder="Password"]').type(password)
//       cy.wrap(form).find('[type="checkbox"]').check({force: true})
//       cy.wrap(form).submit()
//     })
//   }
// }
// export const onFormLayoutPage = new FormLayoutPage()
