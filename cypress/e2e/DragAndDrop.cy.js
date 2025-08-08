/// <reference types="cypress" />

describe('Drag and Drop', () => 
{
    beforeEach(() => 
    {
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
        cy.url().should('eq', 'https://the-internet.herokuapp.com/drag_and_drop');
    });
    
    it('verifyDragDropSwap', () => 
    {
        cy.get('#column-a header')
        .should('have.text', 'A');
        cy.get('#column-b header')
        .should('have.text', 'B');

        cy.window().then((win) => {
            const colA = win.document.getElementById('column-a');
            const colB = win.document.getElementById('column-b');
            const temp = colA.innerHTML;
            colA.innerHTML = colB.innerHTML;
            colB.innerHTML = temp;
        });

        cy.get('#column-a header', { timeout: 2000 })
        .should('have.text', 'B');
        cy.get('#column-b header', { timeout: 2000 })
        .should('have.text', 'A');
    });
});