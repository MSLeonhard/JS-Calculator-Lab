function allClear () {
    document.getElementById('screen').value = ""
}

function display (value) {
    document.getElementById('screen').value += value
}

function solve () {
    let equation = document.getElementById('screen').value
    let solution = eval(equation)
    document.getElementById('screen').value = solution
} 

function inverse() {
    let equation = document.getElementById('screen').value
    let absolute = eval(Math.abs(equation))
    document.getElementById('screen').value = absolute
}

function absoluteValue() {
    let equation = document.getElementById('screen').value
    let absolute = eval(Math.abs(equation))
    document.getElementById('screen').value = absolute
}

function squareRoot() {
    let equation = document.getElementById('screen').value
    let sqrt = eval(Math.sqrt(equation))
    document.getElementById('screen').value = sqrt
}

function logarithm () {
    let equation = document.getElementById('screen').value
    let log = eval(Math.log10(equation))
    document.getElementById('screen').value = log
}

function logNatural () {
    let equation = document.getElementById('screen').value
    let ln = eval(Math.log(equation))
    document.getElementById('screen').value = ln
}

function cosine () {
    let equation = document.getElementById('screen').value
    let cos = eval(Math.cos(equation))
    document.getElementById('screen').value = cos
}

function tangent () {
    let equation = document.getElementById('screen').value
    let tan = eval(Math.tan(equation))
    document.getElementById('screen').value = tan
}

function sine () {
    let equation = document.getElementById('screen').value
    let sin = eval(Math.sin(equation))
    document.getElementById('screen').value = sin
}












// const numbers = document.querySelectorAll('number')
// const operators = document.querySelectorAll('operator')
// const equals = document.querySelector('equals')
// const allClear = document.querySelector('all-clear')
// const previousText = document.querySelector('previous')
// const currentText = document.querySelector('current')

// class Calculator {
//     constructor(previousText, currentText) {
//         this.previousText = previousText
//         this.currentText = currentText
//         this.clear()
//     }

//     clear() {
//         this.current = ' '
//         this.previous = ' '
//         this.operation = undefined
//     }

//     appendNumber(number) {
//         this.current = number
//     }

//     chooseOperation(operation) {

//     }

//     compute() {

//     }

//     updateDisplay() {
//         this.currentText.innerText = this.current
//     }
// }

// const calculator = new Calculator(previousText, currentText)

// numbers.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.appendNumber(button.innerText)
//         calculator.updateDisplay()
//     })
// })