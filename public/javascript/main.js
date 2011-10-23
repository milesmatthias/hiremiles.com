$(function(){
	$(".navMenu").localScroll({duration:800});
	
	var t = setTimeout(function(){
		var h = $('.titleHeader').height();
		h += $('#navMenuWrap').height();
		h = $(window).height() - h;
		$('.header').css('height',h);
	}, 10);
});