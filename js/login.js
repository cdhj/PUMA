$(function(){	
	checkPhone()
	checkNameAndPwd();
})
function checkPhone(){
	$("#phone").blur(function(){
		var phone = $(this).val();
		if(phone == ""){
			$(this).css("background","#ff7f7f");
			$(this).siblings(".error").css({"display":"inline-block","color":"red"});
			$(this).siblings(".error").html("请输入手机号"); 
		}else{
			if(!(/^1[345678]\d{9}$/.test(phone))){
			$(this).siblings(".error").css({
				"display":"inline-block",
				"color":"red"
			}); 
			$(this).siblings(".error").html("手机号码有误，请重填"); 
			}else{
				$(this).siblings(".error").css({
					"display":"inline-block",
					"color":"green"
				}); 
				$(this).css("background","#eee");
				$(this).siblings(".error").html("√"); 
			}
		}
	});
}
function checkNameAndPwd(){
	$("#submit").click(function(){
		var phone = $("#phone").val();
		var pwd = $("#upwd").val();
		if(phone != "" && pwd != ""){
			$.post("php/login.php",{
				phone:phone,
				pwd:pwd
			},function(data){
				if(data == 0){
					$(".error").css("display","block");
				}else{
					$.cookie("username",phone,{expires:7});
					alert("登录成功");
					window.location.href = "index.html";
				}
			})
		}
	})
	
}