define(["html!./page3.html","css!./page_3.css"],function(page3Page){
	return {
		init:function(){
			if($(".home_shop_car").children().size()>0){
				$(".home_shop_car").show().siblings("div").hide();
				return;
			};
			$(".home_shop_car").html(page3Page).show().siblings("div").hide();
			(function(){
				var y = window.screen.availHeight;
				if(sessionStorage.flag=="true"){
					$(".kongcar").hide();
					$(".youhuo").show();
					for(var i = 0;i<my_id.length;i++){
						$("<div class='page3_goods_list1 page3_goods_info' tap_id='"+my_id[i]+"'><img src='img/page3_weixuan.jpg'><img src='"+src[i]+"'><h4>"+name[i]+"</h4><span class='money'>￥"+price[i+1]+"</span><div><img src='img/page3_jian.gif'><span>1</span><img src='img/page3_jia.gif'></div></div>").appendTo(".page3_goods_list");
					}
				}else{
					$(".youhuo").hide();
					$(".kongcar").show();
				};
			})();
		}
	};
});
