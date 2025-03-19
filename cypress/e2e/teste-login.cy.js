describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })

  it('passes', () => {
    cy.login('luiz@example.com', 'Teste123456');
  })
})