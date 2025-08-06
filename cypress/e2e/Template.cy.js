describe('Template Test', () => 
{
    beforeEach(() => 
    {
        cy.visit('https://the-internet.herokuapp.com/');
        cy.url().should('eq', 'https://the-internet.herokuapp.com/');
    });
    
    it('TestCase', () => 
    {
        
    });
});