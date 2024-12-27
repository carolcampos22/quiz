export default class ResponseModel {
    #value: string
    #right: boolean
    #revealed: boolean

    constructor(value: string, right: boolean, revealed = false) {
        this.#value = value
        this.#right = right
        this.#revealed = revealed
    }

    static right(value: string){
        return new ResponseModel(value, true)
    }

    static wrong(value: string){
        return new ResponseModel(value, false)
    }

    get value() {
        return this.#value
    }

    get right() {
        return this.#right
    }

    get revealed() {
        return this.#revealed
    }

    reveal(){
        return new ResponseModel(this.#value, this.#right, true)
    }

    static createUsingObject(obj: ResponseModel): ResponseModel {
        return new ResponseModel(obj.value, obj.right, obj.revealed)
    }

    toObject() {
        return {
            value: this.#value,
            right: this.#right,
            revealed: this.#revealed,
        }
    }
}