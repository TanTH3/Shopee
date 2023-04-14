const wrapper = document.querySelector('.wrapper');
const authForms = document.querySelectorAll('.auth-form')
const loginForm = document.querySelector('.login-form');
const loginLinks = document.querySelectorAll('.login-link');
const registerLinks = document.querySelectorAll('.register-link');
const registerForm = document.querySelector('.register-form');
const modal = document.querySelector('.modal');
const closeBtns = document.querySelectorAll('.close-btn')

function abc () {
    modal.classList.add('active');
    registerForm.classList.add('open');
    loginForm.classList.remove('open')
}
function bnm () {
    modal.classList.add('active');
    registerForm.classList.remove('open');
    loginForm.classList.add('open')
}
function xyz (){
    modal.classList.remove('active');
    registerForm.classList.remove('open');
    loginForm.classList.remove('open')
}


for (const registerLink of registerLinks){
    registerLink.addEventListener('click', abc) 
}
for (const loginLink  of loginLinks){
    loginLink.addEventListener('click', bnm)
}
for (const closeBtn  of closeBtns){
    closeBtn.addEventListener('click', xyz)
}
for (const authForm  of authForms){
    authForm.addEventListener('click', function(event){
        event.stopPropagation()
    })
}
    wrapper.addEventListener('click',xyz)