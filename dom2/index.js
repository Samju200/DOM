let submitForm = document.getElementById('validateForm');
let email = document.getElementById('email');
let password = document.getElementById('password');
let fullName = document.getElementById('fullName');
let phoneNumber = document.getElementById('phoneNumber');
let year = document.getElementById('year');
let gender = document.getElementById('gender');
let bio = document.getElementById('bio');


function required(field, event){
    if(field.value == ""){
        field.nextElementSibling.innerHTML = " This field is required";
        event.preventDefault();
        return false;
    }else{
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function emailFieldValidation(event){
    emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.value.match(emailRegex)){
        email.nextElementSibling.innerHTML = "Please enter a valid email";
        event.preventDefault();
        return false;
    } else{
        email.nextElementSibling.innerHTML = "";
        return true;
    }
}

function passwordValidation(event){
    passwordRegex = /^[a-z0-9]+$/i;
    if(!password.value.match(passwordRegex)){
        password.nextElementSibling.innerHTML = "Please password must contain letter or number only";
        event.preventDefault();
        return false;
    }else if(!(password.value.match(passwordRegex).length >= 8)){
        password.nextElementSibling.innerHTML = "Please password length should be equal or greater than 8";
        event.preventDefault();
        return false;
    }else{
        password.nextElementSibling.innerHTML = "";
        return true;
    }
}

function yearValidation(e){
    yearRegex = /^[0-9]{4}$/i;
    if(!year.value.match(yearRegex)){
        year.nextElementSibling.innerHTML = "Please enter a valid year";
        event.preventDefault();
        return false
    }else{
        year.nextElementSibling.innerHTML = "";
        return true
    }
}

function validateForm(e){
    required(email, e);
    required(password, e);
    required(fullName, e);
    required(phoneNumber, e);
    required(year, e);
    required(gender, e);
    required(bio, e);
    emailFieldValidation(e)
    passwordValidation(e)
    yearValidation(e)
    return true;
}
submitForm.addEventListener('submit', validateForm);
