<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!--
	@Author : Jeon SEOWOO (sseoooh@naver.com)
	@Date : 2019. 3. 12. 오후 4:48:08
	@File Name : *.jsp
	@Desc :
-->
<!doctype html>
<html lang="en">
<head>
		<meta charset="UTF-8">
    	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Seowoo</title>
		<link rel="stylesheet" href="${css}/home/main.css" />
		<link rel="stylesheet" href="${css}/home/reset.css" />		
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
		<script src="${js}/app.js"></script>
</head>
	<link rel="stylesheet" href="${css}/index.css" />
<body>
	<div class ="grid-container">
		<div class="item1" id="header" >
        </div>
		<div class="item2" id="menu" >
        </div>
       	<div class="item3" id="main" >
        </div>
        <div class="item4" id="right" >
        </div>
        <div class="item5" id="footer" >
        </div>
	</div>
	
</body>
<script>
app.path.init('${ctx}')
</script>
</html>
