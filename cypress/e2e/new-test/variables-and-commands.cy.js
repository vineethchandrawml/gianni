/// <reference  types="cypress" />

describe('verifying variables, cypress commands and jquery commands',() => {
  it('Navigating to specific product pages', () => {
    cy.visit('https://automationteststore.com/')

    // // the following will fail
    // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
    // const skinLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
    // makeupLink.click()
    // skinLink.click()

    // //  the following will pass
    // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
    // makeupLink.click()
    // const skinLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
    // skinLink.click()

    // // Recommended Approach
    //  cy.get("a[href*='product/category&path=']").contains("Makeup").click()
    //  cy.get("a[href*='product/category&path=']").contains("Skincare").click()

    cy.get("h1 .maintext").then(newtext => {
      const headerText = newtext.text()
      cy.log('oooooooo', headerText)
       // cy.log('oooo', + headerText)
     })
  })

  it.only('Validate properties of the Contact us page', () => {
    cy.visit('https://automationteststore.com/index.php?rt=content/contact')
    // Uses cypress commands and chaining
    cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

    // JQuery Approach
      cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
        const firstNameText = text.find('#field_11').text()
        expect(firstNameText).to.contain('First name')
        // Embedded commands (closure)
        cy.get('#field_11').then(fnText => {
          cy.log(fnText.text())
          cy.log(fnText)
        })
      })

  })
})
