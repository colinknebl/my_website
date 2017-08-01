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
			console.log('home');

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


$(document).ready( scrollEventListener(event) );



var homeSect = $('#home').offset().top;
var profileSect = $('#profile').offset().top;
var langSect = $('#languages').offset().top;
var skillsSect = $('#skills').offset().top;
var portfolioSect = $('#portfolio').offset().top;
var eduSect = $('#education').offset().top;

var body = document.body,
	html = document.documentElement;

// height of the page
var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
// console.log('the page height is ' + height + 'px');

// the window jQuery element
var $window = $(window);           



$(document).scroll(function(){



	// console.log('the window height is ' + $window.height() + 'px');

	// the top of the window
	var windowTop = $window.scrollTop();
	// console.log('windowTop: the top of the window is ' + windowTop + 'px from the top of the page.');

	// the bottom of the window         
	var windowBottom = windowTop + $window.height(); 
	// console.log('windowBottom: = windowTop + $window.height() = the window bottom is ' + windowBottom + 'px from the top of the page.');

	// 25% of the window height
	var oneQuarter = $window.height() * 0.25;
	// console.log('oneQuarter: = $window.height() * 0.25 = of the window height is ' + oneQuarter + 'px');

	var oneHalf = $window.height() * 0.5;

	// the top 25% of the window
	var top25 = windowTop + oneQuarter;
	// console.log('top25: = windowTop + oneQuarter = % of the window is ' + top25 + 'px');

	// console.log('profileSect = ' + profileSect);
	// console.log('profileSect + top25 = ' + (profileSect + oneQuarter));

	// console.log('***********************************');

if ((windowTop >= homeSect) && (windowTop <= (homeSect + oneHalf))) {

	if ($('#nav-list').children().eq(0).children().hasClass('active-icon') !== true) {
		$('#nav-list').find('.active-icon').removeClass('active-icon');
		$('#nav-list').children().eq(0).children().addClass('active-icon');
	}

} 
else if ((windowTop > profileSect) && (windowTop < (profileSect + oneHalf))) {

	if ($('#nav-list').children().eq(1).children().hasClass('active-icon') !== true) {
		$('#nav-list').find('.active-icon').removeClass('active-icon');
		$('#nav-list').children().eq(1).children().addClass('active-icon');
	}
}
else if ((windowTop > langSect) && (windowTop < (langSect + oneHalf))) {
	
	if ($('#nav-list').children().eq(2).children().hasClass('active-icon') !== true) {
		$('#nav-list').find('.active-icon').removeClass('active-icon');
		$('#nav-list').children().eq(2).children().addClass('active-icon');
	}
}
else if ((windowTop > skillsSect) && (windowTop < (skillsSect + oneHalf))) {
	
	if ($('#nav-list').children().eq(3).children().hasClass('active-icon') !== true) {
		$('#nav-list').find('.active-icon').removeClass('active-icon');
		$('#nav-list').children().eq(3).children().addClass('active-icon');
	}
}
else if ((windowTop > portfolioSect) && (windowTop < (portfolioSect + oneHalf))) {
	
	if ($('#nav-list').children().eq(4).children().hasClass('active-icon') !== true) {
		$('#nav-list').find('.active-icon').removeClass('active-icon');
		$('#nav-list').children().eq(4).children().addClass('active-icon');
	}
}
else if ((windowTop > eduSect) && (windowTop < (eduSect + oneHalf))) {
	
	if ($('#nav-list').children().eq(5).children().hasClass('active-icon') !== true) {
		$('#nav-list').find('.active-icon').removeClass('active-icon');
		$('#nav-list').children().eq(5).children().addClass('active-icon');
	}
}
else if (windowBottom === height) {
	
	if ($('#nav-list').children().eq(6).children().hasClass('active-icon') !== true) {
		$('#nav-list').find('.active-icon').removeClass('active-icon');
		$('#nav-list').children().eq(6).children().addClass('active-icon');
	}
}



});
















