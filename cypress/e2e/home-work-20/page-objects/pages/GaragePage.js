/// <reference types="cypress" />

class GaragePage {
  get addCarButton() {
    return cy.get("div.panel-page .btn").contains("Add car");
  }

  get lastAddedCarName() {
    return cy.get("p.car_name").eq(0);
  }
  get editCarBtn() {
    return cy.get(".btn-edit");
  }
  get addFuelExpensesBtn() {
    return cy.get(".car_add-expense");
  }
  openAddCarModal() {
    this.addCarButton.click();
    cy.get(".modal-title").should("have.text", "Add a car");
  }
  openEditCarModal() {
    this.editCarBtn.click();
  }
  openAddFuelExpenseModal() {
    this.addFuelExpensesBtn.click();
  }
}

export default new GaragePage();
