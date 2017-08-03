var $slider = $('#img-slider');
var $slides = $('.slide') ;

function slider(){
	var $active = $slider.find('.slide-active');
	
	var $next = $active.next();
	if ($next.length === 0) {
		$next = $slider.children().eq(0);
	} 

	$slider.find('.slide-active').removeClass('slide-active');
	$active.addClass('slideFadeOut');
	$next.addClass('slideFadeIn');

	setTimeout(function(){
		$active.removeClass('slide-active');
		$next.addClass('slide-active');
		$slider.children().removeClass('slideFadeIn slideFadeOut');
	},2000);
}

setInterval(slider, 10000);