document.addEventListener('DOMContentLoaded', () => {

  
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const navMenu = document.querySelector('.nav');


  if (hamburgerBtn && navMenu) { 
    hamburgerBtn.addEventListener('click', () => {
      navMenu.classList.toggle('nav--open');
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
    });
  }

  const priceDisplay = document.getElementById('selected-price');
  const productCheckboxes = document.querySelectorAll('.menu-checkboxes input[type="checkbox"]');

  function updateTotalPrice() {
      let totalPrice = 0;
      productCheckboxes.forEach(checkbox => {
          if (checkbox.checked) {
              const priceString = checkbox.getAttribute('data-price');
              totalPrice += parseFloat(priceString);
          }
      });
      
      if (priceDisplay) {
          priceDisplay.textContent = totalPrice + "₺";
      }
  }

  if (productCheckboxes.length > 0 && priceDisplay) {
      updateTotalPrice(); 
      productCheckboxes.forEach(checkbox => {
          checkbox.addEventListener('change', updateTotalPrice);
      });
  }

  if (document.querySelector('.testimonials .swiper')) {
    
    const swiper = new Swiper('.testimonials .swiper', {
      slidesPerView: 1, 
      spaceBetween: 24, 
      
      breakpoints: {
        768: {
          slidesPerView: 2, 
        },
        1024: {
          slidesPerView: 3, 
        },
      },
      
      loop: true, 
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true, 
      },
      
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

}); 