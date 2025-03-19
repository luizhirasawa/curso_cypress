describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })

  it('passes', () => {
    cy.get('[name="email"]').type('luiz2@example.com');
    cy.get('[name="password"]').type('Teste223456');
    cy.get('[data-test="submit-button"]').click();

    cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
  })
})