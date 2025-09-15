export function addElement() 
{
    cy.get("button[onclick='addElement()']").click();
}

export function deleteElement(index) 
{
    getDeleteButtons().eq(index).click();
}

export function getDeleteButtons() 
{
    return cy.get("button[onclick='deleteElement()']");
}