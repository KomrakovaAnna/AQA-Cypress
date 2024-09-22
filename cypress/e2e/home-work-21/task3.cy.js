import "cypress-plugin-api";

it("GET brands Using Cypress API Plugin", () => {
  cy.api("GET", "/api/cars/brands").should((response) => {
    expect(response.status).to.eq(200);
  });
});

it("GET models Using Cypress API Plugin", () => {
  cy.api("GET", "/api/cars/models").should((response) => {
    expect(response.status).to.eq(200);
  });
});
it("POST Create account Using Cypress API Plugin", () => {
  cy.api("POST", "/api/auth/signup/", {
    name: "Anna",
    lastName: "Komrakova",
    email: "komrakova.anna@gmail.com",
    password: "GmmWseR6**",
    repeatPassword: "GmmWseR6**",
  }).should((response) => {
    expect(response.status).to.eq(201);
  });
});
