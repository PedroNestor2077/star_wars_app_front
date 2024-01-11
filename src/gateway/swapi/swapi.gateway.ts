import { Axios } from 'axios';

export class SwapiGateway {
    axios = new Axios({ headers: { 'Content-Type': 'application/json' } });

    async get<T>(url: string): Promise<T> {
        const result = await this.axios.get(url);
        const data = JSON.parse(result.data);
        return data;
    }
}
