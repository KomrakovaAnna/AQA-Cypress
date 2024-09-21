/// <reference types="cypress" />

class AddExpenseForm {
  get vehicleField() {
    return cy.get("#addExpenseCar");
  }
  get reportDateField() {
    return cy.get("#addExpenseCar");
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

  selectVehicleOption(option) {}
  inputReportDate(value) {}
  inputMileage(value) {}
  inputNumberOfLiters(value) {}
  inputTotalCost(value) {}
  submitForm() {}
  addAnExpenseForCar(vehicleOption, mileageValue, litersValue, totalValue) {
    this.vehicleField.select(vehicleOption);
    this.mileageField.clear().type(mileageValue);
    this.litersField.type(litersValue);
    this.totalCostField.type(totalValue);
    this.addButton.click();
  }
}

export default new AddExpenseForm();
