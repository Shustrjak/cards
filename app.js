'use strict';

function slidesPlugin(e=2) {
   const slides = document.querySelectorAll(".slide");

   slides[e].classList.add('active');

   for (const slide of slides) {
       slide.addEventListener('click', () => {
           clearActiveClasses();
           slide.classList.add('active');
       });
   }

   function clearActiveClasses() {
       slides.forEach((slide) =>
           slide.classList.remove('active'));
   }
}

slidesPlugin(numberSlide());

function numberSlide() {
    let date = new Date();
    let h = date.getHours();
    if (h > 7 && h < 12) {
        console.log('Завтрак');
        return 0;
    } else if (h >= 12 && h < 16) {
        console.log('обед и спать');
        return 1;
    } else if (h >= 16 && h < 20) {
        console.log('жрать в ночь');
        return 2;
    } else {
        console.log('бухнем');
        return 3;
    }
}
