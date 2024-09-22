/// <reference types="cypress" />

class AddCarForm {
  get brandField() {
    return cy.get("#addCarBrand");
  }
  get modelField() {
    return cy.get("#addCarModel");
  }
  get mileageField() {
    return cy.get("#addCarMileage");
  }
  get addButton() {
    return cy.get(".modal-footer .btn-primary").contains("Add");
  }
  get addFuelExpencesButton() {
    return cy.get(".car_add-expense btn");
  }
  get editButton() {
    return cy.get(".btn-edit");
  }

  selectBrandOption(option) {}
  selectModelOption(option) {}
  inputMileage(value) {}
  submitForm() {}
  addCar(brandOption, modelOption, value) {
    this.brandField.select(brandOption);
    this.modelField.select(modelOption);
    this.mileageField.type(value);
    this.addButton.click();
  }
}

export default new AddCarForm();
