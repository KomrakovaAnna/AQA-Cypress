/// <reference types="cypress" />

describe("Main page", () => {
  it.only("open and authorize", () => {
    cy.visit("https://qauto.forstudy.space", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
  });
});
