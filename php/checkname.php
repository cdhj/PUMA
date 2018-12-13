<?php
	header("Content-type:text/html;charset=utf-8");
	$name = $_POST["name"];
	$con = mysql_connect("localhost","root","root");
	if(!$con){
		die("连接失败".mysql_error());
	}else{
		mysql_select_db("puma",$con);
		$str = "select * from userinfo where uname ='$name'";
		$result = mysql_query($str,$con);
		$rows = mysql_num_rows($result);
		if($rows == 0){		
			echo "0";
		}else{
			echo "1";
		}
	}
?>