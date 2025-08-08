/// <reference types="cypress" />

describe('Dropdown', () => 
{
    beforeEach(() => 
    {
        cy.visit('https://the-internet.herokuapp.com/dropdown');
        cy.url().should('eq', 'https://the-internet.herokuapp.com/dropdown');
    });
    
    it('verifyDropdown', () => 
    {
        cy.get('select option:selected')
        .invoke("text")
        .should('eq', 'Please select an option');

        cy.get('select').select(1);

        cy.get('select option:selected')
        .invoke("text")
        .should('eq', 'Option 1');
    });
});