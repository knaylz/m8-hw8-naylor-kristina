
//Animate Box
$(document).ready(function(){
    $("#box").click(function(){
    var div = $("#box");
    div.animate({right: '5px'}, "slow");
    div.animate({bottom: '5px'}, "slow");
    div.animate({left: '5px'}, "slow");
    div.animate({top: '5px'}, "slow");
});
}); 