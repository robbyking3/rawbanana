/*global $:false */

$(function() {
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
		if (currentSection == "#wedding") {
			$("ul.nav").addClass("dark");
		} else {
			$("ul.nav").removeClass("dark");
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


	L.mapbox.accessToken = 'pk.eyJ1Ijoicm9iYnlraW5nMyIsImEiOiJsNkRXdW1NIn0._YffoleW0ZBQP_BAJ59ADg';
	var map = L.mapbox.map('map', 'robbyking3.k6feo31l');

	// Open popup when user mouses over a marker
	// map.featureLayer.on('ready', function(e) {
	// 	var markers = [];
	// 	this.eachLayer(function(marker) { markers.push(marker); });
	// 	cycle(markers);
	// });

	// function cycle(markers) {
	// 	var i = 0;
	// 	function run() {
	// 		if (++i > markers.length - 1) i = 0;
	// 		map.setView(markers[i].getLatLng(), 12);
	// 		markers[i].openPopup();
	// 		window.setTimeout(run, 3000);
	// 	}
	// 	run();
	// }

});
