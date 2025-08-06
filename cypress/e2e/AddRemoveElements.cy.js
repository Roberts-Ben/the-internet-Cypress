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

        cy.get("button[onclick='deleteElement()']").should('be.visible');
    });

    const AddElement = () => 
    {
        cy.get("button[onclick='addElement()']").click();
    };
});