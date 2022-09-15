const Vehicle = function (numberOfWheels, hasEngine, price) {
    this.numberOfWheels = numberOfWheels
    this.hasEngine = hasEngine
    this.price = price
}

Vehicle.prototype.getNumberOfWheels = function () {
    console.log(`Number of wheels: ${this.numberOfWheels}`)
}

Vehicle.prototype.getHasEngine = function () {
    console.log(this.hasEngine ? 'Has engine' : 'No engine')
}

Vehicle.prototype.getPrice = function () {
    console.log(`Price: $${this.price}`)
}

const Bike = function (numberOfWheels, hasEngine, price, maxSpeed) {
    Vehicle.call(this, numberOfWheels, hasEngine, price, maxSpeed)
    this.maxSpeed = maxSpeed
}

const Car = function (numberOfWheels, hasEngine, price, numberOfDoors) {
    Vehicle.call(this, numberOfWheels, hasEngine, price, numberOfDoors)
    this.numberOfDoors = numberOfDoors
}

const Bus = function (numberOfWheels, hasEngine, price, numberOfSits) {
    Vehicle.call(this, numberOfWheels, hasEngine, price, numberOfSits)
    this.numberOfSits = numberOfSits
}

Object.setPrototypeOf(Bike.prototype, Vehicle.prototype)
Object.setPrototypeOf(Car.prototype, Vehicle.prototype)
Object.setPrototypeOf(Bus.prototype, Vehicle.prototype)

//There are some calls to the methods of the Vehicle class
const bike = new Bike(2, false, 100, 50)
const car = new Car(4, true, 10000, 5)
const bus = new Bus(6, true, 100000, 30)

bike.getPrice()
car.getHasEngine()
bus.getNumberOfWheels()