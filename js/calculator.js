const display = document.querySelector('.display')
const button = document.querySelectorAll('div.button')
let displayText = document.querySelector('.display-text')
const body = document.querySelector('body')
const resultContainer = document.querySelector('.result-container')
let saveOperator
let operation = []

for (let i = 0; i < button.length; i++) {

    // button hover effects
    button[i].addEventListener('mouseover', function () {
        button[i].classList.add('hover');
    });
    button[i].addEventListener('mouseout', function () {
        button[i].classList.remove('hover');
    });

    // button click effects
    button[i].addEventListener('mousedown', function () {
        button[i].classList.add('clicked')
    })
    button[i].addEventListener('mouseup', function () {
        button[i].classList.remove('clicked')
        removeEffect()
        if (operation.length == 2) {
            results(operation)
            operation.push(original)
        }
        console.log(operation)
    })
}


function removeEffect() {
    let op = document.querySelector('.operator-clicked')
    if (op != null) {
        op.classList.remove('operator-clicked')
    }
}

function savedOperator () {
    if (saveOperator == 'plus') {
        operation.push(original)
        results(operation)
        getSum(operation)
        console.log(saveOperator)
    } else if (saveOperator == 'minus') {
        operation.push(original)
        results(operation)
        getTotal(operation)
    } else if (saveOperator == 'multiply') {
        operation.push(original)
        results(operation)
        getProduct(operation)
    } else if (saveOperator == 'divide') {
        operation.push(original)
        results(operation)
        getQuotient(operation)
    }
}

const equals = document.querySelector('#equal')
equals.addEventListener('click', function() {
    savedOperator()
    //op.classList.remove('operator-clicked')
})

let numberClicked = document.querySelector('.number-clicked')

// displays selected numbers
const number = document.querySelectorAll('div.number')
let original = displayText.textContent
for (let j = 0; j < number.length; j++) {
    number[j].addEventListener('click', function () {
        original += number[j].textContent
        let newDisplay = original.substring(original.length - 11, original.length)
        displayText.textContent = newDisplay
        if (numberClicked == null) {
            number[j].classList.add('number-clicked')
        } else {
            number[j].classList.remove('number-clicked')
            //number[j].classList.add('number-clicked')
        }
    })
}

const operators = document.querySelectorAll('div.operator')
for (let index = 0; index < operators.length; index++) {
    operators[index].addEventListener('mousedown', function () {
        operators[index].classList.add('operator-click')
    })
    operators[index].addEventListener('mouseup', function () {
        operators[index].classList.remove('operator-click')
        operators[index].classList.add('operator-clicked')
        operation.push(original)
        original = ""
        console.log(operation)

        if (operators[index].textContent == '+') {
            if (saveOperator == "minus") {
                results(operation)
                getTotal(operation)
            } else if (saveOperator == "multiply") {
                results(operation)
                getProduct(operation)
            } else if (saveOperator == "divide") {
                results(operation)
                getQuotient(operation)
            }
            saveOperator = "plus"
            if (operation.length == 2) {
                results(operation)
                getSum(operation)
            }
        } else if (operators[index].textContent == '−') {
            if (saveOperator == "plus") {
                results(operation)
                getSum(operation)
            } else if (saveOperator == "multiply") {
                results(operation)
                getProduct(operation)
            } else if (saveOperator == "divide") {
                results(operation)
                getQuotient(operation)
            }
            saveOperator = "minus"
            if (operation.length == 2) {
                results(operation)
                getTotal(operation)
            }
        } else if (operators[index].textContent == '×') {
            if (saveOperator == "plus") {
                results(operation)
                getSum(operation)
            } else if (saveOperator == "minus") {
                results(operation)
                getTotal(operation)
            } else if (saveOperator == "divide") {
                results(operation)
                getQuotient(operation)
            }
            saveOperator = "multiply"
            if (operation.length == 2) {
                results(operation)
                getProduct(operation)
            }
        }  else if (operators[index].textContent == '÷') {
            if (saveOperator == "plus") {
                results(operation)
                getSum(operation)
            } else if (saveOperator == "multiply") {
                results(operation)
                getProduct(operation)
            } else if (saveOperator == "minus") {
                results(operation)
                getTotal(operation)
            }
            saveOperator = "divide"
            if (operation.length == 2) {
                results(operation)
                getQuotient(operation)
            }
        }
        /*
        if (operation == 1) {
            savedOperator()
        */
    })
}


function getTotal (operation) {
    let total = parseFloat(operation[0]) - parseFloat(operation[1])
    const result = document.querySelector('.result')
    result.textContent = total
    operation.splice(0, operation.length)
    operation.push(total)
}

function getSum (operation) {
    let sum = parseFloat(operation[0]) + parseFloat(operation[1])
    const result = document.querySelector('.result')
    result.textContent = sum
    operation.splice(0, operation.length)
    operation.push(sum)
}

function getProduct (operation) {
    let product = parseFloat(operation[0]) * parseFloat(operation[1])
    const result = document.querySelector('.result')
    result.textContent = product
    operation.splice(0, operation.length)
    operation.push(product)
}

function getQuotient (operation) {
    if (operation[0] == 0 && operation[1] == 0) {
        const result = document.querySelector('.result')
        result.textContent = "ERROR"
        return "ERROR"
    } else {
        let quotient = parseFloat(operation[0]) / parseFloat(operation[1])
        const result = document.querySelector('.result')
        result.textContent = quotient
        operation.splice(0, operation.length)
        operation.push(quotient)
    }
    
}

// keyboard support for number display
const keyNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "."]
const keyOperator = ['+', '-', '/', '*', '=']
body.addEventListener('keydown', function (e) {
    for (let index = 0; index < keyNumber.length; index++) {
        let log = `${e.key}`;
        if (keyNumber[index] == log) {
            original += keyNumber[index]
            let newDisplay = original.substring(original.length - 11, original.length)
            displayText.textContent = newDisplay
        }
    }
    /*
    for (let index = 0; index < keyOperator.length; index++) {
        let log = `${e.key}`;
        if (log == keyOperator[index]){
            //operation.push(original)
        }
    }*/
})    

// clears display
const clear = document.querySelector('#clear')
clear.addEventListener('click', function () {
    displayText.textContent = ""
    original = ""
    operation.splice(0, operation.length)
    const result = document.querySelector('.result')
    if (result != null) {
       result.remove() 
    }
})

function results () {
    let result = document.querySelector('.result')
    if (result == null) {
        let result = document.createElement('div') 
        result.classList.add('result')
        resultContainer.appendChild(result)
        displayText.textContent = ""
    } 
}