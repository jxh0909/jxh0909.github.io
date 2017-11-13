$(function(){
	$(window).scroll(function(){
		if($("body").scrollTop()>500){
             $(".scrollTop_wrap").fadeIn().css({bottom:160+"px","opacity":1})      
		}
		else{
			$(".scrollTop_wrap").fadeOut();
		}
	})
	$(".scrollTop_wrap").click(function(){
		$(this).animate({bottom:1000+"px"},3000)
		$("body").animate({scrollTop:0},1000);
	})
})

