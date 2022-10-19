const display = document.querySelector('.display')
const button = document.querySelectorAll('div.button')
let displayText = document.querySelector('.display-text')
const body = document.querySelector('body')
const resultContainer = document.querySelector('.result-container')

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
        //removeEffect()
    })
}
/*
function removeEffect() {
    addition.classList.remove('operator-clicked')
    addition.classList.remove('operator-click')
    subtraction.classList.remove('operator-clicked')
    subtraction.classList.remove('operator-click')
}
*/
// displays selected numbers
const number = document.querySelectorAll('div.number')
let original = displayText.textContent
for (let j = 0; j < number.length; j++) {
    number[j].addEventListener('click', function () {
        original += number[j].textContent
        let newDisplay = original.substring(original.length - 11, original.length)
        displayText.textContent = newDisplay
    })
}

const operators = document.querySelectorAll('div.operator')
for (let index = 0; index < operators.length; index++) {
    operators[index].addEventListener('mousedown', function () {
        operators[index].classList.add('operator-click')
    })
    operators[index].addEventListener('mouseup', function () {
        operators[index].classList.add('operator-clicked')
        operation.push(original)
        original = ""
        console.log(operation)

        if (operators[index].textContent == '+') {
            if (operation.length == 2) {
                results(operation)
                getSum(operation)
                const result = document.querySelector('.result')
            }
        }
    })
    
}



function getSum (operation) {
    let sum = parseFloat(operation[0]) + parseFloat(operation[1])
    const result = document.querySelector('.result')
    result.textContent = sum
    operation.splice(0, operation.length)
    operation.push(sum)
    //result.remove()
}

// keyboard support for number display
const keyNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
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
    //const result = document.querySelector('.result')
    //result.remove()
})


function results (operation) {
    let result = document.querySelector('.result')
    if (result == null) {
        let result = document.createElement('div') 
        result.classList.add('result')
        resultContainer.appendChild(result)
    } 
    
    //let sum = parseInt(operation[0]) + parseInt(operation[1])
    //let total = parseInt(operation[0]) - parseInt(operation[1])
    //result.textContent = sum
    //result.textContent = total
    console.log(operation)
}

/*

const equals = document.querySelector('#equal') 
equals.addEventListener('click', function () {
    removeEffect()
    operation.push(original)
    results(operation)
})



const addition = document.querySelector('#add')
addition.addEventListener('mousedown', function() {
    addition.classList.add('operator-click')
})
addition.addEventListener('mouseup', function() {
    addition.classList.add('operator-clicked')
    operation.push(original)
    original = ""
    if (operation.length == 2) {
        results(operation)
        //let sum = eval(operation[0]) + eval(operation[1])
        const result = document.querySelector('.result')
        //result.textContent = sum
    }
})
  

const subtraction = document.querySelector('#subtract')
subtraction.addEventListener('mousedown', function() {
    subtraction.classList.add('operator-click')
})
subtraction.addEventListener('mouseup', function() {
    subtraction.classList.add('operator-clicked')
    operation.push(original)
    original = ""
    if (operation.length == 2) {
        results(operation)
        //let total = eval(operation[0]) - eval(operation[1])
        const result = document.querySelector('.result')
        //result.textContent = total
    }
})
*/