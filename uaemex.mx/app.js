// Menú de Oferta Educativa
var submenuItems = document.querySelectorAll('.sp-megamenu-parent > li > span');

submenuItems.forEach(function(item) {
    item.addEventListener('mouseover', function(event) {
        var parent = this.parentElement;
        parent.classList.add('active');
    });

    item.parentElement.addEventListener('mouseover', function() {
        var parent = this;
        parent.classList.add('active');
    });

    item.parentElement.addEventListener('mouseout', function(event) {
        var parent = this;
        if (!parent.contains(event.relatedTarget)) {
            parent.classList.remove('active');
        }
    });
});

document.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    if (window.scrollY > 35) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    var submenuItems = document.querySelectorAll('.sp-megamenu-parent > li > span');
    var offcanvasToggler = document.querySelectorAll('.offcanvas-toggler-right');
    var offcanvasMenu = document.querySelector('.offcanvas-menu');
    var offcanvasOverlay = document.querySelector('.offcanvas-overlay');
    var closeOffcanvas = document.querySelector('.close-offcanvas');

    submenuItems.forEach(function (item) {
        item.addEventListener('mouseover', function (event) {
            var parent = this.parentElement;
            parent.classList.add('active');
        });

        item.parentElement.addEventListener('mouseover', function () {
            var parent = this;
            parent.classList.add('active');
        });

        item.parentElement.addEventListener('mouseout', function (event) {
            var parent = this;
            if (!parent.contains(event.relatedTarget)) {
                parent.classList.remove('active');
            }
        });
    });

    offcanvasToggler.forEach(function (toggler) {
        toggler.addEventListener('click', function (event) {
            event.preventDefault();
            document.body.classList.toggle('offcanvas-active');
        });
    });

    closeOffcanvas.addEventListener('click', function (event) {
        event.preventDefault();
        document.body.classList.remove('offcanvas-active');
    });

    offcanvasOverlay.addEventListener('click', function () {
        document.body.classList.remove('offcanvas-active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger-menu");
    const mobileMenu = document.getElementById("mobile-menu");
    const overlay = document.getElementById("menu-overlay");

    // Abrir menú al hacer clic en el botón hamburguesa
    hamburger.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    // Cerrar menú al hacer clic en el overlay
    overlay.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");
    });

    // Mostrar/Ocultar submenú cuando se hace clic en "Oferta Educativa"
    const menuItems = document.querySelectorAll(".menu-item > a");
    menuItems.forEach(item => {
        item.addEventListener("click", function (e) {
            // Prevenir que el enlace navegue
            e.preventDefault();

            // Alternar la clase active para mostrar el submenú
            const submenu = item.nextElementSibling; // El <ul> con las clases .submenu
            const icon = item.querySelector("i"); // El ícono dentro del enlace
            if (submenu) {
                submenu.style.display = submenu.style.display === "block" ? "none" : "block";
                item.parentElement.classList.toggle("active");

                // Alternar la rotación del ícono
                if (submenu.style.display === "block") {
                    icon.classList.remove("fa-rotate-90");
                    icon.classList.add("fa-rotate-180");
                } else {
                    icon.classList.remove("fa-rotate-180");
                    icon.classList.add("fa-rotate-90");
                }
            }
        });
    });
});