import Cadastro from '../pages/cadastro'
import Loja from '../pages/loja'
import Login from '../pages/login'
import Produto from '../pages/produto'
import Checkout from '../pages/checkout'

describe('Checkout', () =>{
    let userData;
    beforeEach(() => {
        cy.fixture('user').then((data) => {
            userData = data;});

        Loja.visitarPagina();

    })

    it('Realizar compra', () => {
        Cadastro.abrirPaginaCadastro();
        Login.preencherEmail(userData);
        Login.preencherSenha(userData);
        Login.validarUser();
        Loja.pesquisarProduto();
        Produto.validarProduto();
        Produto.adicionarProduto();
        Checkout.clicarCarrinho();
        Checkout.agendarEntrega();
        Checkout.pagamentoRetirada();
        Checkout.finalizarCompra();
        Checkout.validarCompra();
    }
    )
})