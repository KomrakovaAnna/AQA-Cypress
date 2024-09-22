/// <reference types="cypress" />

class ProfilePage {
  get userName() {
    return cy.get(".profile_name");
  }
}

export default new ProfilePage();

// cy.get("#userNavDropdown").should("include.text", " My profile ").click();
//     cy.get("div.user-nav_menu-group a.dropdown-item")
//       .next()
//       .should("have.attr", "href", "/panel/settings")
//       .click();
//     cy.wait(1000);
//     cy.get("button").contains("Remove my account").click();
//     cy.wait(1000);
//     cy.get("button.btn.btn-danger").contains("Remove").click({ force: true });
