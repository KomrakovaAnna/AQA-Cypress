Cypress.Commands.add("login", (username, password) => {
  cy.get("button.header_signin").click();
  cy.get("h4").should("include.text", "Log in");
  cy.get("#signinEmail").type(username);
  cy.get("#signinPassword").type(password, { sensitive: true });
  cy.get("button").contains("Login").click();
});
Cypress.Commands.overwrite(
  "type",
  (originalFn, element, text, options = {}) => {
    if (options.sensitive) {
      options.log = false;

      Cypress.log({
        $el: element,
        name: "type",
        message: "*".repeat(text.length),
      });
    }
    return originalFn(element, text, options);
  }
);
