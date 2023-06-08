require('cypress-xpath')

describe('', () => {
  it('', () => {
    cy.viewport(2000, 1000)
    cy.clearCookies()
    cy.visit("https://www.trivago.com.br/", {failOnStatusCode: false})
    cy.get('.not-found__button').click()
    cy.get('[data-testid="search-form-destination"]').click().type("natal{enter}", { force: true })
    cy.get(':nth-child(1) > [data-testid="ssg-element"] > .h-14').click()
    // cy.get('[data-testid="search-suggestions"] >').should('not.exist')
    // cy.wait(1000)
    // cy.get('[data-testid="valid-calendar-day-2023-06-24"] > .flex').click()
    cy.wait(1000)
    cy.get('[data-testid="search-button"]').click()
    cy.wait(1000)
    cy.get('[data-testid="search-button"]').click()
    // document.getElementById('sec-overlay').remove()
  });
});