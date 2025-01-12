import React from 'react';

describe('Movie List Page e2e', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });

    it('loads correctly', () => {
        cy.get('.headerTitle').should('contain', 'FIND YOUR MOVIE');
        cy.get('.moviesList').should('exist');
    });

    it('displays movie details when a movie is clicked', () => {
        cy.get('.movieTile').first().click();
        cy.get('.exitButton').should('exist');
        cy.get('.movieDetails').should('exist');
    });

    it('allows searching for movies', () => {
        const searchTerm = 'Avengers';
        cy.get('#searchInput').type(searchTerm);
        cy.get('.searchButton').click();
        cy.get('.movieTile').each(($movieTile) => {
            cy.wrap($movieTile).should('contain', searchTerm);
        });
    });

    it('allows filtering movies by genre', () => {
        const selectedGenre = 'comedy';
        cy.get('.genreItem').contains(selectedGenre).click();
        cy.get('.movieTile .movieGenres').each(($genres) => {
            expect($genres.text().toLowerCase()).to.contain(selectedGenre);
        });
    });

    it('should navigate to movie detail page on tile click', () => {
        cy.intercept('GET', '/api/movies', { fixture: 'movies.json' });
        cy.get('.moviesList .movieTile').first().click();
        cy.url().should('match', /\/\d+$/); // Ensure the URL matches the movie detail page pattern, e.g., '/1'
    });
});
