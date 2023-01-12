const menu = document.querySelector(".navbar > img:nth-child(3)");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu')
});

const sections = document.querySelectorAll('.nav-links > ul > li > a');
console.log(sections);

sections.forEach(section => {
  section.addEventListener('click', function () {

    sections.forEach(title => title.classList.remove('active'));
    this.classList.add('active');
    
  });
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  slidesPerView: 3,
  spaceBetween: 50,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  },


})




