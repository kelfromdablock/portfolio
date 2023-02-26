//Nav Bar
const nav = document.querySelector('nav');
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

window.addEventListener('scroll', () => {
  if (window.scrollY > nav.offsetHeight + 10) {
    nav.classList.add('scrolled');
    menuIcon.style.display = 'inline-block';
    menu.style.display = 'hidden';
  } else {
    nav.classList.remove('scrolled');
    menuIcon.style.display = 'hidden';
    menu.style.display = 'inline-block';
  }
});







//Projects

let projectImage = document.getElementsByClassName('project-item');
const hoverProjectImg = () => {
    projectImage.style.display = 'block';
}

projectImage.addEventListener('mouseover', hoverProjectImg);




