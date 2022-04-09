const signup = document.querySelector(".btn");
const termCond = document.querySelector("#accept");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const pdFormat = document.querySelector(".pdFormat");

const passwordPattern = /^[a-zA-Z0-9]{8,15}$/;

password.addEventListener("focusin", function(){
    pdFormat.style.display = 'block';

    password.addEventListener("keyup", function(){
        if(passwordPattern.test(password.value)){
            password.style.borderColor = 'green';
            pdFormat.style.color = 'green';
        } else{
            password.style.borderColor = 'red';
            pdFormat.style.color = 'red';
        }
    })
})

password.addEventListener("focusout", function(){
    pdFormat.style.display = none;
})

confirmPassword.addEventListener('focusin', function(){
    pdFormat.style.display = 'block';
    confirmPassword.addEventListener('keyup', function(){
        if(passwordPattern.test(confirmPassword.value)&& (password.value === confirmPassword.value)){
            confirmPassword.style.borderColor = 'green';
            pdFormat.style.color = 'green';
        }else {
            confirmPassword.style.borderColor = 'green';
            pdFormat.style.color = 'green';
        }
    })
})

confirmPassword.addEventListener('focusout', function(){
    pdFormat.style.display = 'none';
})

termCond.addEventListener('change',function(){
    if(termCond.checked === true){
        signup.disabled = false;
    }else if(termCond.checked === false){
        signup.disabled = true;
    }
}) 