export const resolvers = {
  Query: {
    characters: async (_: any, __: any, { dataSources }: any) => {
      return dataSources.hpAPI.getCharacters();
    },
    spells: async (_: any, __: any, { dataSources }: any) => {
      return dataSources.hpAPI.getSpells();
    },
    house: async (_: any, { houseName }: any, { dataSources }: any) => {
      return dataSources.hpAPI.getHouse(houseName);
    }
  },
};
