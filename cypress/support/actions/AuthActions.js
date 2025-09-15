export function visitWithDirectURL(username, password) 
{
  const authURL = `https://${username}:${password}@${baseURL}`;
  cy.visit(authURL);
}

export function visitWithAuth(username, password) 
{
  cy.visit(`https://${baseURL}`, {
    auth: { username, password },
  });
}

export function visitWithHeader(authHeader) 
{
  cy.visit(`https://${baseURL}`, {
    headers: {
      authorization: authHeader,
    },
  });
}

export function requestNoAuth() 
{
  return cy.request({
    url: `https://${baseURL}`,
    failOnStatusCode: false,
  });
}

export function requestInvalidAuth(username, password) 
{
  return cy.request({
    url: `https://${baseURL}`,
    auth: { username, password },
    failOnStatusCode: false,
  });
}

export function getSuccessMessage()
{

}