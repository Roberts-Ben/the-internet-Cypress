/// <reference types="cypress" />

describe('Status Codes', () => 
{
    beforeEach(() => 
    {
        cy.visit('https://the-internet.herokuapp.com/status_codes');
        cy.url().should('eq', 'https://the-internet.herokuapp.com/status_codes');
    });
    
    it('verifyCode200', () => 
    {
        cy.get('a[href="status_codes/200"]').then($link => {
        const code200Link = $link.prop('href');
        cy.request({
            url: code200Link,
            failOnStatusCode: false,
            }).then(response => {
                expect(response.status).to.eq(200);
            });
        });
    });

    it('verifyCode301', () => 
    {
        cy.get('a[href="status_codes/301"]').then($link => {
        const code301Link = $link.prop('href');
        cy.request({
            url: code301Link,
            failOnStatusCode: false,
            }).then(response => {
                expect(response.status).to.eq(301);
            });
        });
    });

    it('verifyCode404', () => 
    {
        cy.get('a[href="status_codes/404"]').then($link => {
        const code404Link = $link.prop('href');
        cy.request({
            url: code404Link,
            failOnStatusCode: false,
            }).then(response => {
                expect(response.status).to.eq(404);
            });
        });
    });

    it('verifyCode500', () => 
    {
        cy.get('a[href="status_codes/500"]').then($link => {
        const code500Link = $link.prop('href');
        cy.request({
            url: code500Link,
            failOnStatusCode: false,
            }).then(response => {
                expect(response.status).to.eq(500);
            });
        });
    });
});