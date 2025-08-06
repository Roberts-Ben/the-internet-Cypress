describe('Add Remove Elements', () => 
{
    beforeEach(() => 
    {
        cy.visit('https://the-internet.herokuapp.com/add_remove_elements/');
        cy.url().should('eq', 'https://the-internet.herokuapp.com/add_remove_elements/');
    });
    
    it('verifyAddElement', () => 
    {
        AddElement();

        cy.get("button[onclick='deleteElement()']")
        .should('be.visible');
    });

    it('verifyAddMultipleElement', () => 
    {
        const elementsToAdd = 10;

        for(let i = 0; i < elementsToAdd; i++)
        {
            AddElement();
        }
       
        cy.get("button[onclick='deleteElement()']")
        .should('have.length', elementsToAdd)
    });

    it('verifyDeleteElement', () => 
    {
        AddElement();

        cy.get("button[onclick='deleteElement()']")
        .should('have.length', 1)
        .first()
        .click()

        cy.get("button[onclick='deleteElement()']")
        .should('have.length', 0)
    });

    it('verifyDeleteAllElements', () => 
    {
        const elementsToAdd = 10;

        for(let i = 0; i < elementsToAdd; i++)
        {
            AddElement();
        }

        cy.get("button[onclick='deleteElement()']")
        .should('have.length', elementsToAdd)
        .each(($btn) => 
        {
            cy.wrap($btn).click();
        })

         cy.get("button[onclick='deleteElement()']")
            .should('have.length', 0)
    });

    it('verifyDeleteRandomElements', () => 
    {
        const elementsToAdd = 10;
        const elementsToDelete = 3;

        for(let i = 0; i < elementsToAdd; i++)
        {
            AddElement();
        }

        for (let i = 0; i < elementsToDelete; i++) 
        {
            cy.get("button[onclick='deleteElement()']")
            .then(($buttons) => 
            {
                const count = $buttons.length;
                expect(count).to.be.gte(elementsToAdd - i);

                const randomIndex = Math.floor(Math.random() * count);

                cy.wrap($buttons[randomIndex]).click();
            });
        }

        cy.get("button[onclick='deleteElement()']")
            .should('have.length', elementsToAdd - elementsToDelete)
    });

    const AddElement = () => 
    {
        cy.get("button[onclick='addElement()']").click();
    };
});