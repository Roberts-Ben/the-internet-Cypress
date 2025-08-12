/// <reference types="cypress" />

describe('Inputs', () => 
{
    beforeEach(() => 
    {
        cy.visit('https://the-internet.herokuapp.com/inputs');
        cy.url().should('eq', 'https://the-internet.herokuapp.com/inputs');
    });
    
    it('verifyValidInput', () => 
    {
        cy.get('input[type=number]')
        .type("55")
        .should('have.value', "55");
    });

    it('verifyValidNegativeInput', () => 
    {
        cy.get('input[type=number]')
        .type("-91")
        .should('have.value', "-91");
    });

    it('verifyInvalidInput', () => 
    {
        cy.get('input[type=number]')
        .type("abc")
        .should('have.value', "");
    });
});