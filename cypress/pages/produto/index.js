class Produto {
    
    
    elements ={
        produtoCerveja: '//*[@id="container"]/div/div/div[1]/div[2]/div[2]/span[1]'
    }

    validarProduto(){
        cy.contains('span', "CERVEJA CARACU").should('exist')
    }

    adicionarProduto(){
        cy.contains('button', "Adicionar").click()
    }

    

}

export default new Produto()