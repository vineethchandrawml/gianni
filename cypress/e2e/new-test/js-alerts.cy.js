/// <reference types="cypress" />

describe('Handle js alerts',() => {
  it('Confirms js alert contains the correct text', () => {
    cy.visit("https://www.webdriveruniversity.com")
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
    cy.get('#button1').click()
    cy.on('window:alert',(str) => {
     expect(str).to.equal('I am an alert box!')
    })
  })

   it('Confirms js alert box works correctly when clicking ok', () => {
    cy.visit("https://www.webdriveruniversity.com")
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
    cy.get('#button4').click()
    cy.on('window:confirm',(str) => {
      return true;
      // if  (return true) means it clicks on ok button
      // if  (return false) means it clicks on cancel or close button
    })
     cy.get('#confirm-alert-text').contains('You pressed OK')
     cy.get('#confirm-alert-text').should('contain', 'You pressed OK')
   })

  it.only('Confirms js alert box works correctly when clicking cancel', () => {
    cy.visit("https://www.webdriveruniversity.com")
    cy.get('#popup-alerts').invoke('removeAttr', 'target').click()

    const stub = cy.stub()
    cy.on('window:confirm', stub)
    cy.get('#button4').click().then(() => {
      expect(stub.getCall(0)).to.be.calledWith('Press a button!')
    }).then(() => {
      return true
    }).then(() => {
      cy.get('#confirm-alert-text').contains('You pressed OK!')
    })
    //  cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    //  cy.get('#confirm-alert-text').should('contain', 'You pressed Cancel!')
  })
})
