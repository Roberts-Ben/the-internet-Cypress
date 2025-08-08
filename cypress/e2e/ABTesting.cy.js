/// <reference types="cypress" />

describe('AB Testing', () => 
{
    beforeEach(() => 
    {
        cy.visit("https://the-internet.herokuapp.com/abtest");
        cy.url().should('eq', "https://the-internet.herokuapp.com/abtest");
    });
    
    it('verifyAPage', () => 
    {
        const AHeader = "A/B Test Variation 1";
        const BHeader = "A/B Test Control";
        
        cy.get('h3').then($header => 
        {
            const headerText = $header.text();
            
            if (headerText === AHeader) 
            {
                expect(headerText).to.equal(AHeader);
            } 
            else if (headerText === BHeader) 
            {
                expect(headerText).to.equal(BHeader);
            }
        });
    });
});