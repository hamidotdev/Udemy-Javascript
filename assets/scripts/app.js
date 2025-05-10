// function add(num1, num2) {
//     const result = num1 + num2
//     alert(`The result is ${result}`)
// }
// add(2, 1)

// let userName = 'Max';
// function greetUser(name) {
//     return name
// }
// alert(greetUser('Max'))

// // OR
// function greetUser2(names) {
//     alert(names)
// }
// greetUser2('Max')
// userName = 'Manu'

// function double(doubling) {
//     let doubled = doubling * 2
//     return doubled
// }

// console.log(double(3));


// function transform(num, doub) {
//     return doub(num)
// }
// console.log(transform(10, double));

// MAIN EXERCISE
let defaultValue = 0;
let currentResult = defaultValue;
let logEntries = []

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription)
}

function writeToLog(operator, prevResult, operationNum, newResult) {
    const logEntry = {
        operation: operator,
        prevResult: prevResult,
        number: operationNum,
        result: newResult
    };
    logEntries.push(logEntry)
    console.log(logEntries);
}

function adds() {
    const enteredNumber = parseInt(userInput.value)
    const initialResult = currentResult
    currentResult += enteredNumber
    createAndWriteOutput("+", initialResult, enteredNumber)
    writeToLog("ADD", initialResult, enteredNumber, currentResult)
}

function substract() {
    const enteredNumber = parseInt(userInput.value)
    const initialResult = currentResult
    currentResult -= enteredNumber
    createAndWriteOutput("-", initialResult, enteredNumber)
    writeToLog("SUBTRACT", initialResult, enteredNumber, currentResult)
}

function divide() {
    const enteredNumber = parseInt(userInput.value)
    const initialResult = currentResult
    currentResult /= enteredNumber
    createAndWriteOutput("/", initialResult, enteredNumber)
    writeToLog("DIVIDE", initialResult, enteredNumber, currentResult)
}

function multiply() {
    const enteredNumber = parseInt(userInput.value)
    const initialResult = currentResult
    currentResult *= enteredNumber
    createAndWriteOutput("*", initialResult, enteredNumber)
    writeToLog("MULTIPLY", initialResult, enteredNumber, currentResult)
}

addBtn.addEventListener('click', adds)
subtractBtn.addEventListener('click', substract)
divideBtn.addEventListener('click', divide)
multiplyBtn.addEventListener('click', multiply)

let numbers = [10, 5]
function solve() {
    numbers.push(3)
    numbers.push(4)
}
solve()
console.log(numbers);
