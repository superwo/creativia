"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

$(document).ready(function () {
  var w = $(window).outerWidth();
  var h = $(window).outerHeight();
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf('MSIE ');
  var isMobile = {
    Android: function Android() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function BlackBerry() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function iOS() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function Opera() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function Windows() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function any() {
      return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
    }
  };

  function isIE() {
    ua = navigator.userAgent;
    var is_ie = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;
    return is_ie;
  }

  if (isIE()) {
    $('body').addClass('ie');
  }

  if (isMobile.any()) {
    $('body').addClass('touch');
  }

  function testWebP(callback) {
    var webP = new Image();

    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };

    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }

  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    }
  });

  function ibg() {
    if (isIE()) {
      var _ibg = document.querySelectorAll('.ibg');

      for (var i = 0; i < _ibg.length; i++) {
        if (_ibg[i].querySelector('img') && _ibg[i].querySelector('img').getAttribute('src') != null) {
          _ibg[i].style.backgroundImage = 'url(' + _ibg[i].querySelector('img').getAttribute('src') + ')';
        }
      }
    }
  }

  ibg();
  /*!
  * Isotope PACKAGED v3.0.6
  *
  * Licensed GPLv3 for open source use
  * or Isotope Commercial License for commercial use
  *
  * https://isotope.metafizzy.co
  * Copyright 2010-2018 Metafizzy
  */

  !function (t, e) {
    'function' == typeof define && define.amd ? define('jquery-bridget/jquery-bridget', ['jquery'], function (i) {
      return e(t, i);
    }) : 'object' == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require('jquery')) : t.jQueryBridget = e(t, t.jQuery);
  }(window, function (t, e) {
    'use strict';

    function i(i, s, a) {
      function u(t, e, o) {
        var n,
            s = '$().' + i + '("' + e + '")';
        return t.each(function (t, u) {
          var h = a.data(u, i);
          if (!h) return void r(i + ' not initialized. Cannot call methods, i.e. ' + s);
          var d = h[e];
          if (!d || '_' == e.charAt(0)) return void r(s + ' is not a valid method');
          var l = d.apply(h, o);
          n = void 0 === n ? l : n;
        }), void 0 !== n ? n : t;
      }

      function h(t, e) {
        t.each(function (t, o) {
          var n = a.data(o, i);
          n ? (n.option(e), n._init()) : (n = new s(o, e), a.data(o, i, n));
        });
      }

      a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
        a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
      }), a.fn[i] = function (t) {
        if ('string' == typeof t) {
          var e = n.call(arguments, 1);
          return u(this, t, e);
        }

        return h(this, t), this;
      }, o(a));
    }

    function o(t) {
      !t || t && t.bridget || (t.bridget = i);
    }

    var n = Array.prototype.slice,
        s = t.console,
        r = 'undefined' == typeof s ? function () {} : function (t) {
      s.error(t);
    };
    return o(e || t.jQuery), i;
  }), function (t, e) {
    'function' == typeof define && define.amd ? define('ev-emitter/ev-emitter', e) : 'object' == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.EvEmitter = e();
  }('undefined' != typeof window ? window : this, function () {
    function t() {}

    var e = t.prototype;
    return e.on = function (t, e) {
      if (t && e) {
        var i = this._events = this._events || {},
            o = i[t] = i[t] || [];
        return o.indexOf(e) == -1 && o.push(e), this;
      }
    }, e.once = function (t, e) {
      if (t && e) {
        this.on(t, e);
        var i = this._onceEvents = this._onceEvents || {},
            o = i[t] = i[t] || {};
        return o[e] = !0, this;
      }
    }, e.off = function (t, e) {
      var i = this._events && this._events[t];

      if (i && i.length) {
        var o = i.indexOf(e);
        return o != -1 && i.splice(o, 1), this;
      }
    }, e.emitEvent = function (t, e) {
      var i = this._events && this._events[t];

      if (i && i.length) {
        i = i.slice(0), e = e || [];

        for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
          var s = i[n],
              r = o && o[s];
          r && (this.off(t, s), delete o[s]), s.apply(this, e);
        }

        return this;
      }
    }, e.allOff = function () {
      delete this._events, delete this._onceEvents;
    }, t;
  }), function (t, e) {
    'function' == typeof define && define.amd ? define('get-size/get-size', e) : 'object' == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.getSize = e();
  }(window, function () {
    'use strict';

    function t(t) {
      var e = parseFloat(t),
          i = t.indexOf('%') == -1 && !isNaN(e);
      return i && e;
    }

    function e() {}

    function i() {
      for (var t = {
        width: 0,
        height: 0,
        innerWidth: 0,
        innerHeight: 0,
        outerWidth: 0,
        outerHeight: 0
      }, e = 0; e < h; e++) {
        var i = u[e];
        t[i] = 0;
      }

      return t;
    }

    function o(t) {
      var e = getComputedStyle(t);
      return e || a('Style returned ' + e + '. Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1'), e;
    }

    function n() {
      if (!d) {
        d = !0;
        var e = document.createElement('div');
        e.style.width = '200px', e.style.padding = '1px 2px 3px 4px', e.style.borderStyle = 'solid', e.style.borderWidth = '1px 2px 3px 4px', e.style.boxSizing = 'border-box';
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var n = o(e);
        r = 200 == Math.round(t(n.width)), s.isBoxSizeOuter = r, i.removeChild(e);
      }
    }

    function s(e) {
      if (n(), 'string' == typeof e && (e = document.querySelector(e)), e && 'object' == _typeof(e) && e.nodeType) {
        var s = o(e);
        if ('none' == s.display) return i();
        var a = {};
        a.width = e.offsetWidth, a.height = e.offsetHeight;

        for (var d = a.isBorderBox = 'border-box' == s.boxSizing, l = 0; l < h; l++) {
          var f = u[l],
              c = s[f],
              m = parseFloat(c);
          a[f] = isNaN(m) ? 0 : m;
        }

        var p = a.paddingLeft + a.paddingRight,
            y = a.paddingTop + a.paddingBottom,
            g = a.marginLeft + a.marginRight,
            v = a.marginTop + a.marginBottom,
            _ = a.borderLeftWidth + a.borderRightWidth,
            z = a.borderTopWidth + a.borderBottomWidth,
            I = d && r,
            x = t(s.width);

        x !== !1 && (a.width = x + (I ? 0 : p + _));
        var S = t(s.height);
        return S !== !1 && (a.height = S + (I ? 0 : y + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (y + z), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a;
      }
    }

    var r,
        a = 'undefined' == typeof console ? e : function (t) {
      console.error(t);
    },
        u = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'],
        h = u.length,
        d = !1;
    return s;
  }), function (t, e) {
    'use strict';

    'function' == typeof define && define.amd ? define('desandro-matches-selector/matches-selector', e) : 'object' == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.matchesSelector = e();
  }(window, function () {
    'use strict';

    var t = function () {
      var t = window.Element.prototype;
      if (t.matches) return 'matches';
      if (t.matchesSelector) return 'matchesSelector';

      for (var e = ['webkit', 'moz', 'ms', 'o'], i = 0; i < e.length; i++) {
        var o = e[i],
            n = o + 'MatchesSelector';
        if (t[n]) return n;
      }
    }();

    return function (e, i) {
      return e[t](i);
    };
  }), function (t, e) {
    'function' == typeof define && define.amd ? define('fizzy-ui-utils/utils', ['desandro-matches-selector/matches-selector'], function (i) {
      return e(t, i);
    }) : 'object' == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require('desandro-matches-selector')) : t.fizzyUIUtils = e(t, t.matchesSelector);
  }(window, function (t, e) {
    var i = {};
    i.extend = function (t, e) {
      for (var i in e) {
        t[i] = e[i];
      }

      return t;
    }, i.modulo = function (t, e) {
      return (t % e + e) % e;
    };
    var o = Array.prototype.slice;
    i.makeArray = function (t) {
      if (Array.isArray(t)) return t;
      if (null === t || void 0 === t) return [];
      var e = 'object' == _typeof(t) && 'number' == typeof t.length;
      return e ? o.call(t) : [t];
    }, i.removeFrom = function (t, e) {
      var i = t.indexOf(e);
      i != -1 && t.splice(i, 1);
    }, i.getParent = function (t, i) {
      for (; t.parentNode && t != document.body;) {
        if (t = t.parentNode, e(t, i)) return t;
      }
    }, i.getQueryElement = function (t) {
      return 'string' == typeof t ? document.querySelector(t) : t;
    }, i.handleEvent = function (t) {
      var e = 'on' + t.type;
      this[e] && this[e](t);
    }, i.filterFindElements = function (t, o) {
      t = i.makeArray(t);
      var n = [];
      return t.forEach(function (t) {
        if (t instanceof HTMLElement) {
          if (!o) return void n.push(t);
          e(t, o) && n.push(t);

          for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) {
            n.push(i[s]);
          }
        }
      }), n;
    }, i.debounceMethod = function (t, e, i) {
      i = i || 100;
      var o = t.prototype[e],
          n = e + 'Timeout';

      t.prototype[e] = function () {
        var t = this[n];
        clearTimeout(t);
        var e = arguments,
            s = this;
        this[n] = setTimeout(function () {
          o.apply(s, e), delete s[n];
        }, i);
      };
    }, i.docReady = function (t) {
      var e = document.readyState;
      'complete' == e || 'interactive' == e ? setTimeout(t) : document.addEventListener('DOMContentLoaded', t);
    }, i.toDashed = function (t) {
      return t.replace(/(.)([A-Z])/g, function (t, e, i) {
        return e + '-' + i;
      }).toLowerCase();
    };
    var n = t.console;
    return i.htmlInit = function (e, o) {
      i.docReady(function () {
        var s = i.toDashed(o),
            r = 'data-' + s,
            a = document.querySelectorAll('[' + r + ']'),
            u = document.querySelectorAll('.js-' + s),
            h = i.makeArray(a).concat(i.makeArray(u)),
            d = r + '-options',
            l = t.jQuery;
        h.forEach(function (t) {
          var i,
              s = t.getAttribute(r) || t.getAttribute(d);

          try {
            i = s && JSON.parse(s);
          } catch (a) {
            return void (n && n.error('Error parsing ' + r + ' on ' + t.className + ': ' + a));
          }

          var u = new e(t, i);
          l && l.data(t, o, u);
        });
      });
    }, i;
  }), function (t, e) {
    'function' == typeof define && define.amd ? define('outlayer/item', ['ev-emitter/ev-emitter', 'get-size/get-size'], e) : 'object' == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require('ev-emitter'), require('get-size')) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize));
  }(window, function (t, e) {
    'use strict';

    function i(t) {
      for (var e in t) {
        return !1;
      }

      return e = null, !0;
    }

    function o(t, e) {
      t && (this.element = t, this.layout = e, this.position = {
        x: 0,
        y: 0
      }, this._create());
    }

    function n(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return '-' + t.toLowerCase();
      });
    }

    var s = document.documentElement.style,
        r = 'string' == typeof s.transition ? 'transition' : 'WebkitTransition',
        a = 'string' == typeof s.transform ? 'transform' : 'WebkitTransform',
        u = {
      WebkitTransition: 'webkitTransitionEnd',
      transition: 'transitionend'
    }[r],
        h = {
      transform: a,
      transition: r,
      transitionDuration: r + 'Duration',
      transitionProperty: r + 'Property',
      transitionDelay: r + 'Delay'
    },
        d = o.prototype = Object.create(t.prototype);
    d.constructor = o, d._create = function () {
      this._transn = {
        ingProperties: {},
        clean: {},
        onEnd: {}
      }, this.css({
        position: 'absolute'
      });
    }, d.handleEvent = function (t) {
      var e = 'on' + t.type;
      this[e] && this[e](t);
    }, d.getSize = function () {
      this.size = e(this.element);
    }, d.css = function (t) {
      var e = this.element.style;

      for (var i in t) {
        var o = h[i] || i;
        e[o] = t[i];
      }
    }, d.getPosition = function () {
      var t = getComputedStyle(this.element),
          e = this.layout._getOption('originLeft'),
          i = this.layout._getOption('originTop'),
          o = t[e ? 'left' : 'right'],
          n = t[i ? 'top' : 'bottom'],
          s = parseFloat(o),
          r = parseFloat(n),
          a = this.layout.size;

      o.indexOf('%') != -1 && (s = s / 100 * a.width), n.indexOf('%') != -1 && (r = r / 100 * a.height), s = isNaN(s) ? 0 : s, r = isNaN(r) ? 0 : r, s -= e ? a.paddingLeft : a.paddingRight, r -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = r;
    }, d.layoutPosition = function () {
      var t = this.layout.size,
          e = {},
          i = this.layout._getOption('originLeft'),
          o = this.layout._getOption('originTop'),
          n = i ? 'paddingLeft' : 'paddingRight',
          s = i ? 'left' : 'right',
          r = i ? 'right' : 'left',
          a = this.position.x + t[n];

      e[s] = this.getXValue(a), e[r] = '';
      var u = o ? 'paddingTop' : 'paddingBottom',
          h = o ? 'top' : 'bottom',
          d = o ? 'bottom' : 'top',
          l = this.position.y + t[u];
      e[h] = this.getYValue(l), e[d] = '', this.css(e), this.emitEvent('layout', [this]);
    }, d.getXValue = function (t) {
      var e = this.layout._getOption('horizontal');

      return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + '%' : t + 'px';
    }, d.getYValue = function (t) {
      var e = this.layout._getOption('horizontal');

      return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + '%' : t + 'px';
    }, d._transitionTo = function (t, e) {
      this.getPosition();
      var i = this.position.x,
          o = this.position.y,
          n = t == this.position.x && e == this.position.y;
      if (this.setPosition(t, e), n && !this.isTransitioning) return void this.layoutPosition();
      var s = t - i,
          r = e - o,
          a = {};
      a.transform = this.getTranslate(s, r), this.transition({
        to: a,
        onTransitionEnd: {
          transform: this.layoutPosition
        },
        isCleaning: !0
      });
    }, d.getTranslate = function (t, e) {
      var i = this.layout._getOption('originLeft'),
          o = this.layout._getOption('originTop');

      return t = i ? t : -t, e = o ? e : -e, 'translate3d(' + t + 'px, ' + e + 'px, 0)';
    }, d.goTo = function (t, e) {
      this.setPosition(t, e), this.layoutPosition();
    }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
      this.position.x = parseFloat(t), this.position.y = parseFloat(e);
    }, d._nonTransition = function (t) {
      this.css(t.to), t.isCleaning && this._removeStyles(t.to);

      for (var e in t.onTransitionEnd) {
        t.onTransitionEnd[e].call(this);
      }
    }, d.transition = function (t) {
      if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
      var e = this._transn;

      for (var i in t.onTransitionEnd) {
        e.onEnd[i] = t.onTransitionEnd[i];
      }

      for (i in t.to) {
        e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
      }

      if (t.from) {
        this.css(t.from);
        var o = this.element.offsetHeight;
        o = null;
      }

      this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
    };
    var l = 'opacity,' + n(a);
    d.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        t = 'number' == typeof t ? t + 'ms' : t, this.css({
          transitionProperty: l,
          transitionDuration: t,
          transitionDelay: this.staggerDelay || 0
        }), this.element.addEventListener(u, this, !1);
      }
    }, d.onwebkitTransitionEnd = function (t) {
      this.ontransitionend(t);
    }, d.onotransitionend = function (t) {
      this.ontransitionend(t);
    };
    var f = {
      '-webkit-transform': 'transform'
    };
    d.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
            o = f[t.propertyName] || t.propertyName;

        if (delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && (this.element.style[t.propertyName] = '', delete e.clean[o]), o in e.onEnd) {
          var n = e.onEnd[o];
          n.call(this), delete e.onEnd[o];
        }

        this.emitEvent('transitionEnd', [this]);
      }
    }, d.disableTransition = function () {
      this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), this.isTransitioning = !1;
    }, d._removeStyles = function (t) {
      var e = {};

      for (var i in t) {
        e[i] = '';
      }

      this.css(e);
    };
    var c = {
      transitionProperty: '',
      transitionDuration: '',
      transitionDelay: ''
    };
    return d.removeTransitionStyles = function () {
      this.css(c);
    }, d.stagger = function (t) {
      t = isNaN(t) ? 0 : t, this.staggerDelay = t + 'ms';
    }, d.removeElem = function () {
      this.element.parentNode.removeChild(this.element), this.css({
        display: ''
      }), this.emitEvent('remove', [this]);
    }, d.remove = function () {
      return r && parseFloat(this.layout.options.transitionDuration) ? (this.once('transitionEnd', function () {
        this.removeElem();
      }), void this.hide()) : void this.removeElem();
    }, d.reveal = function () {
      delete this.isHidden, this.css({
        display: ''
      });
      var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty('visibleStyle');
      e[i] = this.onRevealTransitionEnd, this.transition({
        from: t.hiddenStyle,
        to: t.visibleStyle,
        isCleaning: !0,
        onTransitionEnd: e
      });
    }, d.onRevealTransitionEnd = function () {
      this.isHidden || this.emitEvent('reveal');
    }, d.getHideRevealTransitionEndProperty = function (t) {
      var e = this.layout.options[t];
      if (e.opacity) return 'opacity';

      for (var i in e) {
        return i;
      }
    }, d.hide = function () {
      this.isHidden = !0, this.css({
        display: ''
      });
      var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty('hiddenStyle');
      e[i] = this.onHideTransitionEnd, this.transition({
        from: t.visibleStyle,
        to: t.hiddenStyle,
        isCleaning: !0,
        onTransitionEnd: e
      });
    }, d.onHideTransitionEnd = function () {
      this.isHidden && (this.css({
        display: 'none'
      }), this.emitEvent('hide'));
    }, d.destroy = function () {
      this.css({
        position: '',
        left: '',
        right: '',
        top: '',
        bottom: '',
        transition: '',
        transform: ''
      });
    }, o;
  }), function (t, e) {
    'use strict';

    'function' == typeof define && define.amd ? define('outlayer/outlayer', ['ev-emitter/ev-emitter', 'get-size/get-size', 'fizzy-ui-utils/utils', './item'], function (i, o, n, s) {
      return e(t, i, o, n, s);
    }) : 'object' == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require('ev-emitter'), require('get-size'), require('fizzy-ui-utils'), require('./item')) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item);
  }(window, function (t, e, i, o, n) {
    'use strict';

    function s(t, e) {
      var i = o.getQueryElement(t);
      if (!i) return void (u && u.error('Bad element for ' + this.constructor.namespace + ': ' + (i || t)));
      this.element = i, h && (this.$element = h(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
      var n = ++l;
      this.element.outlayerGUID = n, f[n] = this, this._create();

      var s = this._getOption('initLayout');

      s && this.layout();
    }

    function r(t) {
      function e() {
        t.apply(this, arguments);
      }

      return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e;
    }

    function a(t) {
      if ('number' == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
          i = e && e[1],
          o = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var n = m[o] || 1;
      return i * n;
    }

    var u = t.console,
        h = t.jQuery,
        d = function d() {},
        l = 0,
        f = {};

    s.namespace = 'outlayer', s.Item = n, s.defaults = {
      containerStyle: {
        position: 'relative'
      },
      initLayout: !0,
      originLeft: !0,
      originTop: !0,
      resize: !0,
      resizeContainer: !0,
      transitionDuration: '0.4s',
      hiddenStyle: {
        opacity: 0,
        transform: 'scale(0.001)'
      },
      visibleStyle: {
        opacity: 1,
        transform: 'scale(1)'
      }
    };
    var c = s.prototype;
    o.extend(c, e.prototype), c.option = function (t) {
      o.extend(this.options, t);
    }, c._getOption = function (t) {
      var e = this.constructor.compatOptions[t];
      return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
    }, s.compatOptions = {
      initLayout: 'isInitLayout',
      horizontal: 'isHorizontal',
      layoutInstant: 'isLayoutInstant',
      originLeft: 'isOriginLeft',
      originTop: 'isOriginTop',
      resize: 'isResizeBound',
      resizeContainer: 'isResizingContainer'
    }, c._create = function () {
      this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);

      var t = this._getOption('resize');

      t && this.bindResize();
    }, c.reloadItems = function () {
      this.items = this._itemize(this.element.children);
    }, c._itemize = function (t) {
      for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
        var s = e[n],
            r = new i(s, this);
        o.push(r);
      }

      return o;
    }, c._filterFindItemElements = function (t) {
      return o.filterFindElements(t, this.options.itemSelector);
    }, c.getItemElements = function () {
      return this.items.map(function (t) {
        return t.element;
      });
    }, c.layout = function () {
      this._resetLayout(), this._manageStamps();

      var t = this._getOption('layoutInstant'),
          e = void 0 !== t ? t : !this._isLayoutInited;

      this.layoutItems(this.items, e), this._isLayoutInited = !0;
    }, c._init = c.layout, c._resetLayout = function () {
      this.getSize();
    }, c.getSize = function () {
      this.size = i(this.element);
    }, c._getMeasurement = function (t, e) {
      var o,
          n = this.options[t];
      n ? ('string' == typeof n ? o = this.element.querySelector(n) : n instanceof HTMLElement && (o = n), this[t] = o ? i(o)[e] : n) : this[t] = 0;
    }, c.layoutItems = function (t, e) {
      t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
    }, c._getItemsForLayout = function (t) {
      return t.filter(function (t) {
        return !t.isIgnored;
      });
    }, c._layoutItems = function (t, e) {
      if (this._emitCompleteOnItems('layout', t), t && t.length) {
        var i = [];
        t.forEach(function (t) {
          var o = this._getItemLayoutPosition(t);

          o.item = t, o.isInstant = e || t.isLayoutInstant, i.push(o);
        }, this), this._processLayoutQueue(i);
      }
    }, c._getItemLayoutPosition = function () {
      return {
        x: 0,
        y: 0
      };
    }, c._processLayoutQueue = function (t) {
      this.updateStagger(), t.forEach(function (t, e) {
        this._positionItem(t.item, t.x, t.y, t.isInstant, e);
      }, this);
    }, c.updateStagger = function () {
      var t = this.options.stagger;
      return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger);
    }, c._positionItem = function (t, e, i, o, n) {
      o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
    }, c._postLayout = function () {
      this.resizeContainer();
    }, c.resizeContainer = function () {
      var t = this._getOption('resizeContainer');

      if (t) {
        var e = this._getContainerSize();

        e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
      }
    }, c._getContainerSize = d, c._setContainerMeasure = function (t, e) {
      if (void 0 !== t) {
        var i = this.size;
        i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? 'width' : 'height'] = t + 'px';
      }
    }, c._emitCompleteOnItems = function (t, e) {
      function i() {
        n.dispatchEvent(t + 'Complete', null, [e]);
      }

      function o() {
        r++, r == s && i();
      }

      var n = this,
          s = e.length;
      if (!e || !s) return void i();
      var r = 0;
      e.forEach(function (e) {
        e.once(t, o);
      });
    }, c.dispatchEvent = function (t, e, i) {
      var o = e ? [e].concat(i) : i;
      if (this.emitEvent(t, o), h) if (this.$element = this.$element || h(this.element), e) {
        var n = h.Event(e);
        n.type = t, this.$element.trigger(n, i);
      } else this.$element.trigger(t, i);
    }, c.ignore = function (t) {
      var e = this.getItem(t);
      e && (e.isIgnored = !0);
    }, c.unignore = function (t) {
      var e = this.getItem(t);
      e && delete e.isIgnored;
    }, c.stamp = function (t) {
      t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
    }, c.unstamp = function (t) {
      t = this._find(t), t && t.forEach(function (t) {
        o.removeFrom(this.stamps, t), this.unignore(t);
      }, this);
    }, c._find = function (t) {
      if (t) return 'string' == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t);
    }, c._manageStamps = function () {
      this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
    }, c._getBoundingRect = function () {
      var t = this.element.getBoundingClientRect(),
          e = this.size;
      this._boundingRect = {
        left: t.left + e.paddingLeft + e.borderLeftWidth,
        top: t.top + e.paddingTop + e.borderTopWidth,
        right: t.right - (e.paddingRight + e.borderRightWidth),
        bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
      };
    }, c._manageStamp = d, c._getElementOffset = function (t) {
      var e = t.getBoundingClientRect(),
          o = this._boundingRect,
          n = i(t),
          s = {
        left: e.left - o.left - n.marginLeft,
        top: e.top - o.top - n.marginTop,
        right: o.right - e.right - n.marginRight,
        bottom: o.bottom - e.bottom - n.marginBottom
      };
      return s;
    }, c.handleEvent = o.handleEvent, c.bindResize = function () {
      t.addEventListener('resize', this), this.isResizeBound = !0;
    }, c.unbindResize = function () {
      t.removeEventListener('resize', this), this.isResizeBound = !1;
    }, c.onresize = function () {
      this.resize();
    }, o.debounceMethod(s, 'onresize', 100), c.resize = function () {
      this.isResizeBound && this.needsResizeLayout() && this.layout();
    }, c.needsResizeLayout = function () {
      var t = i(this.element),
          e = this.size && t;
      return e && t.innerWidth !== this.size.innerWidth;
    }, c.addItems = function (t) {
      var e = this._itemize(t);

      return e.length && (this.items = this.items.concat(e)), e;
    }, c.appended = function (t) {
      var e = this.addItems(t);
      e.length && (this.layoutItems(e, !0), this.reveal(e));
    }, c.prepended = function (t) {
      var e = this._itemize(t);

      if (e.length) {
        var i = this.items.slice(0);
        this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
      }
    }, c.reveal = function (t) {
      if (this._emitCompleteOnItems('reveal', t), t && t.length) {
        var e = this.updateStagger();
        t.forEach(function (t, i) {
          t.stagger(i * e), t.reveal();
        });
      }
    }, c.hide = function (t) {
      if (this._emitCompleteOnItems('hide', t), t && t.length) {
        var e = this.updateStagger();
        t.forEach(function (t, i) {
          t.stagger(i * e), t.hide();
        });
      }
    }, c.revealItemElements = function (t) {
      var e = this.getItems(t);
      this.reveal(e);
    }, c.hideItemElements = function (t) {
      var e = this.getItems(t);
      this.hide(e);
    }, c.getItem = function (t) {
      for (var e = 0; e < this.items.length; e++) {
        var i = this.items[e];
        if (i.element == t) return i;
      }
    }, c.getItems = function (t) {
      t = o.makeArray(t);
      var e = [];
      return t.forEach(function (t) {
        var i = this.getItem(t);
        i && e.push(i);
      }, this), e;
    }, c.remove = function (t) {
      var e = this.getItems(t);
      this._emitCompleteOnItems('remove', e), e && e.length && e.forEach(function (t) {
        t.remove(), o.removeFrom(this.items, t);
      }, this);
    }, c.destroy = function () {
      var t = this.element.style;
      t.height = '', t.position = '', t.width = '', this.items.forEach(function (t) {
        t.destroy();
      }), this.unbindResize();
      var e = this.element.outlayerGUID;
      delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace);
    }, s.data = function (t) {
      t = o.getQueryElement(t);
      var e = t && t.outlayerGUID;
      return e && f[e];
    }, s.create = function (t, e) {
      var i = r(s);
      return i.defaults = o.extend({}, s.defaults), o.extend(i.defaults, e), i.compatOptions = o.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(n), o.htmlInit(i, t), h && h.bridget && h.bridget(t, i), i;
    };
    var m = {
      ms: 1,
      s: 1e3
    };
    return s.Item = n, s;
  }), function (t, e) {
    'function' == typeof define && define.amd ? define('isotope-layout/js/item', ['outlayer/outlayer'], e) : 'object' == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require('outlayer')) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer));
  }(window, function (t) {
    'use strict';

    function e() {
      t.Item.apply(this, arguments);
    }

    var i = e.prototype = Object.create(t.Item.prototype),
        o = i._create;
    i._create = function () {
      this.id = this.layout.itemGUID++, o.call(this), this.sortData = {};
    }, i.updateSortData = function () {
      if (!this.isIgnored) {
        this.sortData.id = this.id, this.sortData['original-order'] = this.id, this.sortData.random = Math.random();
        var t = this.layout.options.getSortData,
            e = this.layout._sorters;

        for (var i in t) {
          var o = e[i];
          this.sortData[i] = o(this.element, this);
        }
      }
    };
    var n = i.destroy;
    return i.destroy = function () {
      n.apply(this, arguments), this.css({
        display: ''
      });
    }, e;
  }), function (t, e) {
    'function' == typeof define && define.amd ? define('isotope-layout/js/layout-mode', ['get-size/get-size', 'outlayer/outlayer'], e) : 'object' == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require('get-size'), require('outlayer')) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer));
  }(window, function (t, e) {
    'use strict';

    function i(t) {
      this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size);
    }

    var o = i.prototype,
        n = ['_resetLayout', '_getItemLayoutPosition', '_manageStamp', '_getContainerSize', '_getElementOffset', 'needsResizeLayout', '_getOption'];
    return n.forEach(function (t) {
      o[t] = function () {
        return e.prototype[t].apply(this.isotope, arguments);
      };
    }), o.needsVerticalResizeLayout = function () {
      var e = t(this.isotope.element),
          i = this.isotope.size && e;
      return i && e.innerHeight != this.isotope.size.innerHeight;
    }, o._getMeasurement = function () {
      this.isotope._getMeasurement.apply(this, arguments);
    }, o.getColumnWidth = function () {
      this.getSegmentSize('column', 'Width');
    }, o.getRowHeight = function () {
      this.getSegmentSize('row', 'Height');
    }, o.getSegmentSize = function (t, e) {
      var i = t + e,
          o = 'outer' + e;

      if (this._getMeasurement(i, o), !this[i]) {
        var n = this.getFirstItemSize();
        this[i] = n && n[o] || this.isotope.size['inner' + e];
      }
    }, o.getFirstItemSize = function () {
      var e = this.isotope.filteredItems[0];
      return e && e.element && t(e.element);
    }, o.layout = function () {
      this.isotope.layout.apply(this.isotope, arguments);
    }, o.getSize = function () {
      this.isotope.getSize(), this.size = this.isotope.size;
    }, i.modes = {}, i.create = function (t, e) {
      function n() {
        i.apply(this, arguments);
      }

      return n.prototype = Object.create(o), n.prototype.constructor = n, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n;
    }, i;
  }), function (t, e) {
    'function' == typeof define && define.amd ? define('masonry-layout/masonry', ['outlayer/outlayer', 'get-size/get-size'], e) : 'object' == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require('outlayer'), require('get-size')) : t.Masonry = e(t.Outlayer, t.getSize);
  }(window, function (t, e) {
    var i = t.create('masonry');
    i.compatOptions.fitWidth = 'isFitWidth';
    var o = i.prototype;
    return o._resetLayout = function () {
      this.getSize(), this._getMeasurement('columnWidth', 'outerWidth'), this._getMeasurement('gutter', 'outerWidth'), this.measureColumns(), this.colYs = [];

      for (var t = 0; t < this.cols; t++) {
        this.colYs.push(0);
      }

      this.maxY = 0, this.horizontalColIndex = 0;
    }, o.measureColumns = function () {
      if (this.getContainerWidth(), !this.columnWidth) {
        var t = this.items[0],
            i = t && t.element;
        this.columnWidth = i && e(i).outerWidth || this.containerWidth;
      }

      var o = this.columnWidth += this.gutter,
          n = this.containerWidth + this.gutter,
          s = n / o,
          r = o - n % o,
          a = r && r < 1 ? 'round' : 'floor';
      s = Math[a](s), this.cols = Math.max(s, 1);
    }, o.getContainerWidth = function () {
      var t = this._getOption('fitWidth'),
          i = t ? this.element.parentNode : this.element,
          o = e(i);

      this.containerWidth = o && o.innerWidth;
    }, o._getItemLayoutPosition = function (t) {
      t.getSize();
      var e = t.size.outerWidth % this.columnWidth,
          i = e && e < 1 ? 'round' : 'ceil',
          o = Math[i](t.size.outerWidth / this.columnWidth);
      o = Math.min(o, this.cols);

      for (var n = this.options.horizontalOrder ? '_getHorizontalColPosition' : '_getTopColPosition', s = this[n](o, t), r = {
        x: this.columnWidth * s.col,
        y: s.y
      }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col; h < u; h++) {
        this.colYs[h] = a;
      }

      return r;
    }, o._getTopColPosition = function (t) {
      var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);

      return {
        col: e.indexOf(i),
        y: i
      };
    }, o._getTopColGroup = function (t) {
      if (t < 2) return this.colYs;

      for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) {
        e[o] = this._getColGroupY(o, t);
      }

      return e;
    }, o._getColGroupY = function (t, e) {
      if (e < 2) return this.colYs[t];
      var i = this.colYs.slice(t, t + e);
      return Math.max.apply(Math, i);
    }, o._getHorizontalColPosition = function (t, e) {
      var i = this.horizontalColIndex % this.cols,
          o = t > 1 && i + t > this.cols;
      i = o ? 0 : i;
      var n = e.size.outerWidth && e.size.outerHeight;
      return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, {
        col: i,
        y: this._getColGroupY(i, t)
      };
    }, o._manageStamp = function (t) {
      var i = e(t),
          o = this._getElementOffset(t),
          n = this._getOption('originLeft'),
          s = n ? o.left : o.right,
          r = s + i.outerWidth,
          a = Math.floor(s / this.columnWidth);

      a = Math.max(0, a);
      var u = Math.floor(r / this.columnWidth);
      u -= r % this.columnWidth ? 0 : 1, u = Math.min(this.cols - 1, u);

      for (var h = this._getOption('originTop'), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) {
        this.colYs[l] = Math.max(d, this.colYs[l]);
      }
    }, o._getContainerSize = function () {
      this.maxY = Math.max.apply(Math, this.colYs);
      var t = {
        height: this.maxY
      };
      return this._getOption('fitWidth') && (t.width = this._getContainerFitWidth()), t;
    }, o._getContainerFitWidth = function () {
      for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) {
        t++;
      }

      return (this.cols - t) * this.columnWidth - this.gutter;
    }, o.needsResizeLayout = function () {
      var t = this.containerWidth;
      return this.getContainerWidth(), t != this.containerWidth;
    }, i;
  }), function (t, e) {
    'function' == typeof define && define.amd ? define('isotope-layout/js/layout-modes/masonry', ['../layout-mode', 'masonry-layout/masonry'], e) : 'object' == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require('../layout-mode'), require('masonry-layout')) : e(t.Isotope.LayoutMode, t.Masonry);
  }(window, function (t, e) {
    'use strict';

    var i = t.create('masonry'),
        o = i.prototype,
        n = {
      _getElementOffset: !0,
      layout: !0,
      _getMeasurement: !0
    };

    for (var s in e.prototype) {
      n[s] || (o[s] = e.prototype[s]);
    }

    var r = o.measureColumns;

    o.measureColumns = function () {
      this.items = this.isotope.filteredItems, r.call(this);
    };

    var a = o._getOption;
    return o._getOption = function (t) {
      return 'fitWidth' == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments);
    }, i;
  }), function (t, e) {
    'function' == typeof define && define.amd ? define('isotope-layout/js/layout-modes/fit-rows', ['../layout-mode'], e) : 'object' == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e(require('../layout-mode')) : e(t.Isotope.LayoutMode);
  }(window, function (t) {
    'use strict';

    var e = t.create('fitRows'),
        i = e.prototype;
    return i._resetLayout = function () {
      this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement('gutter', 'outerWidth');
    }, i._getItemLayoutPosition = function (t) {
      t.getSize();
      var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
      0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
      var o = {
        x: this.x,
        y: this.y
      };
      return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, o;
    }, i._getContainerSize = function () {
      return {
        height: this.maxY
      };
    }, e;
  }), function (t, e) {
    'function' == typeof define && define.amd ? define('isotope-layout/js/layout-modes/vertical', ['../layout-mode'], e) : 'object' == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require('../layout-mode')) : e(t.Isotope.LayoutMode);
  }(window, function (t) {
    'use strict';

    var e = t.create('vertical', {
      horizontalAlignment: 0
    }),
        i = e.prototype;
    return i._resetLayout = function () {
      this.y = 0;
    }, i._getItemLayoutPosition = function (t) {
      t.getSize();
      var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
          i = this.y;
      return this.y += t.size.outerHeight, {
        x: e,
        y: i
      };
    }, i._getContainerSize = function () {
      return {
        height: this.y
      };
    }, e;
  }), function (t, e) {
    'function' == typeof define && define.amd ? define(['outlayer/outlayer', 'get-size/get-size', 'desandro-matches-selector/matches-selector', 'fizzy-ui-utils/utils', 'isotope-layout/js/item', 'isotope-layout/js/layout-mode', 'isotope-layout/js/layout-modes/masonry', 'isotope-layout/js/layout-modes/fit-rows', 'isotope-layout/js/layout-modes/vertical'], function (i, o, n, s, r, a) {
      return e(t, i, o, n, s, r, a);
    }) : 'object' == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require('outlayer'), require('get-size'), require('desandro-matches-selector'), require('fizzy-ui-utils'), require('isotope-layout/js/item'), require('isotope-layout/js/layout-mode'), require('isotope-layout/js/layout-modes/masonry'), require('isotope-layout/js/layout-modes/fit-rows'), require('isotope-layout/js/layout-modes/vertical')) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode);
  }(window, function (t, e, i, o, n, s, r) {
    function a(t, e) {
      return function (i, o) {
        for (var n = 0; n < t.length; n++) {
          var s = t[n],
              r = i.sortData[s],
              a = o.sortData[s];

          if (r > a || r < a) {
            var u = void 0 !== e[s] ? e[s] : e,
                h = u ? 1 : -1;
            return (r > a ? 1 : -1) * h;
          }
        }

        return 0;
      };
    }

    var u = t.jQuery,
        h = String.prototype.trim ? function (t) {
      return t.trim();
    } : function (t) {
      return t.replace(/^\s+|\s+$/g, '');
    },
        d = e.create('isotope', {
      layoutMode: 'masonry',
      isJQueryFiltering: !0,
      sortAscending: !0
    });
    d.Item = s, d.LayoutMode = r;
    var l = d.prototype;
    l._create = function () {
      this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ['original-order'];

      for (var t in r.modes) {
        this._initLayoutMode(t);
      }
    }, l.reloadItems = function () {
      this.itemGUID = 0, e.prototype.reloadItems.call(this);
    }, l._itemize = function () {
      for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
        var o = t[i];
        o.id = this.itemGUID++;
      }

      return this._updateItemsSortData(t), t;
    }, l._initLayoutMode = function (t) {
      var e = r.modes[t],
          i = this.options[t] || {};
      this.options[t] = e.options ? n.extend(e.options, i) : i, this.modes[t] = new e(this);
    }, l.layout = function () {
      return !this._isLayoutInited && this._getOption('initLayout') ? void this.arrange() : void this._layout();
    }, l._layout = function () {
      var t = this._getIsInstant();

      this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0;
    }, l.arrange = function (t) {
      this.option(t), this._getIsInstant();

      var e = this._filter(this.items);

      this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout();
    }, l._init = l.arrange, l._hideReveal = function (t) {
      this.reveal(t.needReveal), this.hide(t.needHide);
    }, l._getIsInstant = function () {
      var t = this._getOption('layoutInstant'),
          e = void 0 !== t ? t : !this._isLayoutInited;

      return this._isInstant = e, e;
    }, l._bindArrangeComplete = function () {
      function t() {
        e && i && o && n.dispatchEvent('arrangeComplete', null, [n.filteredItems]);
      }

      var e,
          i,
          o,
          n = this;
      this.once('layoutComplete', function () {
        e = !0, t();
      }), this.once('hideComplete', function () {
        i = !0, t();
      }), this.once('revealComplete', function () {
        o = !0, t();
      });
    }, l._filter = function (t) {
      var e = this.options.filter;
      e = e || '*';

      for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
        var a = t[r];

        if (!a.isIgnored) {
          var u = s(a);
          u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
        }
      }

      return {
        matches: i,
        needReveal: o,
        needHide: n
      };
    }, l._getFilterTest = function (t) {
      return u && this.options.isJQueryFiltering ? function (e) {
        return u(e.element).is(t);
      } : 'function' == typeof t ? function (e) {
        return t(e.element);
      } : function (e) {
        return o(e.element, t);
      };
    }, l.updateSortData = function (t) {
      var e;
      t ? (t = n.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e);
    }, l._getSorters = function () {
      var t = this.options.getSortData;

      for (var e in t) {
        var i = t[e];
        this._sorters[e] = f(i);
      }
    }, l._updateItemsSortData = function (t) {
      for (var e = t && t.length, i = 0; e && i < e; i++) {
        var o = t[i];
        o.updateSortData();
      }
    };

    var f = function () {
      function t(t) {
        if ('string' != typeof t) return t;
        var i = h(t).split(' '),
            o = i[0],
            n = o.match(/^\[(.+)\]$/),
            s = n && n[1],
            r = e(s, o),
            a = d.sortDataParsers[i[1]];
        return t = a ? function (t) {
          return t && a(r(t));
        } : function (t) {
          return t && r(t);
        };
      }

      function e(t, e) {
        return t ? function (e) {
          return e.getAttribute(t);
        } : function (t) {
          var i = t.querySelector(e);
          return i && i.textContent;
        };
      }

      return t;
    }();

    d.sortDataParsers = {
      parseInt: function (_parseInt) {
        function parseInt(_x) {
          return _parseInt.apply(this, arguments);
        }

        parseInt.toString = function () {
          return _parseInt.toString();
        };

        return parseInt;
      }(function (t) {
        return parseInt(t, 10);
      }),
      parseFloat: function (_parseFloat) {
        function parseFloat(_x2) {
          return _parseFloat.apply(this, arguments);
        }

        parseFloat.toString = function () {
          return _parseFloat.toString();
        };

        return parseFloat;
      }(function (t) {
        return parseFloat(t);
      })
    }, l._sort = function () {
      if (this.options.sortBy) {
        var t = n.makeArray(this.options.sortBy);
        this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
        var e = a(this.sortHistory, this.options.sortAscending);
        this.filteredItems.sort(e);
      }
    }, l._getIsSameSortBy = function (t) {
      for (var e = 0; e < t.length; e++) {
        if (t[e] != this.sortHistory[e]) return !1;
      }

      return !0;
    }, l._mode = function () {
      var t = this.options.layoutMode,
          e = this.modes[t];
      if (!e) throw new Error('No layout mode: ' + t);
      return e.options = this.options[t], e;
    }, l._resetLayout = function () {
      e.prototype._resetLayout.call(this), this._mode()._resetLayout();
    }, l._getItemLayoutPosition = function (t) {
      return this._mode()._getItemLayoutPosition(t);
    }, l._manageStamp = function (t) {
      this._mode()._manageStamp(t);
    }, l._getContainerSize = function () {
      return this._mode()._getContainerSize();
    }, l.needsResizeLayout = function () {
      return this._mode().needsResizeLayout();
    }, l.appended = function (t) {
      var e = this.addItems(t);

      if (e.length) {
        var i = this._filterRevealAdded(e);

        this.filteredItems = this.filteredItems.concat(i);
      }
    }, l.prepended = function (t) {
      var e = this._itemize(t);

      if (e.length) {
        this._resetLayout(), this._manageStamps();

        var i = this._filterRevealAdded(e);

        this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items);
      }
    }, l._filterRevealAdded = function (t) {
      var e = this._filter(t);

      return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches;
    }, l.insert = function (t) {
      var e = this.addItems(t);

      if (e.length) {
        var i,
            o,
            n = e.length;

        for (i = 0; i < n; i++) {
          o = e[i], this.element.appendChild(o.element);
        }

        var s = this._filter(e).matches;

        for (i = 0; i < n; i++) {
          e[i].isLayoutInstant = !0;
        }

        for (this.arrange(), i = 0; i < n; i++) {
          delete e[i].isLayoutInstant;
        }

        this.reveal(s);
      }
    };
    var c = l.remove;
    return l.remove = function (t) {
      t = n.makeArray(t);
      var e = this.getItems(t);
      c.call(this, t);

      for (var i = e && e.length, o = 0; i && o < i; o++) {
        var s = e[o];
        n.removeFrom(this.filteredItems, s);
      }
    }, l.shuffle = function () {
      for (var t = 0; t < this.items.length; t++) {
        var e = this.items[t];
        e.sortData.random = Math.random();
      }

      this.options.sortBy = 'random', this._sort(), this._layout();
    }, l._noTransition = function (t, e) {
      var i = this.options.transitionDuration;
      this.options.transitionDuration = 0;
      var o = t.apply(this, e);
      return this.options.transitionDuration = i, o;
    }, l.getFilteredItemElements = function () {
      return this.filteredItems.map(function (t) {
        return t.element;
      });
    }, d;
  });
  ;
  var $grid = $('.portfolio__list').isotope({
    filter: '*',
    itemSelector: '.portfolio__item',
    layoutMode: 'fitRows'
  });
  $('.portfolio__filter').on('click', function () {
    $('.portfolio__filter').removeClass('portfolio__filter--active');
    $(this).addClass('portfolio__filter--active');
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });
  /*!
  * GSAP 3.3.1
  * https://greensock.com
  * 
  * @license Copyright 2020, GreenSock. All rights reserved.
  * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
  * @author: Jack Doyle, jack@greensock.com
  */

  !function (t, e) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {});
  }(this, function (e) {
    "use strict";

    function _inheritsLoose(t, e) {
      t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e;
    }

    function _assertThisInitialized(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }

    function n(t) {
      return "string" == typeof t;
    }

    function o(t) {
      return "function" == typeof t;
    }

    function p(t) {
      return "number" == typeof t;
    }

    function q(t) {
      return void 0 === t;
    }

    function r(t) {
      return "object" == _typeof(t);
    }

    function s(t) {
      return !1 !== t;
    }

    function t() {
      return "undefined" != typeof window;
    }

    function u(t) {
      return o(t) || n(t);
    }

    function K(t) {
      return (l = pt(t, at)) && ie;
    }

    function L(t, e) {
      return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
    }

    function M(t, e) {
      return !e && console.warn(t);
    }

    function N(t, e) {
      return t && (at[t] = e) && l && (l[t] = e) || at;
    }

    function O() {
      return 0;
    }

    function Y(t) {
      var e,
          i,
          n = t[0];

      if (r(n) || o(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
        for (i = dt.length; i-- && !dt[i].targetTest(n);) {
          ;
        }

        e = dt[i];
      }

      for (i = t.length; i--;) {
        t[i] && (t[i]._gsap || (t[i]._gsap = new Ft(t[i], e))) || t.splice(i, 1);
      }

      return t;
    }

    function Z(t) {
      return t._gsap || Y(yt(t))[0]._gsap;
    }

    function $(t, e) {
      var r = t[e];
      return o(r) ? t[e]() : q(r) && t.getAttribute(e) || r;
    }

    function _(t, e) {
      return (t = t.split(",")).forEach(e) || t;
    }

    function aa(t) {
      return Math.round(1e5 * t) / 1e5 || 0;
    }

    function ba(t, e) {
      for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;) {
        ;
      }

      return i < r;
    }

    function ca(t, e, r) {
      var i,
          n = p(t[1]),
          a = (n ? 2 : 1) + (e < 2 ? 0 : 1),
          o = t[a];

      if (n && (o.duration = t[1]), o.parent = r, e) {
        for (i = o; r && !("immediateRender" in i);) {
          i = r.vars.defaults || {}, r = s(r.vars.inherit) && r.parent;
        }

        o.immediateRender = s(i.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[a - 1];
      }

      return o;
    }

    function da() {
      var t,
          e,
          r = ot.length,
          i = ot.slice(0);

      for (ut = {}, t = ot.length = 0; t < r; t++) {
        (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
      }
    }

    function ea(t, e, r, i) {
      ot.length && da(), t.render(e, r, i), ot.length && da();
    }

    function fa(t) {
      var e = parseFloat(t);
      return (e || 0 === e) && (t + "").match(nt).length < 2 ? e : t;
    }

    function ga(t) {
      return t;
    }

    function ha(t, e) {
      for (var r in e) {
        r in t || (t[r] = e[r]);
      }

      return t;
    }

    function ia(t, e) {
      for (var r in e) {
        r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
      }
    }

    function ka(t, e) {
      for (var i in e) {
        t[i] = r(e[i]) ? ka(t[i] || (t[i] = {}), e[i]) : e[i];
      }

      return t;
    }

    function la(t, e) {
      var r,
          i = {};

      for (r in t) {
        r in e || (i[r] = t[r]);
      }

      return i;
    }

    function ma(t) {
      var e = t.parent || F,
          r = t.keyframes ? ia : ha;
      if (s(t.inherit)) for (; e;) {
        r(t, e.vars.defaults), e = e.parent || e._dp;
      }
      return t;
    }

    function pa(t, e, r, i) {
      void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
      var n = e._prev,
          a = e._next;
      n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null;
    }

    function qa(t, e) {
      !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0;
    }

    function ra(t) {
      for (var e = t; e;) {
        e._dirty = 1, e = e.parent;
      }

      return t;
    }

    function ua(t) {
      return t._repeat ? _t(t._tTime, t = t.duration() + t._rDelay) * t : 0;
    }

    function wa(t, e) {
      return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);
    }

    function xa(t) {
      return t._end = aa(t._start + (t._tDur / Math.abs(t._ts || t._rts || B) || 0));
    }

    function ya(t, e) {
      var r;

      if ((e._time || e._initted && !e._dur) && (r = wa(t.rawTime(), e), (!e._dur || gt(0, e.totalDuration(), r) - e._tTime > B) && e.render(r, !0)), ra(t)._dp && t._initted && t._time >= t._dur && t._ts) {
        if (t._dur < t.duration()) for (r = t; r._dp;) {
          0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
        }
        t._zTime = -B;
      }
    }

    function za(t, e, r, i) {
      return e.parent && qa(e), e._start = aa(r + e._delay), e._end = aa(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)), function _addLinkedListItem(t, e, r, i, n) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var a,
            s = t[i];
        if (n) for (a = e[n]; s && s[n] > a;) {
          s = s._prev;
        }
        s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t;
      }(t, e, "_first", "_last", t._sort ? "_start" : 0), t._recent = e, i || ya(t, e), t;
    }

    function Aa(t, e) {
      return (at.ScrollTrigger || L("scrollTrigger", e)) && at.ScrollTrigger.create(e, t);
    }

    function Ba(t, e, r, i) {
      return qt(t, e), t._initted ? !r && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && d !== Mt.frame ? (ot.push(t), t._lazy = [e, i], 1) : void 0 : 1;
    }

    function Ea(t, e, r) {
      var i = t._repeat,
          n = aa(e) || 0;
      return t._dur = n, t._tDur = i ? i < 0 ? 1e10 : aa(n * (i + 1) + t._rDelay * i) : n, t._time > n && (t._time = n, t._tTime = Math.min(t._tTime, t._tDur)), r || ra(t.parent), t.parent && xa(t), t;
    }

    function Fa(t) {
      return t instanceof Bt ? ra(t) : Ea(t, t._dur);
    }

    function Ha(t, e) {
      var r,
          i,
          a = t.labels,
          s = t._recent || mt,
          o = t.duration() >= E ? s.endTime(!1) : t._dur;
      return n(e) && (isNaN(e) || e in a) ? "<" === (r = e.charAt(0)) || ">" === r ? ("<" === r ? s._start : s.endTime(0 <= s._repeat)) + (parseFloat(e.substr(1)) || 0) : (r = e.indexOf("=")) < 0 ? (e in a || (a[e] = o), a[e]) : (i = +(e.charAt(r - 1) + e.substr(r + 1)), 1 < r ? Ha(t, e.substr(0, r - 1)) + i : o + i) : null == e ? o : +e;
    }

    function Ia(t, e) {
      return t || 0 === t ? e(t) : e;
    }

    function Ka(t) {
      return (t + "").substr((parseFloat(t) + "").length);
    }

    function Na(t, e) {
      return t && r(t) && "length" in t && (!e && !t.length || t.length - 1 in t && r(t[0])) && !t.nodeType && t !== i;
    }

    function Qa(t) {
      return t.sort(function () {
        return .5 - Math.random();
      });
    }

    function Ra(t) {
      if (o(t)) return t;

      var p = r(t) ? t : {
        each: t
      },
          _ = zt(p.ease),
          m = p.from || 0,
          g = parseFloat(p.base) || 0,
          v = {},
          e = 0 < m && m < 1,
          y = isNaN(m) || e,
          T = p.axis,
          b = m,
          w = m;

      return n(m) ? b = w = {
        center: .5,
        edges: .5,
        end: 1
      }[m] || 0 : !e && y && (b = m[0], w = m[1]), function (t, e, r) {
        var i,
            n,
            a,
            s,
            o,
            u,
            h,
            l,
            f,
            d = (r || p).length,
            c = v[d];

        if (!c) {
          if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, E])[1])) {
            for (h = -E; h < (h = r[f++].getBoundingClientRect().left) && f < d;) {
              ;
            }

            f--;
          }

          for (c = v[d] = [], i = y ? Math.min(f, d) * b - .5 : m % f, n = y ? d * w / f - .5 : m / f | 0, l = E, u = h = 0; u < d; u++) {
            a = u % f - i, s = n - (u / f | 0), c[u] = o = T ? Math.abs("y" === T ? s : a) : V(a * a + s * s), h < o && (h = o), o < l && (l = o);
          }

          "random" === m && Qa(c), c.max = h - l, c.min = l, c.v = d = (parseFloat(p.amount) || parseFloat(p.each) * (d < f ? d - 1 : T ? "y" === T ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === m ? -1 : 1), c.b = d < 0 ? g - d : g, c.u = Ka(p.amount || p.each) || 0, _ = _ && d < 0 ? Dt(_) : _;
        }

        return d = (c[t] - c.min) / c.max || 0, aa(c.b + (_ ? _(d) : d) * c.v) + c.u;
      };
    }

    function Sa(e) {
      var r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
      return function (t) {
        return Math.floor(Math.round(parseFloat(t) / e) * e * r) / r + (p(t) ? 0 : Ka(t));
      };
    }

    function Ta(u, t) {
      var h,
          l,
          e = W(u);
      return !e && r(u) && (h = e = u.radius || E, u.values ? (u = yt(u.values), (l = !p(u[0])) && (h *= h)) : u = Sa(u.increment)), Ia(t, e ? o(u) ? function (t) {
        return l = u(t), Math.abs(l - t) <= h ? l : t;
      } : function (t) {
        for (var e, r, i = parseFloat(l ? t.x : t), n = parseFloat(l ? t.y : 0), a = E, s = 0, o = u.length; o--;) {
          (e = l ? (e = u[o].x - i) * e + (r = u[o].y - n) * r : Math.abs(u[o] - i)) < a && (a = e, s = o);
        }

        return s = !h || a <= h ? u[s] : t, l || s === t || p(t) ? s : s + Ka(t);
      } : Sa(u));
    }

    function Ua(t, e, r, i) {
      return Ia(W(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
        return W(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t + Math.random() * (e - t)) / r) * r * i) / i;
      });
    }

    function Ya(e, r, t) {
      return Ia(t, function (t) {
        return e[~~r(t)];
      });
    }

    function _a(t) {
      for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) {
        i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? nt : G), s += t.substr(a, e - a) + Ua(n ? r : +r[0], +r[1], +r[2] || 1e-5), a = i + 1;
      }

      return s + t.substr(a, t.length - a);
    }

    function cb(t, e, r) {
      var i,
          n,
          a,
          s = t.labels,
          o = E;

      for (i in s) {
        (n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
      }

      return a;
    }

    function eb(t) {
      return qa(t), t.progress() < 1 && bt(t, "onInterrupt"), t;
    }

    function jb(t, e, r) {
      return (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * wt + .5 | 0;
    }

    function kb(t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          c = t ? p(t) ? [t >> 16, t >> 8 & wt, t & wt] : 0 : xt.black;

      if (!c) {
        if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), xt[t]) c = xt[t];else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (i = t.charAt(1)) + i + (n = t.charAt(2)) + n + (a = t.charAt(3)) + a), c = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & wt, t & wt];else if ("hsl" === t.substr(0, 3)) {
          if (c = d = t.match(G), e) {
            if (~t.indexOf("=")) return c = t.match(J), r && c.length < 4 && (c[3] = 1), c;
          } else s = +c[0] % 360 / 360, o = c[1] / 100, i = 2 * (u = c[2] / 100) - (n = u <= .5 ? u * (o + 1) : u + o - u * o), 3 < c.length && (c[3] *= 1), c[0] = jb(s + 1 / 3, i, n), c[1] = jb(s, i, n), c[2] = jb(s - 1 / 3, i, n);
        } else c = t.match(G) || xt.transparent;
        c = c.map(Number);
      }

      return e && !d && (i = c[0] / wt, n = c[1] / wt, a = c[2] / wt, u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2, h === l ? s = o = 0 : (f = h - l, o = .5 < u ? f / (2 - h - l) : f / (h + l), s = h === i ? (n - a) / f + (n < a ? 6 : 0) : h === n ? (a - i) / f + 2 : (i - n) / f + 4, s *= 60), c[0] = ~~(s + .5), c[1] = ~~(100 * o + .5), c[2] = ~~(100 * u + .5)), r && c.length < 4 && (c[3] = 1), c;
    }

    function lb(t) {
      var r = [],
          i = [],
          n = -1;
      return t.split(kt).forEach(function (t) {
        var e = t.match(tt) || [];
        r.push.apply(r, e), i.push(n += e.length + 1);
      }), r.c = i, r;
    }

    function mb(t, e, r) {
      var i,
          n,
          a,
          s,
          o = "",
          u = (t + o).match(kt),
          h = e ? "hsla(" : "rgba(",
          l = 0;
      if (!u) return t;
      if (u = u.map(function (t) {
        return (t = kb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
      }), r && (a = lb(t), (i = r.c).join(o) !== a.c.join(o))) for (s = (n = t.replace(kt, "1").split(tt)).length - 1; l < s; l++) {
        o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
      }
      if (!n) for (s = (n = t.split(kt)).length - 1; l < s; l++) {
        o += n[l] + u[l];
      }
      return o + n[s];
    }

    function pb(t) {
      var e,
          r = t.join(" ");
      if (kt.lastIndex = 0, kt.test(r)) return e = Ot.test(r), t[1] = mb(t[1], e), t[0] = mb(t[0], e, lb(t[1])), !0;
    }

    function xb(t) {
      var e = (t + "").split("("),
          r = Pt[e[0]];
      return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
        for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) {
          r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(At, "").trim() : +i, s = r.substr(e + 1).trim();
        }

        return n;
      }(e[1])] : rt.exec(t)[1].split(",").map(fa)) : Pt._CE && St.test(t) ? Pt._CE("", t) : r;
    }

    function zb(t, e) {
      for (var r, i = t._first; i;) {
        i instanceof Bt ? zb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? zb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next;
      }
    }

    function Bb(t, e, r, i) {
      void 0 === r && (r = function easeOut(t) {
        return 1 - e(1 - t);
      }), void 0 === i && (i = function easeInOut(t) {
        return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
      });
      var n,
          a = {
        easeIn: e,
        easeOut: r,
        easeInOut: i
      };
      return _(t, function (t) {
        for (var e in Pt[t] = at[t] = a, Pt[n = t.toLowerCase()] = r, a) {
          Pt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Pt[t + "." + e] = a[e];
        }
      }), a;
    }

    function Cb(e) {
      return function (t) {
        return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2;
      };
    }

    function Db(r, t, e) {
      function el(t) {
        return 1 === t ? 1 : i * Math.pow(2, -10 * t) * Q((t - a) * n) + 1;
      }

      var i = 1 <= t ? t : 1,
          n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
          a = n / I * (Math.asin(1 / i) || 0),
          s = "out" === r ? el : "in" === r ? function (t) {
        return 1 - el(1 - t);
      } : Cb(el);
      return n = I / n, s.config = function (t, e) {
        return Db(r, t, e);
      }, s;
    }

    function Eb(e, r) {
      function ml(t) {
        return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
      }

      void 0 === r && (r = 1.70158);
      var t = "out" === e ? ml : "in" === e ? function (t) {
        return 1 - ml(1 - t);
      } : Cb(ml);
      return t.config = function (t) {
        return Eb(e, t);
      }, t;
    }

    var F,
        i,
        a,
        h,
        l,
        f,
        d,
        c,
        m,
        g,
        v,
        y,
        T,
        b,
        w,
        x,
        k,
        C,
        P,
        S,
        A,
        D,
        z,
        U = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: {
        lineHeight: ""
      }
    },
        R = {
      duration: .5,
      overwrite: !1,
      delay: 0
    },
        E = 1e8,
        B = 1 / E,
        I = 2 * Math.PI,
        H = I / 4,
        X = 0,
        V = Math.sqrt,
        j = Math.cos,
        Q = Math.sin,
        W = Array.isArray,
        G = /(?:-?\.?\d|\.)+/gi,
        J = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
        tt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        et = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
        rt = /\(([^()]+)\)/i,
        it = /[+-]=-?[\.\d]+/,
        nt = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
        at = {},
        st = {},
        ot = [],
        ut = {},
        ht = {},
        lt = {},
        ft = 30,
        dt = [],
        ct = "",
        pt = function _merge(t, e) {
      for (var r in e) {
        t[r] = e[r];
      }

      return t;
    },
        _t = function _animationCycle(t, e) {
      return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
    },
        mt = {
      _start: 0,
      endTime: O
    },
        gt = function _clamp(t, e, r) {
      return r < t ? t : e < r ? e : r;
    },
        vt = [].slice,
        yt = function toArray(t, e) {
      return !n(t) || e || !a && Ct() ? W(t) ? function _flatten(t, e, r) {
        return void 0 === r && (r = []), t.forEach(function (t) {
          return n(t) && !e || Na(t, 1) ? r.push.apply(r, yt(t)) : r.push(t);
        }) || r;
      }(t, e) : Na(t) ? vt.call(t, 0) : t ? [t] : [] : vt.call(h.querySelectorAll(t), 0);
    },
        Tt = function mapRange(e, t, r, i, n) {
      var a = t - e,
          s = i - r;
      return Ia(n, function (t) {
        return r + ((t - e) / a * s || 0);
      });
    },
        bt = function _callback(t, e, r) {
      var i,
          n,
          a = t.vars,
          s = a[e];
      if (s) return i = a[e + "Params"], n = a.callbackScope || t, r && ot.length && da(), i ? s.apply(n, i) : s.call(n);
    },
        wt = 255,
        xt = {
      aqua: [0, wt, wt],
      lime: [0, wt, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, wt],
      navy: [0, 0, 128],
      white: [wt, wt, wt],
      olive: [128, 128, 0],
      yellow: [wt, wt, 0],
      orange: [wt, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [wt, 0, 0],
      pink: [wt, 192, 203],
      cyan: [0, wt, wt],
      transparent: [wt, wt, wt, 0]
    },
        kt = function () {
      var t,
          e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";

      for (t in xt) {
        e += "|" + t + "\\b";
      }

      return new RegExp(e + ")", "gi");
    }(),
        Ot = /hsl[a]?\(/,
        Mt = (b = Date.now, w = 500, x = 33, k = b(), C = k, S = P = 1 / 240, T = {
      time: 0,
      frame: 0,
      tick: function tick() {
        gk(!0);
      },
      wake: function wake() {
        f && (!a && t() && (i = a = window, h = i.document || {}, at.gsap = ie, (i.gsapVersions || (i.gsapVersions = [])).push(ie.version), K(l || i.GreenSockGlobals || !i.gsap && i || {}), y = i.requestAnimationFrame), g && T.sleep(), v = y || function (t) {
          return setTimeout(t, 1e3 * (S - T.time) + 1 | 0);
        }, m = 1, gk(2));
      },
      sleep: function sleep() {
        (y ? i.cancelAnimationFrame : clearTimeout)(g), m = 0, v = O;
      },
      lagSmoothing: function lagSmoothing(t, e) {
        w = t || 1e8, x = Math.min(e, w, 0);
      },
      fps: function fps(t) {
        P = 1 / (t || 240), S = T.time + P;
      },
      add: function add(t) {
        A.indexOf(t) < 0 && A.push(t), Ct();
      },
      remove: function remove(t) {
        var e;
        ~(e = A.indexOf(t)) && A.splice(e, 1);
      },
      _listeners: A = []
    }),
        Ct = function _wake() {
      return !m && Mt.wake();
    },
        Pt = {},
        St = /^[\d.\-M][\d.\-,\s]/,
        At = /["']/g,
        Dt = function _invertEase(e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
        zt = function _parseEase(t, e) {
      return t && (o(t) ? t : Pt[t] || xb(t)) || e;
    };

    function gk(e) {
      var t,
          r,
          i = b() - C,
          n = !0 === e;
      w < i && (k += i - x), C += i, T.time = (C - k) / 1e3, (0 < (t = T.time - S) || n) && (T.frame++, S += t + (P <= t ? .004 : P - t), r = 1), n || (g = v(gk)), r && A.forEach(function (t) {
        return t(T.time, i, T.frame, e);
      });
    }

    function Dl(t) {
      return t < z ? D * t * t : t < .7272727272727273 ? D * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? D * (t -= 2.25 / 2.75) * t + .9375 : D * Math.pow(t - 2.625 / 2.75, 2) + .984375;
    }

    _("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
      var r = e < 5 ? e + 1 : e;
      Bb(t + ",Power" + (r - 1), e ? function (t) {
        return Math.pow(t, r);
      } : function (t) {
        return t;
      }, function (t) {
        return 1 - Math.pow(1 - t, r);
      }, function (t) {
        return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
      });
    }), Pt.Linear.easeNone = Pt.none = Pt.Linear.easeIn, Bb("Elastic", Db("in"), Db("out"), Db()), D = 7.5625, z = 1 / 2.75, Bb("Bounce", function (t) {
      return 1 - Dl(1 - t);
    }, Dl), Bb("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }), Bb("Circ", function (t) {
      return -(V(1 - t * t) - 1);
    }), Bb("Sine", function (t) {
      return 1 === t ? 1 : 1 - j(t * H);
    }), Bb("Back", Eb("in"), Eb("out"), Eb()), Pt.SteppedEase = Pt.steps = at.SteppedEase = {
      config: function config(t, e) {
        void 0 === t && (t = 1);
        var r = 1 / t,
            i = t + (e ? 0 : 1),
            n = e ? 1 : 0;
        return function (t) {
          return ((i * gt(0, .99999999, t) | 0) + n) * r;
        };
      }
    }, R.ease = Pt["quad.out"], _("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
      return ct += t + "," + t + "Params,";
    });

    var Et,
        Ft = function GSCache(t, e) {
      this.id = X++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : $, this.set = e ? e.getSetter : Zt;
    },
        Rt = ((Et = Animation.prototype).delay = function delay(t) {
      return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay;
    }, Et.duration = function duration(t) {
      return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur;
    }, Et.totalDuration = function totalDuration(t) {
      return arguments.length ? (this._dirty = 0, Ea(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
    }, Et.totalTime = function totalTime(t, e) {
      if (Ct(), !arguments.length) return this._tTime;
      var r = this.parent || this._dp;

      if (r && r.smoothChildTiming && this._ts) {
        for (this._start = aa(r._time - (0 < this._ts ? t / this._ts : ((this._dirty ? this.totalDuration() : this._tDur) - t) / -this._ts)), xa(this), r._dirty || ra(r); r.parent;) {
          r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
        }

        !this.parent && this._dp.autoRemoveChildren && za(this._dp, this, this._start - this._delay);
      }

      return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === B || !t && !this._initted) && (this._ts || (this._pTime = t), ea(this, t, e)), this;
    }, Et.time = function time(t, e) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + ua(this)) % this._dur || (t ? this._dur : 0), e) : this._time;
    }, Et.totalProgress = function totalProgress(t, e) {
      return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    }, Et.progress = function progress(t, e) {
      return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + ua(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    }, Et.iteration = function iteration(t, e) {
      var r = this.duration() + this._rDelay;

      return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? _t(this._tTime, r) + 1 : 1;
    }, Et.timeScale = function timeScale(t) {
      if (!arguments.length) return this._rts === -B ? 0 : this._rts;
      if (this._rts === t) return this;
      var e = this.parent && this._ts ? wa(this.parent._time, this) : this._tTime;
      return this._rts = +t || 0, this._ts = this._ps || t === -B ? 0 : this._rts, function _recacheAncestors(t) {
        for (var e = t.parent; e && e.parent;) {
          e._dirty = 1, e.totalDuration(), e = e.parent;
        }

        return t;
      }(this.totalTime(gt(0, this._tDur, e), !0));
    }, Et.paused = function paused(t) {
      return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ct(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= B) && Math.abs(this._zTime) !== B))), this) : this._ps;
    }, Et.startTime = function startTime(t) {
      if (arguments.length) {
        this._start = t;
        var e = this.parent || this._dp;
        return !e || !e._sort && this.parent || za(e, this, t - this._delay), this;
      }

      return this._start;
    }, Et.endTime = function endTime(t) {
      return this._start + (s(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
    }, Et.rawTime = function rawTime(t) {
      var e = this.parent || this._dp;
      return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? wa(e.rawTime(t), this) : this._tTime : this._tTime;
    }, Et.repeat = function repeat(t) {
      return arguments.length ? (this._repeat = t, Fa(this)) : this._repeat;
    }, Et.repeatDelay = function repeatDelay(t) {
      return arguments.length ? (this._rDelay = t, Fa(this)) : this._rDelay;
    }, Et.yoyo = function yoyo(t) {
      return arguments.length ? (this._yoyo = t, this) : this._yoyo;
    }, Et.seek = function seek(t, e) {
      return this.totalTime(Ha(this, t), s(e));
    }, Et.restart = function restart(t, e) {
      return this.play().totalTime(t ? -this._delay : 0, s(e));
    }, Et.play = function play(t, e) {
      return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
    }, Et.reverse = function reverse(t, e) {
      return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
    }, Et.pause = function pause(t, e) {
      return null != t && this.seek(t, e), this.paused(!0);
    }, Et.resume = function resume() {
      return this.paused(!1);
    }, Et.reversed = function reversed(t) {
      return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -B : 0)), this) : this._rts < 0;
    }, Et.invalidate = function invalidate() {
      return this._initted = 0, this._zTime = -B, this;
    }, Et.isActive = function isActive(t) {
      var e,
          r = this.parent || this._dp,
          i = this._start;
      return !(r && !(this._ts && (this._initted || !t) && r.isActive(t) && (e = r.rawTime(!0)) >= i && e < this.endTime(!0) - B));
    }, Et.eventCallback = function eventCallback(t, e, r) {
      var i = this.vars;
      return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t];
    }, Et.then = function then(t) {
      var i = this;
      return new Promise(function (e) {
        function Sm() {
          var t = i.then;
          i.then = null, o(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t;
        }

        var r = o(t) ? t : ga;
        i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? Sm() : i._prom = Sm;
      });
    }, Et.kill = function kill() {
      eb(this);
    }, Animation);

    function Animation(t, e) {
      var r = t.parent || F;
      this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ea(this, +t.duration, 1), this.data = t.data, m || Mt.wake(), r && za(r, this, e || 0 === e ? e : r._time, 1), t.reversed && this.reverse(), t.paused && this.paused(!0);
    }

    ha(Rt.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -B,
      _prom: 0,
      _ps: !1,
      _rts: 1
    });

    var Bt = function (i) {
      function Timeline(t, e) {
        var r;
        return void 0 === t && (t = {}), (r = i.call(this, t, e) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = s(t.sortChildren), r.parent && ya(r.parent, _assertThisInitialized(r)), t.scrollTrigger && Aa(_assertThisInitialized(r), t.scrollTrigger), r;
      }

      _inheritsLoose(Timeline, i);

      var t = Timeline.prototype;
      return t.to = function to(t, e, r, i) {
        return new Ht(t, ca(arguments, 0, this), Ha(this, p(e) ? i : r)), this;
      }, t.from = function from(t, e, r, i) {
        return new Ht(t, ca(arguments, 1, this), Ha(this, p(e) ? i : r)), this;
      }, t.fromTo = function fromTo(t, e, r, i, n) {
        return new Ht(t, ca(arguments, 2, this), Ha(this, p(e) ? n : i)), this;
      }, t.set = function set(t, e, r) {
        return e.duration = 0, e.parent = this, ma(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Ht(t, e, Ha(this, r), 1), this;
      }, t.call = function call(t, e, r) {
        return za(this, Ht.delayedCall(0, t, e), Ha(this, r));
      }, t.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
        return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Ht(t, r, Ha(this, n)), this;
      }, t.staggerFrom = function staggerFrom(t, e, r, i, n, a, o) {
        return r.runBackwards = 1, ma(r).immediateRender = s(r.immediateRender), this.staggerTo(t, e, r, i, n, a, o);
      }, t.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, o, u) {
        return i.startAt = r, ma(i).immediateRender = s(i.immediateRender), this.staggerTo(t, e, i, n, a, o, u);
      }, t.render = function render(t, e, r) {
        var i,
            n,
            a,
            s,
            o,
            u,
            h,
            l,
            f,
            d,
            c,
            p,
            _ = this._time,
            m = this._dirty ? this.totalDuration() : this._tDur,
            g = this._dur,
            v = this !== F && m - B < t && 0 <= t ? m : t < B ? 0 : t,
            y = this._zTime < 0 != t < 0 && (this._initted || !g);

        if (v !== this._tTime || r || y) {
          if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat && (c = this._yoyo, o = g + this._rDelay, (g < (i = aa(v % o)) || m === v) && (i = g), (s = ~~(v / o)) && s === v / o && (i = g, s--), d = _t(this._tTime, o), !_ && this._tTime && d !== s && (d = s), c && 1 & s && (i = g - i, p = 1), s !== d && !this._lock)) {
            var T = c && 1 & d,
                b = T === (c && 1 & s);
            if (s < d && (T = !T), _ = T ? 0 : g, this._lock = 1, this.render(_ || (p ? 0 : aa(s * o)), e, !g)._lock = 0, !e && this.parent && bt(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ !== this._time || u != !this._ts) return this;
            if (b && (this._lock = 2, _ = T ? g + 1e-4 : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
            zb(this, p);
          }

          if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
            var i;
            if (e < r) for (i = t._first; i && i._start <= r;) {
              if (!i._dur && "isPause" === i.data && i._start > e) return i;
              i = i._next;
            } else for (i = t._last; i && i._start >= r;) {
              if (!i._dur && "isPause" === i.data && i._start < e) return i;
              i = i._prev;
            }
          }(this, aa(_), aa(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t), _ || !i || e || bt(this, "onStart"), _ <= i && 0 <= t) for (n = this._first; n;) {
            if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
              if (n.parent !== this) return this.render(t, e, r);

              if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                h = 0, a && (v += this._zTime = -B);
                break;
              }
            }

            n = a;
          } else {
            n = this._last;

            for (var w = t < 0 ? t : i; n;) {
              if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
                if (n.parent !== this) return this.render(t, e, r);

                if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                  h = 0, a && (v += this._zTime = w ? -B : B);
                  break;
                }
              }

              n = a;
            }
          }
          if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -B)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, xa(this), this.render(t, e, r);
          this._onUpdate && !e && bt(this, "onUpdate", !0), (v === m && m >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || qa(this, 1), e || t < 0 && !_ || !v && !_ || (bt(this, v === m ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())));
        }

        return this;
      }, t.add = function add(t, e) {
        var r = this;

        if (p(e) || (e = Ha(this, e)), !(t instanceof Rt)) {
          if (W(t)) return t.forEach(function (t) {
            return r.add(t, e);
          }), ra(this);
          if (n(t)) return this.addLabel(t, e);
          if (!o(t)) return this;
          t = Ht.delayedCall(0, t);
        }

        return this !== t ? za(this, t, e) : this;
      }, t.getChildren = function getChildren(t, e, r, i) {
        void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -E);

        for (var n = [], a = this._first; a;) {
          a._start >= i && (a instanceof Ht ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
        }

        return n;
      }, t.getById = function getById(t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--;) {
          if (e[r].vars.id === t) return e[r];
        }
      }, t.remove = function remove(t) {
        return n(t) ? this.removeLabel(t) : o(t) ? this.killTweensOf(t) : (pa(this, t), t === this._recent && (this._recent = this._last), ra(this));
      }, t.totalTime = function totalTime(t, e) {
        return arguments.length ? (this._forcing = 1, this.parent || this._dp || !this._ts || (this._start = aa(Mt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime;
      }, t.addLabel = function addLabel(t, e) {
        return this.labels[t] = Ha(this, e), this;
      }, t.removeLabel = function removeLabel(t) {
        return delete this.labels[t], this;
      }, t.addPause = function addPause(t, e, r) {
        var i = Ht.delayedCall(0, e || O, r);
        return i.data = "isPause", this._hasPause = 1, za(this, i, Ha(this, t));
      }, t.removePause = function removePause(t) {
        var e = this._first;

        for (t = Ha(this, t); e;) {
          e._start === t && "isPause" === e.data && qa(e), e = e._next;
        }
      }, t.killTweensOf = function killTweensOf(t, e, r) {
        for (var i = this.getTweensOf(t, r), n = i.length; n--;) {
          It !== i[n] && i[n].kill(t, e);
        }

        return this;
      }, t.getTweensOf = function getTweensOf(t, e) {
        for (var r, i = [], n = yt(t), a = this._first; a;) {
          a instanceof Ht ? !ba(a._targets, n) || e && !a.isActive("started" === e) || i.push(a) : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r), a = a._next;
        }

        return i;
      }, t.tweenTo = function tweenTo(t, e) {
        e = e || {};
        var r = this,
            i = Ha(r, t),
            n = e.startAt,
            a = e.onStart,
            s = e.onStartParams,
            o = Ht.to(r, ha(e, {
          ease: "none",
          lazy: !1,
          time: i,
          duration: e.duration || Math.abs((i - (n && "time" in n ? n.time : r._time)) / r.timeScale()) || B,
          onStart: function onStart() {
            r.pause();
            var t = e.duration || Math.abs((i - r._time) / r.timeScale());
            o._dur !== t && Ea(o, t).render(o._time, !0, !0), a && a.apply(o, s || []);
          }
        }));
        return o;
      }, t.tweenFromTo = function tweenFromTo(t, e, r) {
        return this.tweenTo(e, ha({
          startAt: {
            time: Ha(this, t)
          }
        }, r));
      }, t.recent = function recent() {
        return this._recent;
      }, t.nextLabel = function nextLabel(t) {
        return void 0 === t && (t = this._time), cb(this, Ha(this, t));
      }, t.previousLabel = function previousLabel(t) {
        return void 0 === t && (t = this._time), cb(this, Ha(this, t), 1);
      }, t.currentLabel = function currentLabel(t) {
        return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + B);
      }, t.shiftChildren = function shiftChildren(t, e, r) {
        void 0 === r && (r = 0);

        for (var i, n = this._first, a = this.labels; n;) {
          n._start >= r && (n._start += t), n = n._next;
        }

        if (e) for (i in a) {
          a[i] >= r && (a[i] += t);
        }
        return ra(this);
      }, t.invalidate = function invalidate() {
        var t = this._first;

        for (this._lock = 0; t;) {
          t.invalidate(), t = t._next;
        }

        return i.prototype.invalidate.call(this);
      }, t.clear = function clear(t) {
        void 0 === t && (t = !0);

        for (var e, r = this._first; r;) {
          e = r._next, this.remove(r), r = e;
        }

        return this._time = this._tTime = this._pTime = 0, t && (this.labels = {}), ra(this);
      }, t.totalDuration = function totalDuration(t) {
        var e,
            r,
            i,
            n,
            a = 0,
            s = this,
            o = s._last,
            u = E;
        if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));

        if (s._dirty) {
          for (n = s.parent; o;) {
            e = o._prev, o._dirty && o.totalDuration(), u < (i = o._start) && s._sort && o._ts && !s._lock ? (s._lock = 1, za(s, o, i - o._delay, 1)._lock = 0) : u = i, i < 0 && o._ts && (a -= i, (!n && !s._dp || n && n.smoothChildTiming) && (s._start += i / s._ts, s._time -= i, s._tTime -= i), s.shiftChildren(-i, !1, -Infinity), u = 0), a < (r = xa(o)) && o._ts && (a = r), o = e;
          }

          Ea(s, s === F && s._time > a ? s._time : a, 1), s._dirty = 0;
        }

        return s._tDur;
      }, Timeline.updateRoot = function updateRoot(t) {
        if (F._ts && (ea(F, wa(t, F)), d = Mt.frame), Mt.frame >= ft) {
          ft += U.autoSleep || 120;
          var e = F._first;

          if ((!e || !e._ts) && U.autoSleep && Mt._listeners.length < 2) {
            for (; e && !e._ts;) {
              e = e._next;
            }

            e || Mt.sleep();
          }
        }
      }, Timeline;
    }(Rt);

    ha(Bt.prototype, {
      _lock: 0,
      _hasPause: 0,
      _forcing: 0
    });

    function Lb(t, e, i, a, s, u) {
      var h, l, f, d;
      if (ht[t] && !1 !== (h = new ht[t]()).init(s, h.rawVars ? e[t] : function _processVars(t, e, i, a, s) {
        if (o(t) && (t = Yt(t, s, e, i, a)), !r(t) || t.style && t.nodeType || W(t)) return n(t) ? Yt(t, s, e, i, a) : t;
        var u,
            h = {};

        for (u in t) {
          h[u] = Yt(t[u], s, e, i, a);
        }

        return h;
      }(e[t], a, s, u, i), i, a, u) && (i._pt = l = new ee(i._pt, s, t, 0, 1, h.render, h, 0, h.priority), i !== c)) for (f = i._ptLookup[i._targets.indexOf(s)], d = h._props.length; d--;) {
        f[h._props[d]] = l;
      }
      return h;
    }

    var It,
        Lt = function _addPropTween(t, e, r, i, a, s, u, h, l) {
      o(i) && (i = i(a || 0, t, s));
      var f,
          d = t[e],
          c = "get" !== r ? r : o(d) ? l ? t[e.indexOf("set") || !o(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d,
          p = o(d) ? l ? jt : Vt : Xt;
      if (n(i) && (~i.indexOf("random(") && (i = _a(i)), "=" === i.charAt(1) && (i = parseFloat(c) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (Ka(c) || 0))), c !== i) return isNaN(c + i) ? (d || e in t || L(e, i), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
        var o,
            u,
            h,
            l,
            f,
            d,
            c,
            p,
            _ = new ee(this._pt, t, e, 0, 1, Wt, null, n),
            m = 0,
            g = 0;

        for (_.b = r, _.e = i, r += "", (c = ~(i += "").indexOf("random(")) && (i = _a(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(et) || []; o = et.exec(i);) {
          l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, _._pt = {
            _next: _._pt,
            p: f || 1 === g ? f : ",",
            s: d,
            c: "=" === l.charAt(1) ? parseFloat(l.substr(2)) * ("-" === l.charAt(0) ? -1 : 1) : parseFloat(l) - d,
            m: h && h < 4 ? Math.round : 0
          }, m = et.lastIndex);
        }

        return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (it.test(i) || c) && (_.e = 0), this._pt = _;
      }.call(this, t, e, c, i, p, h || U.stringFilter, l)) : (f = new ee(this._pt, t, e, +c || 0, i - (c || 0), "boolean" == typeof d ? Qt : Kt, 0, p), l && (f.fp = l), u && f.modifier(u, this, t), this._pt = f);
    },
        qt = function _initTween(t, e) {
      var r,
          i,
          n,
          a,
          o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _ = t.vars,
          m = _.ease,
          g = _.startAt,
          v = _.immediateRender,
          y = _.lazy,
          T = _.onUpdate,
          b = _.onUpdateParams,
          w = _.callbackScope,
          x = _.runBackwards,
          k = _.yoyoEase,
          O = _.keyframes,
          M = _.autoRevert,
          C = t._dur,
          P = t._startAt,
          S = t._targets,
          A = t.parent,
          D = A && "nested" === A.data ? A.parent._targets : S,
          z = "auto" === t._overwrite,
          E = t.timeline;

      if (!E || O && m || (m = "none"), t._ease = zt(m, R.ease), t._yEase = k ? Dt(zt(!0 === k ? m : k, R.ease)) : 0, k && t._yoyo && !t._repeat && (k = t._yEase, t._yEase = t._ease, t._ease = k), !E) {
        if (p = (l = S[0] ? Z(S[0]).harness : 0) && _[l.prop], r = la(_, st), P && P.render(-1, !0).kill(), g) {
          if (qa(t._startAt = Ht.set(S, ha({
            data: "isStart",
            overwrite: !1,
            parent: A,
            immediateRender: !0,
            lazy: s(y),
            startAt: null,
            delay: 0,
            onUpdate: T,
            onUpdateParams: b,
            callbackScope: w,
            stagger: 0
          }, g))), v) if (0 < e) M || (t._startAt = 0);else if (C) return;
        } else if (x && C) if (P) M || (t._startAt = 0);else if (e && (v = !1), n = pt(r, {
          overwrite: !1,
          data: "isFromStart",
          lazy: v && s(y),
          immediateRender: v,
          stagger: 0,
          parent: A
        }), p && (n[l.prop] = p), qa(t._startAt = Ht.set(S, n)), v) {
          if (!e) return;
        } else _initTween(t._startAt, B);

        for (t._pt = 0, y = C && s(y) || y && !C, i = 0; i < S.length; i++) {
          if (h = (o = S[i])._gsap || Y(S)[i]._gsap, t._ptLookup[i] = d = {}, ut[h.id] && da(), c = D === S ? i : D.indexOf(o), l && !1 !== (f = new l()).init(o, p || r, t, c, D) && (t._pt = a = new ee(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function (t) {
            d[t] = a;
          }), f.priority && (u = 1)), !l || p) for (n in r) {
            ht[n] && (f = Lb(n, r, t, c, o, D)) ? f.priority && (u = 1) : d[n] = a = Lt.call(t, o, n, "get", r[n], c, D, 0, _.stringFilter);
          }
          t._op && t._op[i] && t.kill(o, t._op[i]), z && t._pt && (It = t, F.killTweensOf(o, d, "started"), It = 0), t._pt && y && (ut[h.id] = 1);
        }

        u && te(t), t._onInit && t._onInit(t);
      }

      t._from = !E && !!_.runBackwards, t._onUpdate = T, t._initted = 1;
    },
        Yt = function _parseFuncOrString(t, e, r, i, a) {
      return o(t) ? t.call(e, r, i, a) : n(t) && ~t.indexOf("random(") ? _a(t) : t;
    },
        Nt = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Ut = (Nt + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
        Ht = function (D) {
      function Tween(t, e, i, n) {
        var a;
        "number" == typeof e && (i.duration = e, e = i, i = null);

        var o,
            h,
            l,
            f,
            d,
            c,
            _,
            m,
            g = (a = D.call(this, n ? e : ma(e), i) || this).vars,
            v = g.duration,
            y = g.delay,
            T = g.immediateRender,
            b = g.stagger,
            w = g.overwrite,
            x = g.keyframes,
            k = g.defaults,
            C = g.scrollTrigger,
            P = g.yoyoEase,
            S = a.parent,
            A = (W(t) ? p(t[0]) : "length" in e) ? [t] : yt(t);

        if (a._targets = A.length ? Y(A) : M("GSAP target " + t + " not found. https://greensock.com", !U.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = w, x || b || u(v) || u(y)) {
          if (e = a.vars, (o = a.timeline = new Bt({
            data: "nested",
            defaults: k || {}
          })).kill(), o.parent = _assertThisInitialized(a), x) ha(o.vars.defaults, {
            ease: "none"
          }), x.forEach(function (t) {
            return o.to(A, t, ">");
          });else {
            if (f = A.length, _ = b ? Ra(b) : O, r(b)) for (d in b) {
              ~Nt.indexOf(d) && ((m = m || {})[d] = b[d]);
            }

            for (h = 0; h < f; h++) {
              for (d in l = {}, e) {
                Ut.indexOf(d) < 0 && (l[d] = e[d]);
              }

              l.stagger = 0, P && (l.yoyoEase = P), m && pt(l, m), c = A[h], l.duration = +Yt(v, _assertThisInitialized(a), h, c, A), l.delay = (+Yt(y, _assertThisInitialized(a), h, c, A) || 0) - a._delay, !b && 1 === f && l.delay && (a._delay = y = l.delay, a._start += y, l.delay = 0), o.to(c, l, _(h, c, A));
            }

            o.duration() ? v = y = 0 : a.timeline = 0;
          }
          v || a.duration(v = o.duration());
        } else a.timeline = 0;

        return !0 === w && (It = _assertThisInitialized(a), F.killTweensOf(A), It = 0), S && ya(S, _assertThisInitialized(a)), (T || !v && !x && a._start === aa(S._time) && s(T) && function _hasNoPausedAncestors(t) {
          return !t || t._ts && _hasNoPausedAncestors(t.parent);
        }(_assertThisInitialized(a)) && "nested" !== S.data) && (a._tTime = -B, a.render(Math.max(0, -y))), C && Aa(_assertThisInitialized(a), C), a;
      }

      _inheritsLoose(Tween, D);

      var t = Tween.prototype;
      return t.render = function render(t, e, r) {
        var i,
            n,
            a,
            s,
            o,
            u,
            h,
            l,
            f,
            d = this._time,
            c = this._tDur,
            p = this._dur,
            _ = c - B < t && 0 <= t ? c : t < B ? 0 : t;

        if (p) {
          if (_ !== this._tTime || !t || r || this._startAt && this._zTime < 0 != t < 0) {
            if (i = _, l = this.timeline, this._repeat) {
              if (s = p + this._rDelay, (p < (i = aa(_ % s)) || c === _) && (i = p), (a = ~~(_ / s)) && a === _ / s && (i = p, a--), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = _t(this._tTime, s), i === d && !r && this._initted) return this;
              a !== o && (l && this._yEase && zb(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(aa(s * a), !0).invalidate()._lock = 0));
            }

            if (!this._initted) {
              if (Ba(this, i, r, e)) return this._tTime = 0, this;
              if (p !== this._dur) return this.render(t, e, r);
            }

            for (this._tTime = _, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), !i || d || e || bt(this, "onStart"), n = this._pt; n;) {
              n.r(h, n.d), n = n._next;
            }

            l && l.render(t < 0 ? t : !i && u ? -B : l._dur * h, e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, r), bt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && bt(this, "onRepeat"), _ !== this._tDur && _ || this._tTime !== _ || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, r), !t && p || !(_ === this._tDur && 0 < this._ts || !_ && this._ts < 0) || qa(this, 1), e || t < 0 && !d || !_ && !d || (bt(this, _ === c ? "onComplete" : "onReverseComplete", !0), !this._prom || _ < c && 0 < this.timeScale() || this._prom()));
          }
        } else !function _renderZeroDurationTween(t, e, r, i) {
          var n,
              a,
              s = t.ratio,
              o = e < 0 || s && !e && !t._start && !t._dp._lock ? 0 : 1,
              u = t._rDelay,
              h = 0;
          if (u && t._repeat && (h = gt(0, t._tDur, e), _t(h, u) !== (a = _t(t._tTime, u)) && (s = 1 - o, t.vars.repeatRefresh && t._initted && t.invalidate())), t._initted || !Ba(t, e, i, r)) if (o !== s || i || t._zTime === B || !e && t._zTime) {
            for (a = t._zTime, t._zTime = e || (r ? B : 0), r = r || e && !a, t.ratio = o, t._from && (o = 1 - o), t._time = 0, t._tTime = h, r || bt(t, "onStart"), n = t._pt; n;) {
              n.r(o, n.d), n = n._next;
            }

            !o && t._startAt && !t._onUpdate && t._start && t._startAt.render(e, !0, i), t._onUpdate && !r && bt(t, "onUpdate"), h && t._repeat && !r && t.parent && bt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === o && (o && qa(t, 1), r || (bt(t, o ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
          } else t._zTime || (t._zTime = e);
        }(this, t, e, r);

        return this;
      }, t.targets = function targets() {
        return this._targets;
      }, t.invalidate = function invalidate() {
        return this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), D.prototype.invalidate.call(this);
      }, t.kill = function kill(t, e) {
        if (void 0 === e && (e = "all"), !(t || e && "all" !== e) && (this._lazy = 0, this.parent)) return eb(this);

        if (this.timeline) {
          var r = this.timeline.totalDuration();
          return this.timeline.killTweensOf(t, e, It && !0 !== It.vars.overwrite)._first || eb(this), this.parent && r !== this.timeline.totalDuration() && Ea(this, this._dur * this.timeline._tDur / r), this;
        }

        var i,
            a,
            s,
            o,
            u,
            h,
            l,
            f = this._targets,
            d = t ? yt(t) : f,
            c = this._ptLookup,
            p = this._pt;
        if ((!e || "all" === e) && function _arraysMatch(t, e) {
          for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];) {
            ;
          }

          return r < 0;
        }(f, d)) return eb(this);

        for (i = this._op = this._op || [], "all" !== e && (n(e) && (u = {}, _(e, function (t) {
          return u[t] = 1;
        }), e = u), e = function _addAliasesToVars(t, e) {
          var r,
              i,
              n,
              a,
              s = t[0] ? Z(t[0]).harness : 0,
              o = s && s.aliases;
          if (!o) return e;

          for (i in r = pt({}, e), o) {
            if ((i in r)) for (n = (a = o[i].split(",")).length; n--;) {
              r[a[n]] = r[i];
            }
          }

          return r;
        }(f, e)), l = f.length; l--;) {
          if (~d.indexOf(f[l])) for (u in a = c[l], "all" === e ? (i[l] = e, o = a, s = {}) : (s = i[l] = i[l] || {}, o = e), o) {
            (h = a && a[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || pa(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);
          }
        }

        return this._initted && !this._pt && p && eb(this), this;
      }, Tween.to = function to(t, e, r) {
        return new Tween(t, e, r);
      }, Tween.from = function from(t, e) {
        return new Tween(t, ca(arguments, 1));
      }, Tween.delayedCall = function delayedCall(t, e, r, i) {
        return new Tween(e, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: t,
          onComplete: e,
          onReverseComplete: e,
          onCompleteParams: r,
          onReverseCompleteParams: r,
          callbackScope: i
        });
      }, Tween.fromTo = function fromTo(t, e, r) {
        return new Tween(t, ca(arguments, 2));
      }, Tween.set = function set(t, e) {
        return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e);
      }, Tween.killTweensOf = function killTweensOf(t, e, r) {
        return F.killTweensOf(t, e, r);
      }, Tween;
    }(Rt);

    ha(Ht.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0
    }), _("staggerTo,staggerFrom,staggerFromTo", function (r) {
      Ht[r] = function () {
        var t = new Bt(),
            e = vt.call(arguments, 0);
        return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
      };
    });

    function Wb(t, e, r) {
      return t.setAttribute(e, r);
    }

    function cc(t, e, r, i) {
      i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
    }

    var Xt = function _setterPlain(t, e, r) {
      return t[e] = r;
    },
        Vt = function _setterFunc(t, e, r) {
      return t[e](r);
    },
        jt = function _setterFuncWithParam(t, e, r, i) {
      return t[e](i.fp, r);
    },
        Zt = function _getSetter(t, e) {
      return o(t[e]) ? Vt : q(t[e]) && t.setAttribute ? Wb : Xt;
    },
        Kt = function _renderPlain(t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
    },
        Qt = function _renderBoolean(t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
        Wt = function _renderComplexString(t, e) {
      var r = e._pt,
          i = "";
      if (!t && e.b) i = e.b;else if (1 === t && e.e) i = e.e;else {
        for (; r;) {
          i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
        }

        i += e.c;
      }
      e.set(e.t, e.p, i, e);
    },
        Gt = function _renderPropTweens(t, e) {
      for (var r = e._pt; r;) {
        r.r(t, r.d), r = r._next;
      }
    },
        $t = function _addPluginModifier(t, e, r, i) {
      for (var n, a = this._pt; a;) {
        n = a._next, a.p === i && a.modifier(t, e, r), a = n;
      }
    },
        Jt = function _killPropTweensOf(t) {
      for (var e, r, i = this._pt; i;) {
        r = i._next, i.p === t && !i.op || i.op === t ? pa(this, i, "_pt") : i.dep || (e = 1), i = r;
      }

      return !e;
    },
        te = function _sortPropTweensByPriority(t) {
      for (var e, r, i, n, a = t._pt; a;) {
        for (e = a._next, r = i; r && r.pr > a.pr;) {
          r = r._next;
        }

        (a._prev = r ? r._prev : n) ? a._prev._next = a : i = a, (a._next = r) ? r._prev = a : n = a, a = e;
      }

      t._pt = i;
    },
        ee = (PropTween.prototype.modifier = function modifier(t, e, r) {
      this.mSet = this.mSet || this.set, this.set = cc, this.m = t, this.mt = r, this.tween = e;
    }, PropTween);

    function PropTween(t, e, r, i, n, a, s, o, u) {
      this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || Kt, this.d = s || this, this.set = o || Xt, this.pr = u || 0, (this._next = t) && (t._prev = this);
    }

    _(ct + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (t) {
      return st[t] = 1;
    }), at.TweenMax = at.TweenLite = Ht, at.TimelineLite = at.TimelineMax = Bt, F = new Bt({
      sortChildren: !1,
      defaults: R,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0
    }), U.stringFilter = pb;
    var re = {
      registerPlugin: function registerPlugin() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) {
          e[r] = arguments[r];
        }

        e.forEach(function (t) {
          return function _createPlugin(t) {
            var e = (t = !t.name && t["default"] || t).name,
                r = o(t),
                i = e && !r && t.init ? function () {
              this._props = [];
            } : t,
                n = {
              init: O,
              render: Gt,
              add: Lt,
              kill: Jt,
              modifier: $t,
              rawVars: 0
            },
                a = {
              targetTest: 0,
              get: 0,
              getSetter: Zt,
              aliases: {},
              register: 0
            };

            if (Ct(), t !== i) {
              if (ht[e]) return;
              ha(i, ha(la(t, n), a)), pt(i.prototype, pt(n, la(t, a))), ht[i.prop = e] = i, t.targetTest && (dt.push(i), st[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin";
            }

            N(e, i), t.register && t.register(ie, i, ee);
          }(t);
        });
      },
      timeline: function timeline(t) {
        return new Bt(t);
      },
      getTweensOf: function getTweensOf(t, e) {
        return F.getTweensOf(t, e);
      },
      getProperty: function getProperty(i, t, e, r) {
        n(i) && (i = yt(i)[0]);
        var a = Z(i || {}).get,
            s = e ? ga : fa;
        return "native" === e && (e = ""), i ? t ? s((ht[t] && ht[t].get || a)(i, t, e, r)) : function (t, e, r) {
          return s((ht[t] && ht[t].get || a)(i, t, e, r));
        } : i;
      },
      quickSetter: function quickSetter(r, e, i) {
        if (1 < (r = yt(r)).length) {
          var n = r.map(function (t) {
            return ie.quickSetter(t, e, i);
          }),
              a = n.length;
          return function (t) {
            for (var e = a; e--;) {
              n[e](t);
            }
          };
        }

        r = r[0] || {};
        var s = ht[e],
            o = Z(r),
            u = o.harness && (o.harness.aliases || {})[e] || e,
            h = s ? function (t) {
          var e = new s();
          c._pt = 0, e.init(r, i ? t + i : t, c, 0, [r]), e.render(1, e), c._pt && Gt(1, c);
        } : o.set(r, u);
        return s ? h : function (t) {
          return h(r, u, i ? t + i : t, o, 1);
        };
      },
      isTweening: function isTweening(t) {
        return 0 < F.getTweensOf(t, !0).length;
      },
      defaults: function defaults(t) {
        return t && t.ease && (t.ease = zt(t.ease, R.ease)), ka(R, t || {});
      },
      config: function config(t) {
        return ka(U, t || {});
      },
      registerEffect: function registerEffect(t) {
        var n = t.name,
            i = t.effect,
            e = t.plugins,
            a = t.defaults,
            s = t.extendTimeline;
        (e || "").split(",").forEach(function (t) {
          return t && !ht[t] && !at[t] && M(n + " effect requires " + t + " plugin.");
        }), lt[n] = function (t, e, r) {
          return i(yt(t), ha(e || {}, a), r);
        }, s && (Bt.prototype[n] = function (t, e, i) {
          return this.add(lt[n](t, r(e) ? e : (i = e) && {}, this), i);
        });
      },
      registerEase: function registerEase(t, e) {
        Pt[t] = zt(e);
      },
      parseEase: function parseEase(t, e) {
        return arguments.length ? zt(t, e) : Pt;
      },
      getById: function getById(t) {
        return F.getById(t);
      },
      exportRoot: function exportRoot(t, e) {
        void 0 === t && (t = {});
        var r,
            i,
            n = new Bt(t);

        for (n.smoothChildTiming = s(t.smoothChildTiming), F.remove(n), n._dp = 0, n._time = n._tTime = F._time, r = F._first; r;) {
          i = r._next, !e && !r._dur && r instanceof Ht && r.vars.onComplete === r._targets[0] || za(n, r, r._start - r._delay), r = i;
        }

        return za(F, n, 0), n;
      },
      utils: {
        wrap: function wrap(e, t, r) {
          var i = t - e;
          return W(e) ? Ya(e, wrap(0, e.length), t) : Ia(r, function (t) {
            return (i + (t - e) % i) % i + e;
          });
        },
        wrapYoyo: function wrapYoyo(e, t, r) {
          var i = t - e,
              n = 2 * i;
          return W(e) ? Ya(e, wrapYoyo(0, e.length - 1), t) : Ia(r, function (t) {
            return e + (i < (t = (n + (t - e) % n) % n) ? n - t : t);
          });
        },
        distribute: Ra,
        random: Ua,
        snap: Ta,
        normalize: function normalize(t, e, r) {
          return Tt(t, e, 0, 1, r);
        },
        getUnit: Ka,
        clamp: function clamp(e, r, t) {
          return Ia(t, function (t) {
            return gt(e, r, t);
          });
        },
        splitColor: kb,
        toArray: yt,
        mapRange: Tt,
        pipe: function pipe() {
          for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) {
            e[r] = arguments[r];
          }

          return function (t) {
            return e.reduce(function (t, e) {
              return e(t);
            }, t);
          };
        },
        unitize: function unitize(e, r) {
          return function (t) {
            return e(parseFloat(t)) + (r || Ka(t));
          };
        },
        interpolate: function interpolate(e, r, t, i) {
          var a = isNaN(e + r) ? 0 : function (t) {
            return (1 - t) * e + t * r;
          };

          if (!a) {
            var s,
                o,
                u,
                h,
                l,
                f = n(e),
                d = {};
            if (!0 === t && (i = 1) && (t = null), f) e = {
              p: e
            }, r = {
              p: r
            };else if (W(e) && !W(r)) {
              for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) {
                u.push(interpolate(e[o - 1], e[o]));
              }

              h--, a = function func(t) {
                t *= h;
                var e = Math.min(l, ~~t);
                return u[e](t - e);
              }, t = r;
            } else i || (e = pt(W(e) ? [] : {}, e));

            if (!u) {
              for (s in r) {
                Lt.call(d, e, s, "get", r[s]);
              }

              a = function func(t) {
                return Gt(t, d) || (f ? e.p : e);
              };
            }
          }

          return Ia(t, a);
        },
        shuffle: Qa
      },
      install: K,
      effects: lt,
      ticker: Mt,
      updateRoot: Bt.updateRoot,
      plugins: ht,
      globalTimeline: F,
      core: {
        PropTween: ee,
        globals: N,
        Tween: Ht,
        Timeline: Bt,
        Animation: Rt,
        getCache: Z,
        _removeLinkedListItem: pa
      }
    };
    _("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
      return re[t] = Ht[t];
    }), Mt.add(Bt.updateRoot), c = re.to({}, {
      duration: 0
    });

    function gc(t, e) {
      for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) {
        r = r._next;
      }

      return r;
    }

    function ic(t, a) {
      return {
        name: t,
        rawVars: 1,
        init: function init(t, i, e) {
          e._onInit = function (t) {
            var e, r;

            if (n(i) && (e = {}, _(i, function (t) {
              return e[t] = 1;
            }), i = e), a) {
              for (r in e = {}, i) {
                e[r] = a(i[r]);
              }

              i = e;
            }

            !function _addModifiers(t, e) {
              var r,
                  i,
                  n,
                  a = t._targets;

              for (r in e) {
                for (i = a.length; i--;) {
                  (n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = gc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r));
                }
              }
            }(t, i);
          };
        }
      };
    }

    var ie = re.registerPlugin({
      name: "attr",
      init: function init(t, e, r, i, n) {
        var a, s;

        for (a in e) {
          (s = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, n, 0, 0, a)) && (s.op = a), this._props.push(a);
        }
      }
    }, {
      name: "endArray",
      init: function init(t, e) {
        for (var r = e.length; r--;) {
          this.add(t, r, t[r] || 0, e[r]);
        }
      }
    }, ic("roundProps", Sa), ic("modifiers"), ic("snap", Ta)) || re;
    Ht.version = Bt.version = ie.version = "3.3.1", f = 1, t() && Ct();

    function Tc(t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    }

    function Uc(t, e) {
      return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
    }

    function Vc(t, e) {
      return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
    }

    function Wc(t, e) {
      var r = e.s + e.c * t;
      e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e);
    }

    function Xc(t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e);
    }

    function Yc(t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
    }

    function Zc(t, e, r) {
      return t.style[e] = r;
    }

    function $c(t, e, r) {
      return t.style.setProperty(e, r);
    }

    function _c(t, e, r) {
      return t._gsap[e] = r;
    }

    function ad(t, e, r) {
      return t._gsap.scaleX = t._gsap.scaleY = r;
    }

    function bd(t, e, r, i, n) {
      var a = t._gsap;
      a.scaleX = a.scaleY = r, a.renderTransform(n, a);
    }

    function cd(t, e, r, i, n) {
      var a = t._gsap;
      a[e] = r, a.renderTransform(n, a);
    }

    function gd(t, e) {
      var r = ae.createElementNS ? ae.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : ae.createElement(t);
      return r.style ? r : ae.createElement(t);
    }

    function hd(t, e, r) {
      var i = getComputedStyle(t);
      return i[e] || i.getPropertyValue(e.replace(Fe, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && hd(t, Ne(e) || e, 1) || "";
    }

    function kd() {
      (function _windowExists() {
        return "undefined" != typeof window;
      })() && window.document && (ne = window, ae = ne.document, se = ae.documentElement, ue = gd("div") || {
        style: {}
      }, he = gd("div"), Le = Ne(Le), qe = Ne(qe), ue.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", fe = !!Ne("perspective"), oe = 1);
    }

    function ld(t) {
      var e,
          r = gd("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
          i = this.parentNode,
          n = this.nextSibling,
          a = this.style.cssText;
      if (se.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
        e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = ld;
      } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
      return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), se.removeChild(r), this.style.cssText = a, e;
    }

    function md(t, e) {
      for (var r = e.length; r--;) {
        if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
      }
    }

    function nd(e) {
      var r;

      try {
        r = e.getBBox();
      } catch (t) {
        r = ld.call(e, !0);
      }

      return r && (r.width || r.height) || e.getBBox === ld || (r = ld.call(e, !0)), !r || r.width || r.x || r.y ? r : {
        x: +md(e, ["x", "cx", "x1"]) || 0,
        y: +md(e, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
      };
    }

    function od(t) {
      return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !nd(t));
    }

    function pd(t, e) {
      if (e) {
        var r = t.style;
        e in Ae && (e = Le), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(Fe, "-$1").toLowerCase())) : r.removeAttribute(e);
      }
    }

    function qd(t, e, r, i, n, a) {
      var s = new ee(t._pt, e, r, 0, 1, a ? Yc : Xc);
      return (t._pt = s).b = i, s.e = n, t._props.push(r), s;
    }

    function sd(t, e, r, i) {
      var n,
          a,
          s,
          o,
          u = parseFloat(r) || 0,
          h = (r + "").trim().substr((u + "").length) || "px",
          l = ue.style,
          f = Re.test(e),
          d = "svg" === t.tagName.toLowerCase(),
          c = (d ? "client" : "offset") + (f ? "Width" : "Height"),
          p = "px" === i,
          _ = "%" === i;

      return i === h || !u || Ue[i] || Ue[h] ? u : ("px" === h || p || (u = sd(t, e, r, "px")), o = t.getCTM && od(t), _ && (Ae[e] || ~e.indexOf("adius")) ? aa(u / (o ? t.getBBox()[f ? "width" : "height"] : t[c]) * 100) : (l[f ? "width" : "height"] = 100 + (p ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== ae && a.appendChild || (a = ae.body), (s = a._gsap) && _ && s.width && f && s.time === Mt.time ? aa(u / s.width * 100) : (!_ && "%" !== h || (l.position = hd(t, "position")), a === t && (l.position = "static"), a.appendChild(ue), n = ue[c], a.removeChild(ue), l.position = "absolute", f && _ && ((s = Z(a)).time = Mt.time, s.width = a[c]), aa(p ? n * u / 100 : n && u ? 100 / n * u : 0))));
    }

    function td(t, e, r, i) {
      var n;
      return oe || kd(), e in Ie && "transform" !== e && ~(e = Ie[e]).indexOf(",") && (e = e.split(",")[0]), Ae[e] && "transform" !== e ? (n = Ze(t, i), n = "transformOrigin" !== e ? n[e] : Ke(hd(t, qe)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = Xe[e] && Xe[e](t, e, r) || hd(t, e) || $(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").indexOf(" ") ? sd(t, e, n, r) + r : n;
    }

    function ud(t, e, r, i) {
      if (!r || "none" === r) {
        var n = Ne(e, t, 1),
            a = n && hd(t, n, 1);
        a && a !== r && (e = n, r = a);
      }

      var s,
          o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _,
          m,
          g,
          v = new ee(this._pt, t.style, e, 0, 1, Wt),
          y = 0,
          T = 0;

      if (v.b = r, v.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = hd(t, e) || i, t.style[e] = r), pb(s = [r, i]), i = s[1], u = (r = s[0]).match(tt) || [], (i.match(tt) || []).length) {
        for (; o = tt.exec(i);) {
          d = o[0], p = i.substring(y, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), d !== (f = u[T++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), c = parseFloat(d), _ = d.substr((c + "").length), y = tt.lastIndex - _.length, _ || (_ = _ || U.units[e] || m, y === i.length && (i += _, v.e += _)), m !== _ && (h = sd(t, e, f, _) || 0), v._pt = {
            _next: v._pt,
            p: p || 1 === T ? p : ",",
            s: h,
            c: g ? g * c : c - h,
            m: l && l < 4 ? Math.round : 0
          });
        }

        v.c = y < i.length ? i.substring(y, i.length) : "";
      } else v.r = "display" === e && "none" === i ? Yc : Xc;

      return it.test(i) && (v.e = 0), this._pt = v;
    }

    function wd(t) {
      var e = t.split(" "),
          r = e[0],
          i = e[1] || "50%";
      return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = He[r] || r, e[1] = He[i] || i, e.join(" ");
    }

    function xd(t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
        var r,
            i,
            n,
            a = e.t,
            s = a.style,
            o = e.u,
            u = a._gsap;
        if ("all" === o || !0 === o) s.cssText = "", i = 1;else for (n = (o = o.split(",")).length; -1 < --n;) {
          r = o[n], Ae[r] && (i = 1, r = "transformOrigin" === r ? qe : Le), pd(a, r);
        }
        i && (pd(a, Le), u && (u.svg && a.removeAttribute("transform"), Ze(a, 1), u.uncache = 1));
      }
    }

    function Bd(t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
    }

    function Cd(t) {
      var e = hd(t, Le);
      return Bd(e) ? Ve : e.substr(7).match(J).map(aa);
    }

    function Dd(t, e) {
      var r,
          i,
          n,
          a,
          s = t._gsap || Z(t),
          o = t.style,
          u = Cd(t);
      return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? Ve : u : (u !== Ve || t.offsetParent || t === se || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && ae.body.contains(t) || (a = 1, i = t.nextSibling, se.appendChild(t)), u = Cd(t), n ? o.display = n : pd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : se.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
    }

    function Ed(t, e, r, i, n, a) {
      var s,
          o,
          u,
          h = t._gsap,
          l = n || Dd(t, !0),
          f = h.xOrigin || 0,
          d = h.yOrigin || 0,
          c = h.xOffset || 0,
          p = h.yOffset || 0,
          _ = l[0],
          m = l[1],
          g = l[2],
          v = l[3],
          y = l[4],
          T = l[5],
          b = e.split(" "),
          w = parseFloat(b[0]) || 0,
          x = parseFloat(b[1]) || 0;
      r ? l !== Ve && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = nd(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - d, h.xOffset = c + (y * _ + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[qe] = "0px 0px", a && (qd(a, h, "xOrigin", f, w), qd(a, h, "yOrigin", d, x), qd(a, h, "xOffset", c, h.xOffset), qd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x);
    }

    function Hd(t, e, r) {
      var i = Ka(e);
      return aa(parseFloat(e) + parseFloat(sd(t, "x", r + "px", i))) + i;
    }

    function Od(t, e, r, i, a, s) {
      var o,
          u,
          h = 360,
          l = n(a),
          f = parseFloat(a) * (l && ~a.indexOf("rad") ? De : 1),
          d = s ? f * s : f - i,
          c = i + d + "deg";
      return l && ("short" === (o = a.split("_")[1]) && (d %= h) !== d % 180 && (d += d < 0 ? h : -h), "cw" === o && d < 0 ? d = (d + 36e9) % h - ~~(d / h) * h : "ccw" === o && 0 < d && (d = (d - 36e9) % h - ~~(d / h) * h)), t._pt = u = new ee(t._pt, e, r, i, d, Uc), u.e = c, u.u = "deg", t._props.push(r), u;
    }

    function Pd(t, e, r) {
      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l = he.style,
          f = r._gsap;

      for (n in l.cssText = getComputedStyle(r).cssText + ";position:absolute;display:block;", l[Le] = e, ae.body.appendChild(he), i = Ze(he, 1), Ae) {
        (a = f[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Ka(a) !== (h = Ka(s)) ? sd(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new ee(t._pt, f, n, o, u - o, Tc), t._pt.u = h || 0, t._props.push(n));
      }

      ae.body.removeChild(he);
    }

    var ne,
        ae,
        se,
        oe,
        ue,
        he,
        le,
        fe,
        de = Pt.Power0,
        ce = Pt.Power1,
        pe = Pt.Power2,
        _e = Pt.Power3,
        me = Pt.Power4,
        ge = Pt.Linear,
        ve = Pt.Quad,
        ye = Pt.Cubic,
        Te = Pt.Quart,
        be = Pt.Quint,
        we = Pt.Strong,
        xe = Pt.Elastic,
        ke = Pt.Back,
        Oe = Pt.SteppedEase,
        Me = Pt.Bounce,
        Ce = Pt.Sine,
        Pe = Pt.Expo,
        Se = Pt.Circ,
        Ae = {},
        De = 180 / Math.PI,
        ze = Math.PI / 180,
        Ee = Math.atan2,
        Fe = /([A-Z])/g,
        Re = /(?:left|right|width|margin|padding|x)/i,
        Be = /[\s,\(]\S/,
        Ie = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity"
    },
        Le = "transform",
        qe = Le + "Origin",
        Ye = "O,Moz,ms,Ms,Webkit".split(","),
        Ne = function _checkPropPrefix(t, e, r) {
      var i = (e || ue).style,
          n = 5;
      if (t in i && !r) return t;

      for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Ye[n] + t in i);) {
        ;
      }

      return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Ye[n] : "") + t;
    },
        Ue = {
      deg: 1,
      rad: 1,
      turn: 1
    },
        He = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%"
    },
        Xe = {
      clearProps: function clearProps(t, e, r, i, n) {
        if ("isFromStart" !== n.data) {
          var a = t._pt = new ee(t._pt, e, r, 0, 0, xd);
          return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1;
        }
      }
    },
        Ve = [1, 0, 0, 1, 0, 0],
        je = {},
        Ze = function _parseTransform(t, e) {
      var r = t._gsap || new Ft(t);
      if ("x" in r && !e && !r.uncache) return r;

      var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          c,
          p,
          _,
          m,
          g,
          v,
          y,
          T,
          b,
          w,
          x,
          k,
          O,
          M,
          C,
          P,
          S,
          A,
          D,
          z,
          E,
          F,
          R = t.style,
          B = r.scaleX < 0,
          I = "deg",
          L = hd(t, qe) || "0";

      return i = n = a = u = h = l = f = d = c = 0, s = o = 1, r.svg = !(!t.getCTM || !od(t)), m = Dd(t, r.svg), r.svg && (M = !r.uncache && t.getAttribute("data-svg-origin"), Ed(t, M || L, !!M || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== Ve && (T = m[0], b = m[1], w = m[2], x = m[3], i = k = m[4], n = O = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? Ee(b, T) * De : 0, (f = w || x ? Ee(w, x) * De + u : 0) && (o *= Math.cos(f * ze)), r.svg && (i -= p - (p * T + _ * w), n -= _ - (p * b + _ * x))) : (F = m[6], z = m[7], S = m[8], A = m[9], D = m[10], E = m[11], i = m[12], n = m[13], a = m[14], h = (g = Ee(F, D)) * De, g && (M = k * (v = Math.cos(-g)) + S * (y = Math.sin(-g)), C = O * v + A * y, P = F * v + D * y, S = k * -y + S * v, A = O * -y + A * v, D = F * -y + D * v, E = z * -y + E * v, k = M, O = C, F = P), l = (g = Ee(-w, D)) * De, g && (v = Math.cos(-g), E = x * (y = Math.sin(-g)) + E * v, T = M = T * v - S * y, b = C = b * v - A * y, w = P = w * v - D * y), u = (g = Ee(b, T)) * De, g && (M = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), C = k * v + O * y, b = b * v - T * y, O = O * v - k * y, T = M, k = C), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = aa(Math.sqrt(T * T + b * b + w * w)), o = aa(Math.sqrt(O * O + F * F)), g = Ee(k, O), f = 2e-4 < Math.abs(g) ? g * De : 0, c = E ? 1 / (E < 0 ? -E : E) : 0), r.svg && (M = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !Bd(hd(t, Le)), M && t.setAttribute("transform", M))), 90 < Math.abs(f) && Math.abs(f) < 270 && (B ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), r.x = ((r.xPercent = i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0) ? 0 : i) + "px", r.y = ((r.yPercent = n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0) ? 0 : n) + "px", r.z = a + "px", r.scaleX = aa(s), r.scaleY = aa(o), r.rotation = aa(u) + I, r.rotationX = aa(h) + I, r.rotationY = aa(l) + I, r.skewX = f + I, r.skewY = d + I, r.transformPerspective = c + "px", (r.zOrigin = parseFloat(L.split(" ")[2]) || 0) && (R[qe] = Ke(L)), r.xOffset = r.yOffset = 0, r.force3D = U.force3D, r.renderTransform = r.svg ? tr : fe ? Je : Qe, r.uncache = 0, r;
    },
        Ke = function _firstTwoOnly(t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
        Qe = function _renderNon3DTransforms(t, e) {
      e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Je(t, e);
    },
        We = "0deg",
        Ge = "0px",
        $e = ") ",
        Je = function _renderCSSTransforms(t, e) {
      var r = e || this,
          i = r.xPercent,
          n = r.yPercent,
          a = r.x,
          s = r.y,
          o = r.z,
          u = r.rotation,
          h = r.rotationY,
          l = r.rotationX,
          f = r.skewX,
          d = r.skewY,
          c = r.scaleX,
          p = r.scaleY,
          _ = r.transformPerspective,
          m = r.force3D,
          g = r.target,
          v = r.zOrigin,
          y = "",
          T = "auto" === m && t && 1 !== t || !0 === m;

      if (v && (l !== We || h !== We)) {
        var b,
            w = parseFloat(h) * ze,
            x = Math.sin(w),
            k = Math.cos(w);
        w = parseFloat(l) * ze, b = Math.cos(w), a = Hd(g, a, x * b * -v), s = Hd(g, s, -Math.sin(w) * -v), o = Hd(g, o, k * b * -v + v);
      }

      _ !== Ge && (y += "perspective(" + _ + $e), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === Ge && s === Ge && o === Ge || (y += o !== Ge || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + $e), u !== We && (y += "rotate(" + u + $e), h !== We && (y += "rotateY(" + h + $e), l !== We && (y += "rotateX(" + l + $e), f === We && d === We || (y += "skew(" + f + ", " + d + $e), 1 === c && 1 === p || (y += "scale(" + c + ", " + p + $e), g.style[Le] = y || "translate(0, 0)";
    },
        tr = function _renderSVGTransforms(t, e) {
      var r,
          i,
          n,
          a,
          s,
          o = e || this,
          u = o.xPercent,
          h = o.yPercent,
          l = o.x,
          f = o.y,
          d = o.rotation,
          c = o.skewX,
          p = o.skewY,
          _ = o.scaleX,
          m = o.scaleY,
          g = o.target,
          v = o.xOrigin,
          y = o.yOrigin,
          T = o.xOffset,
          b = o.yOffset,
          w = o.forceCSS,
          x = parseFloat(l),
          k = parseFloat(f);
      d = parseFloat(d), c = parseFloat(c), (p = parseFloat(p)) && (c += p = parseFloat(p), d += p), d || c ? (d *= ze, c *= ze, r = Math.cos(d) * _, i = Math.sin(d) * _, n = Math.sin(d - c) * -m, a = Math.cos(d - c) * m, c && (p *= ze, s = Math.tan(c - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = aa(r), i = aa(i), n = aa(n), a = aa(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (x = sd(g, "x", l, "px"), k = sd(g, "y", f, "px")), (v || y || T || b) && (x = aa(x + v - (v * r + y * n) + T), k = aa(k + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = aa(x + u / 100 * s.width), k = aa(k + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")", g.setAttribute("transform", s), w && (g.style[Le] = s);
    };

    _("padding,margin,Width,Radius", function (e, r) {
      var t = "Right",
          i = "Bottom",
          n = "Left",
          o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function (t) {
        return r < 2 ? e + t : "border" + t + e;
      });

      Xe[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
        var a, s;
        if (arguments.length < 4) return a = o.map(function (t) {
          return td(e, t, r);
        }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
        a = (i + "").split(" "), s = {}, o.forEach(function (t, e) {
          return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0];
        }), e.init(t, s, n);
      };
    });

    var er,
        rr,
        ir,
        nr = {
      name: "css",
      register: kd,
      targetTest: function targetTest(t) {
        return t.style && t.nodeType;
      },
      init: function init(t, e, r, i, n) {
        var a,
            s,
            o,
            u,
            h,
            l,
            f,
            d,
            c,
            p,
            _,
            m,
            g,
            v,
            y,
            T = this._props,
            b = t.style;

        for (f in oe || kd(), e) {
          if ("autoRound" !== f && (s = e[f], !ht[f] || !Lb(f, e, r, i, t, n))) if (h = _typeof(s), l = Xe[f], "function" === h && (h = _typeof(s = s.call(r, i, t, n))), "string" === h && ~s.indexOf("random(") && (s = _a(s)), l) l(this, t, f, s, r) && (y = 1);else if ("--" === f.substr(0, 2)) this.add(b, "setProperty", getComputedStyle(t).getPropertyValue(f) + "", s + "", i, n, 0, 0, f);else {
            if (a = td(t, f), u = parseFloat(a), (p = "string" === h && "=" === s.charAt(1) ? +(s.charAt(0) + "1") : 0) && (s = s.substr(2)), o = parseFloat(s), f in Ie && ("autoAlpha" === f && (1 === u && "hidden" === td(t, "visibility") && o && (u = 0), qd(this, b, "visibility", u ? "inherit" : "hidden", o ? "inherit" : "hidden", !o)), "scale" !== f && "transform" !== f && ~(f = Ie[f]).indexOf(",") && (f = f.split(",")[0])), _ = f in Ae) {
              if (m || ((g = t._gsap).renderTransform || Ze(t), v = !1 !== e.smoothOrigin && g.smooth, (m = this._pt = new ee(this._pt, b, Le, 0, 1, g.renderTransform, g, 0, -1)).dep = 1), "scale" === f) this._pt = new ee(this._pt, g, "scaleY", g.scaleY, p ? p * o : o - g.scaleY), T.push("scaleY", f), f += "X";else {
                if ("transformOrigin" === f) {
                  s = wd(s), g.svg ? Ed(t, s, 0, v, 0, this) : ((c = parseFloat(s.split(" ")[2]) || 0) !== g.zOrigin && qd(this, g, "zOrigin", g.zOrigin, c), qd(this, b, f, Ke(a), Ke(s)));
                  continue;
                }

                if ("svgOrigin" === f) {
                  Ed(t, s, 1, v, 0, this);
                  continue;
                }

                if (f in je) {
                  Od(this, g, f, u, s, p);
                  continue;
                }

                if ("smoothOrigin" === f) {
                  qd(this, g, "smooth", g.smooth, s);
                  continue;
                }

                if ("force3D" === f) {
                  g[f] = s;
                  continue;
                }

                if ("transform" === f) {
                  Pd(this, s, t);
                  continue;
                }
              }
            } else f in b || (f = Ne(f) || f);
            if (_ || (o || 0 === o) && (u || 0 === u) && !Be.test(s) && f in b) (d = (a + "").substr((u + "").length)) !== (c = (s + "").substr(((o = o || 0) + "").length) || (f in U.units ? U.units[f] : d)) && (u = sd(t, f, a, c)), this._pt = new ee(this._pt, _ ? g : b, f, u, p ? p * o : o - u, "px" !== c || !1 === e.autoRound || _ ? Tc : Wc), this._pt.u = c || 0, d !== c && (this._pt.b = a, this._pt.r = Vc);else if (f in b) ud.call(this, t, f, a, s);else {
              if (!(f in t)) {
                L(f, s);
                continue;
              }

              this.add(t, f, t[f], s, i, n);
            }
            T.push(f);
          }
        }

        y && te(this);
      },
      get: td,
      aliases: Ie,
      getSetter: function getSetter(t, e, r) {
        var i = Ie[e];
        return i && i.indexOf(",") < 0 && (e = i), e in Ae && e !== qe && (t._gsap.x || td(t, "x")) ? r && le === r ? "scale" === e ? ad : _c : (le = r || {}) && ("scale" === e ? bd : cd) : t.style && !q(t.style[e]) ? Zc : ~e.indexOf("-") ? $c : Zt(t, e);
      },
      core: {
        _removeProperty: pd,
        _getMatrix: Dd
      }
    };
    ie.utils.checkPrefix = Ne, ir = _((er = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (rr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function (t) {
      Ae[t] = 1;
    }), _(rr, function (t) {
      U.units[t] = "deg", je[t] = 1;
    }), Ie[ir[13]] = er + "," + rr, _("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
      var e = t.split(":");
      Ie[e[1]] = ir[e[0]];
    }), _("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
      U.units[t] = "px";
    }), ie.registerPlugin(nr);
    var ar = ie.registerPlugin(nr) || ie,
        sr = ar.core.Tween;
    e.Back = ke, e.Bounce = Me, e.CSSPlugin = nr, e.Circ = Se, e.Cubic = ye, e.Elastic = xe, e.Expo = Pe, e.Linear = ge, e.Power0 = de, e.Power1 = ce, e.Power2 = pe, e.Power3 = _e, e.Power4 = me, e.Quad = ve, e.Quart = Te, e.Quint = be, e.Sine = Ce, e.SteppedEase = Oe, e.Strong = we, e.TimelineLite = Bt, e.TimelineMax = Bt, e.TweenLite = Ht, e.TweenMax = sr, e["default"] = ar, e.gsap = ar;

    if (typeof window === "undefined" || window !== e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
    } else {
      delete e["default"];
    }
  });
  ;
  /*!
  * ScrollTrigger 3.3.1
  * https://greensock.com
  * 
  * @license Copyright 2020, GreenSock. All rights reserved.
  * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
  * @author: Jack Doyle, jack@greensock.com
  */

  !function (e, t) {
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {});
  }(this, function (e) {
    "use strict";

    function z(e) {
      return e;
    }

    function A() {
      return "undefined" != typeof window;
    }

    function B() {
      return ye || A() && (ye = window.gsap) && ye.registerPlugin && ye;
    }

    function C(e) {
      return !!~i.indexOf(e);
    }

    function D(t, e) {
      var r = e.s;
      return function (e) {
        return arguments.length ? t[r] = e : t[r];
      };
    }

    function E(e, t) {
      var r = t.s,
          n = t.d2;
      return (r = "scroll" + n) && C(e) ? Math.max(x[r], Te[r]) - (xe["inner" + n] || x["client" + n] || Te["client" + n]) : e[r] - e["offset" + n];
    }

    function F(e) {
      return "string" == typeof e;
    }

    function G(e) {
      return "function" == typeof e;
    }

    function H(e) {
      return "number" == typeof e;
    }

    function I(e) {
      return "object" == _typeof(e);
    }

    function ba(e) {
      return xe.getComputedStyle(e);
    }

    function da(e, t) {
      for (var r in t) {
        r in e || (e[r] = t[r]);
      }

      return e;
    }

    function ea(e, t) {
      var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== ba(e)[f] && ye.to(e, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
      }).progress(1),
          n = e.getBoundingClientRect();
      return r && r.progress(0).kill(), n;
    }

    function fa(e, t) {
      var r = t.d2;
      return e["offset" + r] || e["client" + r] || 0;
    }

    function ha(t, r, e, n) {
      return e.split(",").forEach(function (e) {
        return t(r, e, n);
      });
    }

    function ia(e, t, r) {
      return e.addEventListener(t, r, {
        passive: !0
      });
    }

    function ja(e, t, r) {
      return e.removeEventListener(t, r);
    }

    function na(e, t) {
      if (F(e)) {
        var r = e.indexOf("="),
            n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
        n && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in g ? g[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0);
      }

      return e;
    }

    function oa(e, t, r, n, o, i, a) {
      var s = o.startColor,
          l = o.endColor,
          c = o.fontSize,
          f = o.indent,
          u = o.fontWeight,
          p = we.createElement("div"),
          d = C(r),
          g = -1 !== e.indexOf("scroller"),
          h = d ? Te : r,
          v = -1 !== e.indexOf("start"),
          m = v ? s : l,
          b = "border-color:" + m + ";font-size:" + c + ";color:" + m + ";font-weight:" + u + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      return b += "position:" + (g && d ? "fixed;" : "absolute;"), !g && d || (b += (n === Je ? y : w) + ":" + (i + parseFloat(f)) + "px;"), a && (b += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = v, p.setAttribute("class", "gsap-marker-" + e), p.style.cssText = b, p.innerText = t || 0 === t ? e + "-" + t : e, h.insertBefore(p, h.children[0]), p._offset = p["offset" + n.op.d2], T(p, 0, n, d, v), p;
    }

    function sa() {
      return l = l || s(m);
    }

    function ta() {
      l || (l = s(m), Oe || v("scrollStart"), Oe = Pe());
    }

    function ua() {
      return !_e && 200 < Pe() - Oe && a.restart(!0);
    }

    function ya(e) {
      for (var t = v("refreshInit"), r = Ue.length, n = 0; n < r; n++) {
        Ue[n].refresh(!0 !== e);
      }

      t.forEach(function (e) {
        return e && e.render && e.render(-1);
      }), v("refresh");
    }

    function Ca(e, t, r) {
      if (e.parentNode === t) {
        var n = t.parentNode;
        Ze(r), n && (n.insertBefore(e, t), n.removeChild(t));
      }
    }

    function Da(e, t, r) {
      if (e.parentNode !== t) {
        for (var n, o = b.length, i = t.style, a = e.style; o--;) {
          i[n = b[o]] = r[n];
        }

        i.position = "absolute" === r.position ? "absolute" : "relative", a[w] = a[y] = "auto", i.overflow = "visible", i.boxSizing = "border-box", i[Ae] = fa(e, qe) + We, i[Ie] = fa(e, Je) + We, i[Ne] = a[Re] = a[d] = a[p] = "0", a[Ae] = r[Ae], a[Ie] = r[Ie], a[Ne] = r[Ne], e.parentNode.insertBefore(t, e), t.appendChild(e);
      }
    }

    function Ga(e) {
      for (var t = S.length, r = e.style, n = [], o = 0; o < t; o++) {
        n.push(S[o], r[S[o]]);
      }

      return n.t = e, n;
    }

    function Ja(e, t, r, n, o, i, a, s, l, c, f, u) {
      if (G(e) && (e = e(s)), F(e) && "max" === e.substr(0, 3) && (e = u + ("=" === e.charAt(4) ? na("0" + e.substr(3), r) : 0)), H(e)) a && T(a, r, n, f, !0);else {
        G(t) && (t = t(s));
        var p,
            d,
            g,
            h = Se(t)[0] || Te,
            v = ea(h) || {},
            m = e.split(" ");
        v && (v.left || v.top) || "none" !== ba(h).display || (g = h.style.display, h.style.display = "block", v = ea(h), g ? h.style.display = g : h.style.removeProperty("display")), p = na(m[0], v[n.d]), d = na(m[1] || "0", r), e = v[n.p] - l[n.p] - c + p + o - d, a && T(a, d, n, f, r - d < 20 || a._isStart && 20 < d), r -= r - d;
      }

      if (i) {
        var b = e + r,
            y = i._isStart;
        u = "scroll" + n.d2, T(i, b, n, f, y && 20 < b || !y && (f ? Math.max(Te[u], x[u]) : i.parentNode[u]) <= b + 1), f && (l = ea(a), f && (i.style[n.op.p] = l[n.op.p] - n.op.m - i._offset + We));
      }

      return Math.round(e);
    }

    function Ma(l, e) {
      var c,
          f = C(l) ? e.sc : D(l, e),
          u = "_scroll" + e.p2;
      return l[u] = f, function getTween(e, t, r, n, o) {
        var i = getTween.tween,
            a = t.onComplete,
            s = {};
        return i && i.kill(), c = f(), t[u] = e, (t.modifiers = s)[u] = function (e) {
          return f() !== c ? (i.kill(), getTween.tween = 0, e = f()) : n && (e = r + n * i.ratio + o * i.ratio * i.ratio), c = Math.round(e);
        }, t.onComplete = function () {
          getTween.tween = 0, a && a.call(i);
        }, i = getTween.tween = ye.to(l, t);
      };
    }

    var ye,
        o,
        xe,
        we,
        x,
        Te,
        i,
        a,
        s,
        l,
        Se,
        Ce,
        ke,
        c,
        _e,
        Ee,
        f,
        Me = 1,
        Pe = Date.now,
        u = Pe(),
        Oe = 0,
        ze = 1,
        Fe = Math.abs,
        t = "scrollLeft",
        r = "scrollTop",
        p = "left",
        d = "top",
        y = "right",
        w = "bottom",
        Ae = "width",
        Ie = "height",
        Le = "Right",
        De = "Left",
        Be = "Top",
        Ge = "Bottom",
        Ne = "padding",
        Re = "margin",
        je = "Width",
        He = "Height",
        We = "px",
        qe = {
      s: t,
      p: p,
      p2: De,
      os: y,
      os2: Le,
      d: Ae,
      d2: je,
      a: "x",
      sc: function sc(e) {
        return arguments.length ? xe.scrollTo(e, Je.sc()) : xe.pageXOffset || we[t] || x[t] || Te[t] || 0;
      }
    },
        Je = {
      s: r,
      p: d,
      p2: Be,
      os: w,
      os2: Ge,
      d: Ie,
      d2: He,
      a: "y",
      op: qe,
      sc: function sc(e) {
        return arguments.length ? xe.scrollTo(qe.sc(), e) : xe.pageYOffset || we[r] || x[r] || Te[r] || 0;
      }
    },
        Xe = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal"
    },
        Ye = {
      toggleActions: "play",
      anticipatePin: 0
    },
        g = {
      top: 0,
      left: 0,
      center: .5,
      bottom: 1,
      right: 1
    },
        T = function _positionMarker(e, t, r, n, o) {
      var i = {},
          a = r[o ? "os2" : "p2"],
          s = r[o ? "p2" : "os2"];
      e._isFlipped = o, i[r.a + "Percent"] = o ? -100 : 0, i[r.a] = o ? 1 : 0, i["border" + a + je] = 1, i["border" + s + je] = 0, i[r.p] = t, ye.set(e, i);
    },
        Ue = [],
        Ve = {},
        h = {},
        n = [],
        v = function _dispatch(e) {
      return h[e] && h[e].map(function (e) {
        return e();
      }) || n;
    },
        m = function _updateAll() {
      var e = Ue.length,
          t = 0,
          r = Pe(),
          n = 50 <= r - u;

      for (n && (Oe && !Ee && 200 < r - Oe && (Oe = 0, v("scrollEnd")), ke = u, u = r); t < e; t++) {
        Ue[t] && Ue[t].update(0, n);
      }

      l = 0;
    },
        b = [p, d, w, y, Re + Ge, Re + Le, Re + Be, Re + De, "display", "flexShrink"],
        S = b.concat([Ae, Ie, "boxSizing", "max" + je, "max" + He, "position", Re, Ne, Ne + Be, Ne + Le, Ne + Ge, Ne + De]),
        k = /([A-Z])/g,
        Ze = function _setState(e) {
      for (var t, r, n = e.t.style, o = e.length, i = 0; i < o; i += 2) {
        r = e[i + 1], t = e[i], r ? n[t] = r : n[t] && n.removeProperty(t.replace(k, "-$1").toLowerCase());
      }
    },
        $e = {
      left: 0,
      top: 0
    },
        Ke = /(?:webkit|moz|length)/i;

    qe.op = Je;

    var _ = (ScrollTrigger.prototype.init = function init(h, v) {
      if (this.progress = 0, this.vars && this.kill(1), ze) {
        var d,
            e,
            c,
            m,
            g,
            b,
            y,
            x,
            w,
            T,
            S,
            k,
            t,
            _,
            M,
            P,
            O,
            A,
            r,
            L,
            B,
            N,
            R,
            j,
            W,
            q,
            n,
            J,
            X,
            Y,
            U,
            o,
            f,
            V,
            Z,
            $ = (h = da(F(h) || H(h) || h.nodeType ? {
          trigger: h
        } : h, Ye)).horizontal ? qe : Je,
            K = h.onUpdate,
            Q = h.toggleClass,
            i = h.id,
            ee = h.onToggle,
            te = h.onRefresh,
            a = h.scrub,
            re = h.trigger,
            ne = h.pin,
            oe = h.pinSpacing,
            ie = h.invalidateOnRefresh,
            ae = h.anticipatePin,
            s = h.onScrubComplete,
            u = h.onSnapComplete,
            se = h.once,
            le = h.snap,
            ce = h.pinReparent,
            fe = !a && 0 !== a,
            ue = Se(h.scroller || xe)[0],
            l = ye.core.getCache(ue),
            pe = C(ue),
            de = [h.onEnter, h.onLeave, h.onEnterBack, h.onLeaveBack],
            ge = fe && (se ? "play" : h.toggleActions).split(" "),
            p = "markers" in h ? h.markers : Ye.markers,
            he = pe ? 0 : parseFloat(ba(ue)["border" + $.p2 + je]) || 0,
            ve = this,
            me = function softRefresh() {
          return ScrollTrigger.removeEventListener("scrollEnd", softRefresh) || ve.refresh();
        },
            be = h.onRefreshInit && function () {
          return h.onRefreshInit(ve);
        };

        ae *= 45, Ue.push(ve), ve.scroller = ue, ve.scroll = pe ? $.sc : D(ue, $), g = ve.scroll(), ve.vars = h, v = v || h.animation, l.tweenScroll = l.tweenScroll || {
          top: Ma(ue, Je),
          left: Ma(ue, qe)
        }, ve.tweenTo = d = l.tweenScroll[$.p], v && (v.vars.lazy = !1, v._initted || !1 !== v.vars.immediateRender && v.render(0, !0, !0), ve.animation = v.pause(), v.scrollTrigger = ve, (o = H(a) && a) && (U = ye.to(v, {
          ease: "power3",
          duration: o,
          onComplete: function onComplete() {
            return s && s(ve);
          }
        })), J = 0, i = i || v.vars.id), le && (I(le) || (le = {
          snapTo: le
        }), c = G(le.snapTo) ? le.snapTo : "labels" === le.snapTo ? function _getLabels(i) {
          return function (e) {
            var t,
                r = [],
                n = i.labels,
                o = i.duration();

            for (t in n) {
              r.push(n[t] / o);
            }

            return ye.utils.snap(r, e);
          };
        }(v) : ye.utils.snap(le.snapTo), f = le.duration || {
          min: .1,
          max: 2
        }, f = I(f) ? Ce(f.min, f.max) : Ce(f, f), V = ye.delayedCall(le.delay || o / 2 || .1, function () {
          if (!Oe || Oe === Y && !Ee) {
            var e = v && !fe ? v.totalProgress() : ve.progress,
                t = (e - X) / (Pe() - ke) * 1e3 || 0,
                r = Fe(t / 2) * t / .185,
                n = e + r,
                o = Ce(0, 1, c(n, ve)),
                i = o - e - r,
                a = ve.scroll(),
                s = Math.round(y + o * _),
                l = d.tween;

            if (a <= x && y <= a) {
              if (l && !l._initted) {
                if (l.data <= Math.abs(s - a)) return;
                l.kill();
              }

              d(s, {
                duration: f(Fe(.185 * Math.max(Fe(n - e), Fe(o - e)) / t / .05 || 0)),
                ease: le.ease || "power3",
                data: Math.abs(s - a),
                onComplete: function onComplete() {
                  J = X = v && !fe ? v.totalProgress() : ve.progress, u && u(ve);
                }
              }, y + e * _, r * _, i * _);
            }
          } else V.restart(!0);
        }).pause()), i && (Ve[i] = ve), re = ve.trigger = Se(re || ne)[0], ne = !0 === ne ? re : Se(ne)[0], F(Q) && (Q = {
          targets: re,
          className: Q
        }), ne && (!1 === oe || oe === Re || (oe = "flex" !== ba(ne.parentNode).display && Ne), ve.pin = ne, !1 !== h.force3D && ye.set(ne, {
          force3D: !0
        }), (e = ye.core.getCache(ne)).spacer ? M = e.pinState : (e.spacer = A = we.createElement("div"), A.setAttribute("class", "pin-spacer" + (i ? " pin-spacer-" + i : "")), e.pinState = M = Ga(ne)), ve.spacer = A = e.spacer, n = ba(ne), R = n[oe + $.os2], L = ye.getProperty(ne), B = ye.quickSetter(ne, $.a, We), Da(ne, A, n), O = Ga(ne)), p && (t = I(p) ? da(p, Xe) : Xe, S = oa("scroller-start", i, ue, $, t, 0), k = oa("scroller-end", i, ue, $, t, 0, S), r = S["offset" + $.op.d2], w = oa("start", i, ue, $, t, r), T = oa("end", i, ue, $, t, r), pe || (function _makePositionable(e) {
          e.style.position = "absolute" === ba(e).position ? "absolute" : "relative";
        }(ue), ye.set([S, k], {
          force3D: !0
        }), W = ye.quickSetter(S, $.a, We), q = ye.quickSetter(k, $.a, We))), ve.revert = function () {
          ve.update(1), ne && Ca(ne, A, M), m = 1;
        }, ve.refresh = function (e) {
          if (!_e && Z) if (ne && e && Oe) ia(ScrollTrigger, "scrollEnd", me);else {
            var t = ve.scroll(),
                r = ve.progress;
            _e = 1, U && U.kill(), ie && v && v.progress(0).invalidate().progress(ve.progress), m || ve.revert();
            var n,
                o,
                i,
                a,
                s,
                l = (pe ? xe["inner" + $.d2] : ue["client" + $.d2]) || 0,
                c = pe ? $e : ea(ue),
                f = E(ue, $),
                u = 0,
                p = h.end,
                d = h.endTrigger || re,
                g = h.start || (ne || !re ? "0 0" : "0 100%");
            if (y = Ja(g, re, l, $, ve.scroll(), w, S, ve, c, he, pe, f) || (ne ? -.001 : 0), G(p) && (p = p(ve)), F(p) && !p.indexOf("+=") && (~p.indexOf(" ") ? p = (F(g) ? g.split(" ")[0] : "") + p : (u = na(p.substr(2), l), p = F(g) ? g : y + u, d = re)), x = Math.max(y, Ja(p || (d ? "100% 0" : f), d, l, $, ve.scroll() + u, T, k, ve, c, he, pe, f)) || -.001, _ = x - y || (y -= .01) && .001, ne) n = ba(ne), a = $ === Je, i = ve.scroll(), N = parseFloat(L($.a)), Da(ne, A, n), O = Ga(ne), o = ea(ne, !0), oe && (A.style[oe + $.os2] = _ + We, (j = oe === Ne ? fa(ne, $) + _ : 0) && (A.style[$.d] = j + We), pe && ve.scroll(i)), pe && ((s = {
              top: o.top + (a ? i - y : 0) + We,
              left: o.left + (a ? 0 : i - y) + We,
              boxSizing: "border-box",
              position: "fixed"
            })[Ae] = s.maxWidth = Math.ceil(o.width) + We, s[Ie] = s["max" + He] = Math.ceil(o.height) + We, s[Re] = s[Re + Be] = s[Re + Le] = s[Re + Ge] = s[Re + De] = "0", s[Ne] = n[Ne], s[Ne + Be] = n[Ne + Be], s[Ne + Le] = n[Ne + Le], s[Ne + Ge] = n[Ne + Ge], s[Ne + De] = n[Ne + De], P = function _copyState(e, t, r) {
              for (var n, o = [], i = e.length, a = r ? 8 : 0; a < i; a += 2) {
                n = e[a], o.push(n, n in t ? t[n] : e[a + 1]);
              }

              return o.t = e.t, o;
            }(M, s, ce));else if (re && ve.scroll()) for (o = re.parentNode; o && o !== Te;) {
              o._pinOffset && (y -= o._pinOffset, x -= o._pinOffset), o = o.parentNode;
            }
            ve.start = y, ve.end = x, ve.scroll() < t && ve.scroll(t), ve.update(), _e = m = 0, r !== ve.progress && (U && v.totalProgress(r, !0), ve.progress = r, ve.update()), ne && oe && (A._pinOffset = Math.round(ve.progress * _)), te && te(ve);
          }
        }, ve.getVelocity = function () {
          return (ve.scroll() - b) / (Pe() - ke) * 1e3 || 0;
        }, ve.update = function (e, t) {
          var r,
              n,
              o,
              i,
              a,
              s = ve.scroll(),
              l = e ? 0 : (s - y) / _,
              c = l < 0 ? 0 : 1 < l ? 1 : l || 0,
              f = ve.progress;

          if (t && (b = g, g = s, le && (X = J, J = v && !fe ? v.totalProgress() : c)), ae && !c && ne && !_e && y < s + (s - b) / (Pe() - ke) * ae && (c = 1e-4), c !== f && Z) {
            if (i = (a = (r = ve.isActive = !!c && c < 1) != (!!f && f < 1)) || !!c != !!f, ve.direction = f < c ? 1 : -1, ve.progress = c, ne) if (e && oe && (A.style[oe + $.os2] = R), pe) {
              if (i) {
                if (o = s + 1 >= E(ue, $), ce) {
                  if (!_e && (r || o)) {
                    var u = ea(ne, !0),
                        p = s - y;
                    ne.style.top = u.top + ($ === Je ? p : 0) + We, ne.style.left = u.left + ($ === Je ? 0 : p) + We;
                  }

                  !function _reparent(e, t) {
                    if (e.parentNode !== t) {
                      var r,
                          n,
                          o = e.style;
                      if (t === Te) for (r in e._stOrig = o.cssText, n = ba(e)) {
                        +r || Ke.test(r) || !n[r] || "string" != typeof o[r] || "0" === r || (o[r] = n[r]);
                      } else o.cssText = e._stOrig;
                      t.appendChild(e);
                    }
                  }(ne, _e || !r && !o ? A : Te);
                }

                Ze(r || o ? P : O), B(N + (1 !== c || o ? 0 : _));
              }
            } else B(N + _ * c);
            fe || (!U || _e || Me ? v && v.totalProgress(c, !!_e) : (U.vars.totalProgress = c, U.invalidate().restart()), K && !e && K(ve)), !le || d.tween || _e || Me || (Y = Oe, V.restart(!0)), i && !_e ? (n = c && !f && c < 1 ? 0 : 1 === c && f < 1 ? 1 : 1 === f && 0 < c ? 2 : 3, 1 === c && se ? ve.kill() : fe && (o = ge[n], v && ("complete" === o || "reset" === o || o in v) && ("complete" === o ? v.pause().totalProgress(1) : "reset" === o ? v.restart(!0).pause() : v[o]()), K && K(ve)), Q && a && Se(Q.targets).forEach(function (e) {
              return e.classList.toggle(Q.className);
            }), ee && a && ee(ve), de[n] && de[n](ve), se && (de[n] = 0), a || de[n = 1 === c ? 1 : 3] && de[n](ve)) : fe && K && !_e && K(ve);
          }

          q && (W(s + (S._isFlipped ? 1 : 0)), q(s));
        }, ve.enable = function () {
          Z || (Z = !0, ia(ue, "resize", ua), ia(ue, "scroll", ta), be && ia(ScrollTrigger, "refreshInit", be), v && (v.add ? ye.delayedCall(.01, ve.refresh) : ve.refresh()));
        }, ve.disable = function (e) {
          if (Z && (e !== (Z = ve.isActive = !1) && ve.update(1), ne && Ca(ne, A, M), be && ja(ScrollTrigger, "refreshInit", be), !pe)) {
            for (var t = Ue.length; t--;) {
              if (Ue[t].scroller === ue && Ue[t] !== ve) return;
            }

            ja(ue, "resize", ua), ja(ue, "scroll", ta);
          }
        }, ve.kill = function (e) {
          ve.disable(e), i && delete Ve[i], Ue.splice(Ue.indexOf(ve), 1), v && (v.scrollTrigger = null);
        }, ve.enable();
      } else this.update = this.refresh = this.kill = z;
    }, ScrollTrigger.register = function register(e) {
      if (ye = e || B(), A() && window.document && (xe = window, we = document, x = we.documentElement, Te = we.body), ye && (Se = ye.utils.toArray, Ce = ye.utils.clamp, ye.core.globals("ScrollTrigger", ScrollTrigger), Te)) {
        s = xe.requestAnimationFrame || function (e) {
          return setTimeout(e, 16);
        }, ia(xe, "mousewheel", ta), i = [xe, we, x, Te], ia(we, "scroll", ta);
        var t,
            r = Te.style,
            n = r.borderTop;
        r.borderTop = "1px solid #000", t = ea(Te), Je.m = Math.round(t.top + Je.sc()) || 0, qe.m = Math.round(t.left + qe.sc()) || 0, n ? r.borderTop = n : r.removeProperty("border-top"), c = setInterval(sa, 100), ye.delayedCall(.5, function () {
          return Me = 0;
        }), ia(we, "touchcancel", z), ia(Te, "touchstart", z), ha(ia, we, "pointerdown,touchstart,mousedown", function () {
          return Ee = 1;
        }), ha(ia, we, "pointerup,touchend,mouseup", function () {
          return Ee = 0;
        }), f = ye.utils.checkPrefix("transform"), S.push(f), o = Pe(), a = ye.delayedCall(.2, ya).pause(), ia(we, "visibilitychange", function () {
          return we.hidden || ya();
        }), ia(we, "DOMContentLoaded", ya), ia(xe, "load", function () {
          return Oe || ya();
        }), ia(xe, "resize", ua);
      }

      return o;
    }, ScrollTrigger.defaults = function defaults(e) {
      for (var t in e) {
        Ye[t] = e[t];
      }
    }, ScrollTrigger.kill = function kill() {
      ze = 0, Ue.slice(0).forEach(function (e) {
        return e.kill(1);
      });
    }, ScrollTrigger);

    function ScrollTrigger(e, t) {
      o || ScrollTrigger.register(ye) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, t);
    }

    _.version = "3.3.1", _.create = function (e, t) {
      return new _(e, t);
    }, _.refresh = function (e) {
      return e ? ua() : ya(!0);
    }, _.update = m, _.maxScroll = function (e, t) {
      return E(e, t ? qe : Je);
    }, _.getScrollFunc = function (e, t) {
      return (t = t ? qe : Je) && (C(e) ? t.sc : D(e, t));
    }, _.getById = function (e) {
      return Ve[e];
    }, _.getAll = function () {
      return Ue.slice(0);
    }, _.syncInterval = function (e) {
      return clearInterval(c) || (c = e) && setInterval(sa, e);
    }, _.isScrolling = function () {
      return !!Oe;
    }, _.addEventListener = function (e, t) {
      var r = h[e] || (h[e] = []);
      ~r.indexOf(t) || r.push(t);
    }, _.removeEventListener = function (e, t) {
      var r = h[e],
          n = r && r.indexOf(t);
      0 <= n && r.splice(n, 1);
    }, _.batch = function (e, t) {
      function pg(e, t) {
        var r = [],
            n = [],
            o = ye.delayedCall(i, function () {
          t(r, n), r = [], n = [];
        }).pause();
        return function (e) {
          r.length || o.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && o.progress(1);
        };
      }

      var r,
          n = [],
          o = {},
          i = t.interval || .02,
          a = t.batchMax || 1e9;

      for (r in t) {
        o[r] = "on" === r.substr(0, 2) && G(t[r]) && "onRefreshInit" !== r ? pg(0, t[r]) : t[r];
      }

      return G(a) && (a = a(), _.addEventListener("refresh", function () {
        return a = t.batchMax();
      })), Se(e).forEach(function (e) {
        var t = {};

        for (r in o) {
          t[r] = o[r];
        }

        t.trigger = e, n.push(_.create(t));
      }), n;
    }, B() && ye.registerPlugin(_), e.ScrollTrigger = _, e["default"] = _;

    if (typeof window === "undefined" || window !== e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
    } else {
      delete e["default"];
    }
  });
  ;
  gsap.from('.banner__title', {
    opacity: 0,
    scale: 5,
    duration: 1,
    ease: 'power2.out'
  });
  gsap.from('.banner__subtitle', {
    opacity: 0,
    duration: 2,
    delay: 1,
    ease: 'power2.out'
  });
  gsap.from('.banner__btns .btn:first-child', {
    opacity: 0,
    x: -100,
    duration: 1,
    delay: 2,
    ease: 'power2.out'
  });
  gsap.from('.banner__btns .btn:last-child', {
    opacity: 0,
    x: 100,
    duration: 1,
    delay: 2,
    ease: 'power2.out'
  });
  gsap.registerPlugin(ScrollTrigger);

  function scrollAnimation() {
    gsap.from('.about__composition-box', {
      opacity: 0,
      x: 1000,
      duration: 1,
      start: 'top bottom-=100',
      scrollTrigger: {
        trigger: '.about__composition-box'
      },
      ease: 'power2.out'
    });
    gsap.from('.about__accord', {
      opacity: 0,
      x: -1000,
      duration: 1,
      start: 'top bottom-=100',
      scrollTrigger: {
        trigger: '.about__accord'
      },
      ease: 'power2.out'
    });
    gsap.from('.about__list-item', {
      opacity: 0,
      duration: 2,
      stagger: 0.5,
      start: 'top bottom-=200',
      scrollTrigger: {
        trigger: '.about__list-item'
      },
      ease: 'power2.out'
    });
    gsap.from('.portfolio .title', {
      opacity: 0,
      duration: 1,
      scale: 5,
      start: 'top bottom-=100',
      scrollTrigger: {
        trigger: '.portfolio'
      },
      ease: 'power2.out'
    });
    gsap.from('.features__title', {
      opacity: 0,
      duration: 1,
      scale: 5,
      start: 'top bottom-=100',
      scrollTrigger: {
        trigger: '.features'
      },
      ease: 'power2.out'
    });
    gsap.from('.features__img', {
      opacity: 0,
      duration: 3,
      start: 'top bottom-=400',
      scrollTrigger: {
        trigger: '.features__img'
      },
      ease: 'power2.out'
    });
    gsap.from('.features__list--right li', {
      opacity: 0,
      x: -300,
      // duration: 3,
      start: 'top bottom-=100',
      end: 'bottom bottom-=200',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.features__list',
        scrub: true
      },
      ease: 'power2.out'
    });
    gsap.from('.features__list--left li', {
      opacity: 0,
      x: 300,
      // duration: 3,
      start: 'top bottom-=100',
      end: 'bottom bottom-=200',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.features__list',
        scrub: true
      },
      ease: 'power2.out'
    });
    gsap.from('.clients__title', {
      opacity: 0,
      duration: 1,
      scale: 5,
      start: 'top bottom-=100',
      scrollTrigger: {
        trigger: '.clients__header'
      },
      ease: 'power2.out'
    });
    gsap.from('.team__title', {
      opacity: 0,
      duration: 1,
      scale: 5,
      start: 'top bottom-=100',
      scrollTrigger: {
        trigger: '.team'
      },
      ease: 'power2.out'
    });
    gsap.from('.team__card', {
      opacity: 0,
      duration: 2,
      stagger: 0.5,
      start: 'top bottom-=200px',
      scrollTrigger: {
        trigger: '.team__list'
      },
      ease: 'power2.out'
    });
    gsap.from('.skills__title', {
      opacity: 0,
      duration: 1,
      scale: 5,
      start: 'top bottom-=100',
      scrollTrigger: {
        trigger: '.skills'
      },
      ease: 'power2.out'
    });
    gsap.from('.skills__column', {
      opacity: 0,
      duration: 2,
      stagger: 0.5,
      start: 'top bottom-=200px',
      scrollTrigger: {
        trigger: '.skills__row',
        onEnter: function onEnter() {
          return circleNumbers();
        }
      },
      ease: 'power2.out'
    });
    gsap.from('.services__title', {
      opacity: 0,
      duration: 1,
      scale: 5,
      start: 'top bottom-=100',
      scrollTrigger: {
        trigger: '.services'
      },
      ease: 'power2.out'
    });
    gsap.from('.services__item', {
      opacity: 0,
      duration: 2,
      stagger: 0.5,
      start: 'top bottom-=200px',
      scrollTrigger: {
        trigger: '.services__list'
      },
      ease: 'power2.out'
    });
    gsap.from('.plans__title', {
      opacity: 0,
      duration: 1,
      scale: 5,
      start: 'top bottom-=100',
      scrollTrigger: {
        trigger: '.plans'
      },
      ease: 'power2.out'
    });
    gsap.from('.blog__title', {
      opacity: 0,
      duration: 1,
      scale: 5,
      start: 'top bottom-=100',
      scrollTrigger: {
        trigger: '.blog'
      },
      ease: 'power2.out'
    });
    gsap.from('.contacts__title', {
      opacity: 0,
      duration: 1,
      scale: 5,
      start: 'top bottom-=100',
      scrollTrigger: {
        trigger: '.contacts'
      },
      ease: 'power2.out'
    });
  }

  scrollAnimation();
  ;
  var items = document.querySelectorAll('.about__accord-title');
  var icons = document.querySelectorAll('.about__accord-icon');
  items.forEach(function (item) {
    item.addEventListener('click', function () {
      items.forEach(function (title) {
        title.parentElement.classList.remove('about__accord-item--active');
      });
      icons.forEach(function (icon) {
        icon.classList.remove('about__accord-icon--minus');
        var text = icon.querySelector('span');
        text.textContent = '+';
      });
      item.parentElement.classList.add('about__accord-item--active');
      var currentIcon = item.querySelector('.about__accord-icon');
      currentIcon.classList.add('about__accord-icon--minus');
      var currentIconText = currentIcon.querySelector('span');
      currentIconText.textContent = '-';
    });
  });
  ; // Carousel

  $('.banner__carousel').slick({
    prevArrow: '.arr--left',
    nextArrow: '.arr--right'
  });
  $('.clients__carousel').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  }); // circle progress

  /**
  * jquery-circle-progress - jQuery Plugin to draw animated circular progress bars:
  * {@link http://kottenator.github.io/jquery-circle-progress/}
  *
  * @author Rostyslav Bryzgunov <kottenator@gmail.com>
  * @version 1.2.2
  * @licence MIT
  * @preserve
  */

  !function (i) {
    if ("function" == typeof define && define.amd) define(["jquery"], i);else if ("object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports) {
      var t = require("jquery");

      i(t), module.exports = t;
    } else i(jQuery);
  }(function (i) {
    function t(i) {
      this.init(i);
    }

    t.prototype = {
      value: 0,
      size: 100,
      startAngle: -Math.PI,
      thickness: "auto",
      fill: {
        gradient: ["#3aeabb", "#fdd250"]
      },
      emptyFill: "rgba(0, 0, 0, .1)",
      animation: {
        duration: 1200,
        easing: "circleProgressEasing"
      },
      animationStartValue: 0,
      reverse: !1,
      lineCap: "butt",
      insertMode: "prepend",
      constructor: t,
      el: null,
      canvas: null,
      ctx: null,
      radius: 0,
      arcFill: null,
      lastFrameValue: 0,
      init: function init(t) {
        i.extend(this, t), this.radius = this.size / 2, this.initWidget(), this.initFill(), this.draw(), this.el.trigger("circle-inited");
      },
      initWidget: function initWidget() {
        this.canvas || (this.canvas = i("<canvas>")["prepend" == this.insertMode ? "prependTo" : "appendTo"](this.el)[0]);
        var t = this.canvas;

        if (t.width = this.size, t.height = this.size, this.ctx = t.getContext("2d"), window.devicePixelRatio > 1) {
          var e = window.devicePixelRatio;
          t.style.width = t.style.height = this.size + "px", t.width = t.height = this.size * e, this.ctx.scale(e, e);
        }
      },
      initFill: function initFill() {
        function t() {
          var t = i("<canvas>")[0];
          t.width = e.size, t.height = e.size, t.getContext("2d").drawImage(g, 0, 0, r, r), e.arcFill = e.ctx.createPattern(t, "no-repeat"), e.drawFrame(e.lastFrameValue);
        }

        var e = this,
            a = this.fill,
            n = this.ctx,
            r = this.size;
        if (!a) throw Error("The fill is not specified!");

        if ("string" == typeof a && (a = {
          color: a
        }), a.color && (this.arcFill = a.color), a.gradient) {
          var s = a.gradient;
          if (1 == s.length) this.arcFill = s[0];else if (s.length > 1) {
            for (var l = a.gradientAngle || 0, o = a.gradientDirection || [r / 2 * (1 - Math.cos(l)), r / 2 * (1 + Math.sin(l)), r / 2 * (1 + Math.cos(l)), r / 2 * (1 - Math.sin(l))], h = n.createLinearGradient.apply(n, o), c = 0; c < s.length; c++) {
              var d = s[c],
                  u = c / (s.length - 1);
              i.isArray(d) && (u = d[1], d = d[0]), h.addColorStop(u, d);
            }

            this.arcFill = h;
          }
        }

        if (a.image) {
          var g;
          a.image instanceof Image ? g = a.image : (g = new Image(), g.src = a.image), g.complete ? t() : g.onload = t;
        }
      },
      draw: function draw() {
        this.animation ? this.drawAnimated(this.value) : this.drawFrame(this.value);
      },
      drawFrame: function drawFrame(i) {
        this.lastFrameValue = i, this.ctx.clearRect(0, 0, this.size, this.size), this.drawEmptyArc(i), this.drawArc(i);
      },
      drawArc: function drawArc(i) {
        if (0 !== i) {
          var t = this.ctx,
              e = this.radius,
              a = this.getThickness(),
              n = this.startAngle;
          t.save(), t.beginPath(), this.reverse ? t.arc(e, e, e - a / 2, n - 2 * Math.PI * i, n) : t.arc(e, e, e - a / 2, n, n + 2 * Math.PI * i), t.lineWidth = a, t.lineCap = this.lineCap, t.strokeStyle = this.arcFill, t.stroke(), t.restore();
        }
      },
      drawEmptyArc: function drawEmptyArc(i) {
        var t = this.ctx,
            e = this.radius,
            a = this.getThickness(),
            n = this.startAngle;
        i < 1 && (t.save(), t.beginPath(), i <= 0 ? t.arc(e, e, e - a / 2, 0, 2 * Math.PI) : this.reverse ? t.arc(e, e, e - a / 2, n, n - 2 * Math.PI * i) : t.arc(e, e, e - a / 2, n + 2 * Math.PI * i, n), t.lineWidth = a, t.strokeStyle = this.emptyFill, t.stroke(), t.restore());
      },
      drawAnimated: function drawAnimated(t) {
        var e = this,
            a = this.el,
            n = i(this.canvas);
        n.stop(!0, !1), a.trigger("circle-animation-start"), n.css({
          animationProgress: 0
        }).animate({
          animationProgress: 1
        }, i.extend({}, this.animation, {
          step: function step(i) {
            var n = e.animationStartValue * (1 - i) + t * i;
            e.drawFrame(n), a.trigger("circle-animation-progress", [i, n]);
          }
        })).promise().always(function () {
          a.trigger("circle-animation-end");
        });
      },
      getThickness: function getThickness() {
        return i.isNumeric(this.thickness) ? this.thickness : this.size / 14;
      },
      getValue: function getValue() {
        return this.value;
      },
      setValue: function setValue(i) {
        this.animation && (this.animationStartValue = this.lastFrameValue), this.value = i, this.draw();
      }
    }, i.circleProgress = {
      defaults: t.prototype
    }, i.easing.circleProgressEasing = function (i) {
      return i < .5 ? (i = 2 * i, .5 * i * i * i) : (i = 2 - 2 * i, 1 - .5 * i * i * i);
    }, i.fn.circleProgress = function (e, a) {
      var n = "circle-progress",
          r = this.data(n);

      if ("widget" == e) {
        if (!r) throw Error('Calling "widget" method on not initialized instance is forbidden');
        return r.canvas;
      }

      if ("value" == e) {
        if (!r) throw Error('Calling "value" method on not initialized instance is forbidden');
        if ("undefined" == typeof a) return r.getValue();
        var s = arguments[1];
        return this.each(function () {
          i(this).data(n).setValue(s);
        });
      }

      return this.each(function () {
        var a = i(this),
            r = a.data(n),
            s = i.isPlainObject(e) ? e : {};
        if (r) r.init(s);else {
          var l = i.extend({}, a.data());
          "string" == typeof l.fill && (l.fill = JSON.parse(l.fill)), "string" == typeof l.animation && (l.animation = JSON.parse(l.animation)), s = i.extend(l, s), s.el = a, r = new t(s), a.data(n, r);
        }
      });
    };
  });
  ; // const circles = $('.skills__circle');

  function circleNumbers() {
    $('.skills__circle').circleProgress({
      value: $(this).data('value'),
      thickness: 3,
      size: 145,
      animation: {
        duration: 2000
      },
      fill: {
        gradient: [['#ff0036', 0.2], ['#ff0036', 1], ['#ff0036', 0.2]]
      },
      startAngle: -Math.PI / 4,
      reverse: true
    }).on('circle-animation-progress', function (event, progress, stepValue) {
      $(this).find('strong').text(stepValue.toFixed(2).substr(2));
    });
  } // map


  function map(n) {
    google.maps.Map.prototype.setCenterWithOffset = function (latlng, offsetX, offsetY) {
      var map = this;
      var ov = new google.maps.OverlayView();

      ov.onAdd = function () {
        var proj = this.getProjection();
        var aPoint = proj.fromLatLngToContainerPixel(latlng);
        aPoint.x = aPoint.x + offsetX;
        aPoint.y = aPoint.y + offsetY;
        map.panTo(proj.fromContainerPixelToLatLng(aPoint)); //map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
      };

      ov.draw = function () {};

      ov.setMap(this);
    };

    var markers = new Array();
    var infowindow = new google.maps.InfoWindow({//pixelOffset: new google.maps.Size(-230,250)
    });
    var locations = [[new google.maps.LatLng(27.354408, 30.812562)]];
    var options = {
      zoom: 10,
      panControl: false,
      mapTypeControl: false,
      center: locations[0][0],
      styles: [{
        featureType: 'landscape.natural',
        elementType: 'geometry.fill',
        stylers: [{
          visibility: 'on'
        }, {
          color: '#e0efef'
        }]
      }, {
        featureType: 'poi',
        elementType: 'geometry.fill',
        stylers: [{
          visibility: 'on'
        }, {
          hue: '#1900ff'
        }, {
          color: '#c0e8e8'
        }]
      }, {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{
          lightness: 100
        }, {
          visibility: 'simplified'
        }]
      }, {
        featureType: 'road',
        elementType: 'labels',
        stylers: [{
          visibility: 'off'
        }]
      }, {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [{
          visibility: 'on'
        }, {
          lightness: 700
        }]
      }, {
        featureType: 'water',
        elementType: 'all',
        stylers: [{
          color: '#7dcdcd'
        }]
      }],
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('map'), options);
    var icon = {
      url: 'img/common/map.svg',
      scaledSize: new google.maps.Size(30, 30),
      anchor: new google.maps.Point(9, 10)
    };

    for (var i = 0; i < locations.length; i++) {
      var marker = new google.maps.Marker({
        icon: icon,
        position: locations[i][0],
        map: map
      });
      google.maps.event.addListener(marker, 'click', function (marker, i) {
        return function () {
          for (var m = 0; m < markers.length; m++) {
            markers[m].setIcon(icon);
          }

          var cnt = i + 1;
          infowindow.setContent($('.contacts-map-item_' + cnt).html());
          infowindow.open(map, marker);
          marker.setIcon(icon);
          map.setCenterWithOffset(marker.getPosition(), 0, 0);
          setTimeout(function () {
            baloonstyle();
          }, 10);
        };
      }(marker, i));
      markers.push(marker);
    }

    if (n) {
      var nc = n - 1;
      setTimeout(function () {
        google.maps.event.trigger(markers[nc], 'click');
      }, 500);
    }
  }

  function baloonstyle() {
    $('.gm-style-iw').parent().addClass('baloon');
    $('.gm-style-iw').prev().addClass('baloon-style');
    $('.gm-style-iw').next().addClass('baloon-close');
    $('.gm-style-iw').addClass('baloon-content');
  }

  if ($('#map').length > 0) {
    map(1);
  }

  ; // change menu bar on scroll

  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      $('.header').addClass('header-scroll');
    } else {
      $('.header').removeClass('header-scroll');
    }

    activateMenuLink();
  });
  var menuLinks = [];
  var menuLinksObj = document.querySelectorAll('.goto');
  menuLinksObj.forEach(function (el) {
    menuLinks.push($(el).attr('href').replace('#', '.'));
  });
  $('.goto').click(function () {
    var el = $(this).attr('href').replace('#', '');
    var offset = 0;
    $('body,html').animate({
      scrollTop: $('.' + el).offset().top + offset
    }, 500, function () {});

    if ($('.menu__body').hasClass('active')) {
      $('.menu__body,.icon-menu').removeClass('active');
      $('body').removeClass('lock');
    }

    return false;
  });
  var sectionsToLink = document.querySelectorAll(menuLinks.join(', '));

  function activateMenuLink() {
    sectionsToLink.forEach(function (section, i) {
      if (window.pageYOffset >= section.offsetTop - 10) {
        menuLinksObj.forEach(function (link) {
          return link.classList.remove('menu__link--active');
        });
        menuLinksObj[i].classList.add('menu__link--active');
      }
    });
  } // burger functionality


  var iconMenu = document.querySelector('.icon-menu');
  var body = document.querySelector('body');
  var menuBody = document.querySelector('.menu__body');

  if (iconMenu) {
    iconMenu.addEventListener('click', function () {
      iconMenu.classList.toggle('active');
      body.classList.toggle('lock');
      menuBody.classList.toggle('active');
    });
  }
});