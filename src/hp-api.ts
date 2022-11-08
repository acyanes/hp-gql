import { RESTDataSource } from '@apollo/datasource-rest';

interface Character {
  name: string;
  gender: string;
  house: string;
}

export class HpAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://hp-api.herokuapp.com/api/';
  }

  async getCharacters() {
    return this.get<Character>('characters');
  }
}
