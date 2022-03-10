describe("NewsPage", () => {
  it("should have 6 news-card class and h5 with the text 'Trường hợp Bồ Đào Nha bị loại khỏi Euro 2020'", () => {
    cy.visit("http://localhost:8080");
    cy.get("#news").click();
    cy.url().should("eq", "http://localhost:8080/news");
    cy.contains("h5", "Trường hợp Bồ Đào Nha bị loại khỏi Euro 2020");
    cy.get(".news-card").should("have.length", 6);
    cy.scrollTo(0, 800);
    cy.wait(1000);
    cy.scrollTo(0, 0);
    cy.wait(1000);
  });
});
