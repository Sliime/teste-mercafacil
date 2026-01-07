import Cadastro from '../pages/cadastro'
import Loja from '../pages/loja'
import Login from '../pages/login'
import Produto from '../pages/produto'

describe('Loja', () =>{
    beforeEach(() => {
        Loja.visitarPagina();
        Cadastro.abrirPaginaCadastro();
        Login.preencherEmail();
        Login.preencherSenha();
        Login.validarUser();
    })

    it('Pesquisar produto', () => {

        Loja.pesquisarProduto();
        Produto.validarProduto();

    }
    )
})