$(function(){
	$(document).scroll(function() {
		var top = $(document).scrollTop();
		if(top < 800) {
			$('#backtop').hide();
			$('#qq').hide();
		} else {
			$('#backtop').show();
			$('#qq').show();
		}
	});
	$("#backtop").click(function(){
	$("html,body").animate({scrollTop:0},300);
});
		$("#tanchu").click(function(){
			
	});
})