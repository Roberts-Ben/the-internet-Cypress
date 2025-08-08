/// <reference types="cypress" />

describe('Challenging DOM', () => 
{
    beforeEach(() => 
    {
        cy.visit('https://the-internet.herokuapp.com/challenging_dom');
        cy.url().should('eq', 'https://the-internet.herokuapp.com/challenging_dom');
    });
    
    it('verifyButton', () => 
    {
        cy.get("a.button")
        .first()
        .should('be.visible')
        .click();
    });

    it('verifyAlertButton', () => 
    {
        cy.get("a.button.alert")
        .should('be.visible')
        .click();
    });

    it('verifySuccessButton', () => 
    {
        cy.get("a.button.success")
        .should('be.visible')
        .click();
    });

    it('verifyTable', () => 
    {
        const tableSize = 10;
 
        cy.url().then(baseURL => {
            cy.contains('th', 'Lorem')
            .should('be.visible');

            cy.contains('a', 'edit')
            .first()
            .click();

            cy.url().should('eq', baseURL + '#edit');

            cy.contains('a', 'delete')
            .first()
            .click();

            cy.url().should('eq', baseURL + '#delete');

            cy.get('td')
            .filter((index, e) => e.innerText.includes('Iuvaret'))
            .each(($e, index) => {
                cy.wrap($e).should('have.text', `Iuvaret${index}`);
            });
        });
    });

    it('verifyCanvas', () => 
    {
        cy.get('canvas')
        .should('be.visible');
    });
});