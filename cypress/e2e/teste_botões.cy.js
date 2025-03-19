describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
  })

  it('passes', () => {
    cy.contains('a', 'Ver pets').click();
    cy.get('a[aria-label="Tela inicial"]').click();
    cy.get('a[aria-label="Ir para Mensagens"]').click();
    cy.get('[name="email"]').type('luiz@example.com');
    cy.get('[name="password"]').type('Teste123456');
    cy.contains('button', 'Entrar').click();
    cy.get('.card__contact').first().click();
    //cy.contains('a', 'Cadastrar').click();
  })
})