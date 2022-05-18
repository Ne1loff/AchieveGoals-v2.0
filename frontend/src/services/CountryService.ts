// @ts-ignore
import Country from "../data/models/Country";
import type Request from "./Request";

export default class CountryService {
    private request: Request;

    constructor(request: Request) {
        this.request = request;
    }

    async getCountries(): Promise<Country[]> {
        return this.request.get<Country[]>('api/countries/')
            .then((apiResponse) => apiResponse.data);
    }
}