import gql from 'graphql-tag';

export const typeDefs = gql`
  type Character {
    name: String!
    gender: String!
    house: String!
  }

  type Spell {
    name: String!
    description: String!
  }

  type Wand {
    wood: String!
    core: String!
  }

  type House {
    name: String!
    species: String!
    gender: String!
    house: String!
    wand: Wand
  }

  type Query {
    characters: [Character]
    spells: [Spell]
    house(houseName: String!): [House]
  }
`;