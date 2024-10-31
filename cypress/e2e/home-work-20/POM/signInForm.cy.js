/// <reference types="cypress" />
import HomePage from "../page-objects/pages/HomePage";
import SignInForm from "../page-objects/components/forms/SignInForm";

describe("SignIn", () => {
  beforeEach(() => {
    HomePage.open();
    HomePage.openSignInForm();
  });

  // it("Successful log in", () => {
  //   SignInForm.loginWithCredentials("komrakova.anna@gmail.com", "GmmWseR6**");
  //   cy.get("h1").should("have.text", "Garage");
  // });
  it("Log in without email", () => {
    SignInForm.triggerErrorOnEmailField();
    SignInForm.errorMessage.should("have.text", "Email required");
  });
  it("Log in without password", () => {
    SignInForm.triggerErrorOnPasswordField();
    SignInForm.errorMessage.should("have.text", "Password required");
  });
  it("Log in with not existing user", () => {
    SignInForm.loginWithCredentials(
      "komrakova.anna+101@gmail.com",
      "GmmWseR6**"
    );
    cy.get("p.alert").should("include.text", "Wrong email or password");
  });
});
