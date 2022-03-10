describe("Connect to Matches", () => {
  it("check match item", () => {
    cy.visit("http://localhost:8080/matches");
    cy.get(".round_title").contains("QUARTER_FINAL");
    cy.get(".round_title").contains("SEMI_FINAL");
    cy.get(".round_title").contains("FINAL");
    cy.get(".matchs_container").children().should("have.length", 7);
  });
});

describe("Connect to Home", () => {
  it("check match item", () => {
    cy.visit("http://localhost:8080/");
    cy.get(".round_title").contains("QUARTER_FINAL");
    cy.get(".round_title").contains("SEMI_FINAL");
    cy.get(".round_title").contains("FINAL");
    cy.get(".matchs_container").children().should("have.length", 7);
  });
});
