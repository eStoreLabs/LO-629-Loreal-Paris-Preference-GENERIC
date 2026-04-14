(() => {
  const swiper = new Swiper('#es-rc .swiper', {
    loop: true,
    autoHeight: true,

    // Navigation arrows
    navigation: {
      nextEl: '#es-rc .swiper-button-next',
      prevEl: '#es-rc .swiper-button-prev',
    },
    pagination: {
      el: '#es-rc .swiper-pagination',
      clickable: true,
    },
  });
})();
