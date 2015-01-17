/*global $:false */

$(function() {

// my crappy modal
/*
	$('#registry-modal').on('click', function(e) {
		$('.overlay').show();
		e.preventDefault();
	});

	$('.overlay').on('click', function() {
		$(this).hide();
	});
	$('.modal').on('click', function(e) {
		e.stopPropagation();
	});
*/
// end modal

	$("title").text("Rob & Anna");

	// Create Sweet Typeography Elements
	$('.intro-text').bigtext();

	// Open Mobile menu
	$('.open-nav').on('click', function() {
		$('ul.nav').toggleClass('active');
	});
	// Set nav elements to active
	$('nav a').on('click', function() {
		$('nav a').parent().removeClass('active');
		$(this).parent().addClass('active');
		// change the nav theme when over light items
		if($(this).attr('href') === '#wedding') {
			$('nav').addClass('dark');
		} else {
			$('nav').removeClass('dark');
		}
	});

	//change the nav class when in the wedding section
	$('#nav-wrapper').on('activate.bs.scrollspy', function (e) {
		var currentSection = e.target.firstElementChild.hash;
		if (currentSection == '#wedding') {
			$('ul.nav').addClass('dark');
		} else {
			$('ul.nav').removeClass('dark');
		}
	});


	if(window.location.hash === '#wedding') {
		$('nav').addClass('dark');
	}

	// hash anchor scrolling
	$.localScroll({
	   target:'#my-container',
	   duration: 300,
	   onBefore: function(){
		$('nav').removeClass('active');
	   }
	});

	window.sr = new scrollReveal( { viewport: document.getElementById('my-container') } );

});
