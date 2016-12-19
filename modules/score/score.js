define(["html!./score.html","css!./score.css"],function(scorePage){
	return {
		init:function(){
			if($(".page_score").children().size()>0){
				$(".page_score").show().siblings("div").hide();
				$("footer").hide();
				return;
			};
			$(".page_score").html(scorePage).show().siblings("div").hide();
			$("footer").hide();
			(function (doc, win) {
				var docEl = doc.documentElement,
				resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
				recalc = function () {
				var clientWidth = docEl.clientWidth;
				if (!clientWidth) return;
				docEl.style.fontSize = 100 * (clientWidth / 414) + 'px';
				};
				if (!doc.addEventListener) return;
				win.addEventListener(resizeEvt, recalc, false);
				doc.addEventListener('DOMContentLoaded', recalc, false);
			})(document, window);
			$("#return_before").on("click",function(){
				window.history.back(-1);
			});
		}
	};
});