describe("StatsPage", () => {
  it("Test Stats Page", () => {
    cy.visit("http://localhost:8080");
    cy.get("#stats").click();
  });
  it("should have 14 stat item in tbody and have href", () => {
    cy.scrollTo(0, 1000);
    cy.get(".stats").children().should("have.length", 14);
    cy.get(".stats").location("href");
  });
  it("should have 3 item in stats table thead", () => {
    cy.get(".sTableHeader").children().should("have.length", 3);
    cy.get(".sTableHeader").contains("Player");
    cy.get(".sTableHeader").contains("Goals");
  });
  it("should have Goals content in SHeading", () => {
    cy.get(".SHeading").contains("Goals");
  });
  it("should have Goals content", () => {
    cy.get(".stats")
      .children()
      .should("have.length", 14)
      .each(($a) => {
        cy.wrap($a).location("href");
      });
  });
});
