
	$(document).ready(function(){

		/*gnb*/
		$("#gnb > ul > li").hover(function(){
			$("#header .menu").addClass("active");
		},
		function(){
			$("#header .menu").removeClass("active");
		}
		);

		$("#gnb > ul > li > a").focusin(function(){
			$(this).parent().addClass("act");
		});
		$("#gnb li li:last-child a").focusout(function(){
			$(this).parent().parent().parent().removeClass("current")
		});
		$("#gnb > ul > li:first-child > a").focusin(function(){
			$("#header .menu").addClass("active");
		});	
		$("#gnb li:last-child li:last-child a").focusout(function(){
			$("#header .menu").removeClass("active");
		});	

		/*slider*/
		let pageN=0;

		$(".slider_moving li").eq(0).addClass("active");
		$(".control li").eq(0).addClass("on");

		$(".control li").click(function(e){
			e.preventDefault();
			pageN=$(this).index();

			sliderInter();

		});
		$(".direction a.right").click(function(e){
			e.preventDefault();

			if(pageN < 3){
				pageN=pageN+1;
			}
			else{
				pageN=0;
			}
			sliderInter();
		});
		$(".direction a.left").click(function(e){
			e.preventDefault();

			if(pageN > 0){
				pageN=pageN-1;
			}
			else{
				pageN=3;
			}
			sliderInter();
		});
		
		function sliderInter(){
			$(".control li").removeClass("on");
			$(".control li").eq(pageN).addClass("on");
			$(".slider_moving li").removeClass("active");
			$(".slider_moving li").eq(pageN).addClass("active");
		}



		
	});
