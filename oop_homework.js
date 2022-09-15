class Vehicle {
    constructor(numberOfWheels, hasEngine, price, numberOfSits) {
        this.numberOfWheels = numberOfWheels
        this.hasEngine = hasEngine
        this.price = price
        this.numberOfSits = numberOfSits
    }
    getNumberOfWheels() {
        console.log(`Number of wheels: ${this.numberOfWheels}`)
    }
    getHasEngine() {
        console.log(this.hasEngine ? 'Has engine' : 'No engine')
    }
    getPrice() {
        console.log(`Price: $${this.price}`)
    }
    getNumberOfSits() {
        console.log(`Number of sits: ${this.numberOfSits}`)
    }
}

class Bike extends Vehicle {
    constructor(numberOfWheels, hasEngine, price, maxSpeed) {
        super(numberOfWheels, hasEngine, price, maxSpeed)
        this.maxSpeed = maxSpeed
    }
}

class Car extends Vehicle {
    constructor(numberOfWheels, hasEngine, price, numberOfDoors) {
        super(numberOfWheels, hasEngine, price, numberOfDoors)
        this.numberOfDoors = numberOfDoors
    }
}

class Bus extends Vehicle {
    constructor(numberOfWheels, hasEngine, price, numberOfSits) {
        super(numberOfWheels, hasEngine, price, numberOfSits)
        this.numberOfSits = numberOfSits
    }
}

//There are some calls to the methods of the Vehicle class
const bike = new Bike(2, false, 100, 50)
const car = new Car(4, true, 10000, 5)
const bus = new Bus(6, true, 100000, 30)

bike.getPrice()
car.getHasEngine()
bus.getNumberOfWheels()