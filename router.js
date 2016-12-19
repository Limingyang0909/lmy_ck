define(["backbone"], function(Backbone){
	var Router = Backbone.Router.extend({
		routes:{
			"":"home",
			home: "home",
			flash: "market",
			shop_car: "order",
			mine: "mine",
			orders:"orders",
			search:"search",
			adress:"adress",
			score:"score"
		},
		home: function(){
			require(["./modules/index/index.js"],function(index){
				index.init();
			});
		},
		market: function(){
			require(["./modules/flash/page2.js","./js/jquery.fly.min.js"],function(flash){
				flash.init();
			});
		},
		order: function(){
			require(["./modules/shop_car/page3.js"],function(shop_car){
				shop_car.init();
			});
		},
		mine: function(){
			require(["./modules/mine/page4.js"],function(mine){
				mine.init();
			});
		},
		orders:function(){
			require(["./modules/orders/orders.js"],function(order){
				order.init();
			});
		},
		search:function(){
			require(["./modules/search/search.js"],function(search){
				search.init();
			});
		},
		adress:function(){
			require(["./modules/adress/adress.js"],function(adress){
				adress.init();
			});
		},
		score:function(){
			require(["./modules/score/score.js"],function(score){
				score.init();
			});
		}
	});
	return new Router();
});