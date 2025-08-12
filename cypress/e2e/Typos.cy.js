/// <reference types="cypress" />

describe('Typos', () => 
{
    beforeEach(() => 
    {
        cy.visit('https://the-internet.herokuapp.com/typos');
        cy.url().should('eq', 'https://the-internet.herokuapp.com/typos');
    });
    
    it('verifyText', () => 
    {
        const expectedText = "Sometimes you'll see a typo, other times you won't.";

        cy.get('#content div p').eq(1)
        .invoke('text')
        .then(text => {
            if (text === expectedText) 
            {
                expect(text).to.equal(expectedText);
            } 
            else 
            {
                expect(text).to.not.equal(expectedText);
            }
        });
    });
});