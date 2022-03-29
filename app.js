//Este es el botón
const op3 = document.getElementById('op3');
// Este sería el menú
const menu = document.querySelector('.menu');

op3.addEventListener('click', showMenu);
// Este evento sería para cuando ya no se esté encima del menú, no es precisamente con cancelIdleCallback, pero podría ServiceWorkerRegistration.
menu.addEventListener('mouseleave', hideMenu);


function showMenu() {
  menu.classList.add('menu-visible');
  menu.classList.remove('menu-hidden');
}

function hideMenu() {
  if (menu.classList.contains('menu-visible')) {
    menu.classList.add('menu-hidden');
    menu.classList.remove('menu-visible');
  }  
}



