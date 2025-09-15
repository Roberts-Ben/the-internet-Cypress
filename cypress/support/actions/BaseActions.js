// Navigation
export function visit(url) 
{
    cy.visit(url);
}

export function getCurrentURL() 
{
    return cy.url();
}

export function refreshPage() 
{
    cy.reload();
}

// Alerts
export function onAlert(callback) 
{
    cy.on("window:alert", callback);
}

export function onConfirm(callback) 
{
    cy.on("window:confirm", callback);
}

export function onPrompt(response) 
{
    cy.window().then((win) => {
        cy.stub(win, "prompt").returns(response);
    });
}

// Get text
export function getText(selector) 
{
    return cy.get(selector).invoke("text");
}

// Status code
export function getStatusCode(url) 
{
    return cy.request(url).its("status");
}

// Wait
export function delay(ms) 
{
    cy.wait(ms);
}