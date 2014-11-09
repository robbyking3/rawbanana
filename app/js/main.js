$(".intro-text").bigtext();

$(".open-nav").on("click", function() {
	$("nav").toggleClass("active");
});

window.sr = new scrollReveal( { viewport: document.getElementById('my-container') } );