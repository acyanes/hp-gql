const { ApolloServer, gql } = require('apollo-server');
const fetch = require('node-fetch');

const typeDefs = gql`
  type Character {
    name: String
    gender: String
    house: String
  }

  type Spell {
    name: String
    description: String
  }

  type Query {
    characters: [Character]
    spells: [Spell]
  }
`;

const charactersRequest = fetch('https://hp-api.herokuapp.com/api/characters')
  .then((response) => response.json())
  .then((data) => {
    return data;
  })
  .catch((err) => {
    console.log(err);
  });

const spellRequest = fetch('https://hp-api.herokuapp.com/api/spells')
  .then((response) => response.json())
  .then((data) => {
    return data;
  })
  .catch((err) => {
    console.log(err);
  });

const resolvers = {
  Query: {
    characters() {
      return charactersRequest;
    },
    spells() {
      return spellRequest;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`Server listening on ${url}`);
});
