export default function sliders() {
  const heroSlider = document.querySelector(".s-hero__slider");

  if (heroSlider) {
    const heroBgSlider = document.querySelector(".s-hero__bg-slider");

    const bgSwiper = new Swiper(heroBgSlider, {
      speed: 900,
    });

    const swiper = new Swiper(heroSlider, {
      speed: 900,
      effect: "fade",
      controller: {
        control: bgSwiper,
      },
      autoplay: {
        delay: 6500,
      },
      pagination: {
        el: ".s-hero .slider-pagination",
        clickable: true,
      },
      navigation: {
        prevEl: ".s-hero .slider-arrow._prev",
        nextEl: ".s-hero .slider-arrow._next",
      },
    });
  }

  const catalogNavSlider = document.querySelector(
    ".s-catalog__tabs-nav-slider",
  );

  if (catalogNavSlider) {
    const swiper = new Swiper(catalogNavSlider, {
      speed: 900,
      spaceBetween: 15,
      slidesPerView: "auto",
      breakpoints: {
        1026: {
          spaceBetween: 20,
          slidesPerView: 4,
        },
      },
    });
  }

  const promoSlider = document.querySelector(".s-promo__slider");

  if (promoSlider) {
    const swiper = new Swiper(promoSlider, {
      speed: 900,
      spaceBetween: 15,
      slidesPerView: "auto",
      // autoplay: {
      //   delay: 5500
      // },
      scrollbar: {
        el: ".s-promo .slider-scrollbar",
        draggable: true,
      },
      breakpoints: {
        spaceBetween: 24,
        slidesPerView: "auto",
      },
    });
  }
}
