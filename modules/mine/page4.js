define(["html!./page4.html","css!./page_4.css"],function(page4Page){
	return {
		init:function(){
			if($(".home_mine").children().size()>0){
				$(".home_mine").show().siblings("div").hide();
				$("footer").show();
				return;
			};
			$(".home_mine").html(page4Page).show().siblings("div").hide();
			$("footer").show();
		}
	};
});