/// <reference types="cypress" />

class SignInForm {
  get emailField() {
    return cy.get("#signinEmail");
  }
  get passwordField() {
    return cy.get("#signinPassword");
  }
  get errorMessage() {
    return cy.get(".invalid-feedback");
  }
  get logInBtn() {
    return cy.get(".app-signin-modal .btn-primary");
  }
  get logInErrorMessage() {
    return cy.get(".alert-danger");
  }
  loginWithCredentials(email, password) {
    this.emailField.type(email);
    this.passwordField.type(password);
    cy.get("button").contains("Login").click();
  }
  triggerErrorOnEmailField() {
    this.emailField.focus().blur();
  }
  triggerErrorOnPasswordField() {
    this.passwordField.focus().blur();
  }
}

export default new SignInForm();
