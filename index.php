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
	<div class="main">
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
	<footer>
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
</script>
<script type="text/javascript" src="template/baiduTemplate.js"></script>
<div id="mymoban"></div>
<script type="text/javascript" src="js/index.js"></script>
</html>