export class AutoStore_HairCare_PO {
  addHairCareProductsToBasket() {
    globalThis.data.product.forEach(function(element) {
      cy.addProductToBasket(element).then(() => {
        
      })
    })
    cy.get('.dropdown-toggle > .fa').click()
 }
}
export const autoStore_HairCare_PO = new AutoStore_HairCare_PO
