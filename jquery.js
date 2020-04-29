$(document).ready(function(){
	$("#hideButton").click(function(){
		$("form").slideToggle();
	});	
	$("#fade").click(function(){
		$("h3").fadeToggle();
	});

	$("#animation").click(function(){
		$("div").animate({
    left: '250px',
    height: '+=150px',
    width: '+=150px'
	});
	});
});