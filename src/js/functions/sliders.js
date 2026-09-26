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
      autoplay: {
        delay: 5500,
      },
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

  const partnersSlider = document.querySelector(".s-partners__slider");

  if (partnersSlider) {
    const swiper = new Swiper(partnersSlider, {
      slidesPerView: "auto",
      spaceBetween: 15,
      speed: 15000,
      watchOverflow: true,
      loop: true,
      autoplay: {
        delay: 0,
      },
      allowTouchMove: false,
      watchSlidesProgress: true,
      a11y: false,
      breakpoints: {
        768: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
      },
    });
  }

  const teamSlider = document.querySelector(".s-team__slider");

  if (teamSlider) {
    const swiper = new Swiper(teamSlider, {
      speed: 900,
      spaceBetween: 15,
      slidesPerView: "auto",
      autoplay: {
        delay: 5500,
      },
      scrollbar: {
        el: ".s-team .slider-scrollbar",
        draggable: true,
      },
      breakpoints: {
        spaceBetween: 24,
        slidesPerView: "auto",
      },
    });
  }

  const newsSlider = document.querySelector(".s-news__slider");

  if (newsSlider) {
    const swiper = new Swiper(newsSlider, {
      speed: 900,
      spaceBetween: 15,
      slidesPerView: "auto",
      autoplay: {
        delay: 6000,
      },
      scrollbar: {
        el: ".s-news .slider-scrollbar",
        draggable: true,
      },
      breakpoints: {
        spaceBetween: 24,
        slidesPerView: "auto",
      },
    });
  }
}
