export const resolvers = {
  Query: {
    characters: async (_: any, __: any, { dataSources }: any) => {
      return dataSources.hpAPI.getCharacters();
    },
  },
};
