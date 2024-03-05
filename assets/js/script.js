const header = document.querySelector('.header');
const menuButton = document.querySelector('#hamburger');
const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.main__content');
const main = document.querySelector('.main');

if(menuButton) menuButton.addEventListener('click', ()=> sidebarHandler());

