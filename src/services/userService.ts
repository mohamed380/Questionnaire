import apis from "@/api"
import axios from "@/axios";
import type IUserResponse from "@/interfaces/responses/IUserResponse";
import user from "@/models/user";

export class userService {

    private static userKey: string = 'auth-user';

    static getUser(): user | null {
        let localString: string | null = localStorage.getItem(this.userKey);
        let data: any = localString != null ? JSON.parse(localString) : null;
        return data ? new user(data) : null;
    }

    static async createDummy() {
        // import.meta.env.VITE_MAIN_TOKEN
        return await axios.post(apis.CREATE_DUMMY, { bearer_token: null })
    }

    static save(authUser: user): void {
        localStorage.setItem(this.userKey, JSON.stringify(authUser));
    }

    static remove(): void {
        localStorage.removeItem(this.userKey);
    }

}