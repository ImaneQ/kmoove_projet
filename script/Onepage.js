// VanillaTilt.init(document.querySelector(".box3"),{
//     max: 25,
//     speed: 400,
//     glare: true,
//     "max-glare": 1,
// });


// const text = document.querySelector('.page1 > p:nth-child(3)');

// const button = document.querySelector('.page1 > h2:nth-child(1) > img:nth-child(1)');

// button.addEventListener('click', event => {
//   button.style.color = 'green';
// });


// button.onclick = function () {
//     if (text.style.display !== "none") {
//         text.style.display = "none";
//     } else {
//         text.style.display = "block";
//     }
// };


// const text2 = document.querySelector('.box > p:nth-child(1)');

// const button2 = document.querySelector(' #page2 > h2:nth-child(1) > img:nth-child(1)');

// button2.onclick = function () {
//     if (text2.style.display !== "none") {
//         text2.style.display = "none";
//     } else {
//         text2.style.display = "block";
//     }
// };

// Animated percentage 


const num = document.querySelector(".pourcentage_1 > span:nth-child(1)");
let counter = 0;
setInterval(() => {
    if (counter == 73) {
        clearInterval();
    } else {
        counter += 1;
        num.textContent = counter + "%";
    }
}, 35);


const num2 = document.querySelector(".pourcentage_2 > span:nth-child(1)");
let counter2 = 0;
setInterval(() => {
    if (counter2 == 61) {
        clearInterval();
    } else {
        counter2 += 1;
        num2.textContent = counter2 + "%";
    }
}, 35);

const num3 = document.querySelector(".pourcentage_3 > span:nth-child(1)");
let counter3 = 0;
setInterval(() => {
    if (counter3 == 95) {
        clearInterval();
    } else {
        counter3 += 1;
        num3.textContent = counter3 + "%";
    }
}, 35);


let mytitle = document.querySelector('.titre_infos');
mytitle.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
});


const menu = document.querySelector(".navbar > img:nth-child(3)");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
});







// let array = [[['a1','b1','c1'],'b1','c1'],['a2','b2','c2']]
// let objects = [{couleur:'rouge'},{couleur:'bleu'},{couleur:'vert'},{couleur:'orange'}]
// let valeur2 = array[1][2];

// valeur2 = 'coucou'


// for (let index = 0; index < objects.length; index++) {
//     changerCouleur(objects[index])
// }



// function changerCouleur(objetAChanger) {
//     objetAChanger.couleur = 'corail';
//     objetAChanger.changedColor = true;
// }

// console.log(objects);

// si besoibn de modifier un tableau 
// for (let index = 0; index < array.length; index++) {
//     array[index] = 4
// }

// si besoin de parcourir un tableau 

// for (const elements of array) {
//     for (const element of elements) {
//     console.log(element);
//     }
// }

// array.forEach(elements => {
//     elements.forEach(element => {
//         console.log(element);
        
//     });
// });


