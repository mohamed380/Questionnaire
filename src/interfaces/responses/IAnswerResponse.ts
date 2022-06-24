export default interface IAnswerResponse {
    code: number;
    text: string;
    icon_url?: string;
    icon_svg?: string;
    order: number;
    goto_item_id?: number;
}