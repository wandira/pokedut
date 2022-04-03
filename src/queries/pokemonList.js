import { gql } from "@apollo/client";

export default gql`
  query pokemonlist($offset: Int, $limit: Int) {
    pokemons(offset: $offset, limit: $limit) {
      results {
        id
        name
        url
        image
      }
    }
  }
`;
