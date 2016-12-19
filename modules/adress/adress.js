define(["html!./page_adress.html","css!./page_adress.css"],function(adressPage){

	return {
		init:function(){
			if($(".home_adress").children().size()>0){
				$(".home_adress").show().siblings("div").hide();
				$("footer").show();
				return;
			};
			$(".home_adress").html(adressPage).show().siblings("div").hide();
			$("footer").show();
			(function(){
				var y = window.screen.availHeight;
				$(".page_adress_main").css({"height":(y-190)+"px"});
				$("#adress_return").on("click",function(){
					window.history.back(-1);
				});
			})();
		}
	};
			
});

