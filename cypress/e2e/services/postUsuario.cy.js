
describe('Post', () => {
    it('Cadastro Usuario', () => {
        cy.cadastroUsuario("Ana Paula Liick", "aninha.liick@testando.com", "testeliick", "true")
            .then((response) => {
                cy.log(response.body)
                expect(response.status).to.eq(201)
                expect(response.body.message).to.eql("Cadastro realizado com sucesso")
            })
    });
})