/// <reference types="cypress" />

// describe("API tests for /api/auth/...", () => {
//   it("1 - Register", () => {
//     cy.request({
//       method: "POST",
//       url: "/api/auth/signup/",
//       body: {
//         name: "Anna",
//         lastName: "Komrakova",
//         email: "komrakova.anna@gmail.com",
//         password: "GmmWseR6**",
//         repeatPassword: "GmmWseR6**",
//       },
//     }).then((response) => {
//       expect(response.status).to.equal(201);
//       expect(response.body.data).to.have.property("userId");
//     });
//   });
// });

// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// describe("API tests for /api/cars/...", () => {
//   let cookiesValue = "";
//   beforeEach(() => {
//     cy.request({
//       method: "POST",
//       url: "/api/auth/signin/",
//       body: {
//         email: "komrakova.anna@gmail.com",
//         password: "GmmWseR6**",
//         remember: false,
//       },
//       failOnStatusCode: false,
//     }).then((response) => {
//       const cookies = (response = response.headers["set-cookie"][0]);
//       cookiesValue = cookies.split(";")[0];
//       cy.log(JSON.stringify(cookiesValue));
//     });
//   });
//   it("2 - Add a car", () => {
//     cy.request({
//       method: "POST",
//       url: "/api/cars/",
//       failOnStatusCode: false,
//       headers: {
//         Cookie: cookiesValue,
//       },
//       body: {
//         carBrandId: 1,
//         carModelId: 1,
//         mileage: 100,
//       },
//     }).then((response) => {
//       cy.log(JSON.stringify(response.body.data));
//       expect(response.status).to.equal(201);
//       //   expect(response.body.data).to.have.property("id");
//     });
//   });
//   let carId = "";
//   it("3 - Check added car", () => {
//     cy.request({
//       method: "GET",
//       url: "/api/cars/",
//       failOnStatusCode: false,
//       headers: {
//         Cookie: cookiesValue,
//       },
//     }).then((response) => {
//       cy.log(JSON.stringify(response.data));
//       expect(response.status).to.eq(200);

//       expect(response.body.data[0]).to.have.property("brand").eq("Audi");
//       carId = response.body.data[0].id;
//       cy.log(JSON.stringify(carId));
//     });
//   });

//   it("4 - Delete a car", () => {
//     cy.request({
//       method: "DELETE",
//       url: "/api/cars/" + JSON.stringify(carId),
//       failOnStatusCode: false,
//       headers: {
//         Cookie: cookiesValue,
//       },
//     }).then((response) => {
//       expect(response.status).to.eq(200);
//     });
//   });
// });

// // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// describe("API tests for /api/users/.. ", () => {
//   beforeEach(() => {});
//   it("5 - Login", () => {
//     cy.request({
//       method: "POST",
//       url: "/api/auth/signin/",
//       body: {
//         email: "komrakova.anna@gmail.com",
//         password: "GmmWseR6**",
//         remember: false,
//       },
//     }).then((response) => {
//       expect(response.status).to.equal(200);
//       expect(response.body.data).to.have.property("userId");
//     });
//   });
//   it("6 - Delete User", () => {
//     cy.request({
//       method: "POST",
//       url: "/api/auth/signin/",
//       body: {
//         email: "komrakova.anna@gmail.com",
//         password: "GmmWseR6**",
//         remember: false,
//       },
//     }).then((response) => {
//       expect(response.status).to.equal(200);
//       expect(response.body.data).to.have.property("userId");
//     });

//     cy.request({
//       method: "DELETE",
//       url: "/api/users/",
//     }).then((response) => {
//       expect(response.status).to.equal(200);
//     });
//   });

//   after(() => {});
// });
