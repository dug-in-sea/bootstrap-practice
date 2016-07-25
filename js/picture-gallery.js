
$(document).ready(function() {
//鼠标悬停在战士图片上时,其透明度变成0.7
	var $hoverItems = $('.hover-opacity');
	var $addDiv = $("<div></div>");
	$hoverItems.hover(
		function(event) {
			$(this).css('opacity', '0.4');
		},
		function() {
			$(this).css('opacity', '1');
		}
	);
});

$(document).ready(function() {
	var $hoverItems = $('.hover-opacity');
//图片的宽度填满栏目
	function arrangeWH() {
		// var currentH = $hoverItems.innerHeight();
		// var currentW = $hoverItems.innerWidth();
		var $hoverImages = $('.hover-opacity img');
		$hoverImages.each(function() {
			$(this).css("width", "100%");
		});
	}

	arrangeWH();
	//窗口变化时,图片宽度重新适应窗口
	$(window).resize(
		arrangeWH()
	);



});

//点击底部的返回顶部按钮,窗口平滑回滚到顶部
$('#footer button').click(
	function() {
		$('html,body').animate({
			"scrollTop": 0
		}, 200, "linear");
	}
);