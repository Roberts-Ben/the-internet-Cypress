/// <reference types="cypress" />

import { visit, getCurrentURL } from "../support/actions/BaseActions";
import {addElement, getDeleteButtons } from "../support/actions/AddRemoveElementsActions";

describe('Add Remove Elements', () => {
    const URL = "https://the-internet.herokuapp.com/add_remove_elements/";

    beforeEach(() => {
        visit(URL);
        getCurrentURL().should("eq", URL);
    });
    
    it('verifyAddElement', () => {
        addElement();

        getDeleteButtons().first().should('be.visible');
    });

    it('verifyAddMultipleElement', () => {
        const elementsToAdd = 10;

        for(let i = 0; i < elementsToAdd; i++)
        {
            addElement();
        }
       
        getDeleteButtons().should('have.length', elementsToAdd)
    });

    it('verifyDeleteElement', () => {
        addElement();

        getDeleteButtons().should('have.length', 1)
        
        getDeleteButtons().first()
        .click()

        getDeleteButtons().should('have.length', 0)
    });

    it('verifyDeleteAllElements', () => {
        const elementsToAdd = 10;

        for(let i = 0; i < elementsToAdd; i++)
        {
            addElement();
        }

        getDeleteButtons().should('have.length', elementsToAdd)
        
        getDeleteButtons().each(($btn) => {
            cy.wrap($btn).click();
        })

        getDeleteButtons().should('have.length', 0)
    });

    it('verifyDeleteRandomElements', () => {
        const elementsToAdd = 10;
        const elementsToDelete = 3;

        for(let i = 0; i < elementsToAdd; i++)
        {
            addElement();
        }

        for (let i = 0; i < elementsToDelete; i++) 
        {
            getDeleteButtons().then(($buttons) => {
                const count = $buttons.length;
                expect(count).to.be.gte(elementsToAdd - i);

                const randomIndex = Math.floor(Math.random() * count);

                cy.wrap($buttons[randomIndex]).click();
            });
        }

        getDeleteButtons().should('have.length', elementsToAdd - elementsToDelete)
    });
});