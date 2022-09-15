function getMathModule(x) {
    const y = 13
    return {
        sum: () => {
            return x + y
        },
        subtract: () => {
            return x - y
        },
        multiply: () => {
            return x * y
        },
        divide: () => {
            return x / y
        }
    }
}

//There are some calls to the methods of the MathModule

// const mathOperation = getMathModule(66)

// console.log(mathOperation.sum())
// console.log(mathOperation.subtract())
// console.log(mathOperation.multiply())
// console.log(mathOperation.divide())