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
        menu.children('.menu').animate({ bottom: '-56px' }, 1000);
        //menu.fadeOut();
        menuDropdown.hide();
        buttons.hide();
        flag = false;
      }
      if (currentScroll < this.previousScroll) {
        menu.children('.menu').animate({ bottom: 0 }, 1000);
        //menu.fadeIn();
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGllZ29hYy9EZXNrdG9wL0NNUHJvamVjdHMvSFAtQnVzaW5lc3NOb3cvaHAtYnVzaW5lc3Mtbm93L2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi9tYWluLmpzIiwiL1VzZXJzL2RpZWdvYWMvRGVza3RvcC9DTVByb2plY3RzL0hQLUJ1c2luZXNzTm93L2hwLWJ1c2luZXNzLW5vdy9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvbW9kdWxlcy9jb29raWUuanMiLCIvVXNlcnMvZGllZ29hYy9EZXNrdG9wL0NNUHJvamVjdHMvSFAtQnVzaW5lc3NOb3cvaHAtYnVzaW5lc3Mtbm93L2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi9tb2R1bGVzL25hdi5qcyIsIi9Vc2Vycy9kaWVnb2FjL0Rlc2t0b3AvQ01Qcm9qZWN0cy9IUC1CdXNpbmVzc05vdy9ocC1idXNpbmVzcy1ub3cvZnJvbnRlbmQvYXBwL3NjcmlwdHMvZXM2L21vZHVsZXMvbmF2TW9iaWxlLmpzIiwiL1VzZXJzL2RpZWdvYWMvRGVza3RvcC9DTVByb2plY3RzL0hQLUJ1c2luZXNzTm93L2hwLWJ1c2luZXNzLW5vdy9mcm9udGVuZC9hcHAvc2NyaXB0cy9lczYvbW9kdWxlcy9zY3JvbGwuanMiLCIvVXNlcnMvZGllZ29hYy9EZXNrdG9wL0NNUHJvamVjdHMvSFAtQnVzaW5lc3NOb3cvaHAtYnVzaW5lc3Mtbm93L2Zyb250ZW5kL2FwcC9zY3JpcHRzL2VzNi92ZW5kb3JzL1Nrcm9sbHIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OzBCQ0FnQixlQUFlOzs7O2dDQUNULHFCQUFxQjs7Ozs2QkFDeEIsa0JBQWtCOzs7OzZCQUNsQixrQkFBa0I7Ozs7OEJBQ2pCLG1CQUFtQjs7Ozs7QUFFdkMsQ0FBQyxDQUFDLFlBQU07QUFDTixjQUFZLENBQUM7OztBQUdiLCtC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OiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBOYXYgZnJvbSBcIi4vbW9kdWxlcy9uYXZcIjtcbmltcG9ydCBOYXZNb2JpbGUgZnJvbSBcIi4vbW9kdWxlcy9uYXZNb2JpbGVcIjtcbmltcG9ydCBTY3JvbGwgZnJvbSBcIi4vbW9kdWxlcy9zY3JvbGxcIjtcbmltcG9ydCBDb29raWUgZnJvbSBcIi4vbW9kdWxlcy9jb29raWVcIjtcbmltcG9ydCBTa3JvbGxyIGZyb20gXCIuL3ZlbmRvcnMvU2tyb2xsclwiO1xuLy8galF1ZXJ5IERPTSBSZWFkeVxuJCgoKSA9PiB7XG4gICd1c2Ugc3RyaWN0JztcblxuLy8gSW5pdGlhbGl6ZSBNb2R1bGVzXG4gIG5ldyBOYXYoKTtcbiAgbmV3IE5hdk1vYmlsZSgpO1xuICBuZXcgU2Nyb2xsKCk7XG4gIC8vIEluaXRpYWxpemUgVmVuZG9yc1xuICBuZXcgU2tyb2xscigpO1xuXG59KTtcbiIsImNsYXNzIENvb2tpZXtcbiAgY29uc3RydWN0b3IoKXtcbiAgICBsZXQgY29va2llQ29udGFpbmVyPSQoJy5ocC1ibi1tLWNvb2tpZScpO1xuICAgIGxldCBoZWFkZXI9JCgnLmhwLWJuLW0taGVhZGVyJyk7XG4gICAgbGV0IHBhZ2U9JCgnW2NsYXNzKj1cImhwLWJuLXAtXCJdJyk7XG4gICAgdGhpcy5jb29raWVCdXR0b24gPSAkKCcjYnRuQ29va2llJyk7XG5cbiAgICB0aGlzLmNvb2tpZUJ1dHRvbi5jbGljaygoKT0+e1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0hQX0JOX2Nvb2tpZScsJ0FjY2VwdGVkJyk7XG4gICAgICBjb29raWVDb250YWluZXIuZmFkZU91dCgoKT0+e1xuICAgICAgICBoZWFkZXIucmVtb3ZlQ2xhc3MoJ2Nvb2tpZScpO1xuICAgICAgICBwYWdlLnJlbW92ZUNsYXNzKCdjb29raWUnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgICQoZG9jdW1lbnQpLnJlYWR5KCgpPT57XG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZVtcIkhQX0JOX2Nvb2tpZVwiXSkge1xuICAgICAgICBjb29raWVDb250YWluZXIuc2hvdygpO1xuICAgICAgICBoZWFkZXIuYWRkQ2xhc3MoJ2Nvb2tpZScpO1xuICAgICAgICBwYWdlLmFkZENsYXNzKCdjb29raWUnKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5tb2R1bGUuZXhwb3J0cz1Db29raWU7XG4iLCJjbGFzcyBOYXYge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAkKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjYXRlZ29yeSA9ICQoJy5saW5rLWNvbnRhaW5lcicpLmZpbmQoJ2E6Zmlyc3QuYWN0aXZlJyk7XG4gICAgICAkKCcubGluay1jb250YWluZXInKS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhdGVnb3J5LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgJHRoaXMuZmluZCgnLmhwLWJuLW0tbWVudS1kcm9wZG93bicpLnRvZ2dsZSgpO1xuICAgICAgICAkdGhpcy5maW5kKCdhOmZpcnN0JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAgICR0aGlzLmZpbmQoJ2E6Zmlyc3QnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICR0aGlzLmZpbmQoJy5ocC1ibi1tLW1lbnUtZHJvcGRvd24nKS50b2dnbGUoKTtcbiAgICAgICAgY2F0ZWdvcnkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxufVxubW9kdWxlLmV4cG9ydHMgPSBOYXY7XG4iLCJjbGFzcyBOYXZNb2JpbGUge1xuICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIHRoaXMubWVudSA9ICQoJy5tZW51IGxpJyk7XG4gICAgdGhpcy5tZW51LmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAkdGhpcy5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICR0aGlzLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuLy9tb2JpbGUgaGVhZGVyXG4gICAgJCgnLnRvdWNoIC5zZWFyY2hfc3VibWl0JykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciB0b2dnbGVXaWR0aCA9ICQoXCIuc2VhcmNoX2lucHV0XCIpLndpZHRoKCkgPT0gMCA/IFwiNzh2d1wiIDogXCIwXCI7XG4gICAgICBpZih0b2dnbGVXaWR0aD09MCl7XG4gICAgICAgIHZhciBwYXJhbXM9e1xuICAgICAgICAgIGJvcmRlcldpZHRoOjAsXG4gICAgICAgICAgd2lkdGg6dG9nZ2xlV2lkdGhcbiAgICAgICAgfVxuICAgICAgfWVsc2V7XG4gICAgICAgIHZhciBwYXJhbXM9e1xuICAgICAgICAgIGJvcmRlcldpZHRoOjEsXG4gICAgICAgICAgd2lkdGg6dG9nZ2xlV2lkdGhcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJCgnLnNlYXJjaF9pbnB1dCcpLmFuaW1hdGUocGFyYW1zKTtcbiAgICB9KTtcblxuLy9tb2JpbGUgYm90dG9tIG5hdmFsc1xuICAgICQoJy50b3VjaCAuaHAtYm4tbS1uYXYgYScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgICAkdGhpcy5zaWJsaW5ncygnLmNhdGVnb3J5JykudG9nZ2xlKCk7XG4gICAgICAkdGhpcy5zaWJsaW5ncygnLmhwLWJuLW0tbWVudS1kcm9wZG93bicpLnRvZ2dsZSgpO1xuICAgICAgJHRoaXMucGFyZW50KCdsaScpLnNpYmxpbmdzKCkuY2hpbGRyZW4oJy5ocC1ibi1tLW1lbnUtZHJvcGRvd24nKS5oaWRlKCk7XG4gICAgICAkdGhpcy5wYXJlbnQoJ2xpJykuc2libGluZ3MoKS5jaGlsZHJlbignLmNhdGVnb3J5JykuaGlkZSgpO1xuICAgIH0pO1xuXG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gTmF2TW9iaWxlO1xuIiwiY2xhc3MgU2Nyb2xsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IGZsYWcgPSB0cnVlO1xuICAgIHRoaXMucHJldmlvdXNTY3JvbGwgPSAwO1xuICAgIGxldCB0d2l0dGVyQnV0dG9uID0gJCgnLmhwLWJuLW0tdHdpdHRlcl9idG46Zmlyc3QnKTtcbiAgICBsZXQgbWVudSA9ICQoJy50b3VjaCAuaHAtYm4tbS1uYXYnKTtcbiAgICBsZXQgbWVudURyb3Bkb3duPSQoJy5ocC1ibi1tLW1lbnUtZHJvcGRvd24nKTtcbiAgICBsZXQgc29jaWFsSWNvbnMgPSAkKCcuaHAtYm4tbS1zb2NpYWwtaWNvbnMnKTtcbiAgICBsZXQgYnV0dG9ucz0kKCcuY2F0ZWdvcnknKTtcbiAgICBsZXQgc2Nyb2xscG9zID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgIGxldCBkaXJlY3Rpb24gPSBmYWxzZTtcbiAgICBsZXQgbmV3c2Nyb2xsPTA7XG4gICAgaWYgKCEvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbmV3c2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICBpZihuZXdzY3JvbGwgPiBzY3JvbGxwb3MgJiYgIWRpcmVjdGlvbil7XG4gICAgICAgICAgdHdpdHRlckJ1dHRvbi5zdG9wKCkuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgICAgICQoJy5ocC1ibi1tLWhlYWRlciBoMicpLmNzcygnbWFyZ2luQm90dG9tJywwKTtcbiAgICAgICAgICAgICQoJy5ocC1ibi1tLW5hdicpLmFuaW1hdGUoe21hcmdpblRvcDowfSx7IGR1cmF0aW9uOiA1MDAsIHF1ZXVlOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICQoJy5ocC1ibi1tLWJyZWFkY3J1bWJzLmZpeGVkJykuYW5pbWF0ZSh7dG9wOiAnMTQwcHgnfSx7IGR1cmF0aW9uOiA1MDAsIHF1ZXVlOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICQoJy5ocC1ibi1tLWJyZWFkY3J1bWJzLWNvbnRhaW5lcicpLmFuaW1hdGUoe3RvcDogJzk0cHgnfSx7IGR1cmF0aW9uOiA1MDAsIHF1ZXVlOiBmYWxzZSB9KTtcbiAgICAgICAgICAvL30pO1xuICAgICAgICAgIGRpcmVjdGlvbiAgPSAhZGlyZWN0aW9uIDtcbiAgICAgICAgfWVsc2UgaWYobmV3c2Nyb2xsID09IDAgJiYgZGlyZWN0aW9uKSB7XG4gICAgICAgICAgJCgnLmhwLWJuLW0tdHdpdHRlcl9idG46Zmlyc3QnKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICAgICAgJCgnLmhwLWJuLW0taGVhZGVyIGgyJykuY3NzKCdtYXJnaW5Cb3R0b20nLCcgMTIuNXB4Jyk7XG4gICAgICAgICAgICAkKCcuaHAtYm4tbS1uYXYnKS5hbmltYXRlKHttYXJnaW5Ub3A6JzI1cHgnfSx7IGR1cmF0aW9uOiA1MDAsIHF1ZXVlOiBmYWxzZSB9KTtcbiAgICAgICAgICAgICQoJy5ocC1ibi1tLWJyZWFkY3J1bWJzLmZpeGVkJykuYW5pbWF0ZSh7dG9wOiAnMTkycHgnfSwgeyBkdXJhdGlvbjogNTAwLCBxdWV1ZTogZmFsc2UgfSk7XG4gICAgICAgICAgLy99KTtcbiAgICAgICAgICBkaXJlY3Rpb24gPSAhZGlyZWN0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHNjcm9sbHBvcyA9IG5ld3Njcm9sbDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICBmbGFnPWZhbHNlO1xuICAgICAgICBtZW51LnNob3coKTtcbiAgICAgIH0pO1xuICAgICAgJChkb2N1bWVudCkub24oXCJzY3JvbGxzdG9wXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGN1cnJlbnRTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIGlmKGlzVmlzaWJsZSgpICYmIGN1cnJlbnRTY3JvbGwgPiAwIHx8IGN1cnJlbnRTY3JvbGwgPiB0aGlzLnByZXZpb3VzU2Nyb2xsKSB7XG4gICAgICAgICAgdHdpdHRlckJ1dHRvbi5hbmltYXRlKHtcbiAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNvY2lhbEljb25zLmFuaW1hdGUoe2hlaWdodDogJzExNHB4J30pO1xuICAgICAgICAgIG1lbnUuY2hpbGRyZW4oJy5tZW51JykuYW5pbWF0ZSh7Ym90dG9tOictNTZweCd9LDEwMDApO1xuICAgICAgICAgIC8vbWVudS5mYWRlT3V0KCk7XG4gICAgICAgICAgbWVudURyb3Bkb3duLmhpZGUoKTtcbiAgICAgICAgICBidXR0b25zLmhpZGUoKTtcbiAgICAgICAgICBmbGFnID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1cnJlbnRTY3JvbGwgPCB0aGlzLnByZXZpb3VzU2Nyb2xsKSB7XG4gICAgICAgICAgbWVudS5jaGlsZHJlbignLm1lbnUnKS5hbmltYXRlKHtib3R0b206MH0sMTAwMCk7XG4gICAgICAgICAgLy9tZW51LmZhZGVJbigpO1xuICAgICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNWaXNpYmxlKCkgJiYgY3VycmVudFNjcm9sbCA9PSAwKSB7XG4gICAgICAgICAgdHdpdHRlckJ1dHRvbi5hbmltYXRlKHtcbiAgICAgICAgICAgIGhlaWdodDogJzI2cHgnLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHNvY2lhbEljb25zLmFuaW1hdGUoe2hlaWdodDogJzE0MHB4J30pO1xuXG4gICAgICAgICAgZmxhZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmV2aW91c1Njcm9sbCA9IGN1cnJlbnRTY3JvbGw7XG4gICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNWaXNpYmxlKCkge1xuICAgICAgaWYgKHR3aXR0ZXJCdXR0b24uaGVpZ2h0KCkgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZsYWcgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmbGFnID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gU2Nyb2xsO1xuIiwiY2xhc3MgU2tyb2xsciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBicmVhZGNydW1icyA9ICQoJy5ocC1ibi1tLWJyZWFkY3J1bWJzJyk7XG4gICAgdGhpcy5za3JvbGxyID0gc2tyb2xscjtcbiAgICB0aGlzLnNrcm9sbHIuaW5pdCh7XG4gICAgICBmb3JjZUhlaWdodDogZmFsc2UsXG4gICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGJyZWFkY3J1bWJzLmhhc0NsYXNzKCdza3JvbGxhYmxlLWFmdGVyJykpIHtcbiAgICAgICAgICBicmVhZGNydW1icy5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICgvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgIHRoaXMuc2tyb2xsci5pbml0KCkuZGVzdHJveSgpO1xuICAgIH1cbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBTa3JvbGxyO1xuIl19
