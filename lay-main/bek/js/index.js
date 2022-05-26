let menu = document.querySelector('#menu');
let navbar = document.querySelector('.header__nav');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('a');
  }