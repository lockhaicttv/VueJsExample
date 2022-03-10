describe("MatchDetails", () => {
  it("Test Match News Page", () => {
    cy.visit("http://localhost:8080/match/0/news");
    cy.wait(1000);
  });
  it("Test Match Line Ups Page", () => {
    cy.visit("http://localhost:8080/match/0/lineups");
    cy.wait(1000);
  });
  it("Test Match Time Line Page", () => {
    cy.visit("http://localhost:8080/match/0/timeline");
    cy.wait(1000);
  });
  it("Test Match Stats Detail Page", () => {
    cy.visit("http://localhost:8080/match/0/stats");
    cy.wait(1000);
  });
  it("should have header with tag h5", () => {
    cy.get(".mStatsHeader").find("h5").should("be.visible");
  });
  it("should have 11 elements in table and have img flag", () => {
    cy.scrollTo(0, 1000);
    cy.get(".mStatsDetail").children().should("have.length", 11);
    cy.get(".mStatsDetail").children().find("img").should("be.visible");
  });
  it("should have 5 elements and have img flag", () => {
    cy.get(".mStats").children().should("have.length", 5);
    cy.get(".mStats").children().find("img").should("be.visible");
  });
});
