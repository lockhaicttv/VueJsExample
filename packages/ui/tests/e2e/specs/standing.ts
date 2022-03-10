describe("Standing Page", () => {
  it("Should have group A on standing page", () => {
    cy.visit("http://localhost:8080/standing");
    cy.contains(".group-title", "Group A");
    cy.contains(".group-title", "Group B");
    cy.contains(".group-title", "Group C");
    cy.contains(".group-title", "Group D");
    cy.get(".group").should("have.length", 6);
    cy.get(".team").should("have.length", 24);
  });
});
