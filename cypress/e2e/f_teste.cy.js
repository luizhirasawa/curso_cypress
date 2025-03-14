describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('[name="nome"]').type('Luiz');
    cy.get('[name="email"]').type('luiz@example.com');
    cy.get('[name="password"]').type('Teste123456');
    cy.get('[name="confirm_password"]').type('Teste123456');
    cy.contains('button', 'Cadastrar').click();
  })
})