/// <reference types="cypress" />

describe('Exit Intent', () => 
{
    beforeEach(() => 
    {
        cy.visit('https://the-internet.herokuapp.com/exit_intent');
        cy.url().should('eq', 'https://the-internet.herokuapp.com/exit_intent');
    });
    
    it('verifyModal', () => 
    {
        cy.get('[class=modal-footer]').should('not.be.visible');

        cy.get('body').trigger('mouseleave', { clientX: 50, clientY: 5 });

        cy.get('[class=modal-footer]')
        .should('be.visible')
        .click();

       cy.get('[class=modal-footer]').should('not.be.visible');
    });
});