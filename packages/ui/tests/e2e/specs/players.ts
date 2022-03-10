describe("PlayersPage", () => {
  it("should have image with class rounded-circle", () => {
    cy.visit("http://localhost:8080");
    cy.get("#players").click();
    cy.get("img").should("have.class", "rounded-circle");
  });
  it("should have 14 players' cards", () => {
    cy.scrollTo(0, 1000);
    cy.get(".list").children().should("have.length", 14);
  });
  it("should return to http://localhost:8080/", () => {
    cy.wait(1000);
    cy.go("back");
    cy.url().should("eq", "http://localhost:8080/");
  });
});
