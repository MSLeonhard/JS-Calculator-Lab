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