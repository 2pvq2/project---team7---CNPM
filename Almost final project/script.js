const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');



registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

popup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

close.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});
