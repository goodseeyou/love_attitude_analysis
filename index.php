<html>
<head>
<title>Meet</title>
<meta HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=big5">
</head>
<script src="jquery-1.10.1.min.js"></script>
<body>
<div class="menu" id="loveAttitude"><a href="javascript:loadExam()">愛情態度量表</a></div>
<div class="exam"></div>
<script>
function loadExam(){
	$(".exam").html('<img src="loading.gif"/>');
	$.get("love_attitude_exam.php",function(data){
		$(".exam").css("display","none");
		$(".exam").html(data);
		$(".exam").fadeIn(300);
	});
}
</script>
</body>
</html>