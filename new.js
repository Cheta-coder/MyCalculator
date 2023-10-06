const numberButtons = document.querySelectorAll('.number')
const operationButtons = document.querySelectorAll('.opt')
const equalsButton = document.querySelector('.equalTo')
const deleteButton = document.querySelector('.data-delete')
const allClearButton = document.querySelector('.all-clear')
const previousOperandTextElement = document.querySelector('d#ata-previous-operand')
const currentOperandTextElement = document.querySelector('#data-current-operand')

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()

      clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    
    delete() {
    }
    
    appendNumber(number) {
    }
    
    chooseOperation(operation) {
    }
    
    compute() {
    }
    
    updateDisplay() {
    }
}