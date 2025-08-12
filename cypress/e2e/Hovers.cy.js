/// <reference types="cypress" />

describe('Hovers', () => 
{
    const baseURL = 'https://the-internet.herokuapp.com';
    let profileLinks = [];

    beforeEach(() => 
    {
        cy.visit('https://the-internet.herokuapp.com/hovers');
        cy.url().should('eq', 'https://the-internet.herokuapp.com/hovers');
    });
    
    it('verifyHover', () => {
        cy.get('.figure').each(($hoverElement) => {
            cy.wrap($hoverElement)
            .find('.figcaption')
            .should('not.be.visible')
            .invoke('show')
            .should('be.visible')
            .find('a')
            .invoke('attr', 'href')
            .then((relativeLink) => {
                profileLinks.push(`${baseURL}${relativeLink}`);
            });
        });

        cy.then(() => {
            profileLinks.forEach((link) => {
                cy.visit(link, { failOnStatusCode: false });
                cy.url().should('eq', link);
            });
        });
    });
});