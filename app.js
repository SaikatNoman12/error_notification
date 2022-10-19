const button = document.querySelector('.button');

button.addEventListener('click', () => {
    errorMessage()
});


function errorMessage() {
    
    const errorBox = document.querySelector('.error-box');

    const createErrDiv = document.createElement('div');
    createErrDiv.classList.add('error');

    const createH1 = document.createElement('h1');
    createH1.innerHTML = 'Please try again.';
    createErrDiv.appendChild(createH1);

    errorBox.appendChild(createErrDiv);

    // add error-show class in createErrDiv;  
    setTimeout(function () {
        createErrDiv.classList.add('error-show');
    }, 0);

    // remove error-show class in createErrDiv
    setTimeout(function () {
        createErrDiv.classList.remove('error-show');
        createErrDiv.style.opacity = '0';
        createErrDiv.style.visibility = 'hidden';
    }, 2000);

    // remove child on 3 second;
    setTimeout(function () {
        errorBox.removeChild(createErrDiv);
    }, 3000);

}

