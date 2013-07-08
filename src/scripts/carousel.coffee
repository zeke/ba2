class Carousel

  constructor: (@selector, @duration=5*60*1000) ->

    # Number of immediate children
    @slide_count = document.querySelectorAll("#{@selector} > *").length

    $('body').on 'keydown', (event) =>
      @next() if event.keyCode in [39, 40] # right or down
      @prev() if event.keyCode in [37, 38] # left or up

    $("#elapsis").animate({width: "100%"}, @duration, 'linear')

    @getOffset()
    @updatePageCounter()

  getOffset: ->
    # Estimate which slide is nearest based on current window scroll position
    @offset = parseInt(document.body.scrollTop/window.innerHeight)

    # Whichever slide is more than half-revealed in the window prevails
    @offset++ if (document.body.scrollTop % window.innerHeight) > window.innerHeight/2

  next: ->
    @getOffset()
    @offset++ unless @offset is @slide_count-1
    @animate()

  prev: ->
    @getOffset()
    @offset-- unless @offset is 0
    @animate()

  updatePageCounter: ->
    $("#page_counter").animate
      width: ((@offset+1)/(@slide_count)*100) + "%"

  animate: ->
    $("html, body").animate
      scrollTop: window.innerHeight*@offset

    @updatePageCounter()

window.Carousel = Carousel