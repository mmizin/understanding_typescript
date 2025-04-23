abstract class RestAPI {
    protected baseUrl: string = "http://google.com/";

    async get(url: string, expectedFailure = false): Promise<Record<string, unknown> | string> {
        const response = await fetch(url);
        if (!response.ok && !expectedFailure) {
            const error = await response.text();
            throw new Error(`Error: ${error}`)
        }

        return expectedFailure ? await response.text() : await response.json();
    }

    post(url: string, expectedFailure = false): Promise<Record<string, unknown> | string> {
        return this.get(url, expectedFailure);
    }   

}
    

class TravelAPI extends RestAPI {
    async getTypeScript(): Promise<Record<string, unknown> | string> {
        const url = `${this.baseUrl}/search?q=typescript`;
        const response = await this.get(url, true);

        return response
    };
}

const tApi = new TravelAPI();

console.log(tApi.getTypeScript());
