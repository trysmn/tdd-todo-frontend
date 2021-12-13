describe("Busy user", () => {
    it("should be able to see the title of the Todo app", () => {
        // Arrange
        // Act
        cy.visit(Cypress.env('TARGET_URL'))
        // Assert
        cy.title().should('eq', 'Todo app')
    })
})