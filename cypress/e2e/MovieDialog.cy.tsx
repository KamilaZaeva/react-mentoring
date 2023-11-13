import React from 'react';
const HOST = 'http://localhost:3000';
describe('MovieDialog component', () => {
    it('should open "Add Movie" dialog with empty form', () => {
        // Visit the URL for adding a new movie
        cy.visit(HOST + '/new');

        // Verify that the dialog title is "Add movie"
        cy.contains('Add movie').should('be.visible');

        // Enter details in the movie form
        cy.get('input[name="movieName"]').type('New Movie Title');
        cy.get('input[name="releaseYear"]').type('2022');
        cy.get('input[name="imageUrl"]').type('https://example.com/new-movie-image.jpg');
        cy.get('input[name="voteAverage"]').type('8.5');
        cy.get('select[name="genre"]').select('Comedy');
        cy.get('input[name="duration"]').type('120');
        cy.get('textarea[name="description"]').type('A hilarious new movie.');

        // Click the submit button to add the new movie
        cy.get('.submitButton').click();

        // Verify that the new movie appears in the list
        cy.contains('New Movie Title').should('be.visible');
    });

    it('should open "Edit" dialog with pre-populated movie details', () => {
        const existingMovieId = '354912';

        cy.visit(HOST + `/new/${existingMovieId}`);

        // Verify that the dialog title is "Edit movie"
        cy.contains('Edit movie').should('be.visible');

        cy.get('input[name="movieName"]').should('have.value', 'Coco');
        cy.get('input[name="releaseYear"]').should('have.value', '2017');
        cy.get('input[name="duration"]').should('have.value', '105');
    });

    it('should add a new movie and verify it appears in the list', () => {
        cy.visit(HOST + '/new');

        // Enter details in the movie form
        cy.get('input[name="movieName"]').type('New Movie Title');
        cy.get('input[name="releaseYear"]').type('2023');
        cy.get('input[name="imageUrl"]').type('https://example.com/new-movie.jpg');
        cy.get('input[name="voteAverage"]').type('7.5');
        cy.get('select[name="genre"]').select('Adventure');
        cy.get('input[name="duration"]').type('120');
        cy.get('textarea[name="description"]').type('A new adventure movie.');

        // Click the submit button to add the new movie
        cy.get('.submitButton').click(); // Assuming "Submit" button has the class "submitButton"

        // Verify that the new movie appears in the list
        cy.contains('New Movie Title').should('be.visible');
    });
});
