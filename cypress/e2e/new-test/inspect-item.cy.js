/// <reference types="cypress"/>


describe('web contact us 1', () => {
  it('case 1', () => {
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    // cy.get('a').contains('CONTACT US').click().wait(1000)
    cy.get('[name="first_name"]').type('yo')
    cy.get('[name="last_name"]').type('dg')
    cy.get('[name="email"]').type('yo@gmail.com')
    cy.get('[name="message"]').type('yhdchgcjo')
    cy.get('[type="submit"]').click()
    cy.wait(2000)
    cy.get('h1').should('have.text', 'Thank You for your Message!')
    cy.document().should('have.property', 'charset').and('eq', 'utf-8')
  })

   it('case 1', () => {
    cy.visit('https://www.automationteststore.com/')
     // cy.get('a').contains('CONTACT US').click().wait(1000)
     cy.get('a[href$="contact"]').click().then(function (itemText) {
       console.log(`this is ` + itemText.text())
       cy.log(`this is `+ itemText.text())
     })
    // cy.get('[name="first_name"]').type('yo')
    // cy.get('[name="last_name"]').type('dg')
    // cy.get('[name="email"]').type('yo@gmail.com')
    // cy.get('[name="message"]').type('yhdchgcjo')
    // cy.get('[type="submit"]').click()
    // cy.wait(2000)
    // cy.get('h1').should('have.text', 'Thank You for your Message!')
    // cy.document().should('have.property', 'charset').and('eq', 'utf-8')
  })
})
