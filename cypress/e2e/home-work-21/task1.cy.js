/// <reference types="cypress" />

describe("API tests for /api/auth/...", () => {
  it("Register", () => {
    cy.request({
      method: "POST",
      url: "/api/auth/signup/",
      body: {
        name: "Anna",
        lastName: "Komrakova",
        email: "komrakova.anna@gmail.com",
        password: "GmmWseR6**",
        repeatPassword: "GmmWseR6**",
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.data).to.have.property("userId");
    });
  });
  after(() => {});
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

describe("API tests for /api/cars/...", () => {
  let cookiesValue = "";
  beforeEach(() => {
    cy.request({
      method: "POST",
      url: "/api/auth/signin/",
      body: {
        email: "komrakova.anna@gmail.com",
        password: "GmmWseR6**",
        remember: false,
      },
      failOnStatusCode: false,
    }).then((response) => {
      const cookies = (response = response.headers["set-cookie"][0]);
      cookiesValue = cookies.split(";")[0];
      cy.log(JSON.stringify(cookiesValue));
    });
  });
  it("Add a car", () => {
    cy.request({
      method: "POST",
      url: "/api/cars/",
      timeout: 60000,
      failOnStatusCode: false,
      headers: {
        Cookie: cookiesValue,
      },
      body: {
        carBrandId: "1",
        carModelId: "1",
        mileage: "100",
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body.data));
      expect(response.status).to.equal(201);
      //   expect(response.body.data).to.have.property("id");
    });
  });
  after(() => {});
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

describe("API tests for /api/users/.. ", () => {
  beforeEach(() => {});
  it("Login", () => {
    cy.request({
      method: "POST",
      url: "/api/auth/signin/",
      body: {
        email: "komrakova.anna@gmail.com",
        password: "GmmWseR6**",
        remember: false,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data).to.have.property("userId");
    });
  });
  it("Delete User", () => {
    cy.request({
      method: "POST",
      url: "/api/auth/signin/",
      body: {
        email: "komrakova.anna@gmail.com",
        password: "GmmWseR6**",
        remember: false,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data).to.have.property("userId");
    });

    cy.request({
      method: "DELETE",
      url: "/api/users/",
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  after(() => {});
});
