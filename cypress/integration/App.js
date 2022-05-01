describe('Case 1 Test', () => {
    it('Click into Main', () => {
        cy.visit('/');
        cy.get('.digits > :nth-child(3)').click();
    });
});