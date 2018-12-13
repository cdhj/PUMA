$(function(){
	checkUsername();	
	checkPhone();	
	checkPwd();
	checkRepwd();
	checkReg();
})
function checkUsername(){
	$("#name").blur(function(){
		var name = $(this).val();
		if(name !=""){
			$.post("php/checkname.php",{name:name},function(data){
				if(data == 0){
					$("#name").siblings(".error").css({
						"display":"inline-block",
						"color":"green",
					});
					$("#name").css("background","#eee");
					$("#name").siblings(".error").html("该用户名可以使用");
				}else{
					$("#name").siblings(".error").css({"display":"inline-block","color":"red"});
					$("#name").siblings(".error").html("该用户名已经被使用");
				}
			})
		}else{
			$(this).css("background","#ff7f7f");
			$(this).siblings(".error").css({
				"display":"inline-block",
				"color":"red"
			});
			$(this).siblings(".error").html("×"); 
		}		
	});
}
function checkPhone(){
	$(".phone").blur(function(){
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
function checkPwd(){
	$(".pwd").blur(function(){
		var pwd = $(this).val();
		if(pwd == ""){
			$(this).css("background","#ff7f7f");
			$(this).siblings(".error").css({"display":"inline-block","color":"red"});
			$(this).siblings(".error").html("请输入密码"); 
		}else{
			// if(!(/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.test(pwd))){
			if(!(/^[a-z0-9_-]{6,18}$/.test(pwd))){
			$(this).siblings(".error").css({
				"display":"inline-block",
				"color":"red"
			}); 
			$(this).siblings(".error").html("密码格式有误，请重填"); 
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
function checkRepwd(){
	$(".repwd").blur(function(){
		var pwd = $(this).val();
		var pwd1 = $(".pwd").val()
		if(pwd1 == ""){
			$(this).css("background","#ff7f7f");
			$(this).siblings(".error").css({"display":"inline-block","color":"red"});
			$(this).siblings(".error").html("请先输入密码"); 
		}else{
			if(pwd == "" ){
				$(this).css("background","#ff7f7f");
				$(this).siblings(".error").css("display","inline-block");
				$(this).siblings(".error").html("请输入重复密码"); 
			}else{
				if(pwd != pwd1){
				$(this).siblings(".error").css({
					"display":"inline-block",
					"color":"red"
				}); 
				$(this).siblings(".error").html("密码不一致"); 
				}else{
					$(this).siblings(".error").css({
						"display":"inline-block",
						"color":"green"
					}); 
					$(this).css("background","#eee");
					$(this).siblings(".error").html("√"); 
				}
			}
		}
		
		
	});
}
function checkRequired(){
	$(".required").blur(function(){
		if($(this).val() == ""){
			$(this).css("background","#ff7f7f");
			$(this).siblings(".error").css("display","inline-block");
		}else{
			$(this).css("background","#eee");
			$(this).siblings(".error").css("display","none");
		}
	});
}




function checkReg(){
	$("#submit").click(function(){
		var name = $("#name").val();
		var sex =$("input[type='radio']:checked").val();
		var phone = $(".phone").val();
		var pwd = $("#upwd").val();
		var mail = $(".mail").val();
		if(name !=""){
			$.post("php/reg.php",{
				name:name,
				sex:sex,
				phone:phone,
				pwd:pwd,
				mail:mail
			},function(data){
				if(data == 0){
					alert("注册失败")
				}else{	
					alert('注册成功');
					window.location.href='login.html'; 
				}
			})
		}		
	});
}
