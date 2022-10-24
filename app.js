const button = document.querySelector('.button');
const responsiveErr = document.querySelector('.mobile-response-error');


button.addEventListener('click', () => {

    const windowWidth = window.innerWidth;

    errorMessage(windowWidth);

});


function errorMessage(winWidth) {

    if (winWidth > 767) {

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

        // remove error-show class in createErrDiv;
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
    else {

        // add response-error-show class in responsiveErr; 
        setTimeout(() => {

            responsiveErr.classList.add('response-error-show');

        }, 0);

         //  remove response-error-show class in responsiveErr;
        setTimeout(() => {

            responsiveErr.classList.remove('response-error-show');

        }, 2000);

    }

}


