$(document).ready(function(){var el=$('.nav');var el2=$('.nav2');var stickyNavTop=el.first().offset().top;var stickyNav=function(){var scrollTop=$(window).scrollTop();if(scrollTop>stickyNavTop){el.first().addClass('sticky');el2.first().addClass('sticky2');}else{el.first().removeClass('sticky');el2.first().removeClass('sticky2');}}
stickyNav();$(window).scroll(function(){stickyNav();})});