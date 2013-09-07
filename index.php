<html>
<head>Meet</head>
<script src="jquery-1.10.1.min.js"></script>
<body>
<div class="exam"></div>
<script>
$.get("love_attitude_exam.php",function(data){
	$(".exam").css("display","none");
	$(".exam").html(data);
	$(".exam").fadeIn(300);
});
</script>
</body>
</html>