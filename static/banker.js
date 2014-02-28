var cardIds;
var pokerPath="/static/pokerCard/";
function hide(){
	jQuery('#round').val("Flop");
	jQuery('#round').hide();
	jQuery('#0').hide();
	jQuery('#1').hide();
	jQuery('#2').hide();
	jQuery('#3').hide();
	jQuery('#4').hide();
}
jQuery().ready(function(){
	hide();
});
function shuffle(){
	
jQuery.get("/shuffle",
  function(data,status){
  	hide();
  	cardIds=data.substr(1,data.length-2).split(", ");
    jQuery('#round').show();


  });
}
function getCard(){

	var r=jQuery('#round').val();

	switch(r)
	{
		case "Flop":
		jQuery('#round').val("Turn");
		jQuery('#0').show();
    	jQuery('#0').attr("src",pokerPath+cardIds[0]+".jpg");
		jQuery('#1').show();
		jQuery('#1').attr("src",pokerPath+cardIds[1]+".jpg");
		jQuery('#2').show();
		jQuery('#2').attr("src",pokerPath+cardIds[2]+".jpg");
  		break;
		case "Turn":
  
		jQuery('#round').val("River");
		jQuery('#3').show();
		jQuery('#3').attr("src",pokerPath+cardIds[3]+".jpg");
  		break;

 		case "River":
 		jQuery('#round').hide();
		jQuery('#4').show();
		jQuery('#4').attr("src",pokerPath+cardIds[4]+".jpg");
 		break;
		default:
  
	}
	jQuery.get("/getCard",
  {
    round:jQuery('#round').val()
  },
  function(data,status){
    jQuery("#test").html("shuffled");
  });
}
