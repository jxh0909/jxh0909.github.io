$(function(){
	$(".header").load("header.html");
	$(".footer").load("footer.html");
     !(function(){
		var num=0;
		var isTure=true;
		var $banner=$(".banner_box").find(".banner");
		/*设置轮播图淡入淡出形式轮播*/
		  function fadetoggle(){
		  	$banner.eq(num).fadeIn().siblings().fadeOut(function(){
		  		isTure==true;
		  	});
		  }
		  /*开始轮播*/
		    function numadd() {
            if(num>4){
                num=0;
            }
            if(num<0){ num="4" }="" fadetoggle();="" num++;="" var="" interval="setInterval(numadd,2000);" *如果点击prev箭头，则轮播前一张*="" $(".prev").click(function="" ()="" {="" if(isture="=true){" isture="false" clearinterval(interval);="" console.log(num)="" num--;="" if(num<0){="" })="" *如果点击next箭头，则轮播后一张*="" $(".next").click(function="" numadd();="" })();="" 内容部分，最后一部分，公司动态部分的轮播图="" !(function(){="" $imgs="$(".introduce" .banner="" .images").find("img");="" $lis="$(".introduce" .point").find("li");="" function="" fadeinout(){="" $imgs.eq(num).fadein().siblings().fadeout();="" $lis.eq(num).addclass("now").siblings().removeclass("now");="" if(num="">5){
				num=0;
			}
		}
		var interval=setInterval(fadeInOut,2000);
	})();
	//运单查询部分单号检测
	!(function(){
		
		var $text=$(".banner_wrap .search .content textarea");
		var $sure=$(".banner_wrap .search .content .btn .sure");
		$sure.click(function(){
			var odd_number=$text.val();
			var num=/[0-9]{12}/;
			if(num.test(odd_number)){
				window.open("./kuaidi.html?type="+odd_number)
			}else{
				alert("请输入12位数字")
			}						
		})
	})()
    //城市联动部分
    !(function(){
        var $lis=$(".center1 li");
        var $ld=$("#ld");
        var $arrow=$("#arrow")
		var $chaohao=$("#chahao")
		var $reMen_li=$("#hC li")
		var $city2=$("#city2")
		var $remen=$("#jxh_remen")
        $lis.click(function(){
        	//点击到哪个li给哪个li添加样式
         $(this).addClass("curr").siblings().removeClass("curr");

		})
        $arrow.click(function(){
            $ld.css({
                "z-index":"39",
                "display":"block"
            })
        })
		//点击差号，城市部分隐藏
		$chaohao.click(function(){
            $ld.css({
                "display":"none"
            })
            $("#hC").css({
                "display":"none"
            })
		})
	//	点击热门下的哪个城市，value值显示哪个城市
        $reMen_li.click(function(){
        	var $text=$(this).html()
            $city2.val($text)
		})
	//	点击热门的时候出现下拉框
        $remen.click(function(){
        	$("#hC").css({
                "display":"block"
            })
		})
	})();
//    调试插件部分
        $("#juti").click(function(){
            $(".motai").css({"display":"block"})
            $("#ld").css({"display":"none"})
        })
        $("#city").click(function (e) {
            SelCity(this,e);
        });
        $("#city").keydown(function (event) {
            if(event.keyCode==13){
                $(".motai").css({"display":"none"});
                $("._citys").css({"display":"none"})
                var $text=$("#city").val()
                $("#city2").val($text)
                $("#city").val("")
            }
        })
})</0){>