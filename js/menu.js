$(document).click(function(event){

	var $target = $(event.target);

	if ($target.attr('id') === 'menu-bars') {
		if ($('nav').hasClass('mb-inactive') === true) {
			$('nav').toggleClass('mb-inactive');
			$('#menu-bars').css('color', '#555555');
		} else {
			$('nav').toggleClass('mb-inactive');
			$('#menu-bars').css('color', 'white');
		}
	} else {
		$('nav').addClass('mb-inactive');
		$('#menu-bars').css('color', 'white');
	}

});
