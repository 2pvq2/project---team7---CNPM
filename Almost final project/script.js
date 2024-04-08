const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
const bookings = document.querySelector('.bookings');
const booking = document.querySelector('.booking');
const guide =document.querySelector('.guide');
const intro = document.querySelector('.intro');
const fields = document.querySelector('.fields');
const dtn = document.querySelector('.dtn');
const home = document.querySelector('.home');
const trangchu = document.querySelector('.trangchu');
const contribute = document.querySelector('.contribute');
const gopy = document.querySelector('.gopy');



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
    gopy.classList.remove('active-gopy');
    trangchu.classList.remove('active-trangchu');
    intro.classList.remove('active-intro');


    
    
});

close.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

bookings.addEventListener('click', ()=> {
    booking.classList.toggle('active-booking');
    wrapper.classList.remove('active-popup');
    intro.classList.remove('active-intro');
    dtn.classList.remove('active-dtn');
    gopy.classList.remove('active-gopy');
    trangchu.classList.remove('active-trangchu');

});

guide.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    intro.classList.toggle('active-intro');
    booking.classList.remove('active-booking');
    dtn.classList.remove('active-dtn');
    gopy.classList.remove('active-gopy');
    trangchu.classList.remove('active-trangchu');

});

fields.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    intro.classList.remove('active-intro');
    booking.classList.remove('active-booking');
    dtn.classList.toggle('active-dtn');
    gopy.classList.remove('active-gopy');
    trangchu.classList.remove('active-trangchu');

});

home.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    intro.classList.remove('active-intro');
    booking.classList.remove('active-booking');
    dtn.classList.remove('active-dtn');
    gopy.classList.remove('active-gopy');
    trangchu.classList.toggle('active-trangchu');

});

contribute.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
    intro.classList.remove('active-intro');
    booking.classList.remove('active-booking');
    dtn.classList.remove('active-dtn');
    trangchu.classList.remove('active-trangchu');
    gopy.classList.toggle('active-gopy');
});







