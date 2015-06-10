$(document).ready(function(){
	
	$(".tipop").on("click", function(){
		$(".tipop .selected").removeClass("selected");
	/*	$(this).children().last().addClass("selected").slideUp("slow", function(){
			$(this).show();
		});*/
		$( ".tipop hr" ).animate({width: "30%"},300);
		$(this).children().last().addClass("selected").animate({ width: "90%" }, 1000 );
		


	})


    





});

