

function slider() {

	var $activeImg =  $('#img-slider').find('.active');

	var $nextImg = $('#img-slider').find('.active').next();

	var $firstImg = $('#img-slider').children().eq(0);

	var $children = $('#img-slider').children();

	$children.each(function(){
		$(this).removeClass('fadeOut fadeIn');
	});


	if ( $activeImg.next().length >= 1) {

 		$activeImg.addClass('fadeOut');
 		
 		window.setTimeout(function(){
 			$activeImg.toggleClass('active hide');
 			$nextImg.toggleClass('active hide fadeIn');
 		}, 1000);

	} else {

		$activeImg.addClass('fadeOut');
 		
 		window.setTimeout(function(){
 			$activeImg.toggleClass('active hide');
 			$firstImg.toggleClass('active hide fadeIn');
 		}, 1000);
	}

	
}


$(document).ready(  window.setInterval(slider,  6000 ) );