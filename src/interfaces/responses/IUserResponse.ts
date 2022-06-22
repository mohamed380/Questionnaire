

export default interface IUserResponse {
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
}