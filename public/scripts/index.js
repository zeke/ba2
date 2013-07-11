(function() {
  var Elapsis,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  this.Carousel = (function() {
    function Carousel(selector) {
      var _this = this;
      this.selector = selector;
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
      this.getOffset();
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

    Carousel.prototype.animate = function() {
      return $("html, body").animate({
        scrollTop: window.innerHeight * this.offset
      });
    };

    return Carousel;

  })();

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

  $(function() {
    window.carousel = new Carousel('#slides');
    window.elapsis = new Elapsis('elapsis', 'width', 25 * 60 * 1000);
    window.scrollFever = new ScrollFever();
    return $('body').on('keydown keyup', function(event) {
      var _ref;
      if ((_ref = event.keyCode) === 16) {
        return $('#elapsis, #scroll-fever').toggleClass('active');
      }
    });
  });

  this.ScrollFever = (function() {
    function ScrollFever(dom_id) {
      this.dom_id = dom_id != null ? dom_id : 'scroll-fever';
      this.paint = __bind(this.paint, this);
      this.el = document.createElement('div');
      this.el.setAttribute('id', this.dom_id);
      this.el.setAttribute('class', this.dom_id);
      document.body.appendChild(this.el);
      document.addEventListener('scroll', this.paint);
      this.paint();
    }

    ScrollFever.prototype.getBodyHeight = function() {
      var body, html;
      body = document.body;
      html = document.documentElement;
      return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    };

    ScrollFever.prototype.paint = function() {
      this.scale = (window.scrollY / (this.getBodyHeight() - window.innerHeight) * 100) + "%";
      return this.el.style.width = this.scale;
    };

    return ScrollFever;

  })();

}).call(this);
