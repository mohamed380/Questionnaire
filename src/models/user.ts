import type userInterface from "@/interfaces/responses/IUserResponse";

export default class user{

    id_token: string;
    first_name: string;
    last_name: string;
    email: string;
    mail_confirmed: boolean;
    privacyagreed: boolean;
    is_dummy: boolean;
    phone?: any;
    access_token: string;
    token_stamp: string;
    no_more_email: boolean;

    constructor(object: userInterface) {
        this.id_token = object.id_token;
        this.first_name = object.first_name;
        this.last_name = object.last_name;
        this.email = object.email;
        this.mail_confirmed = object.mail_confirmed;
        this.privacyagreed = object.privacyagreed;
        this.is_dummy = object.is_dummy;
        this.phone = object.phone;
        this.access_token = object.access_token;
        this.token_stamp = object.token_stamp;
        this.no_more_email = object.no_more_email;
    }

}