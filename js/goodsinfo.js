var swiper = new Swiper('.swiper-container', {
	slidesPerView: 4,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

$(".swiper-slide>img").click(
	function(){
		var str = $(this).attr("src").replace("80X80","540X540");
		$(this).parents(".goodImg").children(".fangda").children("img").attr("src",str);
	}
)

$(".fangda").hover(
	function(){
		$(this).children(".mirror").css("display","block");
		$(this).children(".bigImg").css("display","block");
	},
	function(){
		$(this).children(".mirror").css("display","none");
		$(this).children(".bigImg").css("display","none");
	}
)

$(".fangda").mousemove(function(event){
	let evt = event || window.event;
	//1、数据
	let mirrorWidth = parseInt($(".mirror").css("width"));
	let mirrorHeight =  parseInt($(".mirror").css("height"));
	let a = evt.pageX;
	let b= $(this).offset().left;
	let c = $(this).position().left;
	let left1 = evt.pageX-$(this).offset().left-mirrorWidth/2;
	let top1 = evt.pageY-$(this).offset().top-mirrorHeight/2;
	//2、边界
	if(left1<0){
		left1=0;
	}
	if(left1>this.offsetWidth-mirrorWidth){
		left1=this.offsetWidth-mirrorWidth
	}
	
	if(top1<0){
		top1=0;
	}
	if(top1>this.offsetHeight-mirrorHeight){
		top1=this.offsetHeight-mirrorHeight
	}
	//3、改变外观
	$(".mirror").css("left",left1+"px");
	$(".mirror").css("top",top1+"px");
	$(".bigImg").css({
		"background-size":"200%",
		"background-position":(-2*(-120+left1))+"px "+(-2*(-100+top1))+"px",
	});
})
silder();
function silder(){
	$(".icon-jiantouxiangshang").click(
		function(){
			var top = (-1*parseInt($(".hotDiv").css("top")));
			top = top+ 185;
			if(top>185*5){
				top = 185*5;
				return;
			}
			$(".hotDiv").css({
				"top":-1*top+"px"
			});
		}
	)
	$(".icon-jiantouxiangxia").click(
		function(){
			var top = -1*parseInt($(".hotDiv").css("top"));
			top = top-185;
			if(top<0){
				top = 0;
				return;
			}			
			$(".hotDiv").css({
				"top":-1*top+"px"
			});
		}
	)
}

$(".changeImg").children().click(
	function(){
		$(this).children().css({
			"border":"3px solid red"
		});
		$(this).siblings("a").children("img").css({
			"border":"0"
		});

		var str = $(this).children().attr("src") ;
		if(str == "img/370682020_1_80X80.png"){
			$(this).parent().siblings(".goodheader").children("h6").html("产品编号：37068202");
			$(this).siblings("p").html("黑");
			var str1 = str.replace("80X80","540X540")
			$(".fangda").children("img").attr("src",str1);
			var str3 = str.replace("80X80","2000X2000");
			$(".fangda").children(".bigImg").css("background-image","url("+str3+")");
			$(".swiper-slide").children().each(function(i){
				var str2 = str.replace("_1_","_"+(i+1)+"_");
				$(this).attr("src",str2);
			})
		}else{
			$(this).parent().siblings(".goodheader").children("h6").html("产品编号：37068201");
			$(this).siblings("p").html("白");
			var str1 = str.replace("80X80","540X540")
			$(".fangda").children("img").attr("src",str1);
			var str3 = str.replace("80X80","2000X2000")
			$(".fangda").children(".bigImg").css("background-image","url("+str3+")");
			$(".swiper-slide").children().each(function(i){
				var str2 = str.replace("_1_","_"+(i+1)+"_");
				this.src = str2;
			})

		}	
	}
)

// $(".size").children("a").hover(
// 	function(){
// 		$(this).css({
// 			"background":"red",
// 			"color":"white"
// 		})
// 	},
// 	function(){
// 		$(this).css({
// 			"background":"#eee",
// 			"color":"black"
// 		})
// 	}
// )
$(".size").children("a").click(
	function(){
		$(this).css({
			"background":"red",
			"color":"white"
		});
		$(this).siblings("a").css({
			"background":"#eee",
			"color":"black"
		})
	}
)

$(".chooseCount").toggle(function(){
	$(this).children(".shuliang").css({
		"display":"block"
	})
},function(){
	$(this).children(".shuliang").css({
		"display":"none"
	})
})

$(".shuliang").children().click(function(){
	$(".btn").children("span").first().html($(this).html());
})

$(".addcar").children("div").hover(
	function(){
		$(this).css({
			"background":"black",
			"color":"white"
		})
	},
	function(){
		$(this).css({
			"background":"red",
			"color":"white"
		})
	}
)
$(".like").children("h3").hover(
	function(){
		$(this).css({
			"background":"red",
			"color":"white"
		})
	},
	function(){
		$(this).css({
			"background":"black",
			"color":"white"
		})
	}
)


var goodsarr = [];
if($.cookie("car")!=null && $.cookie("car")!=undefined)
if(JSON.parse($.cookie("car")) != null && JSON.parse($.cookie("car")) != undefined){
	goodsarr = JSON.parse($.cookie("car"))
}

$(".addcar").children("div").click(
	function(){		
		var name = $(".goodheader").children("h3").first().html();
		var id = $(".goodheader").children("h6").last().html();
		var price = $(".goodheader").children("h4").html();
		var color = $(".changeImg").children("p").html();
		var count = parseInt($(".chooseCount>.btn").children("span").first().html());
		var size = "";
		var strsrc = "img/370682010_1_80X80.png";
		if(color == "黑"){
			strsrc = strsrc.replace("370682010","370682020");
		}		
		$(".size").children("a").each(function(i){
			if($(this).css("color") == "rgb(255, 255, 255)"){
				size = $(this).html();
			}
		})
		var json = {
			name:name,
			id: id,
			price:price,
			color:color,
			count:count,
			size:size,
			strsrc:strsrc
		};
		if(goodsarr.length != 0){
			var flag = true;
			for(let i in goodsarr){
				if(goodsarr[i].color == json.color && goodsarr[i].size ==json.size){
					goodsarr[i].count++;
					flag = false;
				}
			}
			flag&&goodsarr.push(json);
		}else{
			goodsarr.push(json);
		};
		var str = JSON.stringify(goodsarr);
		$.cookie("car",str,{expires:7});

		$(".smallcar").remove();
		var price = 0;
		var count = 0;
		for(let i in goodsarr){
			price += parseFloat((goodsarr[i].price.slice(1)*goodsarr[i].count).toFixed(2));
			count += goodsarr[i].count;
			$(".car").prepend(
			"<div class='smallcar'><div><img src="+goodsarr[i].strsrc+"></div><div><p>"+goodsarr[i].name+"</p><p>"+
			goodsarr[i].id+"</p><p>颜色：<span>"+goodsarr[i].color+"</span></p><p>尺寸：<span>"+goodsarr[i].size+"</span></p><p>数量：<span class='totCount'>"+goodsarr[i].count+"</span></p></div></div>"
			);
		}	
		$(".totalCount").html(count);
		$(".gouwu").html(count);
		$(".totalPrice").html(price);
		$(".car").fadeIn("slow");
		setTimeout(function(){
			$(".car").fadeOut("slow");
		},3000)
	}
)
