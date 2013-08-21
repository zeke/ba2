(function() {
  var Carousel, Elapsis, ScrollFever;

  Elapsis = (function() {
    function Elapsis(dom_id, scaled_property, duration) {
      var properties;
      this.dom_id = dom_id != null ? dom_id : 'elapsis';
      this.scaled_property = scaled_property != null ? scaled_property : 'width';
      this.duration = duration != null ? duration : 3000;
      this.el = document.createElement('div');
      this.el.setAttribute('id', this.dom_id);
      this.el.setAttribute('class', this.dom_id);
      document.body.appendChild(this.el);
      properties = {};
      properties[this.scaled_property] = '100%';
      $(this.el).animate(properties, this.duration, 'linear');
    }

    return Elapsis;

  })();

  window.Elapsis = Elapsis;

  Carousel = require("carousel");

  ScrollFever = require("scroll-fever");

  window.carousel = new Carousel('#slides');

  $(function() {
    return $(window).resize(function() {
      return $("h1, h2, figcaption, p").css("z-index", 1);
    });
  });

}).call(this);
