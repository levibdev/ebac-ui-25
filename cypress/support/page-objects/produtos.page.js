class ProdutosPage {

   visitarUrl() {
     cy.visit('produtos')

   }

   buscarProduto() {
      //codigo

   }


   buscarProdutolista(nomeProduto) {
    cy.get('.products > .row')
    .contains(nomeProduto)
    .click()


   }

   visitarProduto () {



   }

      

   addProdutoaoCarrinho() {



   }


}

export default new ProdutosPage()