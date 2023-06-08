import loginDados from '../e2e/services/login/payloads/login.payload.json'

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Cypress.Commands.add('cadastroUsuario', (nome, email, senha, admin) => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/usuarios',
        body: {
            nome: nome,
            email: email,
            password: senha,
            administrador: admin
        }
    })
})

Cypress.Commands.add('token', () => {
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login',
        body: {
            email: loginDados.email,
            password: loginDados.password
        }
    }).then((response) => {
        return response.body.authorization
    }).then((log) => {
        log = cy.log('Logado com ' + loginDados.email)
    })
})

Cypress.Commands.add('cadastrarProdutos', (token, produto, preco, descricao, quantidade) => {
    cy.log(token)
    cy.request({
        url: 'https://serverest.dev/produtos',
        method: 'POST',
        headers: { authorization: token },
        body:
        {
            nome: produto,
            preco: preco,
            descricao: descricao,
            quantidade: quantidade
        }
    })
})