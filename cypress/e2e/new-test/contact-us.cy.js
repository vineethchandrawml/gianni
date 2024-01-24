/// <reference types="cypress" />

import HomePage_PO from '../../support/pageObjects/webdriver-uni/Homepage._PO';
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'


//// using fixtures files

////1 way fixtures data driven testing
describe('web contact us 1', () => {
  Cypress.config('defaultCommandTimeout', 20000)
  const homepage_PO = new HomePage_PO();
  const contact_Us_PO = new Contact_Us_PO()

  before(function () {
    // cy.viewport(550, 750)
    cy.fixture('example').then(function (data) {
      // this.data = data
      globalThis.data = data
    })
  })

  beforeEach(function () {
    // cy.clearLocalStorage()
    // cy.clearCookies()
    homepage_PO.visitHomepage()
    homepage_PO.clickOn_ContactUs_Button()
    // cy.pause()
  })

  it('Should be able to submit a successful submission via contact form',
    {
    // retries: {
    //   runMode: 2,
    //   openMode: 2
    //   }
    }, () => {
    // cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    // cy.visit(Cypress.env("webdriveruni_homepage"))

    // ex: - cy.visit("/" + "Contact-Us/contactus.html")
    // cy.visit(Cypress.env("newUrl") + "Contact-Us/contactus.html")
    // cy.get('a').contains('CONTACT US').click().wait(1000)
    // cy.get('[name="first_name"]').type(data.first_name)
    // cy.get('[name="last_name"]').type(data.first_name)
    // cy.get('[name="email"]').type(data.email)
    // cy.get('[name="message"]').type('yhdchgcjo')
    // cy.get('[type="submit"]').click()
    // cy.wait(2000)

    // cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, data.email, "eeeeeeeeeew", 'h1', 'Thank You for your Message!')

    contact_Us_PO.contactForm_submission(Cypress.env("first1Name"), "lastName", "email@df.com", "comment", "h1", "Thank You for your Message!")

    // cy.get('h1').should('have.text', 'Thank You for your Message!')
    // cy.document().should('have.property', 'charset').and('eq', 'utf-8')
  })

  it('Should be able to submit a successful submission via contact form as all fields are required', () => {
    // cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    // cy.get('a').contains('CONTACT US').click().wait(1000)
    // cy.get('[name="first_name"]').type(data.first_name)
    // cy.get('[name="last_name"]').type(data.first_name)
    // cy.get('[name="email"]').type(data.email)
    // cy.get('[name="message"]').type('yhdchgcjo')
    // cy.get('[type="submit"]').click()
    // cy.wait(2000)
    if (Cypress.isBrowser('firefox')) {
      contact_Us_PO.contactForm_submission(Cypress.env("first1Name"), "lastName", " ", "comment", 'body', 'Error: Invalid email address')
    } else {
      
    }
    // cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, " ", "eeeeeeeeeew", 'body', 'Error: Invalid email address')
    // cy.get('h1').should('have.text', 'Thank You for your Message!')
    // cy.document().should('have.property', 'charset').and('eq', 'utf-8')
  })
})

// 2 way Alias & fixtures
// describe('web contact us 1', () => {
//   before(function() {
//      cy.fixture("userDetails").as('user')
//   } )

//   it('case 1', () => {
//     cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

//     cy.get('@user').then((user) => {
//       // cy.get('#ContactUsFrm_first_name').type(user.first_name)
//       // cy.get('#ContactUsFrm_email').type(user.email)
//         cy.get('[name="first_name"]').type(user.first_name)
//         cy.get('[name="email"]').type(user.email)
//     })

//     // cy.get('[name="first_name"]').type(data.first_name)
//     // cy.get('[name="last_name"]').type(data.first_name)
//     // cy.get('[name="email"]').type(data.email)
//     cy.get('[name="message"]').type('yhdchgcjo')
//     cy.get('[type="submit"]').click()
//     cy.wait(2000)
//     // cy.get('h1').should('have.text', 'Thank You for your Message!')
//     // cy.document().should('have.property', 'charset').and('eq', 'utf-8')
//   })
// })
