class AwesomeClass {
    constructor (height, price) {
        this.height = height
        this.price = price
        this.width = 100
    }

    // mark = "Toyota"

    test () {
        console.log("hi")
    }

    get mark () {
        return this._mark
    }

    set mark(markName) {
        this._mark = markName
    }
}

// let a = prompt()
let myObject = new AwesomeClass(2, 150)
// myObject.test()
console.log(myObject.mark)
myObject.mark = "Mers"
console.log(myObject.mark)


// let anotherObject = new AwesomeClass()
// anotherObject.test()
// console.log(anotherObject["price"])

// let awesomeArray = [myObject, anotherObject, new AwesomeClass(10, 200)]
// console.log(awesomeArray)
