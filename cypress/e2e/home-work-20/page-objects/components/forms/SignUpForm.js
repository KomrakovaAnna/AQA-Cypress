/// <reference types="cypress" />

class SignUpForm {
  get nameField() {
    return cy.get("#signupName");
  }
  get lastNameField() {
    return cy.get("#signupLastName");
  }
  get emailField() {
    return cy.get("#signupEmail");
  }
  get passwordField() {
    return cy.get("#signupPassword");
  }
  get reEnterPasswordField() {
    return cy.get("#signupRepeatPassword");
  }
  get registerBtn() {
    return cy.get(".modal-content .btn-primary");
  }

  get errorMessage() {
    return cy.get(".invalid-feedback");
  }
  get registerErrorMessage() {
    return cy.get(".alert-danger");
  }

  registerUser(name, lastName, email, password, reEnterPassword) {
    this.nameField.type(name);
    this.lastNameField.type(lastName);
    this.emailField.type(email);
    this.passwordField.type(password);
    this.reEnterPasswordField.type(reEnterPassword);
    this.registerBtn.click();
    cy.get("h1").should("have.text", "Garage");
    cy.get("#userNavDropdown").should("include.text", " My profile ").click();
    cy.get("div.user-nav_menu-group a.dropdown-item")
      .next()
      .should("have.attr", "href", "/panel/settings")
      .click();
    cy.wait(1000);
    cy.get("button").contains("Remove my account").click();
    cy.wait(1000);
    cy.get("button.btn.btn-danger").contains("Remove").click({ force: true });
  }
  registerUserWithError(name, lastName, email, password, reEnterPassword) {
    this.nameField.type(name);
    this.lastNameField.type(lastName);
    this.emailField.type(email);
    this.passwordField.type(password);
    this.reEnterPasswordField.type(reEnterPassword);
    this.registerBtn.click();
  }
}

export default new SignUpForm();
