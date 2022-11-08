const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    speed: 900,
    autoplay: {
        delay: 5000,
      },
  
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
  });