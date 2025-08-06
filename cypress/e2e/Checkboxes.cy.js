describe('Checkboxes', () => 
{
    beforeEach(() => 
    {
        cy.visit('https://the-internet.herokuapp.com/checkboxes');
        cy.url().should('eq', 'https://the-internet.herokuapp.com/checkboxes');
    });
    
    it('verifyCheckboxes', () => 
    {
        cy.get('input').as('checkboxes');

        cy.get('@checkboxes').first().should('not.be.checked');
        cy.get('@checkboxes').last().should('be.checked');

        cy.get('@checkboxes').first().check().should('be.checked');
        cy.get('@checkboxes').last().uncheck().should('not.be.checked');
    });
});