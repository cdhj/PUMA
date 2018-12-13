$(".gocar").hover(
	function(){
		$(this).css({
			"background":"black"
		})
	},
	function(){
		$(this).css({
			"background":"red"
		})
	}
)
$(".addcar").hover(
	function(){
		$(this).css({
			"background":"black"
		})
	},
	function(){
		$(this).css({
			"background":"red"
		})
	}
)
$(".duihuan").hover(
	function(){
		$(this).css({
			"background":"black"
		})
	},
	function(){
		$(this).css({
			"background":"red"
		})
	}
)

getcookie();
function getcookie(){
	var brr = JSON.parse($.cookie("car"));
	var price = 0;
	var count = 0;
	for(let i in brr){
		price += parseFloat((brr[i].price.slice(1)*brr[i].count).toFixed(2));
		count += brr[i].count;
		if(brr[i].size == ""){
			brr[i].size =0;
		}
		$(".carcontent").append(
		"<div class='goodscar'><div class='c1'><input type='checkbox'><img src="+brr[i].strsrc+"><div class='info'><p>"+brr[i].name+"</p><p>产品编号："+brr[i].id+"</p><p>颜色：<span>"+brr[i].color+"</span></p><a class='del'>删除</a><a>编辑</a></div></div><div class='c1'><p>"+brr[i].size+"</p></div><div class='c1'><select class='option'><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option></select></div><div class='c1'><p>￥<span class='oneprice'>"+brr[i].price.slice(1)+"</span></p></div><div class='c1'><p>￥<span class='onegoodprice'>"+(brr[i].count*brr[i].price.slice(1)).toFixed(2)+"</span></p></div></div>"
		);
		$($(".carcontent").children()[i]).children().children().children("option")[brr[i].count-1].selected = "selected";
	}
}
$(".option").change(
	function(){
		var a = $(this).val();
		var b = $($(this).parents(".goodscar").children(".c1")[3]).children().children().html();
		var c = (a*b).toFixed(2);
		$($(this).parents(".goodscar").children(".c1")[4]).children().children().html(c);
		addTot();
	}
)
$("#chkAll").bindCheckAll($(":checkbox").not("#chkAll"));

$(":checkbox").change(
	function(){
		addTot();
	}
)

function addTot(){
	var totalcount = 0;
		$(":checkbox:checked").not("#chkAll").each(function(i){
			totalcount = parseFloat(totalcount);
			totalcount+=parseFloat($($(this).parents(".goodscar").children(".c1")[4]).children().children().html());
			// totalcount = parseFloat(totalcount).toFixed(2);		
		})
		totalcount = parseFloat(totalcount).toFixed(2);		
		$(".zongji").children().children().html(totalcount);
		$(".zongji1").children().html(totalcount);
}

$(".del").click(
	function(){
		if(confirm("确定删除此商品？") == true){
			var index1 = $(".goodscar").index($(this).parents(".goodscar"));
			$(this).parents(".goodscar").remove();
			addTot();
			removeJson(index1);
		}		
	}
)
function removeJson(index){
	var brr = JSON.parse($.cookie("car"));
	var count = 0;
	$(".car").empty();
	for(let i in brr){
		if(i == index){
			brr.splice(i,1);
		}
		if(brr[i]){
			count +=brr[i].count;
		}
	}
	$(".gouwu").html(count); 
	readdCookie(brr);
	for( let i in brr){
		$(".car").prepend(
		"<div class='smallcar'><div><img src="+brr[i].strsrc+"></div><div><p>"+brr[i].name+"</p><p>"+
		brr[i].id+"</p><p>颜色：<span>"+brr[i].color+"</span></p><p>尺寸：<span>"+brr[i].size+"</span></p><p>数量：<span class='totCount' goodcolor="+brr[i].color+">"+brr[i].count+"</span></p></div></div>"
		);
	}	
}
function readdCookie(brr){
	$.cookie("car",JSON.stringify(brr));
}
