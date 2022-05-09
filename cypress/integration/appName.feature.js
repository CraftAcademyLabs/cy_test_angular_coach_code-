describe('app name', () => {
  it('is expected to be displayed', () => {
    cy.visit('http://localhost:4200');
    cy.get('[data-cy=hello-msg]').should('contain', 'hello works!');
  });
});