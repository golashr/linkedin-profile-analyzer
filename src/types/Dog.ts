export class Dog {
    private barkAmount = '0'
    #barkAmount1 = 'rahul'
    abcd = 'happy'
    personality = ''
    #property1: string

    constructor(property1: string, public property2: string) {
        this.#property1 = property1
        this.property2 = property2
        this.personality = `${this.abcd}${this.barkAmount} ${this.#barkAmount1} ${this.property1} ${this.property2} ${this.personality}`
    }

    get barkAmount1() {
        console.log(`barkAmount1 get value : ${this.#barkAmount1}`)
        return this.#barkAmount1
    }

    set barkAmount1(value: string) {
        console.log(`barkAmount1 set value : ${value}`)
        this.#barkAmount1 = value
    }

    get property1() {
        console.log(`property1 get value : ${this.#property1}`)
        return this.#property1
    }

    set property1(value: string) {
        console.log(`property1 set value : ${value}`)
        this.#property1 = value
    }
} 