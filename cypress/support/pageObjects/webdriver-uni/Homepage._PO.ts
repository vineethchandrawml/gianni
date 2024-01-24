class HomePage_PO {
  visitHomepage() {
    cy.visit(Cypress.env("webdriveruni_homepage"), {timeout: 60000})
  }

  clickOn_ContactUs_Button() {
    cy.get('#contact-us').invoke('removeAttr', 'target').click({force: true}, {timeout: 8000})
  }
}
export default HomePage_PO;


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
