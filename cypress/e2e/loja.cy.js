import Cadastro from '../pages/cadastro'
import Loja from '../pages/loja'
import Login from '../pages/login'
import Produto from '../pages/produto'

describe('Loja', () =>{
    let userData;
    beforeEach(() => {
        Loja.visitarPagina();
        cy.fixture('user').then((data) => {
        userData = data;
    });
    })

    it('Pesquisar produto', () => {
        Loja.pesquisarProduto();
        Produto.validarProduto();
    }
    )
})