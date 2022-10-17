const button = document.querySelectorAll('div.button')
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('mouseover', function () {
        button[i].classList.add('hover');
    });
    button[i].addEventListener('mouseout', function () {
        button[i].classList.remove('hover');
    });
}
