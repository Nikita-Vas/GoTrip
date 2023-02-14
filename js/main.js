// Carousel

const owl = $('.owl-carousel')
owl.owlCarousel({
  center: true,
  loop: true,
  margin: 30,
  startPosition: 0,
  items: 1,

  responsive: {
    540: {
      items: 3,
      startPosition: 1,
    },
    850: {
      items: 3,
      margin: 10,
      startPosition: 1,
    },

    1000: {
      margin: 20,
      items: 3,
    },

    1200: {
      margin: 30,
      items: 3,
    },
  },
})

$('.slider__btn--prev').click(function () {
  owl.trigger('prev.owl.carousel')
})

$('.slider__btn--next').click(function () {
  owl.trigger('next.owl.carousel')
})

// Nav icon

const navBtn = document.querySelector('.nav__toggle')
const nav = document.querySelector('.nav')
const menuItem = document.querySelector('.menu-icon')

navBtn.onclick = function () {
  nav.classList.toggle('nav--mobile')
  menuItem.classList.toggle('menu-icon-active')
}
