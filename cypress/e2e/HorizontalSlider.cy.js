/// <reference types="cypress" />

describe('Horizontal Slider', () => 
{
    beforeEach(() => 
    {
        cy.visit('https://the-internet.herokuapp.com/horizontal_slider');
        cy.url().should('eq', 'https://the-internet.herokuapp.com/horizontal_slider');
    });
    
    it('verifySliderClickandDrag', () => 
    {
        cy.get('#range').should('have.text', '0');

        cy.get('input[type=range]')
        .invoke('val', 1)
        .trigger('change');

        cy.get('#range').should('have.text', '1');
    });
});