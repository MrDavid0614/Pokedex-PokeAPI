import { gql } from 'apollo-angular';

export const GET_POKEMONS = gql`
    query {
        pokemons
    }
`;

export const GET_POKEMON_BY_ID = gql`
    query getPokemonById($id: Int!){
        pokemon(id: $id) {
            name
        }
    }
`;