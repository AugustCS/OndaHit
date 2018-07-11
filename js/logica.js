$(document).ready(function(){
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    loop:"true",
	    pagination: '.swiper-pagination',
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	    scrollbar: '.swiper-scrollbar',
    	autoplay:3000,
    }) 

});

$(window).scroll(function() {
	var scroll = $(this).scrollTop();
	/*console.log(scroll);*/

	if(scroll>200){
		$(".box-header-fixed").fadeIn("fast");
	}else{
		$(".box-header-fixed").fadeOut("fast");

	}
});