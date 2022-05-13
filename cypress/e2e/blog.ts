// To get rid of the syntax error
export {};

describe('blog', () => {
  it('should navigate to the single post page', () => {
    cy.visit('/');
    cy.get('li:first-child a img')
      .click()
      .url()
      .should('contain', `${Cypress.config().baseUrl}/posts/`);
  });

  it('should submit comment form successfully', () => {
    cy.visit('/');
    cy.findByText(/Contact/i)
      .click()
      .url()
      .should('contain', `${Cypress.config().baseUrl}/contact`);
    cy.findByLabelText(/Your Email/i).type('dummy-email@gmail.com');
    cy.findByLabelText(/Your Name/i).type('dummy-name');
    cy.findByLabelText(/Your Message/i).type('dummy-message');
    cy.findByText(/Send Message/i).click();
    cy.findByText(/Successfully/i);
  });
});
