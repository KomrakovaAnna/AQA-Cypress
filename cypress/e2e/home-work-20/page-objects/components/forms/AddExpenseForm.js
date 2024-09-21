/// <reference types="cypress" />

class AddExpenseForm {
  get vehicleField() {
    return cy.get("#addExpenseCar");
  }
  get reportDateField() {
    return cy.get("#addExpenseDate");
  }
  get mileageField() {
    return cy.get("#addExpenseMileage");
  }

  get litersField() {
    return cy.get("#addExpenseLiters");
  }
  get totalCostField() {
    return cy.get("#addExpenseTotalCost");
  }
  get addButton() {
    return cy.get(".modal-footer .btn-primary").contains("Add");
  }
  get dateValue() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so we add 1
    const day = String(today.getDate()).padStart(2, "0"); // Pad with leading zero if needed
    return `${day}.${month}.${year}`;
  }
  selectVehicleOption(option) {}
  inputReportDate(value) {}
  inputMileage(value) {}
  inputNumberOfLiters(value) {}
  inputTotalCost(value) {}
  submitForm() {}
  addAnExpenseForCar(vehicleOption, mileageValue, litersValue, totalValue) {
    this.vehicleField.select(vehicleOption);
    this.reportDateField.clear().type(this.dateValue);
    this.mileageField.clear().type(mileageValue);
    this.litersField.type(litersValue);
    this.totalCostField.type(totalValue);
    this.addButton.click();
  }
}

export default new AddExpenseForm();
