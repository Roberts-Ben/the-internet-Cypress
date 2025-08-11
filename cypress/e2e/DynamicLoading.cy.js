/// <reference types="cypress" />

describe('Dynamic Loading', () => 
{
    beforeEach(() => 
    {
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading');
        cy.url().should('eq', 'https://the-internet.herokuapp.com/dynamic_loading');
    });
    
    it('verifyHiddenElement', () => 
    {
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');

        cy.get('#finish').should('not.be.visible');

        cy.get('button').click();

        cy.get('#finish', {timeout:10_000}).should('be.visible');
    });

    it('verifyElementExistsAfterLoad', () => 
    {
        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/2');

        cy.get('#finish').should('have.length', 0);

        cy.get('button').click();

        cy.get('#finish', {timeout:10_000}).should('be.visible');
    });
});