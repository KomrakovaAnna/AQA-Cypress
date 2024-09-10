/// <reference types="cypress" />

describe("Main page", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });

  it("All header nav buttons", () => {
    cy.get("nav").find("button");
    cy.get("nav").find("a").contains("Home");
  });
  it("Guest log in", () => {
    cy.get("div.header_right").find("button").contains("Guest log in").click();
    cy.get("div.user-nav").contains("My profile");
    cy.get("h1").contains("Garage");
  });
  it("Log in modal opens on Sign In click", () => {
    cy.get("div.header_right").find("button").contains("Sign In").click();
    cy.get("h4").contains("Log in");
  });
  it("Registration modal opens on Sign up click", () => {
    cy.get("div.hero-descriptor").find("button").contains("Sign up").click();
    cy.get("h4").contains("Registration");
  });
  it("All footer contact buttons", () => {
    cy.get("div.contacts_socials")
      .children("a")
      .then(($children) => {
        expect($children).to.have.length(5);
      });
  });
  it("Check every footer contact button is visible", () => {
    cy.get("div.contacts_socials")
      .find("a.socials_link")
      .each(($el) => {
        cy.wrap($el).should("be.visible");
      });
  });
  it("Footer: ithillel.ua is visible", () => {
    cy.get("div.col-md-6")
      .find("a")
      .contains("ithillel.ua")
      .should("be.visible");
  });
  it("Footer: support email is visible", () => {
    cy.get("div.col-md-6")
      .find("a")
      .contains("support@ithillel.ua")
      .should("be.visible");
  });
});
