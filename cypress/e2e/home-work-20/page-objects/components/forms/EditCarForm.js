/// <reference types="cypress" />

class EditCarForm {
  get brandField() {
    return cy.get("#addCarBrand");
  }
  get modelField() {
    return cy.get("#addCarModel");
  }
  get mileageField() {
    return cy.get("#addCarMileage");
  }
  get createdAtDate() {
    return cy.get("");
  }
  get removeCarButton() {
    return cy.get(".btn-outline-danger").contains("Remove car");
  }
  removeCar() {
    removeCarButton.click();
  }
}

export default new EditCarForm();
