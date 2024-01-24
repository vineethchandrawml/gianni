export class AutoStore_Homepage_PO {
  accessHomepage() {
   cy.visit("https://www.automationteststore.com/")
  }
  clickOn_HairCare_Link() {
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
  }
}
export const autoStore_Homepage_PO = new AutoStore_Homepage_PO;
