// // const carousel = document.getElementById('carouselPrincipal');
// // const prevButton = document.getElementById('prev');
// // const nextButton = document.getElementById('next');

// // let scrollAmount = 0;
// // const slideWidth = carousel.offsetWidth /3;
// // const autoScrollInterval = 5000;  

// // nextButton?.addEventListener('click', () => {
// //     if (scrollAmount < carousel.scrollWidth - carousel.offsetWidth) {
// //         scrollAmount += slideWidth;
// //         carousel.scrollTo({
// //             top: 0,
// //             left: scrollAmount,
// //             behavior: 'smooth'
// //         });
// //     }
// // });

// // prevButton?.addEventListener('click', () => {
// //     if (scrollAmount > 0) {
// //         scrollAmount -= slideWidth;
// //         carousel.scrollTo({
// //             top: 0,
// //             left: scrollAmount,
// //             behavior: 'smooth'
// //         });
// //     }
// // });

// // setInterval(() => {
// //     if (scrollAmount >= carousel.scrollWidth - carousel.offsetWidth) {
// //         scrollAmount = 0;
// //     } else {
// //         scrollAmount += slideWidth;
// //     }
// //     carousel.scrollTo({
// //         top: 0,
// //         left: scrollAmount,
// //         behavior: 'smooth'
// //     });
// // }, autoScrollInterval);



document.addEventListener('DOMContentLoaded', () => {
    function setupCarousel(carouselId, prevButtonId, nextButtonId) {
      const carousel = document.getElementById(carouselId);
      const prevButton = document.getElementById(prevButtonId);
      const nextButton = document.getElementById(nextButtonId);
  
      let scrollAmount = 0;
      const slideWidth = carousel.offsetWidth / 3;
      const autoScrollInterval = 5000;
  
      nextButton?.addEventListener('click', () => {
        console.log('Botón siguiente clickeado')
        if (scrollAmount < carousel.scrollWidth - carousel.offsetWidth) {
          scrollAmount += slideWidth;
          carousel.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
          });
        }
      });
  
      prevButton?.addEventListener('click', () => {
        console.log('Botón an clickeado')
        if (scrollAmount > 0) {
          scrollAmount -= slideWidth;
          carousel.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
          });
        }
      });
  
      setInterval(() => {
        if (scrollAmount >= carousel.scrollWidth - carousel.offsetWidth) {
          scrollAmount = 0;
        } else {
          scrollAmount += slideWidth;
        }
        carousel.scrollTo({
          top: 0,
          left: scrollAmount,
          behavior: 'smooth'
        });
      }, autoScrollInterval);
    }
  
    setupCarousel('carouselPrincipal', 'prevPrincipal', 'nextPrincipal');
    setupCarousel('carouselTestimonios', 'prevSecundario', 'nextSecundario');
  });
  