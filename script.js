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
  const quantityInputs = document.querySelectorAll('.form__input--quantity');

  function updateTotalPrice() {
      let totalPrice = 0;
      quantityInputs.forEach(input => {
          const quantity = parseInt(input.value, 10);
          
          if (quantity > 0) {
              const priceString = input.getAttribute('data-price');
              const price = parseFloat(priceString);
              totalPrice += (quantity * price);
          }
      });
      
      if (priceDisplay) {
          const formattedPrice = totalPrice.toLocaleString('tr-TR');
          priceDisplay.textContent = formattedPrice + "₺";
      }
  }

  if (quantityInputs.length > 0 && priceDisplay) {
      updateTotalPrice(); 
      
      quantityInputs.forEach(input => {
          input.addEventListener('input', updateTotalPrice);
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