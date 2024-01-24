/// <reference types="cypress"/>

describe('Verify checkboxes via webdriveruni', () => {
  beforeEach(function () {
      cy.visit('https://webdriveruniversity.com')
      cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
  })

  it('Check and validate checkbox',() => {
    cy.get('#checkboxes > :nth-child(1) > input').check()
    cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
    cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
    cy.get('@option-1').check().should('be.checked')
  })

  it('Uncheck and validate checkbox',() => {
    cy.get(':nth-child(5) > input').uncheck()
    cy.get(':nth-child(5) > input').should('not.be.checked')
    cy.get(':nth-child(5) > input').as('three')
    cy.get('@three').should('not.be.checked')
  })

  it('Check multiple checkboxes',() => {
    cy.get("input[type='checkbox']").check(["option-1","option-2","option-3","option-4"]).should('be.checked')
  })
})
