import ResponseModel from "./response"

export default class QuestionModel {
    #id: number
    #question: string
    #responses: ResponseModel[] 
    #rightAnswer: boolean

    constructor(id: number, question: string, responses: ResponseModel[], rightAnswer = false) {
        this.#id = id
        this.#question = question
        this.#responses = responses
        this.#rightAnswer = rightAnswer
    }

    get id() {
        return this.#id;
    }

    get question() {
        return this.#question;
    }

    get responses() {
        return this.#responses;
    }

    get rightAnswer() {
        return this.#rightAnswer;
    }

    get answered() {
        return this.#responses.some(response => response.revealed);
    }

    toObject() {
        return {
            id: this.#id,
            question: this.#question,
            responses: this.#responses.map(response => response.toObject()),
            rightAnswer: this.#rightAnswer,
        }
    }
}