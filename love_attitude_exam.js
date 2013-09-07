var formCount=1;
var hand="right hand";
var nowChosen = 1;
$(document).ready(function(){
	//$(".jsTest").append("jsTest");
	$("#"+nowChosen).css("background-color","#FFFFB9");
	$("#"+nowChosen).css("color","black");
	
	
	$("input").click(function(){
		var open = true;
		$(this).mouseout(function(){
		if(open && $(this).attr('name')==nowChosen){
			$("#"+nowChosen).css("background-color","white");
			$("#"+nowChosen).css("color","gray");
			nowChosen++;
			$("#"+nowChosen).css("background-color","#FFFFB9");
			$("#"+nowChosen).css("color","black");
			open = false;
		}
		});
	});
	
	$("#submitButton").mousedown(function(){
		$(this).attr('src','s-d.png');
	})
	.mouseup(function(){
		$(this).attr('src','s.png');
	})
	.mouseout(function(){
		$(this).attr('src','s.png');
	})
	.click(function(){
		var goSubmit;
		
		$("#sendingMsg").fadeIn(300,function(){
			setTimeout(function(){
				$("#sendingMsg").append('.');
			},500);
			setTimeout(function(){
				$("#sendingMsg").append('.');
			},1500);
			goSubmit=setTimeout(function(){
				$("form").submit();
			},2500);
		});
		$("#cancerSnd").fadeIn(330,function(){
			$(this).click(function(){
				clearTimeout(goSubmit);
				$("#sendingMsg").fadeOut(300);
				$("#sendingMsg").html("¶Ç°e¤¤");
				$(this).fadeOut(300);
				
			});
		});
	});
	
});
function addForm(question){
	var output;
	output='<tr class="form" id="'+formCount+'">';
	if(hand!='l'){
		output += '<td class="question">'+question+'</td>';
		
		for(var i=5;i>=1;i--){
			var tmp = "<td class=\"choose\"><input type=\"radio\" name=\""+formCount+"\" value=\""+i+"\"></td>";
			output+=tmp;
		}
		output +='</tr>';
	}
	else{
		output+= '<tr class="choose">';
		for(var i=5;i>=1;i--){
			var tmp = "<td class=\"choose\"><input type=\"radio\" name=\""+formCount+"\" value=\""+i+"\"></td>";
			output+=tmp;
		}
		output += '<td class="question">'+question+'</td>';
		output +='</tr>';
	}
	$("#formArea").append(output);
	formCount++;
}