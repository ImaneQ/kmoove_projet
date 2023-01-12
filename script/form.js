const monMenu = document.querySelector(".navbar > img:nth-child(3)");
const navLinks = document.querySelector(".nav-links");

monMenu.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
});


var app = document.getElementById('ctcnous');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hello!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Contactez Nous ! ')
    .pauseFor(2500)
    .deleteChars(18)
    .typeString('<strong></strong>')
    .pauseFor(2500)
    .start();



