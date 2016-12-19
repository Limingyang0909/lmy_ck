define(["html!./page_search.html","css!./page_search.css"],function(searchPage){
	return {
		init:function(){
			if($(".home_search").children().size()>0){
				$(".home_search").show().siblings("div").hide();
				$("footer").hide();
				return;
			};
			$(".home_search").html(searchPage).show().siblings("div").hide();
			$("footer").hide();
			(function(){
				var y = window.screen.availHeight;
				$(".page_search").css({"height":y+"px"});
				$("#search_return").on("click",function(){
					window.history.back(-1);
				});
			})();
		}
	};
});