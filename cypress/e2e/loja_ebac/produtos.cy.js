///<reference types="cypress"/>

import produtosPage from "../../support/page-objects/produtos.page";


describe('Funcionalidade: Produtos', () => {

    beforeEach (() => {
       cy.visit('produtos')

    });


       it('Deve selecionar um produto da lista', () => {
            cy.get('.products > .row')
                //.first()
                //.last()
                //.eq(2)
                .contains('Apollo Running Short')
                .click()

                cy.get('#tab-title-description > a').should('contain' , 'Descrição')                        


 
   });


});   