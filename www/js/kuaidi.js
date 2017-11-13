           //引入头部，脚部
            $(".header").load("header.html");
	        $(".footer").load("footer.html");
	         //获取地址栏中我们要传给API跨域平台中的数据；
			var id=window.location.search.split("=")[1];
			var $queding=$(".query .right");
			var $qingchu=$(".query .left");
			var $display=$(".zhognjian .display")
		    var $test=$(".content .left .query textarea")
			//只有在id不是空的时候，才会从后台获取数据
			if(id!=undefined){
			   getData();
			}
			//跨域获取数据
			function getData(){
				var script=document.createElement("script");
				//找跨域的地址，给后台个参数
				script.src="http://v.juhe.cn/exp/index?com=zto&no="+id+"&key=667f9b71db395e5dfb07e6282a1eec39&callback=fn"
				document.head.append(script);
				script.remove();
			}
			//从页面中获取我们要渲染的位置
			var list= document.getElementById("list");
			//渲染数据
			function fn(data){
				var html="";
				console.log(data);
				if(data.result==null){
                    html='<div class="item"><div class="img"></div><h4 style="color:red">'+data.reason+'</h4><h5>抱歉，我实在是无能为力，请检查输入的单号是否有误~</h5></div>'
			  }
				else{
				var dat=data.result.list;
				console.log(dat);
				for(var i=0;i<dat.length;i++){ html="<div class="item"><div class="img"></div><h4>" +dat[i].remark+'<="" h4=""><h5>'+dat[i].datetime+'</h5>'+html
				}
			 }
				list.innerHTML=html;
				$display.css({display:"block"})
			}
			//当点击确定的时候，再次像后台发送数据
			$queding.click(function(){
				var odd_number=$test.val();
			    var num=/[0-9]{12}/;
			    if(num.test(odd_number)){	
			    get();
				function get(){
				var script=document.createElement("script");
				//找跨域的地址，给后台个参数
				script.src="http://v.juhe.cn/exp/index?com=zto&no="+odd_number+"&key=667f9b71db395e5dfb07e6282a1eec39&callback=fn"
				document.head.append(script);
				script.remove();
			}
			  }else{
				 alert("请输入12位数字")				
			}
		  })
			//点击清除的时候，清除value的内容
          $qingchu.click(function(){
          	$test.val("")
          	$display.css({display:"none"})
          })
</dat.length;i++){>