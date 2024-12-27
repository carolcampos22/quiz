import { shuffle } from "../functions/arrays"
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

    answerWith(index: number): QuestionModel{
        const answeredRight = this.#responses[index]?.right
        const responses = this.#responses.map((response, i) => {
            const selectedResponse = index === i
            const mustReveal = selectedResponse || response.right
            return mustReveal ? response.reveal() : response
        })

        return new QuestionModel(this.id, this.question, responses, answeredRight)
    }

    shuffleResponses(): QuestionModel{
        let shuffledResponses = shuffle(this.#responses)
        return new QuestionModel(this.#id, this.#question, shuffledResponses, this.#rightAnswer)
    }

    static createUsingObject(obj: QuestionModel): QuestionModel {
        const responses = obj.responses.map(resp => ResponseModel.createUsingObject(resp))
        return new QuestionModel(obj.id, obj.question, responses, obj.rightAnswer)
    }

    toObject() {
        return {
            id: this.#id,
            question: this.#question,
            responses: this.#responses.map(response => response.toObject()),
            answered: this.answered,
            rightAnswer: this.#rightAnswer,
        }
    }
}