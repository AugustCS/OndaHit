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

	 $(".owl-carousel").owlCarousel({
	 	margin:5,
	 	loop:true,
	 	nav:true
	 });

	 function mostrardia(titulo,cuadro){
	 	$(titulo).click(function(){
	 		$(cuadro).toggle("fast");
	 	})
	 }
	
	mostrardia(".tite-lunes",".mos-lunes");
	mostrardia(".tite-martes",".mos-martes");
	mostrardia(".tite-miercoles",".mos-miercoles");
	mostrardia(".tite-jueves",".mos-jueves");
	mostrardia(".tite-viernes",".mos-viernes");
	mostrardia(".tite-sabado",".mos-sabado");
	mostrardia(".tite-domingo",".mos-domingo");

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