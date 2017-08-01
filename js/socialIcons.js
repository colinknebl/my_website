
function eventListenersSocial() {

	$('.circle').on({
		mouseenter: function(event){ spin.enter( $(event.target) ) },
		mouseleave: function(event){ spin.exit( $(event.target) ) },
	});

}

var spin = {

	enter: function($target){

		var $child = $target.children();

		// add white background
		$target.addClass('white-bg');

		// remove the white color of the icon
		$child.removeClass('white-cl');

		// make sure the icon does not have the spin back class
		$child.removeClass('spin-back');

		// spin the icon
		$child.addClass('spin');

		if ( $child.attr('id') === 'gh-icon'){
			$child.addClass('purple');
		} else if ( $child.attr('id') === 'em-icon' ) {
			$child.addClass('tan');
		} else if ( $child.attr('id') === 'tw-icon') {
			$child.addClass('tw-blue');
		} else if ( $child.attr('id') === 'fb-icon') {
			$child.addClass('fb-blue');
		}else {
			$child.addClass('li-blue');
		}

	},

	exit: function($target){

		var $child = $target.children();

		$target.removeClass('white-bg');

		$child.removeClass('spin purple tan tw-blue fb-blue li-blue');

		$child.addClass('spin-back');

	},

};


$(document).ready( eventListenersSocial() );