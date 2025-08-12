/// <reference types="cypress" />

describe('Infinite Scrolling', () => 
{
    beforeEach(() => 
    {
        cy.visit('https://the-internet.herokuapp.com/infinite_scroll');
        cy.url().should('eq', 'https://the-internet.herokuapp.com/infinite_scroll');
    });
    
    it('verifyInfiniteScroll', () => 
    {
        let numberOfTimesToScroll = 5;
        let scrollPauseTime = 100; // ms

        cy.document().then((doc) => {
            let previousHeight = doc.body.scrollHeight;

            for(let i = 0; i < numberOfTimesToScroll; i++)
            {
                cy.scrollTo('bottom');

                cy.wait(scrollPauseTime);

                cy.document().then((doc2) => {
                    const newHeight = doc2.body.scrollHeight;
                    expect(newHeight).to.be.greaterThan(previousHeight);
                    previousHeight = newHeight;
                });
            }
        });
    });
});