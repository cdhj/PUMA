
$(function(){
	//导航栏吸顶效果以及logo图标大小的变化
	$(window).scroll(function(){
		var $winOffset = $(window).scrollTop();
		var $headerHeight = $(".header").height();
		if($winOffset >= $headerHeight){
			$(".nav").addClass("fixed");
			$(".navLeft>a>.logo").css({
				"background-position":"-98px -144px",
				"width":"66px"	
			});
		}else{
			$(".nav").removeClass("fixed");
			$(".navLeft>a>.logo").css({
				"background-position":"0 -163px",
				"width":"86px"
			});
		}
	})
	$(".lis").hover(
	  	function () {
		    $(this).children(".hoverDiv").css("display","block");
		    $(this).children(".sanJao").css("display","block");
	  	},
	  	function () {
		    $(this).children(".hoverDiv").css("display","none");
		    $(this).children(".sanJao").css("display","none");
	  	}
	);
})


getcookie();
function getcookie(){
	if($.cookie("car") != null && $.cookie("car") != undefined){
		var brr = JSON.parse($.cookie("car"));
		var price = 0;
		var count = 0;
		for(let i in brr){
			price += parseFloat((brr[i].price.slice(1)*brr[i].count).toFixed(2));
			count += brr[i].count;
			$(".car").prepend(
			"<div class='smallcar'><div><img src="+brr[i].strsrc+"></div><div><p>"+brr[i].name+"</p><p>"+
			brr[i].id+"</p><p>颜色：<span>"+brr[i].color+"</span></p><p>尺寸：<span>"+brr[i].size+"</span></p><p>数量：<span class='totCount' goodcolor="+brr[i].color+">"+brr[i].count+"</span></p></div></div>"
			);
		}	
		$(".totalCount").html(count);
		$(".gouwu").html(count);
		$(".totalPrice").html(price);
	}
	
}


$(".hovershopping").hover(
	function(){
		$(".car").css("display","block");
	},
	function(){
		$(".car").css("display","none");

	}
)