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
	$('ul.catalog__tabs').on('click', 'li:not(catalog__tab_active)', function() {
		$(this)
		  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	  });
});