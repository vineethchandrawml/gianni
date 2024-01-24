/// <reference  types="cypress" />
import { autoStore_Homepage_PO } from '../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO'
import {autoStore_HairCare_PO} from '../../support/pageObjects/automation-test-store/AutoStore_HairCare_PO'

describe('Iterate over elements', () => {
  before(function () {
    cy.fixture("product").then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    autoStore_Homepage_PO.accessHomepage()
    autoStore_Homepage_PO.clickOn_HairCare_Link()
  })
  it('Add specific item to basket', () => {
    autoStore_HairCare_PO.addHairCareProductsToBasket()
    // globalThis.data.product.forEach(function(element) {
    //   cy.addProductToBasket(element)
    // })
    // cy.get('.dropdown-toggle > .fa').click()
  })
})
