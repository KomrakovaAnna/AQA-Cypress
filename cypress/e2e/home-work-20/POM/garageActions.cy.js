/// <reference types="cypress" />
import HomePage from "../page-objects/pages/HomePage";
import SignInForm from "../page-objects/components/forms/SignInForm";
import AddCarForm from "../page-objects/components/forms/AddCarForm";
import AddExpenseForm from "../page-objects/components/forms/AddExpenseForm";
import EditCarForm from "../page-objects/components/forms/EditCarForm";
import GaragePage from "../page-objects/pages/GaragePage";

describe("Add car form", () => {
  beforeEach(() => {
    HomePage.open();
    HomePage.openSignInForm();
    SignInForm.loginWithCredentials("komrakova.anna@gmail.com", "GmmWseR6**");
    GaragePage.openAddCarModal();
  });
  it("Successful adding car", () => {
    AddCarForm.addCar("Audi", "A6", "10000");
  });

  after(() => {
    cy.wait(500);
    cy.get(".car-item").each((item) => {
      cy.wrap(item).find(".icon-edit").click();
      cy.get(".btn-outline-danger").click();
      cy.get(".btn-danger").click();
    });
  });
});

describe("Add expenses form", () => {
  beforeEach(() => {
    HomePage.open();
    HomePage.openSignInForm();
    SignInForm.loginWithCredentials("komrakova.anna@gmail.com", "GmmWseR6**");
  });
  it("Successful adding expenses", () => {
    GaragePage.openAddCarModal();
    AddCarForm.addCar("Audi", "A6", "1000");
    GaragePage.openAddFuelExpenseModal();
    AddExpenseForm.addAnExpenseForCar("Audi A6", "1120", "20", "800");
  });
});
