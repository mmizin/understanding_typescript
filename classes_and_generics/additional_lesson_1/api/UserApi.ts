import { BaseApi } from "./baseApi";
import { User } from "../models/User";

export class UserApi extends BaseApi {
    constructor(env: string, private userId: number) {
        super(env);
    }

    protected buildUrl(endpoint: string): string {
        return `${this.baseUrl}/${this.env}/${endpoint}`;
    }

    public async getUser(id?: number): Promise<User> {
        return this.get<User>(`users/${id || this.userId}`);
    }
}