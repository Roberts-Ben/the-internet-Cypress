describe('Broken Images', () => 
{
    beforeEach(() => 
    {
        cy.visit('https://the-internet.herokuapp.com/broken_images');
        cy.url().should('eq', 'https://the-internet.herokuapp.com/broken_images');
    });
    
    it('verifyImages', () => 
    {
        cy.get('img[src]').each(($img) => {
            const imgURL = $img.prop('src');

            if(imgURL)
            {
                cy.request({
                    url: imgURL,
                    failOnStatusCode: false,
                }).then((response) => 
                {
                    if(response.status == 200)
                    {
                        expect(response.status).to.eq(200);
                    }
                    else if(response.status == 404)
                    {
                        expect(response.status).to.eq(404);
                    }
                })
            }
        })
    });
});