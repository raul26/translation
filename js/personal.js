$(document).ready(function(){
	$(".tipop").on("click", function(){
    selectBackground($(this).data('opt'));
		$(".tipop .selected").removeClass("selected");
		$( ".tipop hr" ).animate({width: "30%"},300);
		$(this).children().last().addClass("selected").animate({ width: "90%" }, 1000 );
	})
function selectBackground (opt) {
  var dir='';
  var color='';
  switch(opt) {
    case 1:
      dir='css/images/H1.png';
    break;
    case 2:
      dir='css/images/H2.png';
      color='#4d9e99';
    break;
    case 3:
      dir='css/images/H3.png';
    break;
    case 4:
      dir='css/images/H4.png';
    break;
    case 5:
      dir='css/images/H5.png';
    break;
    case 6:
      dir='css/images/H6.png';
    break;
    case 7:
      dir='css/images/H7.png';
    break;
    case 8:
      dir='css/images/H8.png';
    break;
  }
  $("body").css("backgroundColor", color);
  $("body").css("backgroundImage", "url(" + dir + ")");
}







});

