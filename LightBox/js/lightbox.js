$(document).ready(function(){

	$("#closebtn").click( function(){

	$("#lightbox").fadeOut();

	});

	$("#openLightBox").click( function(){

		$("#lightbox").fadeIn(900);
	});

	$("img").click( function(){

		var picturePath = $(this).attr("src");

		//console.log($(this).attr("src"));
		//console.log($(this).attr("id"));
		//console.log($(this).attr("name"));

		$("#lightbox").fadeIn (300);
		$("#lightBoxContentBox div").html("<img src='"+ picturePath + "' class='lb_img'/>");

	});

	$("img").click( function(){

		var picturePath = $(this).attr("src");

		//console.log($(this).attr("src"));
		//console.log($(this).attr("id"));
		//console.log($(this).attr("name"));

		$("#lightbox").fadeOut (1800);
		//$("#lightBoxContentBox div").html("<img src='"+ picturePath + "' class='lb_img'/>");

	});

});