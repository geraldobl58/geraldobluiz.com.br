/// <reference path="../support/index.d.ts" />

describe('Cypress TS', () => {
  it('should go to go Geraldo Luiz', () => {
    cy.google()
  })

  it('should links', () => {
    cy.visit('https://www.geraldobluiz.com.br')

    cy.findByText(/Sou um desenvolvedor/).should('exist')
  })
})
