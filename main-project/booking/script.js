const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
const bookings = document.querySelector('.bookings');
const booking = document.querySelector('.booking');
const home =document.querySelector('.home');
const intro = document.querySelector('.intro');
const fields = document.querySelector('.fields');
const dtn = document.querySelector('.dtn');



registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
    booking.classList.remove('active-booking');
    intro.classList.remove('active-intro');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    booking.classList.remove('active-booking');
    intro.classList.remove('active-intro');
    
});

popup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
    booking.classList.remove('active-booking');
    dtn.classList.remove('active-dtn');

    
    
});

close.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

bookings.addEventListener('click', ()=> {
    booking.classList.toggle('active-booking');
    wrapper.classList.remove('active-popup');
    intro.classList.remove('active-intro');
    dtn.classList.remove('active-dtn');
});

home.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    intro.classList.toggle('active-intro');
    booking.classList.remove('active-booking');
    dtn.classList.remove('active-dtn');
});

fields.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    intro.classList.remove('active-intro');
    booking.classList.remove('active-booking');
    dtn.classList.toggle('active-dtn');
});





