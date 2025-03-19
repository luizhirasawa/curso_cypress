describe('template spec', () => {
beforeEach(() => {
  cy.visit('https://adopet-frontend-cypress.vercel.app/');
})

  it('test title', () => {
    cy.get('.header__logo').contains('AdoPet').should('be.visible');
  })

  it('test paragraph', () => {
    cy.contains('Quem ama adota!').should('be.visible');
  })

  it('test paragraph 2', () => {
    cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
  })
})