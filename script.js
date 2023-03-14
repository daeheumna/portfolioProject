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
    strings : ['Dae Heum', 'coder', 'web-Dev', 'designer'],
    typeSpeed: 110,
    backSpeed : 80,
    backDelay : 1500,
    cursorChar: '_',
    loop : true
})
