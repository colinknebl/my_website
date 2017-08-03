function scrollEventListener(event){

	$('nav').on(
		'click', function(event){ scroll.scroll(event);
	});

	$('#more-btn-link').on(
		'click', function(event){ 
			$(window).scrollTo('#profile', 500);
	});

}


var scroll = {

	scroll: function(event){
		
		var x = $(event.target);

		if ( x.text() === 'HOME' ) {

			$(window).scrollTo('#home', 500);
		}

		else if ( x.text() === 'PROFILE' ) {

			$(window).scrollTo('#profile', 500);
		}

		else if ( x.text() === 'LANGUAGES' ) {

			$(window).scrollTo('#languages', 500);
		}

		else if ( x.text() === 'SKILLS' ) {

			$(window).scrollTo('#skills', 500);
		}

		else if ( x.text() === 'PORTFOLIO' ) {

			$(window).scrollTo('#portfolio', 500);
		}

		else if ( x.text() === 'EDUCATION' ) {

			$(window).scrollTo('#education', 500);
		}

		else if ( x.text() === 'CONTACT' ) {

			$(window).scrollTo('#contact', 500);
		}
	},

};

$(document).ready( scrollEventListener() );