const button = document.querySelector('.button');
const errorBox = document.querySelector('.error-box');

button.addEventListener('click', () => {
    const createErrDiv = document.createElement('div');
    createErrDiv.classList.add('error');

    const createH1 = document.createElement('h1');
    createH1.innerHTML = 'Please try again.';
    createErrDiv.appendChild(createH1);

    errorBox.appendChild(createErrDiv);


    setTimeout(function () {
        createErrDiv.classList.add('error-slow');
    }, 0);

    setTimeout(function () {
        createErrDiv.classList.remove('error-slow');
        createErrDiv.style.opacity = '0';
        createErrDiv.style.visibility = 'hidden';
    }, 2000)

    setTimeout(function () {
        errorBox.removeChild(createErrDiv);
    }, 3000)

});

