define(["html!./index.html","css!./index.css"],function(indexPage){
	return {
		init:function(){
			if($(".home_index").children().size()>0){
				$(".home_index").show().siblings("div").hide();
				$("footer").show();
				return;
			};
			$(".home_index").html(indexPage).show().siblings("div").hide();
			$("footer").show();
		}
	};
});