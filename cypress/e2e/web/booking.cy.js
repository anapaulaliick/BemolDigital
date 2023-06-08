require('cypress-xpath')

describe('', () => {
  it('', () => {
    cy.viewport(2000, 1000)
    cy.clearCookies()
    cy.visit("https://www.booking.com/index.pt-br.html?aid=2311236;label=pt-br-booking-desktop-9_uvqir24qvA6x6xGiDvCQS652796015463:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-65526620:lp1001736:li:dec:dm;ws=&gclid=CjwKCAjw-IWkBhBTEiwA2exyO5PeFh-IK4z0w0Q2lWX-dZ7702i8AFsYh_Prcpa-nF-6DzH30hLeHhoCs_0QAvD_BwE", {failOnStatusCode: false})
    cy.get('.b8ef7618ca > .bb0b3e18ca > .fc63351294', { timeout: 10000 }).should('be.visible').click()
    cy.get('#\\:Ra9\\:').type("Manaus")
    cy.xpath('//div[@class="f9afbb0024"][text() = "Manaus"]').click()
    cy.get(':nth-child(1) > .aadb8ed6d3 > tbody > :nth-child(5) > :nth-child(6) > .b21c1c6c83').click()
    cy.get(':nth-child(2) > .aadb8ed6d3 > tbody > :nth-child(3) > :nth-child(4) > .b21c1c6c83').click()
    cy.get('.ffa9856b86 > :nth-child(4) > .fc63351294').click()
    cy.xpath('//div[@data-testid="property-card"][2]//div[@data-testid="title"]').click({force: true})
  });
});