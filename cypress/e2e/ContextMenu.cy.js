describe('Context Menu', () => 
{
    beforeEach(() => 
    {
        cy.visit('https://the-internet.herokuapp.com/context_menu');
        cy.url().should('eq', 'https://the-internet.herokuapp.com/context_menu');
    });
    
    it('verifyContextMenuAppears', () => 
    {
        cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('You selected a context menu');
        });

        cy.get('#hot-spot').rightclick();
    });
});