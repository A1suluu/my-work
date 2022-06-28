// Создайте класс Car
// со свойствами:
// марка, модель, год, цена
// создайте 2 объекта
// данного класса
// с разными значениями свойств

class Car {
    constructor (mark, model, year, price) {
        this.mark = mark
        this.model = model
        this.year = year
        this.price = price
    }

    set mileAge(km) {
        this._mileAge = km
    }

    get mileAge () {
        return this._mileAge
    }

    set model (myModel) {
        this._model = myModel
    }

    get model () {
        return `${this.mark} ${this._model}`
    }

    go (km) {
        this.mileAge += km
    }
}

let bmw = new Car ( "BMW", "X5", 2005, 10000 )
bmw.mileAge = 12000
console.log(bmw.mileAge)
bmw.go(150)
console.log(bmw.mileAge)

let camaro = new Car ( "Mustang", "Camaro", 1970, 15000 )
camaro.mileAge = 150000
camaro.go(10)
console.log(camaro.mileAge)
