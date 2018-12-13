$(function(){
	autoplay();
	loginCheck();
	//改变header导航栏的背景色
	$(".headerlis a").hover(
		changeNav();
	);

	//滑过country时显示城市
	$(".country").hover(
		showCity();
	)
	$(".smallChoose>ul>li").hover(
		changeStyle();
	)

	//改变nav导航的样式
	$(".navs .lis").hover(
		changeNavStyle();
	)

	//导航栏吸顶效果以及logo图标大小的变化
	$(window).scroll(function(){
		fixed();
	})

	//设置滑过每一次li时它的子菜单
	$(".lis").hover(
	  	showLiChild();
	);

	//观看视频点击小图片切换成大图片效果
	$(".videoRight").children().click(function(){
		videoChangeImg();
	})
	//视频滑过播放键变色
	$(".play").hover(
		videoPlay();
	)
	//当即热卖放大效果
	hotSale();
	//滑过查看详情等变色
	$(".btnImg").hover(
		checkMore();
	)
	//50周年立即选购变色
	$(".btnImg1").hover(
		function(){
			$(this).children("a").css("background","black");
		},
		function(){
			$(this).children("a").css("background","red");
		}
	)
	//滑动切换
	hoverChange();
	//order按钮变色
	$(".btn2").hover(
		orderBtn();
	)
	$(".mail >.btn").hover(
		orderBtn2();
	)
	//关于我们文字变色
	$(".aboutUls > li > a").hover(
		aboutUs();
	)
})
//观看视频点击小图片切换成大图片效果
function videoChangeImg(){
	$(".videoLeft").children(".img1").attr({
		"src": $(this).attr("bsrc")
	});
}
//视频滑过播放键变色
function videoPlay(){
	function(){
		$(this).attr("src","img/video_play_hover.png");
	},
	function(){
		$(this).attr("src","img/video_play.png");
	}
}

//当即热卖放大效果
function hotSale(){
	$(".saleMain").hover(
		function(){
			$(this).children(".imgBox").children("img").css({
				"transform": "scale(1.1)",
				"transition":"all 1s"
			},300)
		},
		function(){
			$(this).children(".imgBox").children("img").css({
				"transform":"scale(1)"
			},300)
		}
	)

	$(".newImg").hover(
		function(){
			$(this).children(".imgBox2").children("img").css({
				"transform":"scale(1.1)",
				"transition":"all 0.5s"
			},300)
		},
		function(){
		$(this).children(".imgBox2").children("img").css({
			"transform":"scale(1)"
		},300)
		}
	)
}
//滑过查看详情等变色
function checkMore(){
	function(){
		$(this).children("a").css("background","red");
	},
	function(){
		$(this).children("a").css("background","black");
	}
}

//滑动切换
function hoverChange(){
	$(".newX").click(
		function(){
			var left = -1*parseInt($(".smallDiv").css("left"));
			left = left+ 330;
			if(left>990){
				left = 990;
				return;
			}
			$(".smallDiv").css({
				"left":-1*left+"px"
			});
		}
	)
	$(".newD").click(
		function(){
			var left = -1*parseInt($(".smallDiv").css("left"));
			left = left-330;
			if(left<0){
				left = 0;
				return;
			}			
			$(".smallDiv").css({
				"left":-1*left+"px"
			});
		}
	)
	$(".xiaoyu").click(
		function(){
			var left = -1*parseInt($(".hotDiv").css("left"));
			left = left+ 255;
			if(left>510){
				left = 510;
				return;
			}
			$(".hotDiv").css({
				"left":-1*left+"px"
			});
		}
	)
	$(".dayu").click(
		function(){
			var left = -1*parseInt($(".hotDiv").css("left"));
			left = left-255;
			if(left<0){
				left = 0;
				return;
			}			
			$(".hotDiv").css({
				"left":-1*left+"px"
			});
		}
	)
}
//order按钮变色
function orderBtn(){
	function(){
		$(this).children("a").css("background","black");
	},
	function(){
		$(this).children("a").css("background","red");
	}
}
function orderBtn2(){
	function(){
		$(this).css("background","black");
	},
	function(){
		$(this).css("background","red");
	}
}
//关于我们文字变色
function aboutUs(){
	function(){
		$(this).css("color","red");
	},
	function(){
		$(this).css("color","black");
	}
}

function autoplay(){
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 1,
		spaceBetween: 30,
		autoplay:true,
		loop: true,
		pagination: {
		el: '.swiper-pagination',
		clickable: true,
		},
		navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
		},
	});
}


function loginCheck(){
	var username = $.cookie("username");
	if(username !== "null"){
		$(".loginName>a").html("欢迎你："+username);
		$(".loginName").css("display","inline-block");
		$(".del>a").html("注销");
		$(".del").css("display","inline-block");
		$(".denglu").css("display","none");	
		$(".zhuce").css("display","none");	
	};
	$(".del").click(function(){
		window.location.href='login.html'; 
		$.cookie("username",null);
	})
}


//改变header导航栏的背景色
function changeNav(){
	function () {
		$(this).addClass("moveA");
	},
	function () {
		$(this).removeClass("moveA");
	}
}


//滑过country时显示城市
function showCity(){
	function(){
		$(this).children(".choose").css("display","block");
	},
	function(){
		$(".choose").hover(
			function(){
				$(this).css("display","block");
			},
			function(){
				$(this).css("display","none");
			}
		)
		$(this).children(".choose").css("display","none");

	}
}
function(){
	function(){
		$(this).css(
		{
			"background":"#eee",
			"border-radius":"6px"
		})
	},
	function(){
		$(this).css({
			"background":"white",
			"border-radius":"0"
		})
	}
}

//改变nav导航的样式
function changeNavStyle(){
	function(){
		$(this).css({
			"background": "red",
			"border-bottom": 0			
		});
		$(this).children().first().css({
			"color" : "white"
		});
	},
	function(){
		$(this).css({
			"background":"white",
			"border-bottom":"1px solid gray",
			"color": "black"
		});
		$(this).children().first().css({
			"color" : "black"
		});
	}
}


//导航栏吸顶效果以及logo图标大小的变化
function fixed(){
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
}

//设置滑过每一次li时它的子菜单
function showLiChild(){
	function () {
	    $(this).children(".hoverDiv").css("display","block");
	    $(this).children(".sanJao").css("display","block");
  	},
  	function () {
	    $(this).children(".hoverDiv").css("display","none");
	    $(this).children(".sanJao").css("display","none");
  	}
}