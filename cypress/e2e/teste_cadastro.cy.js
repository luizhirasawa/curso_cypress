describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })

  it('passes', () => {
    cy.get('[data-test="input-name"]').type('Luiz');
    cy.get('[data-test="input-email"]').type('luiz@example.com');
    cy.get('[data-test="input-password"]').type('Teste123456');
    cy.get('[data-test="input-confirm-password"]').type('Teste123456');
    cy.get('[data-test="submit-button"]').click();
  })
})