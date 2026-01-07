class Login {
    
    
    elements ={
        email: '[placeholder="e-mail, CPF ou CNPJ"]',
        senha: '[placeholder="Digite a sua senha"]',
        buttonAdvance: '[id="advance-login-button"]',
        buttonSpan: 'Entrar',
        userPagina: 'Olá, Guilherme'
    }


    preencherEmail(userData){
        cy.get(this.elements.email).type(userData.email)
        cy.get(this.elements.buttonAdvance).click()        
    }

    preencherSenha(userData){
       cy.get(this.elements.senha).type(userData.senha) 
       cy.contains('span', this.elements.buttonSpan).click()
    }

    validarUser(){
        cy.contains('span', this.elements.userPagina).should('exist')
    }

}




export default new Login()