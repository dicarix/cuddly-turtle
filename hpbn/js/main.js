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

  $(function () {
    var category = $('.link-container').find('a:first.active');
    $('.link-container').hover(function () {
      category.removeClass('active');
      var $this = $(this);
      $this.find('.hp-bn-m-menu-dropdown').toggle();
      $this.find('a:first').addClass('active');
    }, function () {
      var $this = $(this);
      $this.find('a:first').removeClass('active');
      $this.find('.hp-bn-m-menu-dropdown').toggle();
      category.addClass('active');
    });
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
  $('.touch .search_submit').click(function (e) {
    e.preventDefault();
    var toggleWidth = $(".search_input").width() == 0 ? "78vw" : "0";
    if (toggleWidth == 0) {
      var params = {
        borderWidth: 0,
        width: toggleWidth
      };
    } else {
      var params = {
        borderWidth: 1,
        width: toggleWidth
      };
    }
    $('.search_input').animate(params);
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
  var socialIcons = $('.hp-bn-m-social-icons');
  var buttons = $('.category');
  var scrollpos = $(window).scrollTop();
  var direction = false;
  var newscroll = 0;
  if (!/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $(window).scroll(function () {
      newscroll = $(window).scrollTop();
      if (newscroll > scrollpos && !direction) {
        twitterButton.stop().slideToggle();
        $('.hp-bn-m-header h2').css('marginBottom', 0);
        $('.hp-bn-m-nav').animate({ marginTop: 0 }, { duration: 500, queue: false });
        $('.hp-bn-m-breadcrumbs.fixed').animate({ top: '140px' }, { duration: 500, queue: false });
        $('.hp-bn-m-breadcrumbs-container').animate({ top: '94px' }, { duration: 500, queue: false });
        //});
        direction = !direction;
      } else if (newscroll == 0 && direction) {
        $('.hp-bn-m-twitter_btn:first').slideToggle();
        $('.hp-bn-m-header h2').css('marginBottom', ' 12.5px');
        $('.hp-bn-m-nav').animate({ marginTop: '25px' }, { duration: 500, queue: false });
        $('.hp-bn-m-breadcrumbs.fixed').animate({ top: '192px' }, { duration: 500, queue: false });
        //});
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
        socialIcons.animate({ height: '114px' });
        menu.children('.menu').animate({ bottom: '-56px' }, 500);
        menuDropdown.hide();
        buttons.hide();
        flag = false;
      }
      if (currentScroll < this.previousScroll) {
        menu.children('.menu').animate({ bottom: 0 }, 500);
        flag = true;
      }
      if (!isVisible() && currentScroll == 0) {
        twitterButton.animate({
          height: '26px',
          overflow: 'hidden',
          display: 'block'
        });
        socialIcons.animate({ height: '140px' });

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
  this.skrollr = skrollr;
  this.skrollr.init({
    forceHeight: false,
    render: function render() {
      if (breadcrumbs.hasClass('skrollable-after')) {
        breadcrumbs.addClass('fixed');
      }
    }
  });
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    this.skrollr.init().destroy();
  }
};

module.exports = Skrollr;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGllZ29hYy9EZXNrdG9wL0NNUHJvamVjdHMvSFAtQnVzaW5lc3NOb3cvaHAtYnVzaW5lc3Mtbm93L2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi9tYWluLmpzIiwiL1VzZXJzL2RpZWdvYWMvRGVza3RvcC9DTVByb2plY3RzL0hQLUJ1c2luZXNzTm93L2hwLWJ1c2luZXNzLW5vdy9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvbW9kdWxlcy9jb29raWUuanMiLCIvVXNlcnMvZGllZ29hYy9EZXNrdG9wL0NNUHJvamVjdHMvSFAtQnVzaW5lc3NOb3cvaHAtYnVzaW5lc3Mtbm93L2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi9tb2R1bGVzL25hdi5qcyIsIi9Vc2Vycy9kaWVnb2FjL0Rlc2t0b3AvQ01Qcm9qZWN0cy9IUC1CdXNpbmVzc05vdy9ocC1idXNpbmVzcy1ub3cvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L21vZHVsZXMvbmF2TW9iaWxlLmpzIiwiL1VzZXJzL2RpZWdvYWMvRGVza3RvcC9DTVByb2plY3RzL0hQLUJ1c2luZXNzTm93L2hwLWJ1c2luZXNzLW5vdy9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvbW9kdWxlcy9zY3JvbGwuanMiLCIvVXNlcnMvZGllZ29hYy9EZXNrdG9wL0NNUHJvamVjdHMvSFAtQnVzaW5lc3NOb3cvaHAtYnVzaW5lc3Mtbm93L2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi92ZW5kb3JzL1Nrcm9sbHIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OzBCQ0FnQixlQUFlOzs7O2dDQUNULHFCQUFxQjs7Ozs2QkFDeEIsa0JBQWtCOzs7OzZCQUNsQixrQkFBa0I7Ozs7OEJBQ2pCLG1CQUFtQjs7Ozs7QUFFdkMsQ0FBQyxDQUFDLFlBQU07QUFDTixjQUFZLENBQUM7OztBQUdiLCtCQUFTLENBQUM7QUFDVixxQ0FBZSxDQUFDO0FBQ2hCLGtDQUFZLENBQUM7O0FBRWIsbUNBQWEsQ0FBQztDQUVmLENBQUMsQ0FBQzs7Ozs7OztJQ2hCRyxNQUFNLEdBQ0MsU0FEUCxNQUFNLEdBQ0c7d0JBRFQsTUFBTTs7QUFFUixNQUFJLGVBQWUsR0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN6QyxNQUFJLE1BQU0sR0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUNoQyxNQUFJLElBQUksR0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNsQyxNQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQzs7QUFFcEMsTUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsWUFBSTtBQUMxQixnQkFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUMsVUFBVSxDQUFDLENBQUM7QUFDaEQsbUJBQWUsQ0FBQyxPQUFPLENBQUMsWUFBSTtBQUMxQixZQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzdCLFVBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDNUIsQ0FBQyxDQUFDO0dBQ0osQ0FBQyxDQUFDO0FBQ0gsR0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFJO0FBQ3BCLFFBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEVBQUU7QUFDakMscUJBQWUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN2QixZQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzFCLFVBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDekI7R0FDRixDQUFDLENBQUE7Q0FDSDs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFDLE1BQU0sQ0FBQzs7Ozs7OztJQ3ZCaEIsR0FBRyxHQUNJLFNBRFAsR0FBRyxHQUNPO3dCQURWLEdBQUc7O0FBRUwsR0FBQyxDQUFDLFlBQVk7QUFDWixRQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUMzRCxLQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWTtBQUNyQyxjQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLFVBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNwQixXQUFLLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDOUMsV0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7S0FFMUMsRUFBRSxZQUFZO0FBQ2IsVUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BCLFdBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzVDLFdBQUssQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUM5QyxjQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzdCLENBQUMsQ0FBQztHQUNKLENBQUMsQ0FBQztDQUNKOztBQUdILE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDOzs7Ozs7O0lDcEJmLFNBQVMsR0FDRixTQURQLFNBQVMsR0FDQzt3QkFEVixTQUFTOztBQUdYLE1BQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzFCLE1BQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVk7QUFDMUIsUUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BCLFNBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdkMsU0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztHQUMxQixDQUFDLENBQUM7OztBQUdILEdBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtBQUM1QyxLQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsUUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDO0FBQ2pFLFFBQUcsV0FBVyxJQUFFLENBQUMsRUFBQztBQUNoQixVQUFJLE1BQU0sR0FBQztBQUNULG1CQUFXLEVBQUMsQ0FBQztBQUNiLGFBQUssRUFBQyxXQUFXO09BQ2xCLENBQUE7S0FDRixNQUFJO0FBQ0gsVUFBSSxNQUFNLEdBQUM7QUFDVCxtQkFBVyxFQUFDLENBQUM7QUFDYixhQUFLLEVBQUMsV0FBVztPQUNsQixDQUFBO0tBQ0Y7QUFDRCxLQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0dBQ3BDLENBQUMsQ0FBQzs7O0FBR0gsR0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVk7QUFDM0MsUUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BCLFNBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDckMsU0FBSyxDQUFDLFFBQVEsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2xELFNBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDeEUsU0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7R0FDNUQsQ0FBQyxDQUFDO0NBRUo7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7Ozs7Ozs7SUN2Q3JCLE1BQU0sR0FDQyxTQURQLE1BQU0sR0FDSTt3QkFEVixNQUFNOztBQUVSLE1BQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixNQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztBQUN4QixNQUFJLGFBQWEsR0FBRyxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQztBQUNwRCxNQUFJLElBQUksR0FBRyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUNwQyxNQUFJLFlBQVksR0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUM3QyxNQUFJLFdBQVcsR0FBRyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUM3QyxNQUFJLE9BQU8sR0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDM0IsTUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBQ3RDLE1BQUksU0FBUyxHQUFHLEtBQUssQ0FBQztBQUN0QixNQUFJLFNBQVMsR0FBQyxDQUFDLENBQUM7QUFDaEIsTUFBSSxDQUFDLDJEQUEyRCxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDMUYsS0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZO0FBQzNCLGVBQVMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDbEMsVUFBRyxTQUFTLEdBQUcsU0FBUyxJQUFJLENBQUMsU0FBUyxFQUFDO0FBQ3JDLHFCQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDakMsU0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUM5QyxTQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUN6RSxTQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxHQUFHLEVBQUUsT0FBTyxFQUFDLEVBQUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3hGLFNBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUMsRUFBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7O0FBRTdGLGlCQUFTLEdBQUksQ0FBQyxTQUFTLENBQUU7T0FDMUIsTUFBSyxJQUFHLFNBQVMsSUFBSSxDQUFDLElBQUksU0FBUyxFQUFFO0FBQ3BDLFNBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzVDLFNBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUMsU0FBUyxDQUFDLENBQUM7QUFDdEQsU0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsRUFBQyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDOUUsU0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsR0FBRyxFQUFFLE9BQU8sRUFBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzs7QUFFM0YsaUJBQVMsR0FBRyxDQUFDLFNBQVMsQ0FBQztPQUN4QjtBQUNELGVBQVMsR0FBRyxTQUFTLENBQUM7S0FDdkIsQ0FBQyxDQUFDO0dBQ0osTUFBTTtBQUNMLEtBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBVTtBQUMxQixVQUFJLEdBQUMsS0FBSyxDQUFDO0FBQ1gsVUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2IsQ0FBQyxDQUFDO0FBQ0gsS0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWTtBQUN2QyxVQUFJLGFBQWEsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDMUMsVUFBRyxTQUFTLEVBQUUsSUFBSSxhQUFhLEdBQUcsQ0FBQyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFO0FBQzFFLHFCQUFhLENBQUMsT0FBTyxDQUFDO0FBQ3BCLGdCQUFNLEVBQUUsQ0FBQztBQUNULGtCQUFRLEVBQUUsUUFBUTtBQUNsQixpQkFBTyxFQUFFLE1BQU07U0FDaEIsQ0FBQyxDQUFDO0FBQ0gsbUJBQVcsQ0FBQyxPQUFPLENBQUMsRUFBQyxNQUFNLEVBQUUsT0FBTyxFQUFDLENBQUMsQ0FBQztBQUN2QyxZQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLE1BQU0sRUFBQyxPQUFPLEVBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztBQUNyRCxvQkFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ3BCLGVBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNmLFlBQUksR0FBRyxLQUFLLENBQUM7T0FDZDtBQUNELFVBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7QUFDdkMsWUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLEVBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0MsWUFBSSxHQUFHLElBQUksQ0FBQztPQUNiO0FBQ0QsVUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLGFBQWEsSUFBSSxDQUFDLEVBQUU7QUFDdEMscUJBQWEsQ0FBQyxPQUFPLENBQUM7QUFDcEIsZ0JBQU0sRUFBRSxNQUFNO0FBQ2Qsa0JBQVEsRUFBRSxRQUFRO0FBQ2xCLGlCQUFPLEVBQUUsT0FBTztTQUNqQixDQUFDLENBQUM7QUFDSCxtQkFBVyxDQUFDLE9BQU8sQ0FBQyxFQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDOztBQUV2QyxZQUFJLEdBQUcsSUFBSSxDQUFDO09BQ2I7QUFDRCxVQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztLQUNyQyxDQUFDLENBQUM7R0FDSjtBQUNELFdBQVMsU0FBUyxHQUFHO0FBQ25CLFFBQUksYUFBYSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTtBQUNoQyxhQUFPLElBQUksR0FBRyxLQUFLLENBQUM7S0FDckIsTUFBTTtBQUNMLGFBQU8sSUFBSSxHQUFHLElBQUksQ0FBQztLQUNwQjtHQUNGO0NBQ0Y7O0FBRUgsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7Ozs7Ozs7SUM5RWxCLE9BQU8sR0FDQSxTQURQLE9BQU8sR0FDRzt3QkFEVixPQUFPOztBQUVULE1BQUksV0FBVyxHQUFHLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQzVDLE1BQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLE1BQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQ2hCLGVBQVcsRUFBRSxLQUFLO0FBQ2xCLFVBQU0sRUFBRSxrQkFBWTtBQUNsQixVQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsRUFBRTtBQUM1QyxtQkFBVyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztPQUMvQjtLQUNGO0dBQ0YsQ0FBQyxDQUFDO0FBQ0gsTUFBSSxnRUFBZ0UsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO0FBQzlGLFFBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7R0FDL0I7Q0FDRjs7QUFFSCxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgTmF2IGZyb20gXCIuL21vZHVsZXMvbmF2XCI7XG5pbXBvcnQgTmF2TW9iaWxlIGZyb20gXCIuL21vZHVsZXMvbmF2TW9iaWxlXCI7XG5pbXBvcnQgU2Nyb2xsIGZyb20gXCIuL21vZHVsZXMvc2Nyb2xsXCI7XG5pbXBvcnQgQ29va2llIGZyb20gXCIuL21vZHVsZXMvY29va2llXCI7XG5pbXBvcnQgU2tyb2xsciBmcm9tIFwiLi92ZW5kb3JzL1Nrcm9sbHJcIjtcbi8vIGpRdWVyeSBET00gUmVhZHlcbiQoKCkgPT4ge1xuICAndXNlIHN0cmljdCc7XG5cbi8vIEluaXRpYWxpemUgTW9kdWxlc1xuICBuZXcgTmF2KCk7XG4gIG5ldyBOYXZNb2JpbGUoKTtcbiAgbmV3IFNjcm9sbCgpO1xuICAvLyBJbml0aWFsaXplIFZlbmRvcnNcbiAgbmV3IFNrcm9sbHIoKTtcblxufSk7XG4iLCJjbGFzcyBDb29raWV7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgbGV0IGNvb2tpZUNvbnRhaW5lcj0kKCcuaHAtYm4tbS1jb29raWUnKTtcbiAgICBsZXQgaGVhZGVyPSQoJy5ocC1ibi1tLWhlYWRlcicpO1xuICAgIGxldCBwYWdlPSQoJ1tjbGFzcyo9XCJocC1ibi1wLVwiXScpO1xuICAgIHRoaXMuY29va2llQnV0dG9uID0gJCgnI2J0bkNvb2tpZScpO1xuXG4gICAgdGhpcy5jb29raWVCdXR0b24uY2xpY2soKCk9PntcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdIUF9CTl9jb29raWUnLCdBY2NlcHRlZCcpO1xuICAgICAgY29va2llQ29udGFpbmVyLmZhZGVPdXQoKCk9PntcbiAgICAgICAgaGVhZGVyLnJlbW92ZUNsYXNzKCdjb29raWUnKTtcbiAgICAgICAgcGFnZS5yZW1vdmVDbGFzcygnY29va2llJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICAkKGRvY3VtZW50KS5yZWFkeSgoKT0+e1xuICAgICAgaWYgKCFsb2NhbFN0b3JhZ2VbXCJIUF9CTl9jb29raWVcIl0pIHtcbiAgICAgICAgY29va2llQ29udGFpbmVyLnNob3coKTtcbiAgICAgICAgaGVhZGVyLmFkZENsYXNzKCdjb29raWUnKTtcbiAgICAgICAgcGFnZS5hZGRDbGFzcygnY29va2llJyk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxubW9kdWxlLmV4cG9ydHM9Q29va2llO1xuIiwiY2xhc3MgTmF2IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgJChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY2F0ZWdvcnkgPSAkKCcubGluay1jb250YWluZXInKS5maW5kKCdhOmZpcnN0LmFjdGl2ZScpO1xuICAgICAgJCgnLmxpbmstY29udGFpbmVyJykuaG92ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBjYXRlZ29yeS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICR0aGlzLmZpbmQoJy5ocC1ibi1tLW1lbnUtZHJvcGRvd24nKS50b2dnbGUoKTtcbiAgICAgICAgJHRoaXMuZmluZCgnYTpmaXJzdCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgICAkdGhpcy5maW5kKCdhOmZpcnN0JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkdGhpcy5maW5kKCcuaHAtYm4tbS1tZW51LWRyb3Bkb3duJykudG9nZ2xlKCk7XG4gICAgICAgIGNhdGVnb3J5LmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbn1cbm1vZHVsZS5leHBvcnRzID0gTmF2O1xuIiwiY2xhc3MgTmF2TW9iaWxlIHtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB0aGlzLm1lbnUgPSAkKCcubWVudSBsaScpO1xuICAgIHRoaXMubWVudS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgJHRoaXMuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkdGhpcy5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbi8vbW9iaWxlIGhlYWRlclxuICAgICQoJy50b3VjaCAuc2VhcmNoX3N1Ym1pdCcpLmNsaWNrKGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB2YXIgdG9nZ2xlV2lkdGggPSAkKFwiLnNlYXJjaF9pbnB1dFwiKS53aWR0aCgpID09IDAgPyBcIjc4dndcIiA6IFwiMFwiO1xuICAgICAgaWYodG9nZ2xlV2lkdGg9PTApe1xuICAgICAgICB2YXIgcGFyYW1zPXtcbiAgICAgICAgICBib3JkZXJXaWR0aDowLFxuICAgICAgICAgIHdpZHRoOnRvZ2dsZVdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1lbHNle1xuICAgICAgICB2YXIgcGFyYW1zPXtcbiAgICAgICAgICBib3JkZXJXaWR0aDoxLFxuICAgICAgICAgIHdpZHRoOnRvZ2dsZVdpZHRoXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICQoJy5zZWFyY2hfaW5wdXQnKS5hbmltYXRlKHBhcmFtcyk7XG4gICAgfSk7XG5cbi8vbW9iaWxlIGJvdHRvbSBuYXZhbHNcbiAgICAkKCcudG91Y2ggLmhwLWJuLW0tbmF2IGEnKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgICAgJHRoaXMuc2libGluZ3MoJy5jYXRlZ29yeScpLnRvZ2dsZSgpO1xuICAgICAgJHRoaXMuc2libGluZ3MoJy5ocC1ibi1tLW1lbnUtZHJvcGRvd24nKS50b2dnbGUoKTtcbiAgICAgICR0aGlzLnBhcmVudCgnbGknKS5zaWJsaW5ncygpLmNoaWxkcmVuKCcuaHAtYm4tbS1tZW51LWRyb3Bkb3duJykuaGlkZSgpO1xuICAgICAgJHRoaXMucGFyZW50KCdsaScpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5jYXRlZ29yeScpLmhpZGUoKTtcbiAgICB9KTtcblxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IE5hdk1vYmlsZTtcbiIsImNsYXNzIFNjcm9sbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBmbGFnID0gdHJ1ZTtcbiAgICB0aGlzLnByZXZpb3VzU2Nyb2xsID0gMDtcbiAgICBsZXQgdHdpdHRlckJ1dHRvbiA9ICQoJy5ocC1ibi1tLXR3aXR0ZXJfYnRuOmZpcnN0Jyk7XG4gICAgbGV0IG1lbnUgPSAkKCcudG91Y2ggLmhwLWJuLW0tbmF2Jyk7XG4gICAgbGV0IG1lbnVEcm9wZG93bj0kKCcuaHAtYm4tbS1tZW51LWRyb3Bkb3duJyk7XG4gICAgbGV0IHNvY2lhbEljb25zID0gJCgnLmhwLWJuLW0tc29jaWFsLWljb25zJyk7XG4gICAgbGV0IGJ1dHRvbnM9JCgnLmNhdGVnb3J5Jyk7XG4gICAgbGV0IHNjcm9sbHBvcyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICBsZXQgZGlyZWN0aW9uID0gZmFsc2U7XG4gICAgbGV0IG5ld3Njcm9sbD0wO1xuICAgIGlmICghL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5ld3Njcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgaWYobmV3c2Nyb2xsID4gc2Nyb2xscG9zICYmICFkaXJlY3Rpb24pe1xuICAgICAgICAgIHR3aXR0ZXJCdXR0b24uc3RvcCgpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuaHAtYm4tbS1oZWFkZXIgaDInKS5jc3MoJ21hcmdpbkJvdHRvbScsMCk7XG4gICAgICAgICAgICAkKCcuaHAtYm4tbS1uYXYnKS5hbmltYXRlKHttYXJnaW5Ub3A6MH0seyBkdXJhdGlvbjogNTAwLCBxdWV1ZTogZmFsc2UgfSk7XG4gICAgICAgICAgICAkKCcuaHAtYm4tbS1icmVhZGNydW1icy5maXhlZCcpLmFuaW1hdGUoe3RvcDogJzE0MHB4J30seyBkdXJhdGlvbjogNTAwLCBxdWV1ZTogZmFsc2UgfSk7XG4gICAgICAgICAgICAkKCcuaHAtYm4tbS1icmVhZGNydW1icy1jb250YWluZXInKS5hbmltYXRlKHt0b3A6ICc5NHB4J30seyBkdXJhdGlvbjogNTAwLCBxdWV1ZTogZmFsc2UgfSk7XG4gICAgICAgICAgLy99KTtcbiAgICAgICAgICBkaXJlY3Rpb24gID0gIWRpcmVjdGlvbiA7XG4gICAgICAgIH1lbHNlIGlmKG5ld3Njcm9sbCA9PSAwICYmIGRpcmVjdGlvbikge1xuICAgICAgICAgICQoJy5ocC1ibi1tLXR3aXR0ZXJfYnRuOmZpcnN0Jykuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgICAgICQoJy5ocC1ibi1tLWhlYWRlciBoMicpLmNzcygnbWFyZ2luQm90dG9tJywnIDEyLjVweCcpO1xuICAgICAgICAgICAgJCgnLmhwLWJuLW0tbmF2JykuYW5pbWF0ZSh7bWFyZ2luVG9wOicyNXB4J30seyBkdXJhdGlvbjogNTAwLCBxdWV1ZTogZmFsc2UgfSk7XG4gICAgICAgICAgICAkKCcuaHAtYm4tbS1icmVhZGNydW1icy5maXhlZCcpLmFuaW1hdGUoe3RvcDogJzE5MnB4J30sIHsgZHVyYXRpb246IDUwMCwgcXVldWU6IGZhbHNlIH0pO1xuICAgICAgICAgIC8vfSk7XG4gICAgICAgICAgZGlyZWN0aW9uID0gIWRpcmVjdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBzY3JvbGxwb3MgPSBuZXdzY3JvbGw7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgICAgICAgZmxhZz1mYWxzZTtcbiAgICAgICAgbWVudS5zaG93KCk7XG4gICAgICB9KTtcbiAgICAgICQoZG9jdW1lbnQpLm9uKFwic2Nyb2xsc3RvcFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBjdXJyZW50U2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICBpZihpc1Zpc2libGUoKSAmJiBjdXJyZW50U2Nyb2xsID4gMCB8fCBjdXJyZW50U2Nyb2xsID4gdGhpcy5wcmV2aW91c1Njcm9sbCkge1xuICAgICAgICAgIHR3aXR0ZXJCdXR0b24uYW5pbWF0ZSh7XG4gICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzb2NpYWxJY29ucy5hbmltYXRlKHtoZWlnaHQ6ICcxMTRweCd9KTtcbiAgICAgICAgICBtZW51LmNoaWxkcmVuKCcubWVudScpLmFuaW1hdGUoe2JvdHRvbTonLTU2cHgnfSw1MDApO1xuICAgICAgICAgIG1lbnVEcm9wZG93bi5oaWRlKCk7XG4gICAgICAgICAgYnV0dG9ucy5oaWRlKCk7XG4gICAgICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50U2Nyb2xsIDwgdGhpcy5wcmV2aW91c1Njcm9sbCkge1xuICAgICAgICAgIG1lbnUuY2hpbGRyZW4oJy5tZW51JykuYW5pbWF0ZSh7Ym90dG9tOjB9LDUwMCk7XG4gICAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc1Zpc2libGUoKSAmJiBjdXJyZW50U2Nyb2xsID09IDApIHtcbiAgICAgICAgICB0d2l0dGVyQnV0dG9uLmFuaW1hdGUoe1xuICAgICAgICAgICAgaGVpZ2h0OiAnMjZweCcsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc29jaWFsSWNvbnMuYW5pbWF0ZSh7aGVpZ2h0OiAnMTQwcHgnfSk7XG5cbiAgICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXZpb3VzU2Nyb2xsID0gY3VycmVudFNjcm9sbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpc1Zpc2libGUoKSB7XG4gICAgICBpZiAodHdpdHRlckJ1dHRvbi5oZWlnaHQoKSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmxhZyA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZsYWcgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBTY3JvbGw7XG4iLCJjbGFzcyBTa3JvbGxyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IGJyZWFkY3J1bWJzID0gJCgnLmhwLWJuLW0tYnJlYWRjcnVtYnMnKTtcbiAgICB0aGlzLnNrcm9sbHIgPSBza3JvbGxyO1xuICAgIHRoaXMuc2tyb2xsci5pbml0KHtcbiAgICAgIGZvcmNlSGVpZ2h0OiBmYWxzZSxcbiAgICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoYnJlYWRjcnVtYnMuaGFzQ2xhc3MoJ3Nrcm9sbGFibGUtYWZ0ZXInKSkge1xuICAgICAgICAgIGJyZWFkY3J1bWJzLmFkZENsYXNzKCdmaXhlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgdGhpcy5za3JvbGxyLmluaXQoKS5kZXN0cm95KCk7XG4gICAgfVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IFNrcm9sbHI7XG4iXX0=
