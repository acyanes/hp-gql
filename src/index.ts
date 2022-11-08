import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './resolver.js';
import { typeDefs } from './typeDefs.js';
import { HpAPI } from './hp-api.js';

interface ContextValue {
  dataSources: {
    hpAPI: HpAPI;
  };
}

const server = new ApolloServer<ContextValue>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    return {
      // We create new instances of our data sources with each request,
      // passing in our server's cache.
      dataSources: {
        hpAPI: new HpAPI(),
      },
    };
  },
});

console.log(`🚀  Server ready at ${url}`);
