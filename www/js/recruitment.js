$(function(){
	    var $point=$(".header ul span")
	    var $ul=$(".header ul")
		$ul.find("li").click(function(){		
	         var num=$(this).index();
			switch(num){
				case 0:$point.animate({left:20+"px"})
					    break;
                case 1:$point.animate({left:189+"px"})
                        break;
                case 2:$point.animate({left:390+"px"})
                        break;
                case 3:$point.animate({left:590+"px"})
                        break;
				default:;
			}
		})
		
		//实现banner模块，点击对应的工作，搜索框显示，并且点击搜索实现跳转
		!(function(){
			var $job=$(".banner .job li")
			var $text=$(".banner .search .text input")
			var $span=$(".banner span")
			$job.click(function(){
				if($(this).index()==0){
					$text.val("文职客服类")
					$span.click(function(){
						window.open('http://hr.zto.com/social/index.html')
					})
				}
				else if($(this).index()==1){
					$text.val("计算机与互联网类")
					$span.click(function(){
						window.open('http://hr.zto.com/social/index.html')
					})
				}
				else if($(this).index()==2){
					$text.val("专业类")
					$span.click(function(){
						window.open('http://hr.zto.com/social/index.html')
					})
				}
				else if($(this).index()==3){
					$text.val("基础类")
					$span.click(function(){
						window.open('http://hr.zto.com/social/index.html')
					})
				}
				else{
					$text.val("管培生")
					$span.click(function(){
						window.open('http://hr.zto.com/social/index.html')
					})
				}
			})
		})();
		
		//内容部分的现实隐藏
	!(function(){
		var $content=$(".content_wrap .content")
        var $bgc=$(".content_wrap .content .big .bgc")
        var $item=$(".content_wrap .content .big .item")
        var $big=$(".content_wrap .content .big");
		$big.hover(function () {
            $(this).find(".bgc").fadeIn(500).siblings().fadeOut()
        },function () {
            $(this).find(".item").fadeIn(500).siblings().fadeOut()
        })
	})();
      //视频部分
      !(function(){
          var $arr=$(".content_wrap .video .bg .arr")
		  var $vd=$(".content_wrap .video .bg .shipin #vd")
          var $ship=$(".content_wrap .video .bg .shipin")
          //实现箭头转四下，开始播放视频
          $arr.click(function(){
          	//设置箭头动画
          	$arr.css({
               "animation":"a 1s",
                "animation-iteration-count":2
			})
			  //实现把视频加载到页面
			  function fn() {
				  $arr.css("display","none")
                  var $video='<video id="vd" src="video/video.mp4" controls="controls" style="width:100%;height:100%;" autoplay></video>'
                  $ship.html($video)
              }
              var s=setTimeout(fn,2000)
          })
	  })();
	})
