//this work is a poduction of star mems... email me at memsweb2@gmail.com if you dont understand any code
//declarin variables
var fullName = document.getElementById('fname');
var fNameOut = document.getElementById('fname-output');
var userName = document.getElementById('uname');
var uNameOut = document.getElementById('uname-output');
var email = document.getElementById('email');
var emailOut = document.getElementById('email-output');
var password1 = document.getElementById('password');
var passwordOut = document.getElementById('password-output');
var password2 = document.getElementById('password2');
var submitBtn = document.getElementById('submitBtn');
var fnameErr = document.querySelector('.fname-error');
var unameErr = document.querySelector('.uname-error');
var emailErr = document.querySelector('.email-error');
var passwordErr = document.querySelector('.password-error');
var password2Err = document.querySelector('.password2-error');
var fnameReg = /^[a-zA-Z\s]+$/;
var emailReg = /^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
var unameReg = /^[a-zA-Z0-9]+$/;

//validating fullname

$('#fname').on('input', function() {

    if (fullName.value.trim() === '') { //if the value is nothing after removing spaces
        fullName.style.border = '1px solid red'; //change the name input border to red
        fnameErr.style.paddingLeft = '5px';
        fNameOut.innerText = '';
        fnameErr.style.paddingRight = '5px';
        fnameErr.style.transform = 'none';
        fnameErr.style.transition = 'none';
        fnameErr.style.animationName = 'error';
        fnameErr.innerHTML = 'Please this field is required'; // writes an error message


    } else if (fnameReg.test(fullName.value.trim()) === false) {
        fullName.style.border = '1px solid red';
        fnameErr.style.paddingLeft = '5px';
        fnameErr.style.paddingRight = '5px';
        fNameOut.innerText = '';
        fnameErr.style.transform = 'none';
        fnameErr.style.transition = 'none';
        fnameErr.style.animationName = 'error';
        fnameErr.innerHTML = 'Please input letters only';

    } else if (fullName.value.trim().length <= 3) { //if the value has been checked and it's not empty then check if the value inputed is less than or equal to 3
        fullName.style.border = '1px solid red'; //change the name input border to red
        fnameErr.style.paddingLeft = '5px';
        fnameErr.style.paddingRight = '5px';
        fNameOut.innerText = '';
        fnameErr.style.transform = 'none';
        fnameErr.style.transition = 'none';
        fnameErr.style.animationName = 'error';
        fnameErr.innerHTML = 'Please input at least 4 characters'; // writes an error message

    } else {
        fullName.style.border = '1px solid rgb(18, 206, 18)';
        fNameOut.innerText = fullName.value;
        fnameErr.innerHTML = 'Sucess';
        fnameErr.style.animationName = 'sucess';
        fnameErr.style.background = 'green';
        fnameErr.style.color = 'white';

        function slide() {
            fnameErr.style.transform = 'rotateX(-90deg)';
            fnameErr.style.transition = '3s ease all';
        }

        setTimeout(slide, 1000);
    }

})

//validating Username

$('#uname').on('input', function() {


    if (userName.value.trim() === '') {
        userName.style.border = '1px solid red';
        unameErr.style.paddingLeft = '5px';
        uNameOut.innerText = '';
        unameErr.style.paddingRight = '5px';
        unameErr.style.transform = 'none';
        unameErr.style.transition = 'none';
        unameErr.style.animationName = 'error';
        unameErr.innerHTML = 'Please this field is required';


    } else if (unameReg.test(userName.value.trim()) === false) {
        userName.style.border = '1px solid red';
        unameErr.style.paddingLeft = '5px';
        uNameOut.innerText = '';
        unameErr.style.paddingRight = '5px';
        unameErr.style.transform = 'none';
        unameErr.style.transition = 'none';
        unameErr.style.animationName = 'error';
        unameErr.innerHTML = 'Please input only alphanumeric characters';
    } else if (userName.value.trim().length <= 3) {
        userName.style.border = '1px solid red';
        unameErr.style.paddingLeft = '5px';
        uNameOut.innerText = '';
        unameErr.style.paddingRight = '5px';
        unameErr.style.transform = 'none';
        unameErr.style.transition = 'none';
        unameErr.style.animationName = 'error';
        unameErr.innerHTML = 'Please input at least 4 characters';

    } else {
        userName.style.border = '1px solid rgb(18, 206, 18)';
        uNameOut.innerText = userName.value;
        unameErr.innerHTML = 'Sucess';
        unameErr.style.animationName = 'sucess';
        unameErr.style.background = 'green';
        unameErr.style.color = 'white';

        function slide() {
            unameErr.style.transform = 'rotateX(-90deg)';
            unameErr.style.transition = '3s ease all';
        }

        setTimeout(slide, 1000);
    }
})


//validating email
$('#email').on('input', function() {


    if (email.value.trim() === '') {
        email.style.border = '1px solid red';
        emailErr.style.paddingLeft = '5px';
        emailErr.style.paddingRight = '5px';
        emailOut.innerText = '';
        emailErr.style.transform = 'none';
        emailErr.style.transition = 'none';
        emailErr.style.animationName = 'error';
        emailErr.innerHTML = 'Please this field is required';


    } else if (emailReg.test(email.value.trim()) === false) {
        email.style.border = '1px solid red';
        emailErr.style.paddingLeft = '5px';
        emailErr.style.paddingRight = '5px';
        emailOut.innerText = '';
        emailErr.style.transform = 'none';
        emailErr.style.transition = 'none';
        emailErr.style.animationName = 'error';
        emailErr.innerHTML = 'Please input valid email address';

    } else {
        email.style.border = '1px solid rgb(18, 206, 18)';
        emailOut.innerText = email.value;
        emailErr.innerHTML = 'sucess';
        emailErr.style.animationName = 'sucess';
        emailErr.style.background = 'green';
        emailErr.style.color = 'white';

        function slide() {
            emailErr.style.transform = 'rotateX(-90deg)';
            emailErr.style.transition = '3s ease all';
        }

        setTimeout(slide, 1000);
    }
})


//validating the first password
$('#password').on('input', function() {


    if (password1.value.trim() === '') {
        password1.style.border = '1px solid red';
        passwordErr.style.paddingLeft = '5px';
        passwordErr.style.paddingRight = '5px';
        password2.value = '';
        passwordOut.value = '';
        passwordErr.style.transform = 'none';
        passwordErr.style.transition = 'none';
        passwordErr.style.animationName = 'error';
        passwordErr.innerHTML = 'Please this field is required';


    } else if (password1.value.trim().length <= 7) {
        password1.style.border = '1px solid red';
        passwordErr.style.paddingLeft = '5px';
        passwordErr.style.paddingRight = '5px';
        password2.value = '';
        passwordOut.value = '';
        passwordErr.style.transform = 'none';
        passwordErr.style.transition = 'none';
        passwordErr.style.animationName = 'error';
        passwordErr.innerHTML = 'Password must be a min of 8 characters';

    } else {
        password1.style.border = '1px solid rgb(18, 206, 18)';
        passwordErr.innerHTML = 'sucess';
        passwordErr.style.animationName = 'sucess';
        passwordErr.style.background = 'green';
        passwordErr.style.color = 'white';

        function slide() {
            passwordErr.style.transform = 'rotateX(-90deg)';
            passwordErr.style.transition = '3s ease all';
        }

        setTimeout(slide, 1000);
    }
})


//validating the second password

$('#password2').on('input', function() {
    if (password1.value.trim() === '') {
        password2.value = '';
        password1.focus();
        password1.style.border = '1px solid red';
        passwordErr.style.transform = 'none';
        passwordErr.style.transition = 'none';
        passwordErr.style.paddingLeft = '5px';
        passwordErr.style.paddingRight = '5px';
        passwordOut.value = '';
        password2Err.style.animationName = 'error';
        passwordErr.innerHTML = 'Please this field is required';
    } else if (password1.value.trim().length <= 7) {

        password2.value = '';
        password1.focus();
        password1.style.border = '1px solid red';
        passwordErr.style.paddingLeft = '5px';
        passwordErr.style.paddingRight = '5px';
        passwordOut.value = '';
        passwordErr.style.transform = 'none';
        passwordErr.style.transition = 'none';
        password2Err.style.animationName = 'error';
        passwordErr.innerHTML = 'Password must be a min of 8 characters';
    } else {
        if (password2.value.trim() !== password1.value) {
            password2.style.border = '1px solid red';
            password2Err.style.paddingLeft = '5px';
            password2Err.style.paddingRight = '5px';
            password2Err.style.transform = 'none';
            password2Err.style.transition = 'none';
            password2Err.style.animationName = 'error';
            password2Err.innerHTML = 'Password doesn\'t match';
            passwordOut.value = '';
            password2.focus();
        } else {
            password2.style.border = '1px solid rgb(18, 206, 18)';
            password2Err.innerHTML = 'sucess';
            passwordOut.value = password1.value;
            password2Err.style.animationName = 'sucess';
            password2Err.style.background = 'green';
            password2Err.style.color = 'white';

            function slide() {
                password2Err.style.transform = 'rotateX(-90deg)';
                password2Err.style.transition = '3s ease all';
            }

            setTimeout(slide, 1000);
        }
    }

})


$(':input').on('input', function() {





    if (fullName.value.trim() !== '' && fullName.value.trim().length >= 4 && userName.value.trim() !== '' && userName.value.trim().length >= 4 && email.value.trim() !== '' && password1.value.trim() !== '' && password2.value.trim() === password1.value.trim() && fnameReg.test(fullName.value.trim()) === true && emailReg.test(email.value.trim()) === true && unameReg.test(userName.value.trim()) === true) {
        submitBtn.style.background = 'rgb(79, 79, 235)';
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.style.background = 'rgb(189, 189, 240)';
        submitBtn.setAttribute('disabled',
            'disabled');
    }
})

$('#view-pass').click(function() {
    if (passwordOut.type !== 'text') {
        passwordOut.type = 'text';
    } else {
        passwordOut.type = 'password';
    }
})


$('#submitBtn').click(function() {
    if (submitBtn.disabled === false && fullName.value.trim() !== '' && fullName.value.trim().length >= 4 && userName.value.trim() !== '' && userName.value.trim().length >= 4 && email.value.trim() !== '' && password1.value.trim() !== '' && password2.value.trim() === password1.value.trim() && fnameReg.test(fullName.value.trim()) === true && emailReg.test(email.value.trim()) === true && unameReg.test(userName.value.trim()) === true) {
        $('.form-input').slideToggle(2500);
        $('.submited-form').slideToggle(2500);
    }
})



$('#cancel-btn').click(function() {
    $('.form-input').slideToggle(2500);
    $('.submited-form').slideToggle(2500);
})

$('#submit-btn').click(function() {
    if (fullName.value.trim() === '' || fullName.value.trim().length <= 3 || fnameReg.test(fullName.value.trim()) === false) {
        fullName.focus();
        return false;
    }


    if (userName.value.trim() === '' || userName.value.trim().length <= 3 || unameReg.test(userName.value.trim()) === false) {
        userName.focus();
        return false;
    }

    if (email.value.trim() === '' || emailReg.test(email.value.trim()) === false) {
        email.focus();
        return false;
    }

    if (password1.value.trim() === '' || password1.value.trim().length <= 7) {
        password1.focus();
        return false;
    }

    if (password2.value.trim() !== password1.value.trim()) {
        password2.focus();
        return false;
    }

    if (fullName.value.trim() !== '' && fullName.value.trim().length >= 4 && userName.value.trim() !== '' && userName.value.trim().length >= 4 && email.value.trim() !== '' && password1.value.trim() !== '' && password2.value.trim() === password1.value.trim() && fnameReg.test(fullName.value.trim()) === true && emailReg.test(email.value.trim()) === true && unameReg.test(userName.value.trim()) === true) {
        return true;
    } else {
        return false;
    }
});