/// <reference  types="cypress" />

describe('Alias and invoke',() => {
  it('Validate a specific hair care product', () => {
      cy.visit('https://automationteststore.com/')
      cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
      cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
      cy.get('@productThumbnail').its('length').should('be.gt', 6)
      cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
  })
    it('Validate product thumbnail', () => {
      cy.visit('https://automationteststore.com/')
      cy.get('.thumbnail').as('productThumbnail')
      cy.get('@productThumbnail').should('have.length', 16)
      cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    })
  it.only('Calculate total of normal and sale products', () => {
    cy.visit('https://automationteststore.com/');
    cy.get('.thumbnail').as('productThumbnail')
    cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemprice')
    cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
    var itemsTotal = 0

    cy.get('@itemprice').then($linkText => {
      var itemsPriceTotal = 0
      var itemprice = $linkText.split('$')
      var i;
      for (i = 0; i < itemprice.length; i++) {
        cy.log(itemprice[i])
        itemsPriceTotal += Number(itemprice[i])
      }
      itemsTotal += itemsPriceTotal;
      cy.log("Non sale total " + itemsPriceTotal)
    })

    cy.get('@saleItemPrice').then($linkText => {
      var salePriceTotal = 0
      var saleItemPrice = $linkText.split('$');
      var i;
      for (i = 0; i < saleItemPrice.length ; i++) {
        cy.log(saleItemPrice[i], 'eeeeeeeeeeeeeeee')
        salePriceTotal += Number(saleItemPrice[i])
      }
      itemsTotal += salePriceTotal
      cy.log("Sale total " + salePriceTotal)
    }).then(() => {
      expect(itemsTotal).to.equal(660.5)
    })
  })

  it('handling the multiple or removeing the attributes', () => {
    // here removing the (removing target=_blank) multiple tabs opening
    cy.visit('https://www.webdriveruniversity.com')
    cy.get('#contact_us').invoke('removeAttr', 'target').click({force: true})
  })
})
