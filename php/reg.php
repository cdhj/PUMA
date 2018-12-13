<?php 
	header("Content-type:text/html;charset=utf-8");

	$name = $_POST["name"];
	$sex = $_POST["sex"];
	$phone = $_POST["phone"];
	$pwd = $_POST["pwd"];
	$mail = $_POST["mail"];

	$con = mysql_connect("localhost","root","root");
	if(!$con){
		die("连接失败".mysql_error());
	}else{
		mysql_select_db("puma",$con);
		$str = "insert into userinfo values('$name','$sex','$phone','$pwd','$mail');";
		$result = mysql_query($str,$con);
		if($result == 1){
			echo "1";
		}else{
			echo "0";
		}
	}
?>

	