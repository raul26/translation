$(document).ready(function(){
  $(".selected hr").css('width', "90%");
	$(".tipop").on("click", function(){
    selectBackground($(this).data('opt'));
		$(".selected").removeClass("selected");
		$( ".hr" ).animate({width: "30%"},1000);
		$(this).children().first().animate({ width: "90%" }, 1000 );
		$(this).children().last().animate({ width: "90%" }, 1000 );
    $(this).addClass("selected");
	})
function selectBackground (opt) {
  var dir='';
  var color='';
  switch(opt) {
    case 1:
      dir='css/images/H1.png';
      color='#949c39';
    break;
    case 2:
      dir='css/images/H2.png';
      color='#4d9e99';
    break;
    case 3:
      dir='css/images/H3.png';
      color='#d68585';
    break;
    case 4:
      dir='css/images/H4.png';
      color='#cc9966';
    break;
    case 5:
      dir='css/images/H5.png';
      color='#99cc99';
    break;
    case 6:
      dir='css/images/H6.png';
      //color='#9999cc';
    break;
    case 7:
      dir='css/images/H7.png';
      //color='#669999';
    break;
    case 8:
      dir='css/images/H8.png';
      color='#999999';
    break;
  }
  $("body").css("backgroundColor", color);
  $("body").css("backgroundImage", "url(" + dir + ")");
}







});

