class Loja {
    
    
    elements ={
        barraPesquisar:'#header-middle > div.sc-b22f42d7-1.dnzJAo > div.search-larger-than-768 > div > div > div > input',
        produtoCerveja: 'CERVEJA CARACU'
    }

    visitarPagina(){
        cy.visit('https://multilojas.mercafacil.com/loja-10')
    }

    pesquisarProduto(){
        cy.get(this.elements.barraPesquisar).trigger('mouseover').click()
        cy.get(this.elements.barraPesquisar).type('Cerveja')
        cy.contains('span', this.elements.produtoCerveja).click()
    }


}

export default new Loja()