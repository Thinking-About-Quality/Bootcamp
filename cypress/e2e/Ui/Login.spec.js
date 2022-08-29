/// <reference types="cypress" />

describe('US0001 - Funcionalidade Login', () => {
    context('Given estou logado na pagina', () => {
        
    });
    beforeEach(() => {
        cy.visit('login');
    });
    it('Deve fazer login com sucesso', () => {
      
        cy.login('QARS@exemplo.com', '123456')
       cy.get('[data-test="dashboard-welcome"]').should('contain','Bem-vindo')
    });
});

