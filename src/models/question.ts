import type IAnswerResponse from "@/interfaces/responses/IAnswerResponse";
import type IQuestionResponse from "@/interfaces/responses/IQuestionResponse";
import answer from "./answer";
import QTypes from "@/models/questionTypes";
export default class question {
    type: string;
    title: string;
    banner_url_full: string;
    banner_url_small: string;
    pre_question_text?: string;
    question: string;
    explanation?: string;
    post_question_text?: string;
    post_answer_banner_url_full: string;
    post_answer_banner_url_small: string;
    post_answer_text: string;
    default_value?: string;
    mandatory: boolean;
    min?: number;
    min_errmsg?: string;
    max?: number;
    max_errmsg?: string;
    step?: number;
    digits?: number;
    digits_errmsg?: number;
    validator?: string;
    validator_errmsg?: string;
    min_answers?: number;
    min_answers_errmsg?: string;
    max_answers?: number;
    max_answers_errmsg?: string;
    tens_question_code?: any;
    questionnaire_id: number;
    question_id: number;
    next_question_id: number;
    name: string;
    description?: string;
    answer?: any;
    answers: IAnswerResponse[];
    error_msg?: string;
    index_number: number;
    number_of_questions: number;
    localAnswer?: any;
    postAnswerFlag: boolean
    constructor(object: IQuestionResponse) {
        this.type = object.type;
        this.title = object.title;
        this.banner_url_full = object.banner_url_full;
        this.banner_url_small = object.banner_url_small;
        this.pre_question_text = object.pre_question_text;
        this.question = object.question;
        this.explanation = object.explanation;
        this.post_question_text = object.post_question_text;
        this.post_answer_banner_url_full = object.post_answer_banner_url_full;
        this.post_answer_banner_url_small = object.post_answer_banner_url_small;
        this.post_answer_text = object.post_answer_text;
        this.default_value = object.default_value;
        this.mandatory = object.mandatory;
        this.min = object.min;
        this.min_errmsg = object.min_errmsg;
        this.max = object.max;
        this.max_errmsg = object.max_errmsg;
        this.step = object.step;
        this.digits = object.digits;
        this.digits_errmsg = object.digits_errmsg;
        this.validator = object.validator;
        this.validator_errmsg = object.validator_errmsg;
        this.min_answers = object.min_answers;
        this.min_answers_errmsg = object.min_answers_errmsg;
        this.max_answers = object.max_answers;
        this.max_answers_errmsg = object.max_answers_errmsg;
        this.tens_question_code = object.tens_question_code;
        this.questionnaire_id = object.questionnaire_id;
        this.question_id = object.question_id;
        this.next_question_id = object.next_question_id;
        this.name = object.name;
        this.description = object.description;
        this.answer = object.answer;
        this.error_msg = object.error_msg;
        this.index_number = object.index_number;
        this.number_of_questions = object.number_of_questions;
        this.answers = [];
        object.answers?.forEach((answerRes: IAnswerResponse) => {
            this.answers.push(new answer(answerRes));
        })

        if ([QTypes.Dropdown, QTypes.Checkbox, QTypes.Radio].indexOf(this.type) != -1) {
            this.localAnswer = this.answers.find((ans: answer) => ans.code == this.answer);
        }
        this.postAnswerFlag = false
    }

    getUserAnswer(): object {
        return {
            answer_question_id: this.question_id,
            answer: this.localAnswer?.code ?? this.localAnswer,
            get_question_id: this.localAnswer?.goto_item_id ?? this.next_question_id,
        }
    }

    setUserAnswer(answer: any) {
        if (this.type == QTypes.Checkbox)
            return this.handleCheckBoxSetAnswer(answer);
        this.localAnswer = answer
    }

    hasError() {
        return this.error_msg || this.validator_errmsg
    }

    canSubmit() {
        // || !this.mandatory 
        if (this.type == QTypes.Checkbox) {
            return Boolean(this.localAnswer?.length)
        }
       return ![undefined, null, ''].includes(this.localAnswer);
    }

    private handleCheckBoxSetAnswer(answer: answer) {
        if (this.localAnswer) {
            let index = this.localAnswer.findIndex(
                (answerItem: answer) => answerItem.code == answer.code
            )
            if (index > -1) {
                this.localAnswer.splice(index, 1);
                return;
            }
            this.localAnswer.push(answer)
            return
        }
        this.localAnswer = [answer]
        return;
    }

    showPostAnswer(): void {
        if (this.hasPostAnswer()) {
            this.postAnswerFlag = true
        } else {
            this.postAnswerFlag = false
        }
    }

    hasPostAnswer() {
        return Boolean(this.post_answer_banner_url_full || this.post_answer_banner_url_small || this.post_answer_text);
    }
}