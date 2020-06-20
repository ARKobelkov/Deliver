$(document).ready(function(){
	$('.home__carousel').slick({
		dots: true,
		speed: 1200,
		autoplay: true,
		autoplaySpeed: 5000,
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/previous.svg"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/next.svg"</button>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false
				}
			}
		]
	});
});