define(["html!./page2.html","css!./page_2.css"],function(page2Page){

	return {
		init:function(){
			if($(".home_flash").children().size()>0){
				$(".home_flash").show().siblings("div").hide();
				$("footer").show();
				return;
			};
			$(".home_flash").html(page2Page).show().siblings("div").hide();
			$("footer").show();
			(function(){
				var y = window.screen.availHeight
					,Num = 0
					,goodsInfo={};
				//初始化sessionStroage对象属性
				sessionStorage.name="";
				sessionStorage.price=0;
				sessionStorage.num=0;
				sessionStorage.src="";
				sessionStorage.flag=false;
				sessionStorage.id="";
				document.getElementById('page_2_leftin').style.height = (y-125)+"px";
				document.getElementById('page_2_right').style.height = (y-125)+"px";
				//ajax 数据调用
				$.ajax("json/data.json",{
					success:function(data){
						$("#mymoban").load("./modules/flash/page2_moban.html",function(){
							$("#page_2_leftin").html(baidu.template("flash",{listInfo:data.data.categories}));
							$("#goodsList").html(baidu.template("goods_list",{goods_listInfo:data.data.products[104749]}));
							$("#page_2_leftin li").eq(0).addClass("xuanzhong");
							$("#page_2_leftin li").eq(1).addClass("hot");
							$("#page_2_leftin li").on("click",function(){
								var data_id = $(this).attr("data_tap");
								$(this).addClass("xuanzhong").siblings().removeClass("xuanzhong");
								$("#goodsList").html(baidu.template("goods_list",{goods_listInfo:data.data.products[data_id]}));
							});
							$("#goodsList").on("click",".buy",function(e){
								e = e || window.event;
								console.log(e);
								// 获取当前点击商品的数据
								sessionStorage.flag=true;
					 			var name = $(this).parent().find("h3").text()
					 				,price = $(this).parent().find(".goods_money").html()
					 				,src = $(this).parent().find("img")[0].src
					 				,id = $(this).parent().attr("id");
					 			//获取商品图片当前所在的位置
					 			var y = $(this).parent().find(".falsh_goods")[0].y
					 				,x = $(this).parent().find(".falsh_goods")[0].x;
					 			!sessionStorage.name?sessionStorage.name+=name:sessionStorage.name+=(","+name); 
								!sessionStorage.price?sessionStorage.price+=parseInt(price):sessionStorage.price+=(","+parseInt(price));
								!sessionStorage.src?sessionStorage.src+=src:sessionStorage.src+=(","+src); 
								!sessionStorage.id?sessionStorage.id+=id:sessionStorage.id+=(","+id); 
					 			$("<img src="+sessionStorage.src+" style='position:fixed;top:"+y+"px;left:"+x+"px;animation:doing 1s;z-index:30;'>").appendTo("body");
					 			var t = setTimeout(function(){
					 				$("body>img").remove();
					 			}, 1000);
					 			if(sessionStorage.num==0){
					 				sessionStorage.num=1;
					 			}else{
					 				sessionStorage.num++;
					 			};
					 			console.log(sessionStorage);
					 			// 计算商品总数
					 			Num++;
					 			if(Num<=0){
					 				$("#count").hide();
					 			}else{
					 				$("#count").show();
					 			}
					 			$("#count").text(Num);
					 			var	name = sessionStorage.name.split(",")
								,price = sessionStorage.price.split(",")
								,my_id = sessionStorage.id.split(",")
								,src = sessionStorage.src.split(",");
							});
						});
					}
				});
			})();
		}
	};		
});

