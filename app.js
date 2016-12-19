require.config({
	paths:{
		"jquery":"./js/jquery-1.11.2",
		"backbone":"./js/backbone",
		"underscore":"./js/underscore",
		"fly":"./js/jquery.fly.min",
		"css":"./js/css",
		"html":"./js/text"

	}
});

require(['jquery','backbone','router.js'],function($,Backbone){
   //开启路由监听
    Backbone.history.start();
});

// require(["jquery"],function($){
// 	$("footer").on("click","figure",function(){
// 		var index = $(this).index()+"";
// 		switch(index){
// 			case "0":
// 				require(["./modules/index/index.js"],function(home){
// 					home.init();
// 				});
// 				break;
// 			case "1":
// 				require(["./modules/flash/page2.js"],function(market){
// 					market.init();
// 				});
// 				break;
// 			case "2":
// 				require(["./modules/shop_car/page3.js"],function(order){
// 					order.init();
// 				});
// 				break;
// 			case "3":
// 				require(["./modules/mine/page4.js"],function(mine){
// 					mine.init();
// 				});
// 				break;
// 		};
// 	});
// })