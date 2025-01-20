// var menu = document.querySelector('.hamburger');

// function toggleMenu (event) {
//   this.classList.toggle('is-active');
//   document.querySelector( ".menuppal" ).classList.toggle("is_active");
//   event.preventDefault();
// }
// menu.addEventListener('click', toggleMenu, false);

document.addEventListener("scroll", function() {
  const header = document.getElementById("header");
  if (window.scrollY > 35) {
      header.classList.add("scrolled");
  } else {
      header.classList.remove("scrolled");
  }
});