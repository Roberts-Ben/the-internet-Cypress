/// <reference types="cypress" />

describe('Basic Auth', () =>
{
  const baseURL = 'the-internet.herokuapp.com/basic_auth';
  const username = 'admin';
  const password = 'admin';

  it('verifyAuthSuccessViaDirectURL', () =>
  {
    const authURL = `https://${username}:${password}@${baseURL}`;
    cy.visit(authURL);

    cy.get('p').contains('Congratulations! You must have the proper credentials.');
  });

  it('verifyAuthSuccessViaAuth', () =>
  {
    cy.visit(`https://${baseURL}`, {
      auth: {
        username,
        password,
      }
    });

    cy.get('p').contains('Congratulations! You must have the proper credentials.');
  });

  it('verifyAuthSuccessViaHeader', function () 
  {
		cy.visit(`https://${baseURL}`, {
			headers: {
				authorization: 'Basic YWRtaW46YWRtaW4=',
			}
		});

    cy.get('p').contains('Congratulations! You must have the proper credentials.');
	})

  it('verifyNoAuth', () =>
  {
    cy.request({
      url: `https://${baseURL}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(401);
    });
  }); 

  it('verifyInvalidAuth', () =>
  {
    cy.request({
      url: `https://${baseURL}`,
      auth: {
      username: 'wronguser',
      password: 'wrongpass',
    },
    failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(401);
    })
  })
})