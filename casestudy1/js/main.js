
	$(document).ready(function(){

		/*gnb*/
		$("#gnb > ul > li").hover(function(){
			$("#header .menu").addClass("active");
		},
		function(){
			$("#header .menu").removeClass("active");
		}
		);

		/*focus*/
		$("#gnb > ul > li > a").focusin(function(){
			$(this).parent().addClass("act");
		});
		$("#gnb li li:last-child a").focusout(function(){
			$(this).parent().parent().parent().removeClass("act");
		});
		$("#gnb > ul > li:first-child > a").focusin(function(){
			$("#header .menu").addClass("active");
		});	
		$("#gnb li:last-child li:last-child a").focusout(function(){
			$("#header .menu").removeClass("active");
		});
		

		/*slider*/
	
		const mainSwiper = new Swiper(".mainSwiper", {
			spaceBetween: 30,
			loop: true,
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			}
		  });
		
		function sliderInter(){
			$(".control li").removeClass("on");
			$(".control li").eq(pageN).addClass("on");
			$(".slider_moving li").removeClass("active");
			$(".slider_moving li").eq(pageN).addClass("active");
		}



		
	});
