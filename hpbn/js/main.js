!function n(o,e,i){function t(s,a){if(!e[s]){if(!o[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(r)return r(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var u=e[s]={exports:{}};o[s][0].call(u.exports,function(n){var e=o[s][1][n];return t(e?e:n)},u,u.exports,n,o,e,i)}return e[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)t(i[s]);return t}({1:[function(n,o,e){"use strict";function i(n){return n&&n.__esModule?n:{"default":n}}var t=n("./modules/nav"),r=i(t),s=n("./modules/navMobile"),a=i(s),l=n("./modules/scroll"),c=i(l),u=n("./modules/cookie"),d=i(u),f=n("./vendors/Skrollr"),h=i(f);$(function(){new d["default"],new r["default"],new a["default"],new c["default"],new h["default"]})},{"./modules/cookie":2,"./modules/nav":3,"./modules/navMobile":4,"./modules/scroll":5,"./vendors/Skrollr":6}],2:[function(n,o,e){"use strict";function i(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}var t=function r(){i(this,r);var n=$(".hp-bn-m-cookie"),o=$(".hp-bn-m-header"),e=$('[class*="hp-bn-p-"]');this.cookieButton=$("#btnCookie"),this.cookieButton.click(function(){localStorage.setItem("HP_BN_cookie","Accepted"),n.fadeOut(function(){o.removeClass("cookie"),e.removeClass("cookie")})}),$(document).ready(function(){localStorage.HP_BN_cookie||(n.show(),o.addClass("cookie"),e.addClass("cookie"))})};o.exports=t},{}],3:[function(n,o,e){"use strict";function i(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}var t=function r(){i(this,r),$(".link-container").hover(function(){var n=$(this);n.find(".hp-bn-m-menu-dropdown").toggle(),n.parents().find(".link-container").find("a:first").removeClass("active"),n.find("a:first").addClass("active")},function(){var n=$(this);n.parents().find(".link-container").find("a:first").addClass("active"),n.find(".hp-bn-m-menu-dropdown").toggle()})};o.exports=t},{}],4:[function(n,o,e){"use strict";function i(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}var t=function r(){i(this,r),this.menu=$(".menu li"),this.menu.click(function(){var n=$(this);n.siblings().removeClass("active"),n.addClass("active")}),$(".touch .search_submit").click(function(){$("input").toggle(),$(".hp-bn-m-header .text-center, .follow--twitter").toggle()}),$(".touch .hp-bn-m-nav a").click(function(){var n=$(this);n.siblings(".category").toggle(),n.siblings(".hp-bn-m-menu-dropdown").toggle(),n.parent("li").siblings().children(".hp-bn-m-menu-dropdown").hide(),n.parent("li").siblings().children(".category").hide()})};o.exports=t},{}],5:[function(n,o,e){"use strict";function i(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}var t=function r(){function n(){return o=0===e.height()?!1:!0}i(this,r);var o=!0;this.previousScroll=0;var e=$(".hp-bn-m-twitter_btn:first"),t=$(".touch .hp-bn-m-nav"),s=$(".hp-bn-m-menu-dropdown"),a=$(".category");$.mobile.loading().hide(),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?($(document).ready(function(){o=!1,t.show()}),$(document).on("scrollstop",function(){var i=$(window).scrollTop();(n()&&i>0||i>this.previousScroll)&&(e.animate({height:0,overflow:"hidden",display:"none"}),t.fadeOut(),s.hide(),a.hide(),o=!1),i<this.previousScroll&&(t.fadeIn(),o=!0),n()||0!=i||(e.animate({height:"26px",overflow:"hidden",display:"block"}),o=!0),this.previousScroll=i})):$(window).scroll(function(){var n=$(this).scrollTop();n>this.previousScroll&&e.animate({height:0,overflow:"hidden"},function(){$(".hp-bn-m-header h2").css("marginBottom",0),$(".hp-bn-m-nav").animate({marginTop:0}),e.remove()}),this.previousScroll=n})};o.exports=t},{}],6:[function(n,o,e){"use strict";function i(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}var t=function r(){i(this,r);var n=$(".hp-bn-m-breadcrumbs"),o=$(".hp-bn-m-social-icons");this.skrollr=skrollr,this.skrollr.init({forceHeight:!1,render:function(){n.hasClass("skrollable-after")&&n.addClass("fixed"),o.hasClass("skrollable-after")&&o.addClass("fixed")}}),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&this.skrollr.init().destroy()};o.exports=t},{}]},{},[1]);