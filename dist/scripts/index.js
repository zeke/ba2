(function() {
  var Carousel, Elapsis;

  Carousel = (function() {
    function Carousel(selector, duration) {
      var _this = this;

      this.selector = selector;
      this.duration = duration != null ? duration : 5 * 60 * 1000;
      this.slide_count = document.querySelectorAll("" + this.selector + " > *").length;
      $('body').on('keydown', function(event) {
        var _ref, _ref1;

        if ((_ref = event.keyCode) === 39 || _ref === 40) {
          _this.next();
        }
        if ((_ref1 = event.keyCode) === 37 || _ref1 === 38) {
          return _this.prev();
        }
      });
      $("#elapsis").animate({
        width: "100%"
      }, this.duration, 'linear');
      this.getOffset();
      this.updatePageCounter();
    }

    Carousel.prototype.getOffset = function() {
      this.offset = parseInt(document.body.scrollTop / window.innerHeight);
      if ((document.body.scrollTop % window.innerHeight) > window.innerHeight / 2) {
        return this.offset++;
      }
    };

    Carousel.prototype.next = function() {
      this.getOffset();
      if (this.offset !== this.slide_count - 1) {
        this.offset++;
      }
      return this.animate();
    };

    Carousel.prototype.prev = function() {
      this.getOffset();
      if (this.offset !== 0) {
        this.offset--;
      }
      return this.animate();
    };

    Carousel.prototype.updatePageCounter = function() {
      return $("#page_counter").animate({
        width: ((this.offset + 1) / this.slide_count * 100) + "%"
      });
    };

    Carousel.prototype.animate = function() {
      $("html, body").animate({
        scrollTop: window.innerHeight * this.offset
      });
      return this.updatePageCounter();
    };

    return Carousel;

  })();

  window.Carousel = Carousel;

  $(function() {
    return window.carousel = new Carousel('#slides');
  });

  Elapsis = (function() {
    function Elapsis(dom_id, scaled_property, duration) {
      var properties;

      this.dom_id = dom_id;
      this.scaled_property = scaled_property != null ? scaled_property : 'width';
      this.duration = duration != null ? duration : 3000;
      this.el = document.createElement('div');
      this.el.setAttribute('id', this.dom_id);
      this.el.setAttribute('class', 'elapsis');
      document.body.appendChild(this.el);
      properties = {};
      properties[this.scaled_property] = '100%';
      $(this.el).animate(properties, this.duration, 'linear');
    }

    return Elapsis;

  })();

  window.Elapsis = Elapsis;

}).call(this);
