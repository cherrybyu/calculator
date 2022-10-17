const display = document.querySelector('.display')
const button = document.querySelectorAll('div.button')
let displayText = document.querySelector('.display-text')
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
    })
}

// displays selected numbers
const number = document.querySelectorAll('div.number')
for (let j = 0; j < number.length; j++) {
    number[j].addEventListener('click', function () {
        displayText.textContent += number[j].textContent
    })
}
const clear = document.querySelector('#clear')
clear.addEventListener('click', function () {
    displayText.textContent = ""
})