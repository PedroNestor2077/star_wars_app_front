import { SwapiGateway } from '../../gateway/swapi/swapi.gateway';
import { PlanetData, PlanetResponse } from './types';

export default class PlanetsService {
    private api: InstanceType<typeof SwapiGateway>;
    constructor(api: InstanceType<typeof SwapiGateway>) {
        this.api = api;
    }

    async getPlanets(url: string): Promise<PlanetData[]> {
        const resultData = await this.api.get<PlanetResponse>(url);
        return resultData.results;
    }
}
