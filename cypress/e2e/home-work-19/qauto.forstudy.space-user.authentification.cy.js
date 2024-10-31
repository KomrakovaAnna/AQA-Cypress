///  <reference types="cypress" />;
// import "./commands";
require("./commands");

describe("Registration set", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
    cy.get("div.hero-descriptor").find("button").contains("Sign up").click();
  });
  it("Valid registration", () => {
    cy.get("#signupName").type("Anna");
    cy.get("#signupLastName").type("Komrakova");
    cy.get("#signupEmail").type("komrakova.anna+14@gmail.com");
    cy.get("#signupPassword").type("GmmWseR6**");
    cy.get("#signupRepeatPassword").type("GmmWseR6**", { sensitive: true });
    cy.get("button.btn").contains("Register").click();
    cy.get("h1").should("include.text", "Garage");
    cy.get("#userNavDropdown").should("include.text", " My profile ").click();
    cy.get("div.user-nav_menu-group a.dropdown-item")
      .next()
      .should("have.attr", "href", "/panel/settings")
      .click();
    cy.wait(1000);
    cy.get("button").contains("Remove my account").click();
    cy.wait(1000);
    cy.get("button.btn.btn-danger").contains("Remove").click({ force: true });
  });

  it("Correct User Exist error on registration", () => {
    cy.get("#signupName").type("Anna");
    cy.get("#signupLastName").type("Komrakova");
    cy.get("#signupEmail").type("komrakova.anna@gmail.com");
    cy.get("#signupPassword").type("GmmWseR6**");
    cy.get("#signupRepeatPassword").type("GmmWseR6**", { sensitive: true });
    cy.get("button.btn").contains("Register").click();
    cy.get("p.alert").should("include.text", "User already exists");
  });

  it("Registration modal: Correct error on empty name field", () => {
    cy.get("#signupName").focus().blur();
    cy.get("div.invalid-feedback")
      .get("p")
      .should("include.text", "Name required")
      .should("be.visible");
    cy.get("button.btn").should("be.disabled");
  });

  it("Registration modal: Correct error on invalid name field", () => {
    cy.get("#signupName").type("12").blur();
    cy.get("div.invalid-feedback")
      .get("p")
      .should("include.text", "Name is invalid")
      .should("be.visible");
    cy.get("button.btn").should("be.disabled");
  });

  it("Registration modal: Correct error on too short name length", () => {
    cy.get("#signupName").type("q").blur();
    cy.get("div.invalid-feedback")
      .should("include.text", "Name has to be from 2 to 20 characters long")
      .should("be.visible");
    cy.get("button.btn").should("be.disabled");
  });

  it("Registration modal: Correct error on too long name length", () => {
    cy.get("#signupName").type("qwertyuiopasdfghjklzx").blur();
    cy.get("div.invalid-feedback")
      .should("include.text", "Name has to be from 2 to 20 characters long")
      .should("be.visible");
    cy.get("button.btn").should("be.disabled");
  });

  it("Registration modal: Name: Correct red border on error", () => {
    cy.get("#signupName").focus().blur();
    cy.get("#signupName.is-invalid").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
  });

  it("Registration modal: Correct error on empty last name field", () => {
    cy.get("#signupLastName").focus().blur();
    cy.get("div.invalid-feedback")
      .should("include.text", "Last name required")
      .should("be.visible");
  });

  it("Registration modal: Correct error on invalid last name field", () => {
    cy.get("#signupLastName").type("12").blur();
    cy.get("div.invalid-feedback")
      .should("include.text", "Last name is invalid")
      .should("be.visible");
  });

  it("Registration modal: Correct error on too short last name length", () => {
    cy.get("#signupLastName").type("q").blur();
    cy.get("div.invalid-feedback")
      .should(
        "include.text",
        "Last name has to be from 2 to 20 characters long"
      )
      .should("be.visible");
  });

  it("Registration modal: Correct error on too long last name length", () => {
    cy.get("#signupLastName").type("qwertyuiopasdfghjklzx").blur();
    cy.get("div.invalid-feedback")
      .should(
        "include.text",
        "Last name has to be from 2 to 20 characters long"
      )
      .should("be.visible");
  });

  it("Registration modal: Last Name: Correct red border on error ", () => {
    cy.get("#signupLastName").focus().blur();
    cy.get("#signupLastName.is-invalid").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
  });

  it("Registration modal: Email: Correct red border on error ", () => {
    cy.get("#signupEmail").focus().blur();
    cy.get("#signupEmail.is-invalid").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
  });

  it("Registration modal: Correct error on empty email field", () => {
    cy.get("#signupEmail").focus().blur();
    cy.get("div.invalid-feedback")
      .get("p")
      .should("include.text", "Email required")
      .should("be.visible");
  });

  it("Registration modal: Correct error on invalid email field", () => {
    cy.get("#signupEmail").type("@").blur();
    cy.get("div.invalid-feedback")
      .get("p")
      .should("include.text", "Email is incorrect")
      .should("be.visible");
  });

  it("Registration modal: Correct error on invalid password field", () => {
    cy.get("#signupPassword").type("123").blur();
    cy.get("div.invalid-feedback")
      .should(
        "include.text",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter"
      )
      .should("be.visible");
  });

  it("Registration modal: Correct error on empty password field", () => {
    cy.get("#signupPassword").focus().blur();
    cy.get("div.invalid-feedback")
      .should("include.text", "Password required")
      .should("be.visible");
  });

  it("Registration modal: Password: Correct red border on error ", () => {
    cy.get("#signupPassword").focus().blur();
    cy.get("#signupPassword.is-invalid").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
  });

  it("Registration modal: Re enter password: Correct error if passwords don't much", () => {
    cy.get("#signupPassword").type("GmmWseR6**");
    cy.get("#signupRepeatPassword").type("Gmmwser6**").blur();
    cy.get("div.invalid-feedback")
      .should("include.text", "Passwords do not match")
      .should("be.visible");
  });

  it("Registration modal: Re enter password: Correct error on empty re-enter password field", () => {
    cy.get("#signupPassword").type("GmmWseR6**");
    cy.get("#signupRepeatPassword").focus().blur();
    cy.get("div.invalid-feedback")
      .should("include.text", "Re-enter password required")
      .should("be.visible");
  });

  it("Registration modal: Re enter password: Correct red border on error ", () => {
    cy.get("#signupRepeatPassword").focus().blur();
    cy.get("#signupRepeatPassword.is-invalid").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)"
    );
  });
});

describe("Login set", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });
  // it("Valid login", () => {
  //   cy.login("komrakova.anna@gmail.com", "GmmWseR6**");
  //   cy.get("h1").should("include.text", "Garage");
  // });
  it("Invalid login", () => {
    cy.login("komrakova.anna+101@gmail.com", "GmmWseR6**");
    cy.get("p.alert").should("include.text", "Wrong email or password");
  });
});
