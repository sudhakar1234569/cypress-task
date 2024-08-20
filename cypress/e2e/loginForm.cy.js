describe("Login form", () => {

  beforeEach(() => cy.visit("/"));

  it("Should show the error message", () => {
    cy.get('[data-testid="submit-button"]').click();
    cy.contains("Email is required").should("be.visible");
    cy.contains("Password is required").should("be.visible");
  });

  it("Should show the success message",()=>{

    cy.get('[data-testid="email"]').type('test@gmail.com')
    cy.get('[data-testid="password"').type('12345')
    cy.get('[data-testid="submit-button"]').click();

    //check the success messge
    cy.contains('Successfully logged in').should('be.visible')
    cy.contains("Email is required").should("not.exist");
    cy.contains("Password is required").should("not.exist");
  })
});
