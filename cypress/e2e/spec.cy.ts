import { cy, expect, describe, it } from 'local-cypress';
describe('template spec', () => {
    it('passes', () => {
        cy.visit('https://example.cypress.io');
    });
});
