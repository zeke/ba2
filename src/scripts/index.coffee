$ ->
  window.carousel = new Carousel('#slides')
  window.elapsis = new Elapsis('elapsis', 'width', 25*60*1000)
  window.scrollFever = new ScrollFever()

  $('body').on 'keydown', (event) ->
    if event.keyCode in [16] # shift
      $('#elapsis, #scroll-fever').toggleClass('active')