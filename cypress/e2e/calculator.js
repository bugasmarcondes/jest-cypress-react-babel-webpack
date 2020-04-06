describe('anonymous calculator', () => {
  it('can make calculations', () => {
    cy.visit('/')
      .findByText(/^1$/)
      .click()
      .findByText(/^\+$/)
      .click()
      .findByText(/^2$/)
      // .then(subject => {
      //   debugger
      //   return subject
      // })
      //.debug()
      //.pause()
      .click()
      .findByText(/^=$/)
      .click()
      .findByTestId('total')
      .should('have.text', '4')
  })
})
