$(document).ready(function() {
	'use strict';

	$(function(){
		$('#intro').css({'height':($(window).height())+'px','width':($(window).width())+'px'});
		$(window).resize(function(){
		$('#intro').css({'height':($(window).height())+'px','width':($(window).width())+'px'});
		});
	});

	if ($('.navbar-toggle:visible').length) {
		$('.navbar a').click(function () { $(".navbar-collapse").collapse("hide") });
	}

});

