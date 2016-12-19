define(["html!./orders.html","css!./page_orders.css"],function(orderPage){
	return {
		init:function(){
			if($(".home_orders").children().size()>0){
				$(".home_orders").show().siblings("div").hide();
				$("footer").hide();
				return;
			};
			$(".home_orders").html(orderPage).show().siblings("div").hide();
			$("footer").hide();
			(function(){
				var y = window.screen.availHeight;
				$(".orders").css({"height":y+"px"});
				$("#search_return").on("click",function(){
					window.history.back(-1);
				});
				$("#flash_page").on("click",function(){
					location.reload();
				});
					$("#nav li").on("click",function(){
					$("#nav li").removeClass("li1");
					$(this).addClass("li1");
				});
			})();
		}
	};
});