<?php
require_once "jssdk.php";
// appId  和 秘钥
$jssdk = new JSSDK("wx343137353b99dd89", "077beddd005870696670b9c95048480e");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html>
<head>
	<title>爱鲜蜂</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
	<link rel="stylesheet" type="text/css" href="css/home.css">
	<script type="text/javascript" src='http://res.wx.qq.com/open/js/jweixin-1.0.0.js'></script>
	<script data-main = "app.js" type="text/javascript" src = "js/require.js"></script>
</head>
<body>
	<div class="main" style="display: none;">
		<div class="home_index home_page">
		
		</div>
		<div class="home_flash home_page">
			
		</div>
		<div class="home_shop_car home_page">
			
		</div>
		<div class="home_mine home_page">
			
		</div>
		<div class="home_search home_page">
			
		</div>
		<div class="home_adress">
			
		</div>
		<div class="home_orders">
			
		</div>
		<div class="page_score">
			
		</div>
	</div>
	<footer style="display: none;">
		<figure>
			<a href="#home">
				<div>
					<img src="img/foot1.png">
				</div>
				<figcaption>首页</figcaption>
			</a>
		</figure>
		<figure>
			<a href="#flash">
				<div>
					<img src="img/foot2.jpg">
				</div>
				<figcaption>闪送超市</figcaption>
			</a>
		</figure>
		<figure class="shop_car1">
			<a href="#shop_car">
				<div>
					<img src="img/foot3.jpg">
				</div>
				<figcaption>购物车</figcaption>
			</a>
			<span id="count" style="display: none;">0</span>
		</figure>
		<figure>
			<a href="#mine">
				<div>
					<img src="img/foot4.jpg">
				</div>
				<figcaption>我的</figcaption>
			</a>
		</figure>
	</footer>
	<div class="zhanwei_footer"></div>
	<input type="button" value="hehe" id="where">
	<input type="button" value="hehe2" id="where2">
</body>
<script type="text/javascript">
	wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
     jsApiList: [
        'checkJsApi',
        'onMenuShareWeibo',
        'onMenuShareQZone',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'onVoicePlayEnd',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
      ]
  });

	var latitude = 0,
		longitude = 0;
document.getElementById("where").onclick=function(){
	wx.getLocation({
	    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
	    success: function (res) {
	        latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
	        longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
	        var speed = res.speed; // 速度，以米/每秒计
	        var accuracy = res.accuracy; // 位置精度
	    }
	});
	alert(latitude+","+longitude);
};
document.getElementById("where2").onclick=function(){
	wx.openLocation({
	    latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
	    longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
	    name: '', // 位置名
	    address: '', // 地址详情说明
	    scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
	    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
	});
}

	
</script>
<script type="text/javascript" src="template/baiduTemplate.js"></script>
<div id="mymoban"></div>
<script type="text/javascript" src="js/index.js"></script>
</html>