require('cypress-xpath')

describe('', () => {
  it('', () => {
    cy.visit("https://buscacepinter.correios.com.br/app/endereco/index.php", {failOnStatusCode: false})
    cy.get('#endereco').type("69005-040")
    cy.get('#btn_pesquisar').click()
    cy.screenshot('cep')
    cy.get('#btn_nbusca').click()
    cy.get('#endereco').type("Lojas Bemol")
    cy.get('#btn_pesquisar').click()
    cy.get('tbody > tr > [data-th="Logradouro/Nome"]').should('be.visible')
    cy.screenshot('lojasBemol')
  });
});