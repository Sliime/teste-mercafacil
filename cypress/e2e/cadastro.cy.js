import Cadastro from '../pages/cadastro'
import Loja from '../pages/loja'


describe('Cadastro', () =>{
    let userData;
    beforeEach(() => {
        Loja.visitarPagina();
        cy.fixture('user').then((data) => {
        userData = data;
    });
    })

    it('Realizar cadastro de novo usuário', () => {
        Cadastro.abrirPaginaCadastro();
        Cadastro.preencherEmail();
        Cadastro.preencherCPF();
        Cadastro.preencherDadosPessoais(userData);
        Cadastro.preencherEndereço(userData);
        Cadastro.preencherSenha(userData);
        Cadastro.validarCadastro();
    }
    )
})