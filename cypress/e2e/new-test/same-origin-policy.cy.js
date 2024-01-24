/// <reference types="cypress"/>

describe('Cypress web security',() => {
  it.skip('Validate visiting two diffrent domains',() => {
    cy.visit('https://webdriveruniversity.com/')
    cy.visit('https://automationteststore.com/')
  })
  it('Validate visiting two different domains vis user actions', () => {
    cy.visit('https://webdriveruniversity.com/')
    cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
  })
})
