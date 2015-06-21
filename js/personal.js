$(document).ready(function(){
  $(".content").hide();
  $("#main-content").children().first().show();
  $(".selected hr").css('width', "90%");
	$(".tipop").on("click", function(){
    selectBackground($(this).data('opt'));
		$(".selected").removeClass("selected");
		$( ".hr" ).animate({width: "30%"},1000);
		$(this).children().first().animate({ width: "90%" }, 1000 );
		$(this).children().last().animate({ width: "90%" }, 1000 );
    $(this).addClass("selected");
	})
});
function selectBackground (opt) {
  $('.content').hide();
  $("body").removeClass("cl-uno cl-dos cl-tres cl-cuatro cl-cinco cl-seis cl-siete cl-ocho");
  $("body").addClass(opt);
  var id = '#'+opt.split('-')[1];
  $(id).show();
}
