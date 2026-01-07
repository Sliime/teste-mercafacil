class Cadastro {
    
    
    elements ={
        minhaConta:'Minha conta',
        acessarCriarConta: 'Entrar ou Criar conta',
        email: '[placeholder="e-mail, CPF ou CNPJ"]',
        cpf: '[placeholder="CPF ou CNPJ"]',
        buttonAdvance: '[id="advance-login-button"]',
        spanAdvance: 'Avançar',
        nomeCompleto: '[placeholder="Seu nome"]',
        dataNascimento: '[placeholder="dia/mês/ano"]',
        spanGenero:'Masculino',
        celularWhats:'[placeholder="(99) 9 9999-9999"]',
        cep: '[placeholder="00000-000"]',
        cidade: '[placeholder="Sua cidade"]',
        bairro: '[placeholder="Digite o seu bairro"]',
        rua: '[placeholder="Rua ou avenida"]',
        numero: '[placeholder="123"]',
        complemento: '[placeholder="Ex: Rua sem saída"]',
        residenciaTipo: 'Casa',
        confirmarEndereço: 'Confirmar endereço',
        senha: '[placeholder="Digite a sua senha"]',
        confirmeSenha: '[placeholder="Confirme a sua senha"]',
        spanAceitoRegulamentos: 'Li e aceito os regulamentos.',
        spanAceitoEmail: 'Aceito receber e-mails com comunicações.',
        spanCriarConta: 'Criar conta',
        alertTest: '[id="1"]'

    }

    abrirPaginaCadastro(){
        cy.contains('span', this.elements.minhaConta).trigger('mouseover')
        cy.contains('button', this.elements.acessarCriarConta).trigger('mouseover').click()
    }

    preencherEmail(){

        this.emailhot = this.emailCadastro();
        cy.get(this.elements.email).type(this.emailhot)
        cy.get(this.elements.buttonAdvance).click()
        
    }

    preencherCPF(){
        this.cpfRandom = this.gerarCPF();
        cy.get(this.elements.cpf).type(this.cpfRandom)
        cy.contains('span', this.elements.spanAdvance).click()
    }


    preencherDadosPessoais(userData){
        cy.get(this.elements.nomeCompleto).type(userData.name)
        cy.get(this.elements.dataNascimento).type(userData.data_nascimento)
        cy.contains('span', this.elements.spanGenero).click()
        cy.get(this.elements.celularWhats).type(userData.telefone)
        cy.contains('span', this.elements.spanAdvance).click()
    }

    preencherEndereço(userData){
        cy.get(this.elements.cep).type(userData.cep)
        cy.get(this.elements.cidade).invoke('val').should('equal', userData.cidade)
        cy.get(this.elements.bairro).invoke('val').should('equal', userData.bairro)
        cy.get(this.elements.rua).invoke('val').should('equal', userData.rua)
        cy.get(this.elements.complemento).type(userData.complemento)
        cy.contains('span', this.elements.residenciaTipo).click()
        cy.get(this.elements.numero).type(userData.numero)
        cy.contains('span', this.elements.spanAdvance).click()
        cy.contains('span', this.elements.confirmarEndereço).click()
    }

    preencherSenha(userData){
        cy.get(this.elements.senha).type(userData.senha)
        cy.get(this.elements.confirmeSenha).type(userData.senha)
        cy.contains('span', this.elements.spanAceitoRegulamentos).click()
        cy.contains('span', this.elements.spanAceitoEmail).click()
        cy.contains('span', this.elements.spanCriarConta).click()
    }

    validarCadastro(){
    cy.get(this.elements.alertTest).invoke('text').should('equal', 'Seja bem vindo, Clodoaldo Merca Facil')
    }

    emailCadastro(){
        this.email="mercafacil_"
        this.random = this.email + this.gerarStringAleatoria(3) + "@hotmail.com"
        return this.random
    }
        

    gerarStringAleatoria(tamanho) {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let resultado = '';
        for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        resultado += caracteres.charAt(indice);
    }
        return resultado;
    }

    gerarCPF() {
    const numAleatorio = () => Math.floor(Math.random() * 9);
    const r = (n) => n % 11 < 2 ? 0 : 11 - (n % 11);

    const n = Array.from({ length: 9 }, numAleatorio);
  
  // Primeiro dígito verificador
    let d1 = n.reduce((acc, curr, i) => acc + (curr * (10 - i)), 0);
    n.push(r(d1));

  // Segundo dígito verificador
     let d2 = n.reduce((acc, curr, i) => acc + (curr * (11 - i)), 0);
    n.push(r(d2));

    return n.join(''); }

}

export default new Cadastro()