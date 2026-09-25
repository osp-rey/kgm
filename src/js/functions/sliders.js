export default function sliders() {
  const heroSlider = document.querySelector(".s-hero__slider");

  if (heroSlider) {
    const heroBgSlider = document.querySelector(".s-hero__bg-slider");

    const bgSwiper = new Swiper(heroBgSlider, {
      speed: 900,
      
    })

    const swiper = new Swiper(heroSlider, {
      speed: 900,
      effect: "fade",
      controller: {
        control: bgSwiper
      },
      // autoplay: {
      //   delay: 6500
      // },
      pagination: {
        el: ".s-hero .slider-pagination",
        clickable: true
      },
      navigation: {
        prevEl: ".s-hero .slider-arrow._prev",
        nextEl: ".s-hero .slider-arrow._next"
      }
    })
  }
}