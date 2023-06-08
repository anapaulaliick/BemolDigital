import infoProduto from '../services/produto/payloads/add-produto.payload.json'
import loginDados from '../services/login/payloads/login.payload.json'

describe('Post', () => {
    let token
    before(() => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/login',
            body: {
                email: loginDados.email,
                password: loginDados.password
            }
        }).then((response) => {
            token = response.body.authorization
            return response.body.authorization
        }).then((log) => {
            log = cy.log('Logado com ' + loginDados.email)
        })
    });
    it('Adicionando Produtos', () => {
        cy.cadastrarProdutos(token, infoProduto.nome, infoProduto.preco, infoProduto.descricao, infoProduto.quantidade).then((response) => {
                expect(response.status).to.eq(201);
                cy.log(response.body.produtos)
        })
    });
})