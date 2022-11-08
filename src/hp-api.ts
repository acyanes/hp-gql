import { RESTDataSource } from '@apollo/datasource-rest';
import type { KeyValueCache } from '@apollo/utils.keyvaluecache';

interface Character {
  name: string;
  gender: string;
  house: string;
}

interface Spells {
  name: string;
  description: string;
}

interface Wand {
  wood: string;
  core: string;
}

interface House {
  name: string;
  gender: string;
  species: string;
  wand: Wand;
}

export class HpAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://hp-api.herokuapp.com/api/';
  }

  async getCharacters() {
    return this.get<Character>('characters');
  }

  async getSpells() {
    return this.get<Spells>('spells');
  }

  async getHouse(houseName: string) {
    return this.get<House>(`characters/house/${houseName}`);
  }
}
