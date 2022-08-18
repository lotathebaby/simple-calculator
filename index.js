// class Calculator {
//     constructor(previousOperandTextElement, currentOperandTextElement) {
//         this.previousOperandTextElement = previousOperandTextElement
//         this.currentOperandTextElement = currentOperandTextElement
//         this.clear()
//     }

//     clear() {
//         this.currentOperand = " "
//         this.previousOperand = " "
//         this.operation = undefined
//     }

//     delete() {

//     }

//     appendNumber(number) {
//         if (number === '.' && this.currentOperand.includes('.')) return
//         this.currentOperand = this.currentOperand.toString() + number.toString()
//     }

//     chooseOperation(operation) {
//         if (this.currentOperand === " ") return
//         if (this.previousOperand !== " ") {
//             this.compute()
//         }
//         this.operation = operation
//         this.previousOperand = this.currentOperand
//         this.currentOperand = " "
//     }

//     compute() {

//     }

//     updateDisplay() {
//         this.currentOperandTextElement.innerText = this.currentOperand
//         this.previousOperandTextElement.innerText = this.previousOperand
//     }
// }

// const numberBtn = document.querySelectorAll("[data-number]");
// const operationBtn = document.querySelectorAll("[data-operation]");
// const equalsBtn = document.querySelector("[data-equals]");
// const deleteBtn = document.querySelector("[data-delete]");
// const clearBtn = document.querySelector("[data-all-clear]");
// const previousOperandTextElement = document.querySelector("[data-previous-operand]");
// const currentOperandTextElement = document.querySelector("[data-current-operand]")


// const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


// numberBtn.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.appendNumber(button.innerText)
//         calculator.updateDisplay()
//     })
// })

// operationBtn.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.chooseOperation(button.innerText)
//         calculator.updateDisplay()
//     })
// })
// //How to store the input
const calculator = document.querySelector(".calculator")
const keys = calculator.querySelector("#calculator-btn")
const display = calculator.querySelector(".output")
 
keys.addEventListener("click", event => {

    const key = event.target
    const keyValue = key.textContent
    const displayValue = display.textContent
    const{ type } = key.dataset
    const {previousKeyType} = calculator.dataset

    
    if (type === "number") {

    if (displayValue === "0") {
        display.textContent = keyValue
    } else if (previousKeyType === "operator") {
        display.textContent = keyValue
    } else {
        display.textContent = displayValue + keyValue
    }
}

    if (type === "operator") {
        const operatorKeys = keys.querySelectorAll("[data-type='operator")
        operatorKeys.forEach(el => {el.dataset.state = " "})
        key.dataset.state = "selected"    

        calculator.dataset.firstNumber = displayValue
        calculator.dataset.operator = key.dataset.key
    }

    if (type === "equal") {
        const firstNumber = parseInt(calculator.dataset.firstNumber)
        const operator = calculator.dataset.operator
        const secondNumber = parseInt(displayValue)


        let result = ''
        if (operator === "plus") result = firstNumber + secondNumber
        if (operator === "minus") result = firstNumber - secondNumber
        if (operator === "times") result = firstNumber * secondNumber
        if (operator === "divide") result = firstNumber / secondNumber

        display.textContent = result
    }

    if (type === "clear") {
        display.textContent = "0"
    }

    if (type === "delete") {
        display.textContent.pop()
    }

    calculator.dataset.previousKeyType = type
})



