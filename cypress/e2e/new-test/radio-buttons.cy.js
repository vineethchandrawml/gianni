/// <reference types="cypress" />

describe('Verify Radio buttons via webdriveruni',() => {
  before(function () {
  cy.visit('https://webdriveruniversity.com')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({ force: true })
    cy.wait(1000)
  })

  it('Check specific radio buttons', () => {
    cy.get('#radio-buttons').find("[type='radio']").first().check()
    cy.get('#radio-buttons').find("[type='radio']").eq(1).check()
  })

  it('Validate the state of specific radio buttons', () => {
  //  cy.visit('https://webdriveruniversity.com')
  //  cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force: true})
      cy.get("[value='lettuce']").should('not.be.checked')
      cy.get("[value='pumpkin']").should('be.checked')
      cy.get("[value='lettuce']").check()
      cy.get("[value='lettuce']").should('be.checked')
      cy.get("[value='pumpkin']").should('not.be.checked')
      cy.get("[value='cabbage']").should('be.disabled')
  })
})
