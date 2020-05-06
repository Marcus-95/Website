$(document).ready(function(){
    $(".hover").hover(function(){
        $(this).css("color", "darkred");
    }, function(){
        $(this).css("color", "black");
    });
});
