import { cy, expect, describe, it } from 'local-cypress';
const url = 'localhost:3000';

describe('Characters Page', () => {
    beforeEach(() => {
        cy.visit(url);
        cy.wait(5000);
    });

    it('displays the main title', () => {
        cy.contains('Star Wars Characters').should('exist');
    });

    it('displays a filter dropdown with placeholder', () => {
        cy.get('[data-testid=select-container]').as('selectContainer');

        cy.get('@selectContainer').should('exist');

        cy.get('@selectContainer')
            .find('[data-testid=select]')
            .should('not.have.attr', 'disabled');
        cy.get('@selectContainer')
            .find('[data-testid=select]')
            .should('have.value', '');

        cy.get('@selectContainer').contains('All').should('exist');
    });

    it('allows selecting a planet from the dropdown', () => {
        cy.wait(10000);
        cy.get('[data-testid=select-container]').as('selectContainer');

        cy.get('@selectContainer').should('exist');

        cy.get('@selectContainer')
            .find('[data-testid=select]')
            .select('Tatooine');

        cy.get('@selectContainer')
            .find('[data-testid=select]')
            .should('have.value', 'Tatooine');

        cy.get('.person').should('have.length.greaterThan', 0);
    });

    it('clears the filter when "CLEAR ALL" button is clicked', () => {
        cy.get('[data-testid=select-container]').as('selectContainer');

        cy.get('@selectContainer').should('exist');

        cy.get('@selectContainer').find('[data-testid=select]').select('Endor');

        cy.contains('CLEAR ALL').click();

        cy.get('@selectContainer')
            .find('[data-testid=select]')
            .should('have.value', '');
    });

    it('filters characters based on planet selection', () => {
        cy.get('select').select('Tatooine');

        cy.get('.person').should('have.length.greaterThan', 0);
    });

    it('clears the filter when "CLEAR ALL" button is clicked', () => {
        cy.get('select').select('Endor');

        cy.get('button').contains('CLEAR ALL').click();

        cy.get('select').should('have.value', '');
    });

    it('loads more characters when "LOAD MORE" button is clicked', () => {
        cy.wait(7000);
        cy.get('.person').should('have.length.at.least', 9);
        cy.get('button').contains('LOAD MORE').click();
        cy.wait(7000);
        cy.get('.person').should('have.length.at.least', 18);
    });
});
