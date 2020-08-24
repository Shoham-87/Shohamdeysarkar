var preloader=document.getElementById('preloader');
var navigation=document.querySelector('nav');
var about=document.querySelector('#about');
var hamburger=document.getElementById('menu');
var aboutposition=about.offsetTop;
var navid=setInterval(navbar, 100);
function preload(){
    preloader.removeAttribute('id');
}
function navbar(){
    if(pageYOffset > 300){
    navigation.style.position="fixed";
    clearInterval(navid);
    }
    else{
    navigation.style.position="none";
    }
}
hamburger.addEventListener('click',ham);
function ham(){
    hamburger.classList.toggle("hamclick");
    navigation.classList.toggle("hamclick");
    document.getElementsByTagName('main')[0].classList.toggle('hambg');
}