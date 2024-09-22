/// <reference types="cypress" />
import HomePage from "../home-work-20/page-objects/pages/HomePage";
import ProfilePage from "../home-work-20/page-objects/pages/ProfilePage";
import SignInForm from "../home-work-20/page-objects/components/forms/SignInForm";
import GaragePage from "../home-work-20/page-objects/pages/GaragePage";

describe("Intercept test", () => {
  it("Profile - name change", () => {
    cy.intercept("GET", "/api/users/profile", {
      status: "ok",
      data: {
        userId: 140609,
        photoFilename: "default-user.png",
        name: "Polar",
        lastName: "Bear",
      },
    }).as("currentUserProfile");
    HomePage.open();
    HomePage.openSignInForm();
    SignInForm.loginWithCredentials("komrakova.anna+1@gmail.com", "GmmWseR6**");
    cy.get("h1").should("have.text", "Garage");
    GaragePage.openProfilePage();
    cy.wait("@currentUserProfile").its("response.body.data");
    ProfilePage.userName.should("have.text", "Polar Bear");
  });
});
