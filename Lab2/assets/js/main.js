$(document).ready(function(){
	$("#button_color").click(function(){
		$(this).attr("class", "btn btn-primary btn-lg btn-block")
	});
	
	$("#button_hide").click(function(){
		$(this).hide();
	});
	
	$("#button_fade").click(function(){
		$("#div1").fadeIn(1000);
		$("#div2").fadeIn(2000);
		$("#div3").fadeIn(3000);
	});
	
	$("#div_to_slide").click(function(){
		$("#div_slide").slideToggle("slow");
	});
	
	$("#div_hover").hover(function(){
		alert("Alert!")
	});
	
	$("#button_slide").click(function(){
		$("#p1").css("color", "red").slideUp(1000).slideDown(1000);
	});
	
	$("#button_add_text").click(function(){
		$("#div_text").append("<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>");
	});
	
	$("#button_toggle_text").click(function(){
		$("#div_text").toggle();
		});
	
	$("#div_empty").hover(function(){
		$(this).empty();
	});
	
	$("#input_show").click(function(){
		$("#div_combination").html('<img src="img/bmw.jpg">');
	});
	
	$("#input_change").click(function(){
		$("#div_combination").html('<img src="img/nissan.jpg">');
	});
	
	$("#input_remove").click(function(){
		$("#div_combination").remove();
	});

});

//USUWANIE WSZYSTKIEGO
//POKAZ/UKRYJ przycisk
//POJAW DIVA/ ZMIEN KOLOR/ WYJEB
//ZMIANA LINKU
