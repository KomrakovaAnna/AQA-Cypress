/// <reference types="cypress" />
import HomePage from "../page-objects/pages/HomePage";
import SignUpForm from "../page-objects/components/forms/SignUpForm";

describe("SignUp", () => {
  beforeEach(() => {
    HomePage.open();
    HomePage.openSignUpForm();
  });

  it("Successful registration", () => {
    SignUpForm.registerUser(
      "Anna",
      "Komrakova",
      "komrakova.anna+23@gmail.com",
      "GmmWseR6**",
      "GmmWseR6**"
    );
  });

  it("Registration without name", () => {
    SignUpForm.nameField.focus().blur();
    SignUpForm.errorMessage.should("have.text", "Name required");
  });
  it("Registration without email", () => {
    SignUpForm.emailField.focus().blur();
    SignUpForm.errorMessage.should("have.text", "Email required");
  });
  it("Registration with existing user", () => {
    SignUpForm.registerUserWithError(
      "Anna",
      "Komrakova",
      "komrakova.anna@gmail.com",
      "GmmWseR6**",
      "GmmWseR6**"
    );
    SignUpForm.registerErrorMessage.should("have.text", "User already exists");
  });
});
