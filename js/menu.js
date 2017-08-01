// if (window.innerWidth <= 700) {
// 		console.log('do this');
// 		$('nav').addClass('hide');
// 	}
$(document).click(function(event){

	console.log(window.innerWidth);

	var $target = $(event.target);

	if ($target.attr('id') === 'menu-bars') {
		console.log('menu bars clicked.');
		if ($('nav').hasClass('mb-inactive') === true) {
			console.log('show menu.');
			$('nav').toggleClass('mb-inactive');
			// $('nav').show();
		} else {
			console.log('hide menu.');
			$('nav').toggleClass('mb-inactive');
			// $('nav').hide();
		}
	} else {
		$('nav').addClass('mb-inactive');
		// $('nav').hide();
	}

});
