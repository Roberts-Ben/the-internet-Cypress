/// <reference types="cypress" />

describe('Disapearing Elements', () => 
{
    beforeEach(() => 
    {
        cy.visit('https://the-internet.herokuapp.com/disappearing_elements');
        cy.url().should('eq', 'https://the-internet.herokuapp.com/disappearing_elements');
    });
    
    it('verifyDisappearingElements', () => 
    {
        let verified5Elements = false;
        let verified4Elements = false;

        function checkElements() 
        {
            if (verified4Elements && verified5Elements) 
            {
                expect(verified5Elements).to.equal(true);
                expect(verified4Elements).to.equal(true);
                return;
            }
           
            cy.get('li').then($buttons => {
                if ($buttons.length === 5)
                {
                    verified5Elements = true;
                }
                if ($buttons.length === 4)
                {
                    verified4Elements = true;
                }

                if (!verified5Elements || !verified4Elements) 
                {
                    cy.reload();
                    checkElements();
                }
            });
        }

        checkElements();
    });
});