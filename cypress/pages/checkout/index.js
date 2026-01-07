class Checkout {
    
    
    elements ={
        carrinho: '[data-icon="cart-shopping"]',
        avançar: 'Avançar',
        agendarDiaUtil: '[class="container-wrapper"]',
        avançarElement: '#container > div > div.sc-3261dc77-0.cKvumf > div > div.sc-3261dc77-3.jXOBLS > div > div:nth-child(2) > div > div > div > div > button > span',
        nomePessoa: '[data-icon="pen-to-square"]',
        retirada: 'Pagar na retirada',
        alelo: 'Alelo',
        finalizar: 'Finalizar compra',
        validacaoPedido: 'AGUARDANDO SEPARAÇÃO',
        save: 'Salvar',
        divButton:'//*[@id="headlessui-disclosure-button-:r2h:"]',
        entregaRetirada: 'Retirada'
    }

    clicarCarrinho(){
        cy.get(this.elements.carrinho).click()
    }

    agendarEntrega(){
        cy.contains('span', this.elements.avançar).click()
        cy.get(this.elements.nomePessoa).first().click({force: true})
        cy.contains('span', this.elements.save).click()
        cy.get('button > span').eq(2).click({force: true});
        cy.contains('Avançar').should('not.be.disabled').click({force: true})
    }

    pagamentoRetirada(){
        cy.contains('span', this.elements.retirada).click()
        cy.contains('span', this.elements.alelo).click()
    }

    finalizarCompra(){
        cy.contains('span', this.elements.finalizar).click()
    }

    validarCompra(){
        cy.contains('span', this.elements.validacaoPedido).should('be.visible')
    }

}

export default new Checkout()