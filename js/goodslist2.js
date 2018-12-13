$(function(){
	loaddata();
	// silder();
	// titHover();	
	// liHover();
	// liclick();

});

// function loaddata(){
// 	$.getJSON("getGoodsList.php",function(data){
// 		$.each(data.items,function(i,item){
// 			$(".bigImg").children("img").attr("src",item.goodsImg);
// 		})
// 	})
// }


function loaddata(){
	$.get("getGoodsList.php",function(data){
		var arr = JSON.parse(data);
		for(let i in arr){
			$($(".bigImg")[i]).children("img").attr("src",arr[i].goodsImg);
			$($(".smallImg")[i]).children().children().children().children().each(function(j){
				$(this).attr("src",arr[i].goodsImg.replace("220X220","80X80").replace("10_1_80X80",(j+1)+"0_1_80X80"));
			})
			$($(".goodsTitle")[i]).children().html(arr[i].goodsName+"<br/>"+arr[i].goodsDesc);
			$($(".goodsPrice")[i]).html("￥"+arr[i].goodsPrice+".00");
		}
	})
}
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

function titHover(){
	$(".smallTitle>span>a").hover(
		function(){
			$(this).css("color","red");
		},
		function(){
			$(this).css("color","black")
	})

}
function liHover(){

	$(".biguls>li").hover(
		function(){
			$(this).children("a").css("color","red");
			$(this).children().children().css("background-position-y"," 15px");
		},
		function(){
			$(this).children("a").css("color","black");
			$(this).children().children().css("background-position-y","0px");

	})

	$(".smalluls>li").hover(
		function(){
			$(this).children("a").css("color","red");
		},
		function(){
			$(this).children("a").css("color","black");
	})

	$(".rightTopUls").children("li").children().hover(
		function(){
			$(this).css({
				"background":"red",
				"color":"white"
			})
		},
		function(){
			$(this).css({
				"background":"white",
				"color":"black"
			});

	})
	$(".a").hover(
		function(){
			$(this).css({
				"background":"red",
				"color":"white"
			})
		},
		function(){
			$(this).css({
				"background":"white",
				"color":"black"
			});

	})
	$(".smallgoods").hover(
		function(){
			$(this).css({
				"border":"1px solid #eee",
			});
			$(this).children().children(".quicklook").css({
				"display":"block"
			}
			)
		},
		function(){
			$(this).css({
				"border":"0",
			});
			$(this).children().children(".quicklook").css({
				"display":"none"
			}
			)
	})
	$(".quicklook").hover(
		function(){
			$(this).css({
				"background":"black",
				"color":"white"
			});
		},
		function(){
			$(this).css({
				"background":"red",
				"color":"white"
			});
	})
	$(".s").hover(
		function(){
			$(this).css({
				"background-color":"red",
				"background-position-y":"-35px"
			});
		},
		function(){
			$(this).css({
				"background-color":"white",
				"background-position-y":"0"
			});
	})
	
	$(".smallImg").children().children().hover(
		function(){
			var str = $(this).children().children().attr("src").replace(/80X80/,"220X220");
			$(this).parents(".smallgoods").children().children("img").attr("src",str);
			$(this).parents(".smallImg").children().children().first().css("border","0");			
			$(this).css("border","3px solid #F00");
		},
		function(){
			var str = $(this).parents(".smallImg").children().children().first().children().children().attr("src").replace(/80X80/,"220X220");
			$(this).parents(".smallgoods").children().children("img").attr("src",str)
			$(this).css("border","0");
			$(this).parents(".smallImg").children().children().first().css("border","3px solid #F00");

		}
	)

	$(".s1").hover(
		function(){
			$(this).css({
				"background-color":"red",
				"background-position-y":"-35px"
			});
		},
		function(){
			$(this).css({
				"background-color":"#eaeaea",
				"background-position-y":"0"
			});
	})

	$(".pageBtn").toggle(
		function(){
			$(this).children(".pageNum").css("display","block");
		},
		function(){
			$(this).children(".pageNum").css("display","none");			
		}
	)
	$(".pageNum").hover(
		function(){
			$(this).css("display","block");
		},
		function(){
			$(this).css("display","none");
		}
	)
	$(".biguls>li>a").toggle(function(){
		// $(this).css("color","red");
		$(this).children().css("background-position-x","0px");
		$(this).siblings().css("display","none");
	},
	function(){
		$(this).children().css("background-position-x","15px");
		$(this).siblings().css("display","block");	
	})
	$(".bigImg>img").click(function(){
		window.location.href = "goodsinfo.html";
	})
}
