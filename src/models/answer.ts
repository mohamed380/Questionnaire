import type IAnswerResponse from "@/interfaces/responses/IAnswerResponse";

export default class answer {
    code: number;
    text: string;
    icon_url?: string;
    icon_svg?: string;
    order: number;
    goto_item_id?: number;
    
    constructor(object: IAnswerResponse) {
        this.code = object.code;
        this.text = object.text;
        this.icon_url = object.icon_url;
        this.icon_svg = object.icon_svg;
        this.order = object.order;
        this.goto_item_id = object.goto_item_id;
    }

}