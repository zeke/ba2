Carousel = require("carousel")
ScrollFever = require("scroll-fever")

window.carousel = new Carousel('#slides')

$ ->

  # Repaint text on resize to get around a Chrome bug
  # http://css-tricks.com/viewport-sized-typography/
  $(window).resize ->
    $("h1, h2, figcaption, p").css("z-index", 1)

  FastClick.attach(document.body);