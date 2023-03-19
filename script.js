const hamburgerBtn = document.querySelector('.hamburger-btn'),
navMenu = document.querySelector('.nav-menu'),
closeNavBtn = navMenu.querySelector('.close-nav-menu');

hamburgerBtn.addEventListener('click', showNavMenu);
closeNavBtn.addEventListener('click', hideNavMenu);

function showNavMenu(){
    navMenu.classList.add('open');
}

function hideNavMenu(){
    navMenu.classList.remove('open');
    fadeOutEffect();
}

function fadeOutEffect(){
    document.querySelector('.fade-out-effect').classList.add('active');
    setTimeout(()=>{
        document.querySelector('.fade-out-effect').classList.remove('active');
    }, 300)
}

document.addEventListener('click', (event) => {
    if(event.target.classList.contains('link-item')){
        if(event.target.hash !==""){
            hideNavMenu();
        } 
    } 
})



var typingEffect = new Typed('.autoType', {
    strings : ['denny', 'coder', 'web-dev'],
    typeSpeed: 110,
    backSpeed : 80,
    backDelay : 1500,
    loop : true
})



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




const modals = document.querySelectorAll('[data-modal]');

modals.forEach(function (trigger) {
  trigger.addEventListener('click', function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add('open');
    const exits = modal.querySelectorAll('.modal-exit');
    exits.forEach(function (exit) {
      exit.addEventListener('click', function (event) {
        event.preventDefault();
        modal.classList.remove('open');
      });
    });
  });
});




const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
        else {
            entry.target.classList.remove('show');
        }
    })
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));