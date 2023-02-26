/*Commented out

//Nav Bar
const nav = document.querySelector('nav');
const menuIcon = document.querySelector('.menuicon');
const menu = document.querySelector('.menu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
    menuIcon.style.display = 'block';
    menu.style.display = 'none';
  } else {
    nav.classList.remove('scrolled');
    menuIcon.style.display = 'none';
    menu.style.display = 'block';
  }
});


//Contact

window.addEventListener("load", function() {
    const form = document.querySelector('formsubmit');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Success!");
      })
    });
  });




  */
