/// <reference types="cypress"/>

describe('Validating webdriver home page links',() => {
  it("Confirm links redirect to the correct page",() => {
    cy.visit('https://www.webdriveruniversity.com')
    cy.get('#contact-us').invoke('removeAttr', 'target').click({ force: true })
    cy.url().should('include', 'contactus').wait(1000)
    cy.go('back')
    cy.reload()
    // cy.reload() // reload without using cache
    cy.go('forward')
    cy.url().should('include', 'contactus')

    cy.go('back')
    cy.get('#login-portal').invoke('removeAttr', 'target').click()
    cy.url().should('include', 'Login-Portal')
    cy.go('back')

    cy.get('#to-do-list').invoke('removeAttr', 'target').click()
    cy.url().should('include', 'To-Do-List').wait(1000)
    cy.go('back')

  })
})
