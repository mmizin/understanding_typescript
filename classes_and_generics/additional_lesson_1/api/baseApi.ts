export abstract class BaseApi {
    protected baseUrl = 'https://api.example.com';

    constructor(protected env: string) {}

    protected abstract buildUrl(endpoint: string): string;

    protected async get<T>(endpoint: string): Promise<T> {
        const url = this.buildUrl(endpoint);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        return await response.json()
    }

    protected async post<T>(endppoint: string, data: object): Promise<T> {
        const url = this.buildUrl(endppoint);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)});
        
        if (!response.ok) {
            throw new Error(`Error posting data: ${response.statusText}`);
        }

        return await response.json()
    }
}