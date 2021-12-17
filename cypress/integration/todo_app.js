describe("Busy user", () => {
    it("can see the title of the Todo app", () => {
        // Arrange
        // Act
        cy.visit(Cypress.env('TARGET_URL'))
        // Assert
        cy.title().should('eq', 'Todo app')
    })

    it("can create a list", () => {
        // Arrange
        cy.visit(Cypress.env('TARGET_URL'))
        // Act
        cy.contains('Create list').click()
        // Assert
        cy.contains('List').should('be.visible')
    })
})