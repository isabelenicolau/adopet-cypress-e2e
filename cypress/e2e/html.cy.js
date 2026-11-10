describe('Testes na Página principal', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
    })

    it('Deve testar se o texto “adoPet” está presente no html', () => {
    
        cy.get('.initial > img').should('be.visible');
    })

    it('Deve testar se o texto “Quem ama adota!” está presente no html', () => {
    
        cy.contains('p', 'Quem ama adota!').should('be.visible');
    })

    it('Deve testar se o texto “Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!” está presente no html', () => {
    
        cy.contains('p', 'Quem ama adota!').should('be.visible');
})
})