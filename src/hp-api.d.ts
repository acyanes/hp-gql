import { RESTDataSource } from '@apollo/datasource-rest';
interface Character {
    name: string;
    gender: string;
    house: string;
}
export declare class HpAPI extends RESTDataSource {
    constructor();
    getCharacters(): Promise<Character>;
}
export {};
//# sourceMappingURL=hp-api.d.ts.map