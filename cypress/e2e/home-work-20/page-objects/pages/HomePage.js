/// <reference types="cypress" />

class HomePage {
  open() {
    cy.visit(Cypress.env("BASE_URL"), {
      auth: {
        username: Cypress.env("AUTH_USERNAME"),
        password: Cypress.env("AUTH_PASSWORD"),
      },
    });
  }

  get signInButton() {
    return cy.get(".header_signin");
  }
  get signUpButton() {
    return cy.get(".hero-descriptor_btn");
  }

  openSignInForm() {
    this.signInButton.click();
    cy.get(".modal-title").should("have.text", "Log in");
  }
  openSignUpForm() {
    this.signUpButton.click();
    cy.get(".modal-title").should("have.text", "Registration");
  }
}

export default new HomePage();
