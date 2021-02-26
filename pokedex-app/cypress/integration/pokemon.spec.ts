/// <reference types="Cypress" />

describe('Pokemon component', ()=>{

    beforeEach(()=>{

        cy.intercept('POST', 'http://localhost:8000/graphql/', { fixture: 'pokemons-list.json' });

        cy.visit('http://localhost:4200');

    });

    it('should render correctly', ()=>{

        cy.get('table')
            .should('be.visible');

    });

    it('table should have 6 rows at first', ()=>{

        cy.get('tr')
            .should((rows)=>{
                expect(rows).to.have.length(6);
            });

    });

    it('should have 11 rows when pagination change to 10 rows', () => {

        cy.get('.mat-select-arrow')
            .click();
        
        cy.get('#mat-option-1')
            .click();

        cy.get('tr')
            .should((rows)=>{
                expect(rows).to.have.length(11);
            });

    });

});