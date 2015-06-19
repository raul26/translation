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
function selectBackground (opt) {
  var dir='';
  var color='';
  var content='';
  switch(opt) {
    case 1:
      dir='css/images/H1.png';
      color='#949c39';
      content='#uno';
    break;
    case 2:
      dir='css/images/H2.png';
      color='#4d9e99';
      content='#dos';
    break;
    case 3:
      dir='css/images/H3.png';
      color='#d68585';
      content='#tres';
    break;
    case 4:
      dir='css/images/H4.png';
      color='#cc9966';
      content='#cuatro';
    break;
    case 5:
      dir='css/images/H5.png';
      color='#99cc99';
      content='#cinco';
    break;
    case 6:
      dir='css/images/H6.png';
      //color='#9999cc';
      content='#seis';
    break;
    case 7:
      dir='css/images/H7.png';
      //color='#669999';
      content='#siete';
    break;
    case 8:
      dir='css/images/H8.png';
      color='#999999';
      content='#ocho';
    break;
  }
  $('.content').hide();
  $(content).show();
  $("body").css("backgroundColor", color);
  $("body").css("backgroundImage", "url(" + dir + ")");
}







});

