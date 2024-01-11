import { SwapiGateway } from '../../gateway/swapi/swapi.gateway';
import { PlanetData } from '../planets/types';
import { transformPerson } from './transform';
import { PeopleDataResult, PeopleResponse } from './types';

export default class PeopleApi {
    private api: InstanceType<typeof SwapiGateway>;
    constructor(api: InstanceType<typeof SwapiGateway>) {
        this.api = api;
    }

    async getPeople(
        url: string,
        planets: PlanetData[]
    ): Promise<PeopleDataResult> {
        const resultData = await this.api.get<PeopleResponse>(url);
        const data = resultData.results.map((personData) =>
            transformPerson(personData, planets)
        );

        return { data, nextUrl: resultData.next };
    }
}
