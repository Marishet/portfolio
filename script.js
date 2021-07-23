$(document).ready(function(){
	$('#menu').click(function(){
		$(this).toggleclass('fa-times');
		$('header').toggleclass('toggle');
	});
	$(window).on('scroll load',function(){
		$('#menu').removeclass('fa-times');
		$('header').removeclass('toggle');
	})

//smooth scrolling

$('a[href*="#"]').on('click',function(e){
	e.preventdefault();

	$('html, body').animate({
		scrolltop:$($(this).attr('href')).offset().top,
	},
	  500,
	  'linear'
	);
});

});