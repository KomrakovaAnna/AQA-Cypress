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
  get fuelExpensesHeader() {
    return cy.get("h1");
  }
  openAddCarModal() {
    this.addCarButton.click();
    cy.get(".modal-title").should("have.text", "Add a car");
  }
  get profileButton() {
    return cy.get("nav .sidebar_btn").contains("Profile");
  }

  openEditCarModal() {
    this.editCarBtn.click();
  }
  openAddFuelExpenseModal() {
    this.addFuelExpensesBtn.click();
  }
  openProfilePage() {
    this.profileButton.click();
  }
}

export default new GaragePage();
