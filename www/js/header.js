
$(function(){	
	$(".n").find(".li").each(function(i,ele){
		$(ele).hover(function(){
			$(this).addClass('now').siblings().removeClass("now");
			$(this).find(".xlk").stop().slideDown(500)			
		},function (){
			$(this).find(".xlk").stop().slideUp(500);
		});
	})
})
