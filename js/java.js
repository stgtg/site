$(function (){
	
	$('.slider__inner').slick({
dots:true,
arrows:false,
autoplay:true,
autoplaySpeed:3000,

});


$('.nav-toggle').on('click',function(){
	// $('html').toggleClass('no-scroll');
	$('.menu__list').toggleClass('nav-toggle--activ');
	$('.bar-top').toggleClass('bar-top--activ');
	$('.bar-mid').toggleClass('bar-mid--activ');
	$('.bar-bot').toggleClass('bar-bot--activ');
});
});






		
// $(function(){
// 	// var mixer = mixitup('.portfolio__content');
// 	$('.slider__inner').slick({
// 		dots:true,
// 		// prevArrow:'<button class = "slick-prev"><img src="./imagis/arrow-left.svg"></button>',
// 		// nextArrow:'<button class = "slick-next"><img src="./imagis/arrow-right.svg"></button>',
// });
// });


