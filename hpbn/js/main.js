!function n(o,e,t){function i(s,a){if(!e[s]){if(!o[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(r)return r(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var u=e[s]={exports:{}};o[s][0].call(u.exports,function(n){var e=o[s][1][n];return i(e?e:n)},u,u.exports,n,o,e,t)}return e[s].exports}for(var r="function"==typeof require&&require,s=0;s<t.length;s++)i(t[s]);return i}({1:[function(n,o,e){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var i=n("./modules/nav"),r=t(i),s=n("./modules/navMobile"),a=t(s),l=n("./modules/scroll"),c=t(l),u=n("./modules/cookie"),d=(t(u),n("./vendors/Skrollr")),f=t(d);$(function(){new r["default"],new a["default"],new c["default"],new f["default"]})},{"./modules/cookie":2,"./modules/nav":3,"./modules/navMobile":4,"./modules/scroll":5,"./vendors/Skrollr":6}],2:[function(n,o,e){"use strict";function t(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}var i=function r(){t(this,r);var n=$(".hp-bn-m-cookie"),o=$(".hp-bn-m-header"),e=$('[class*="hp-bn-p-"]');this.cookieButton=$("#btnCookie"),this.cookieButton.click(function(){localStorage.setItem("HP_BN_cookie","Accepted"),n.fadeOut(function(){o.removeClass("cookie"),e.removeClass("cookie")})}),$(document).ready(function(){localStorage.HP_BN_cookie||(n.show(),o.addClass("cookie"),e.addClass("cookie"))})};o.exports=i},{}],3:[function(n,o,e){"use strict";function t(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}var i=function r(){t(this,r),$(".link-container").hover(function(){var n=$(this);n.find(".hp-bn-m-menu-dropdown").toggle(),n.parents().find(".link-container").find("a:first").removeClass("active"),n.find("a:first").addClass("active")},function(){var n=$(this);n.parents().find(".link-container").find("a:first").addClass("active"),n.find(".hp-bn-m-menu-dropdown").toggle()})};o.exports=i},{}],4:[function(n,o,e){"use strict";function t(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}var i=function r(){t(this,r),this.menu=$(".menu li"),this.menu.click(function(){var n=$(this);n.siblings().removeClass("active"),n.addClass("active")}),$(".touch .search_submit").click(function(){$("input").toggle(),$(".hp-bn-m-header .text-center, .follow--twitter").toggle()}),$(".touch .hp-bn-m-nav a").click(function(){var n=$(this);n.siblings(".category").toggle(),n.siblings(".hp-bn-m-menu-dropdown").toggle(),n.parent("li").siblings().children(".hp-bn-m-menu-dropdown").hide(),n.parent("li").siblings().children(".category").hide()})};o.exports=i},{}],5:[function(n,o,e){"use strict";function t(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}var i=function r(){function n(){return o=0===e.height()?!1:!0}t(this,r);var o=!0;this.previousScroll=0;var e=$(".hp-bn-m-twitter_btn:first"),i=$(".touch .hp-bn-m-nav"),s=$(".hp-bn-m-menu-dropdown"),a=$(".category"),l=$(window).scrollTop(),c=!1,u=0;/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?($(document).ready(function(){o=!1,i.show()}),$(document).on("scrollstop",function(){var t=$(window).scrollTop();(n()&&t>0||t>this.previousScroll)&&(e.animate({height:0,overflow:"hidden",display:"none"}),i.fadeOut(),s.hide(),a.hide(),o=!1),t<this.previousScroll&&(i.fadeIn(),o=!0),n()||0!=t||(e.animate({height:"26px",overflow:"hidden",display:"block"}),o=!0),this.previousScroll=t})):$(window).scroll(function(){u=$(window).scrollTop(),u>l&&!c?(e.stop().slideToggle(function(){$(".hp-bn-m-header h2").css("marginBottom",0),$(".hp-bn-m-nav").animate({marginTop:0})}),c=!c):0==u&&c&&($(".hp-bn-m-twitter_btn:first").stop().slideToggle(),$(".hp-bn-m-header h2").css("marginBottom"," 12.5px"),$(".hp-bn-m-nav").css("marginTop","25px"),c=!c),l=u})};o.exports=i},{}],6:[function(n,o,e){"use strict";function t(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}var i=function r(){t(this,r);var n=$(".hp-bn-m-breadcrumbs"),o=$(".hp-bn-m-social-icons");this.skrollr=skrollr,this.skrollr.init({forceHeight:!1,render:function(){n.hasClass("skrollable-after")&&n.addClass("fixed"),o.hasClass("skrollable-after")&&o.addClass("fixed")}}),/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&this.skrollr.init().destroy()};o.exports=i},{}]},{},[1]);