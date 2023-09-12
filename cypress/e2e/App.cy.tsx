import React from 'react'

describe('App e2e', () => {
  it('Interact with components on the home page', () => {
    cy.visit('http://localhost:3000');

    cy.get('.counter').should('have.text', 'Counter: 0');
    cy.get('.increaseButton').should('have.text', 'Increase');
    cy.get('.decreaseButton').should('have.text', 'Decrease');

    cy.contains('Increase').click().click();
    cy.contains('.counter', '2');
    cy.contains('Decrease').click();
    cy.contains('.counter', '1');

    cy.contains('button', 'all').should('have.class', 'selected');
    cy.contains('button', 'crime').click();
    cy.contains('button', 'crime').should('have.class', 'selected');
  });
});