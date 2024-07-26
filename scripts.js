// scripts.js
let slideIndex = 0;
    let slideInterval;

    function currentSlide(n) {
      clearInterval(slideInterval); // Stop automatic sliding when dot is clicked
      showSlides(slideIndex = n);
      slideInterval = setInterval(nextSlide, 3000); // Restart automatic sliding
    }

    function showSlides(n) {
      const slides = document.querySelectorAll('.slide');
      const dots = document.querySelectorAll('.dot');
      
      if (n >= slides.length) {
        slideIndex = 0;
      } else if (n < 0) {
        slideIndex = slides.length - 1;
      } else {
        slideIndex = n;
      }
      
      const offset = -slideIndex * 100;
      document.querySelector('.employer-slides').style.transform = `translateX(${offset}%)`;
      
      dots.forEach(dot => dot.classList.remove('active'));
      dots[slideIndex].classList.add('active');
    }

    function nextSlide() {
      slideIndex++;
      showSlides(slideIndex);
    }

    // Initialize and set automatic sliding
    showSlides(slideIndex);
    slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
 