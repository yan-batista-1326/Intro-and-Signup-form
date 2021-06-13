let fName;
let lastName;
let email;
let password;

window.addEventListener('load', () => {
    fName = document.getElementById('name-input');
    fName.addEventListener('focus', () => {
        fName.parentElement.classList.remove('error-container');
        fName.parentElement.classList.remove('error-input');
    });

    lastName = document.getElementById('lastName-input');
    lastName.addEventListener('focus', () => {
        lastName.parentElement.classList.remove('error-container');
        lastName.parentElement.classList.remove('error-input');
    });

    email = document.getElementById('email-input');
    email.addEventListener('focus', () => {
        email.parentElement.classList.remove('error-container');
        email.parentElement.classList.remove('error-input');
    });

    password = document.getElementById('password-input');
    password.addEventListener('focus', () => {
        password.parentElement.classList.remove('error-container');
        password.parentElement.classList.remove('error-input');
    });

    document.getElementById('signin-form').addEventListener('submit', e => {
        e.preventDefault();
        checkForm();
        if(document.getElementsByClassName('error-container').length == 0)
            document.getElementById('signin-form').submit();
    }); 
});

function checkForm() {
    if(fName.value == "") {
        fName.classList.add('error-input');
        fName.parentElement.classList.add('error-container');
    }

    if(lastName.value == "") {
        lastName.classList.add('error-input');
        lastName.parentElement.classList.add('error-container');
    }

    if(!validateEmail(email.value) || email.value == "") {
        email.classList.add('error-input');
        email.parentElement.classList.add('error-container');
    }

    if(password.value == "") {
        password.classList.add('error-input');
        password.parentElement.classList.add('error-container');
    }
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}