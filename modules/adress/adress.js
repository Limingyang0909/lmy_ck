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
				$("#dingweidangqian").on("click",function(){
					var latitude = 0,
						longitude = 0;
					
					wx.getLocation({
					    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
					    success: function (res) {
					        latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
					        longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
					        var speed = res.speed; // 速度，以米/每秒计
					        var accuracy = res.accuracy; // 位置精度
					    }
					});
					wx.openLocation({
					    latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
					    longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
					    name: '', // 位置名
					    address: '', // 地址详情说明
					    scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
					    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
					});
				});
			})();
		}
	};
			
});

