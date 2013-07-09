class Elapsis

  constructor: (@dom_id='elapsis', @scaled_property='width', @duration=3000) ->

    # Create DOM element
    @el = document.createElement('div')
    @el.setAttribute('id', @dom_id)
    @el.setAttribute('class', @dom_id)
    document.body.appendChild(@el)

    properties = {}
    properties[@scaled_property] = '100%'

    $(@el).animate(properties, @duration, 'linear')

window.Elapsis = Elapsis