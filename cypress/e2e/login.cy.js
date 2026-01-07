import Cadastro from '../pages/cadastro'
import Loja from '../pages/loja'
import Login from '../pages/login'

describe('Login', () =>{
    let userData;
    beforeEach(() => {
        Loja.visitarPagina();
        cy.fixture('user').then((data) => {
        userData = data;
    });
    })

    it('Realizar Login', () => {
        Cadastro.abrirPaginaCadastro();
        Login.preencherEmail(userData);
        Login.preencherSenha(userData);
        Login.validarUser();
    }
    )
})