window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.home__nav'),
    menuItem = document.querySelectorAll('.home__item'),
    hamburger = document.querySelector('.home__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('home__hamburger_active');
        menu.classList.toggle('home__nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('home__hamburger_active');
            menu.classList.toggle('home__nav_active');
        })
    })
})
$(document).ready(function(){
	$('.home__carousel').slick({
		dots: true,
		speed: 1200,
		autoplay: true,
		autoplaySpeed: 5000,
		prevArrow: '<button type="button" class="home__slick home__prev"><img src="icons/previous.svg"></button>',
		nextArrow: '<button type="button" class="home__slick home__next"><img src="icons/next.svg"</button>',
		appendArrows: '.home',
		appendDots: '.home',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: false
				}
			}
		]
	});
	$('ul.catalog__tabs').on('click', 'li:not(catalog__tab_active)', function() {
		$(this)
		  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		  .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	  });
});
