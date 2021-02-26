/// <reference types="Cypress" />

describe('Header text', ()=>{

    beforeEach(()=>{
        cy.visit('http://localhost:4200/');
    })

    it('should render correctly', ()=> {

        cy.get('h1')
            .should('be.visible');

    });

    it('contains the correct title', ()=>{
        
        cy.get('h1')
            .invoke('text')
                .should('equal', 'Pokémon');

    });

});