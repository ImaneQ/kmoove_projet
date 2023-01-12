var app = document.getElementById('acceuil');

var typewriter = new Typewriter(app, {
    // loop: true
    delay: 50,
});

typewriter.typeString(' KMOOVE, c\'est quoi ? En 3#')
    .pauseFor(2500)
    .deleteAll()
    .typeString('1# Transformer vos espaces et murs en une console de jeux vidéos sportive grandeur nature ')
    .pauseFor(3000)
    .deleteAll()
    .typeString('2# Un support de communication unique')
    .pauseFor(2500)
    .deleteAll()
    .typeString('3# Vecteur de lien social et de vivre ensemble')
    .pauseFor(3000)
    .start();






    function play() {
        var audio = document.getElementById("audio");
        audio.play();
      }



    //   Ajouter ce son à la transition
    //   https://mixkit.co/free-sound-effects/game/
    //   Arcade retro scoring counter 