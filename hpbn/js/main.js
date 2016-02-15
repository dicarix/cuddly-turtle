(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _modulesNav = require("./modules/nav");

var _modulesNav2 = _interopRequireDefault(_modulesNav);

var _modulesNavMobile = require("./modules/navMobile");

var _modulesNavMobile2 = _interopRequireDefault(_modulesNavMobile);

var _modulesScroll = require("./modules/scroll");

var _modulesScroll2 = _interopRequireDefault(_modulesScroll);

var _modulesCookie = require("./modules/cookie");

var _modulesCookie2 = _interopRequireDefault(_modulesCookie);

var _vendorsSkrollr = require("./vendors/Skrollr");

var _vendorsSkrollr2 = _interopRequireDefault(_vendorsSkrollr);

// jQuery DOM Ready
$(function () {
  'use strict';

  // Initialize Modules
  new _modulesNav2["default"]();
  new _modulesNavMobile2["default"]();
  new _modulesScroll2["default"]();
  // Initialize Vendors
  new _vendorsSkrollr2["default"]();
});

},{"./modules/cookie":2,"./modules/nav":3,"./modules/navMobile":4,"./modules/scroll":5,"./vendors/Skrollr":6}],2:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Cookie = function Cookie() {
  _classCallCheck(this, Cookie);

  var cookieContainer = $('.hp-bn-m-cookie');
  var header = $('.hp-bn-m-header');
  var page = $('[class*="hp-bn-p-"]');
  this.cookieButton = $('#btnCookie');

  this.cookieButton.click(function () {
    localStorage.setItem('HP_BN_cookie', 'Accepted');
    cookieContainer.fadeOut(function () {
      header.removeClass('cookie');
      page.removeClass('cookie');
    });
  });
  $(document).ready(function () {
    if (!localStorage["HP_BN_cookie"]) {
      cookieContainer.show();
      header.addClass('cookie');
      page.addClass('cookie');
    }
  });
};

module.exports = Cookie;

},{}],3:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Nav = function Nav() {
  _classCallCheck(this, Nav);

  $('.link-container').hover(function () {
    var $this = $(this);
    $this.find('.hp-bn-m-menu-dropdown').toggle();
    $this.parents().find('.link-container').find('a:first').removeClass('active');
    $this.find('a:first').addClass('active');
  }, function () {
    var $this = $(this);
    $this.parents().find('.link-container').find('a:first').addClass('active');
    $this.find('.hp-bn-m-menu-dropdown').toggle();
  });
};

module.exports = Nav;

},{}],4:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var NavMobile = function NavMobile() {
  _classCallCheck(this, NavMobile);

  this.menu = $('.menu li');
  this.menu.click(function () {
    var $this = $(this);
    $this.siblings().removeClass('active');
    $this.addClass('active');
  });

  //mobile header
  $('.touch .search_submit').click(function () {
    $('input').toggle();
    $('.hp-bn-m-header .text-center, .follow--twitter').toggle();
  });

  //mobile bottom navals
  $('.touch .hp-bn-m-nav a').click(function () {
    var $this = $(this);
    $this.siblings('.category').toggle();
    $this.siblings('.hp-bn-m-menu-dropdown').toggle();
    $this.parent('li').siblings().children('.hp-bn-m-menu-dropdown').hide();
    $this.parent('li').siblings().children('.category').hide();
  });
};

module.exports = NavMobile;

},{}],5:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Scroll = function Scroll() {
  _classCallCheck(this, Scroll);

  var flag = true;
  this.previousScroll = 0;
  var twitterButton = $('.hp-bn-m-twitter_btn:first');
  var menu = $('.touch .hp-bn-m-nav');
  var menuDropdown = $('.hp-bn-m-menu-dropdown');
  var buttons = $('.category');
  var scrollpos = $(window).scrollTop();
  var direction = false;
  var newscroll = 0;
  if (!/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $(window).scroll(function () {
      newscroll = $(window).scrollTop();
      if (newscroll > scrollpos && !direction) {
        twitterButton.stop().slideToggle(function () {
          $('.hp-bn-m-header h2').css('marginBottom', 0);
          $('.hp-bn-m-nav').animate({ marginTop: 0 });
        });
        direction = !direction;
      } else if (newscroll == 0 && direction) {
        $('.hp-bn-m-twitter_btn:first').stop().slideToggle();
        $('.hp-bn-m-header h2').css('marginBottom', ' 12.5px');
        $('.hp-bn-m-nav').css('marginTop', '25px');
        direction = !direction;
      }
      scrollpos = newscroll;
    });
  } else {
    $(document).ready(function () {
      flag = false;
      menu.show();
    });
    $(document).on("scrollstop", function () {
      var currentScroll = $(window).scrollTop();
      if (isVisible() && currentScroll > 0 || currentScroll > this.previousScroll) {
        twitterButton.animate({
          height: 0,
          overflow: 'hidden',
          display: 'none'
        });
        menu.fadeOut();
        menuDropdown.hide();
        buttons.hide();
        flag = false;
      }
      if (currentScroll < this.previousScroll) {
        menu.fadeIn();
        flag = true;
      }
      if (!isVisible() && currentScroll == 0) {
        twitterButton.animate({
          height: '26px',
          overflow: 'hidden',
          display: 'block'
        });
        flag = true;
      }
      this.previousScroll = currentScroll;
    });
  }
  function isVisible() {
    if (twitterButton.height() === 0) {
      return flag = false;
    } else {
      return flag = true;
    }
  }
};

module.exports = Scroll;

},{}],6:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Skrollr = function Skrollr() {
  _classCallCheck(this, Skrollr);

  var breadcrumbs = $('.hp-bn-m-breadcrumbs');
  var social_container = $('.hp-bn-m-social-icons');
  this.skrollr = skrollr;
  this.skrollr.init({
    forceHeight: false,
    render: function render() {
      if (breadcrumbs.hasClass('skrollable-after')) {
        breadcrumbs.addClass('fixed');
      }
      if (social_container.hasClass('skrollable-after')) {
        social_container.addClass('fixed');
      }
    }
  });
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    this.skrollr.init().destroy();
  }
};

module.exports = Skrollr;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGllZ29hYy9EZXNrdG9wL0NNUHJvamVjdHMvSFAtQnVzaW5lc3NOb3cvaHAtYnVzaW5lc3Mtbm93L2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi9tYWluLmpzIiwiL1VzZXJzL2RpZWdvYWMvRGVza3RvcC9DTVByb2plY3RzL0hQLUJ1c2luZXNzTm93L2hwLWJ1c2luZXNzLW5vdy9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvbW9kdWxlcy9jb29raWUuanMiLCIvVXNlcnMvZGllZ29hYy9EZXNrdG9wL0NNUHJvamVjdHMvSFAtQnVzaW5lc3NOb3cvaHAtYnVzaW5lc3Mtbm93L2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi9tb2R1bGVzL25hdi5qcyIsIi9Vc2Vycy9kaWVnb2FjL0Rlc2t0b3AvQ01Qcm9qZWN0cy9IUC1CdXNpbmVzc05vdy9ocC1idXNpbmVzcy1ub3cvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L21vZHVsZXMvbmF2TW9iaWxlLmpzIiwiL1VzZXJzL2RpZWdvYWMvRGVza3RvcC9DTVByb2plY3RzL0hQLUJ1c2luZXNzTm93L2hwLWJ1c2luZXNzLW5vdy9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvbW9kdWxlcy9zY3JvbGwuanMiLCIvVXNlcnMvZGllZ29hYy9EZXNrdG9wL0NNUHJvamVjdHMvSFAtQnVzaW5lc3NOb3cvaHAtYnVzaW5lc3Mtbm93L2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi92ZW5kb3JzL1Nrcm9sbHIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OzBCQ0FnQixlQUFlOzs7O2dDQUNULHFCQUFxQjs7Ozs2QkFDeEIsa0JBQWtCOzs7OzZCQUNsQixrQkFBa0I7Ozs7OEJBQ2pCLG1CQUFtQjs7Ozs7QUFFdkMsQ0FBQyxDQUFDLFlBQU07QUFDTixjQUFZLENBQUM7OztBQUdiLCtCQUFTLENBQUM7QUFDVixxQ0FBZSxDQUFDO0FBQ2hCLGtDQUFZLENBQUM7O0FBRWIsbUNBQWEsQ0FBQztDQUVmLENBQUMsQ0FBQzs7Ozs7OztJQ2hCRyxNQUFNLEdBQ0MsU0FEUCxNQUFNLEdBQ0c7d0JBRFQsTUFBTTs7QUFFUixNQUFJLGVBQWUsR0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN6QyxNQUFJLE1BQU0sR0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNoQyxNQUFJLElBQUksR0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNsQyxNQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQzs7QUFFcEMsTUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsWUFBSTtBQUMxQixnQkFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUMsVUFBVSxDQUFDLENBQUM7QUFDaEQsbUJBQWUsQ0FBQyxPQUFPLENBQUMsWUFBSTtBQUMxQixZQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdCLFVBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDNUIsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0FBQ0gsR0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFJO0FBQ3BCLFFBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEVBQUU7QUFDakMscUJBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN2QixZQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFCLFVBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDekI7R0FDRixDQUFDLENBQUE7Q0FDSDs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFDLE1BQU0sQ0FBQzs7Ozs7OztJQ3ZCaEIsR0FBRyxHQUNJLFNBRFAsR0FBRyxHQUNPO3dCQURWLEdBQUc7O0FBRUwsR0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVU7QUFDbkMsUUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BCLFNBQUssQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM5QyxTQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM5RSxTQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztHQUMxQyxFQUFDLFlBQVU7QUFDVixRQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEIsU0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDM0UsU0FBSyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0dBQy9DLENBQUMsQ0FBQztDQUNKOztBQUdILE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDOzs7Ozs7O0lDZmYsU0FBUyxHQUNGLFNBRFAsU0FBUyxHQUNDO3dCQURWLFNBQVM7O0FBR1gsTUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDMUIsTUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWTtBQUMxQixRQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDcEIsU0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN2QyxTQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0dBQzFCLENBQUMsQ0FBQzs7O0FBR0gsR0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVk7QUFDM0MsS0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLEtBQUMsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0dBQzlELENBQUMsQ0FBQzs7O0FBR0gsR0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVk7QUFDM0MsUUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BCLFNBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDckMsU0FBSyxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2xELFNBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDeEUsU0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7R0FDNUQsQ0FBQyxDQUFDO0NBRUo7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7Ozs7Ozs7SUMzQnJCLE1BQU0sR0FDQyxTQURQLE1BQU0sR0FDSTt3QkFEVixNQUFNOztBQUVSLE1BQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixNQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN4QixNQUFJLGFBQWEsR0FBRyxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUNwRCxNQUFJLElBQUksR0FBRyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNwQyxNQUFJLFlBQVksR0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUM3QyxNQUFJLE9BQU8sR0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDM0IsTUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3RDLE1BQUksU0FBUyxHQUFHLEtBQUssQ0FBQztBQUN0QixNQUFJLFNBQVMsR0FBQyxDQUFDLENBQUM7QUFDaEIsTUFBSSxDQUFDLDJEQUEyRCxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDMUYsS0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZO0FBQzNCLGVBQVMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDbEMsVUFBRyxTQUFTLEdBQUcsU0FBUyxJQUFJLENBQUMsU0FBUyxFQUFDO0FBQ3JDLHFCQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLFlBQVU7QUFDekMsV0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUM5QyxXQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7U0FDMUMsQ0FBQyxDQUFDO0FBQ0gsaUJBQVMsR0FBSSxDQUFDLFNBQVMsQ0FBRTtPQUMxQixNQUFLLElBQUcsU0FBUyxJQUFJLENBQUMsSUFBSSxTQUFTLEVBQUU7QUFDcEMsU0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDckQsU0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxTQUFTLENBQUMsQ0FBQztBQUN0RCxTQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBQyxNQUFNLENBQUMsQ0FBQztBQUMxQyxpQkFBUyxHQUFHLENBQUMsU0FBUyxDQUFDO09BQ3hCO0FBQ0QsZUFBUyxHQUFHLFNBQVMsQ0FBQztLQUN2QixDQUFDLENBQUM7R0FDSixNQUFNO0FBQ0wsS0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFVO0FBQzFCLFVBQUksR0FBQyxLQUFLLENBQUM7QUFDWCxVQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDYixDQUFDLENBQUM7QUFDSCxLQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZO0FBQ3ZDLFVBQUksYUFBYSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztBQUMxQyxVQUFHLFNBQVMsRUFBRSxJQUFJLGFBQWEsR0FBRyxDQUFDLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7QUFDMUUscUJBQWEsQ0FBQyxPQUFPLENBQUM7QUFDcEIsZ0JBQU0sRUFBRSxDQUFDO0FBQ1Qsa0JBQVEsRUFBRSxRQUFRO0FBQ2xCLGlCQUFPLEVBQUUsTUFBTTtTQUNoQixDQUFDLENBQUM7QUFDSCxZQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDZixvQkFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3BCLGVBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNmLFlBQUksR0FBRyxLQUFLLENBQUM7T0FDZDtBQUNELFVBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7QUFDdkMsWUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2QsWUFBSSxHQUFHLElBQUksQ0FBQztPQUNiO0FBQ0QsVUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLGFBQWEsSUFBSSxDQUFDLEVBQUU7QUFDdEMscUJBQWEsQ0FBQyxPQUFPLENBQUM7QUFDcEIsZ0JBQU0sRUFBRSxNQUFNO0FBQ2Qsa0JBQVEsRUFBRSxRQUFRO0FBQ2xCLGlCQUFPLEVBQUUsT0FBTztTQUNqQixDQUFDLENBQUM7QUFDSCxZQUFJLEdBQUcsSUFBSSxDQUFDO09BQ2I7QUFDRCxVQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztLQUNyQyxDQUFDLENBQUM7R0FDSjtBQUNELFdBQVMsU0FBUyxHQUFHO0FBQ25CLFFBQUksYUFBYSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTtBQUNoQyxhQUFPLElBQUksR0FBRyxLQUFLLENBQUM7S0FDckIsTUFBTTtBQUNMLGFBQU8sSUFBSSxHQUFHLElBQUksQ0FBQztLQUNwQjtHQUNGO0NBQ0Y7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Ozs7Ozs7SUN0RWxCLE9BQU8sR0FDQSxTQURQLE9BQU8sR0FDRzt3QkFEVixPQUFPOztBQUVULE1BQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQzVDLE1BQUksZ0JBQWdCLEdBQUUsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDakQsTUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsTUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7QUFDaEIsZUFBVyxFQUFFLEtBQUs7QUFDbEIsVUFBTSxFQUFFLGtCQUFZO0FBQ2xCLFVBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO0FBQzVDLG1CQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO09BQy9CO0FBQ0QsVUFBSSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtBQUNqRCx3QkFBZ0IsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7T0FDcEM7S0FDRjtHQUNGLENBQUMsQ0FBQztBQUNILE1BQUksZ0VBQWdFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUM5RixRQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0dBQy9CO0NBQ0Y7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IE5hdiBmcm9tIFwiLi9tb2R1bGVzL25hdlwiO1xuaW1wb3J0IE5hdk1vYmlsZSBmcm9tIFwiLi9tb2R1bGVzL25hdk1vYmlsZVwiO1xuaW1wb3J0IFNjcm9sbCBmcm9tIFwiLi9tb2R1bGVzL3Njcm9sbFwiO1xuaW1wb3J0IENvb2tpZSBmcm9tIFwiLi9tb2R1bGVzL2Nvb2tpZVwiO1xuaW1wb3J0IFNrcm9sbHIgZnJvbSBcIi4vdmVuZG9ycy9Ta3JvbGxyXCI7XG4vLyBqUXVlcnkgRE9NIFJlYWR5XG4kKCgpID0+IHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4vLyBJbml0aWFsaXplIE1vZHVsZXNcbiAgbmV3IE5hdigpO1xuICBuZXcgTmF2TW9iaWxlKCk7XG4gIG5ldyBTY3JvbGwoKTtcbiAgLy8gSW5pdGlhbGl6ZSBWZW5kb3JzXG4gIG5ldyBTa3JvbGxyKCk7XG5cbn0pO1xuIiwiY2xhc3MgQ29va2lle1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIGxldCBjb29raWVDb250YWluZXI9JCgnLmhwLWJuLW0tY29va2llJyk7XG4gICAgbGV0IGhlYWRlcj0kKCcuaHAtYm4tbS1oZWFkZXInKTtcbiAgICBsZXQgcGFnZT0kKCdbY2xhc3MqPVwiaHAtYm4tcC1cIl0nKTtcbiAgICB0aGlzLmNvb2tpZUJ1dHRvbiA9ICQoJyNidG5Db29raWUnKTtcblxuICAgIHRoaXMuY29va2llQnV0dG9uLmNsaWNrKCgpPT57XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnSFBfQk5fY29va2llJywnQWNjZXB0ZWQnKTtcbiAgICAgIGNvb2tpZUNvbnRhaW5lci5mYWRlT3V0KCgpPT57XG4gICAgICAgIGhlYWRlci5yZW1vdmVDbGFzcygnY29va2llJyk7XG4gICAgICAgIHBhZ2UucmVtb3ZlQ2xhc3MoJ2Nvb2tpZScpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgJChkb2N1bWVudCkucmVhZHkoKCk9PntcbiAgICAgIGlmICghbG9jYWxTdG9yYWdlW1wiSFBfQk5fY29va2llXCJdKSB7XG4gICAgICAgIGNvb2tpZUNvbnRhaW5lci5zaG93KCk7XG4gICAgICAgIGhlYWRlci5hZGRDbGFzcygnY29va2llJyk7XG4gICAgICAgIHBhZ2UuYWRkQ2xhc3MoJ2Nvb2tpZScpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzPUNvb2tpZTtcbiIsImNsYXNzIE5hdiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgICQoJy5saW5rLWNvbnRhaW5lcicpLmhvdmVyKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgJHRoaXMuZmluZCgnLmhwLWJuLW0tbWVudS1kcm9wZG93bicpLnRvZ2dsZSgpO1xuICAgICAgJHRoaXMucGFyZW50cygpLmZpbmQoJy5saW5rLWNvbnRhaW5lcicpLmZpbmQoJ2E6Zmlyc3QnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkdGhpcy5maW5kKCdhOmZpcnN0JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0sZnVuY3Rpb24oKXtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAkdGhpcy5wYXJlbnRzKCkuZmluZCgnLmxpbmstY29udGFpbmVyJykuZmluZCgnYTpmaXJzdCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICR0aGlzLmZpbmQoJy5ocC1ibi1tLW1lbnUtZHJvcGRvd24nKS50b2dnbGUoKTtcbiAgICB9KTtcbiAgfVxuXG59XG5tb2R1bGUuZXhwb3J0cyA9IE5hdjtcbiIsImNsYXNzIE5hdk1vYmlsZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgdGhpcy5tZW51ID0gJCgnLm1lbnUgbGknKTtcbiAgICB0aGlzLm1lbnUuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICR0aGlzLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4vL21vYmlsZSBoZWFkZXJcbiAgICAkKCcudG91Y2ggLnNlYXJjaF9zdWJtaXQnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAkKCdpbnB1dCcpLnRvZ2dsZSgpO1xuICAgICAgJCgnLmhwLWJuLW0taGVhZGVyIC50ZXh0LWNlbnRlciwgLmZvbGxvdy0tdHdpdHRlcicpLnRvZ2dsZSgpO1xuICAgIH0pO1xuXG4vL21vYmlsZSBib3R0b20gbmF2YWxzXG4gICAgJCgnLnRvdWNoIC5ocC1ibi1tLW5hdiBhJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICR0aGlzLnNpYmxpbmdzKCcuY2F0ZWdvcnknKS50b2dnbGUoKTtcbiAgICAgICR0aGlzLnNpYmxpbmdzKCcuaHAtYm4tbS1tZW51LWRyb3Bkb3duJykudG9nZ2xlKCk7XG4gICAgICAkdGhpcy5wYXJlbnQoJ2xpJykuc2libGluZ3MoKS5jaGlsZHJlbignLmhwLWJuLW0tbWVudS1kcm9wZG93bicpLmhpZGUoKTtcbiAgICAgICR0aGlzLnBhcmVudCgnbGknKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcuY2F0ZWdvcnknKS5oaWRlKCk7XG4gICAgfSk7XG5cbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBOYXZNb2JpbGU7XG4iLCJjbGFzcyBTY3JvbGwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgZmxhZyA9IHRydWU7XG4gICAgdGhpcy5wcmV2aW91c1Njcm9sbCA9IDA7XG4gICAgbGV0IHR3aXR0ZXJCdXR0b24gPSAkKCcuaHAtYm4tbS10d2l0dGVyX2J0bjpmaXJzdCcpO1xuICAgIGxldCBtZW51ID0gJCgnLnRvdWNoIC5ocC1ibi1tLW5hdicpO1xuICAgIGxldCBtZW51RHJvcGRvd249JCgnLmhwLWJuLW0tbWVudS1kcm9wZG93bicpO1xuICAgIGxldCBidXR0b25zPSQoJy5jYXRlZ29yeScpO1xuICAgIGxldCBzY3JvbGxwb3MgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgbGV0IGRpcmVjdGlvbiA9IGZhbHNlO1xuICAgIGxldCBuZXdzY3JvbGw9MDtcbiAgICBpZiAoIS9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBuZXdzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIGlmKG5ld3Njcm9sbCA+IHNjcm9sbHBvcyAmJiAhZGlyZWN0aW9uKXtcbiAgICAgICAgICB0d2l0dGVyQnV0dG9uLnN0b3AoKS5zbGlkZVRvZ2dsZShmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCgnLmhwLWJuLW0taGVhZGVyIGgyJykuY3NzKCdtYXJnaW5Cb3R0b20nLDApO1xuICAgICAgICAgICAgJCgnLmhwLWJuLW0tbmF2JykuYW5pbWF0ZSh7bWFyZ2luVG9wOjB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkaXJlY3Rpb24gID0gIWRpcmVjdGlvbiA7XG4gICAgICAgIH1lbHNlIGlmKG5ld3Njcm9sbCA9PSAwICYmIGRpcmVjdGlvbikge1xuICAgICAgICAgICQoJy5ocC1ibi1tLXR3aXR0ZXJfYnRuOmZpcnN0Jykuc3RvcCgpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgICAgJCgnLmhwLWJuLW0taGVhZGVyIGgyJykuY3NzKCdtYXJnaW5Cb3R0b20nLCcgMTIuNXB4Jyk7XG4gICAgICAgICAgJCgnLmhwLWJuLW0tbmF2JykuY3NzKCdtYXJnaW5Ub3AnLCcyNXB4Jyk7XG4gICAgICAgICAgZGlyZWN0aW9uID0gIWRpcmVjdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBzY3JvbGxwb3MgPSBuZXdzY3JvbGw7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgZmxhZz1mYWxzZTtcbiAgICAgICAgbWVudS5zaG93KCk7XG4gICAgICB9KTtcbiAgICAgICQoZG9jdW1lbnQpLm9uKFwic2Nyb2xsc3RvcFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBjdXJyZW50U2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICBpZihpc1Zpc2libGUoKSAmJiBjdXJyZW50U2Nyb2xsID4gMCB8fCBjdXJyZW50U2Nyb2xsID4gdGhpcy5wcmV2aW91c1Njcm9sbCkge1xuICAgICAgICAgIHR3aXR0ZXJCdXR0b24uYW5pbWF0ZSh7XG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBtZW51LmZhZGVPdXQoKTtcbiAgICAgICAgICBtZW51RHJvcGRvd24uaGlkZSgpO1xuICAgICAgICAgIGJ1dHRvbnMuaGlkZSgpO1xuICAgICAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudFNjcm9sbCA8IHRoaXMucHJldmlvdXNTY3JvbGwpIHtcbiAgICAgICAgICBtZW51LmZhZGVJbigpO1xuICAgICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNWaXNpYmxlKCkgJiYgY3VycmVudFNjcm9sbCA9PSAwKSB7XG4gICAgICAgICAgdHdpdHRlckJ1dHRvbi5hbmltYXRlKHtcbiAgICAgICAgICAgIGhlaWdodDogJzI2cHgnLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJldmlvdXNTY3JvbGwgPSBjdXJyZW50U2Nyb2xsO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzVmlzaWJsZSgpIHtcbiAgICAgIGlmICh0d2l0dGVyQnV0dG9uLmhlaWdodCgpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmbGFnID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmxhZyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFNjcm9sbDtcbiIsImNsYXNzIFNrcm9sbHIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgYnJlYWRjcnVtYnMgPSAkKCcuaHAtYm4tbS1icmVhZGNydW1icycpO1xuICAgIGxldCBzb2NpYWxfY29udGFpbmVyPSAkKCcuaHAtYm4tbS1zb2NpYWwtaWNvbnMnKTtcbiAgICB0aGlzLnNrcm9sbHIgPSBza3JvbGxyO1xuICAgIHRoaXMuc2tyb2xsci5pbml0KHtcbiAgICAgIGZvcmNlSGVpZ2h0OiBmYWxzZSxcbiAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYnJlYWRjcnVtYnMuaGFzQ2xhc3MoJ3Nrcm9sbGFibGUtYWZ0ZXInKSkge1xuICAgICAgICAgIGJyZWFkY3J1bWJzLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzb2NpYWxfY29udGFpbmVyLmhhc0NsYXNzKCdza3JvbGxhYmxlLWFmdGVyJykpIHtcbiAgICAgICAgICBzb2NpYWxfY29udGFpbmVyLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgdGhpcy5za3JvbGxyLmluaXQoKS5kZXN0cm95KCk7XG4gICAgfVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFNrcm9sbHI7XG4iXX0=
