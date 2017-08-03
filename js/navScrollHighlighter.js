var scroller = {

	windowTop: function(){

		// the window jQuery element
		var $window = $(window); 

		// the top of the window
		var windowTop = $window.scrollTop();
		console.log('windowTop: the top of the window is ' + windowTop + 'px from the top of the page.');
	},

	resize: function(){

	var body = document.body,
	html = document.documentElement;

	// height of the page
	var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
	// console.log('body.scrollHeight is ' + body.scrollHeight);
	// console.log('body.offsetHeight is ' + body.offsetHeight);
	// console.log('html.clientHeight is ' + html.clientHeight);
	// console.log('html.scrollHeight is ' + html.scrollHeight);
	// console.log('html.offsetHeight is ' + html.offsetHeight);
	console.log('the page height is ' + height + 'px');  

	// get the height of each individual section
	var homeHeight = $('#home').innerHeight();
	console.log('homeHeight is ' + homeHeight);

	var profileHeight = $('#profile').innerHeight();
	console.log('profileHeight is ' + profileHeight);

	var languagesHeight = $('#languages').innerHeight();
	console.log('languagesHeight is ' + languagesHeight);

	var skillsHeight = $('#skills').innerHeight();
	console.log('skillsHeight is ' + skillsHeight);

	var portfolioHeight = $('#portfolio').innerHeight();
	console.log('portfolioHeight is ' + portfolioHeight);

	var educationHeight = $('#education').innerHeight();
	console.log('educationHeight is ' + educationHeight);
	},

	scroll: function(){
		
		// the top of the window
		var windowTop = $(window).scrollTop();
		console.log('windowTop: the top of the window is ' + windowTop + 'px from the top of the page.');

	},

};

$(window).resize(scroller.resize);

$(window).trigger('resize');

$(document).scroll(scroller.scroll);

/*
var homeSect = $('#home').offset().top;
console.log('homeSect is ' + homeSect + 'px from top');

var profileSect = $('#profile').offset().top;
console.log('profileSect is ' + profileSect + 'px from top');
// var pro = document.getElementById('profile');
// console.log(pro.offsetTop);

var langSect = $('#languages').offset().top;
console.log('langSect is ' + langSect + 'px from top');
// var lang = document.getElementById('languages');
// console.log(lang.offsetTop);

var skillsSect = $('#skills').offset().top;
console.log('skillsSect is ' + skillsSect + 'px from top');

var portfolioSect = $('#portfolio').offset().top;
console.log('portfolioSect is ' + portfolioSect + 'px from top');

var eduSect = $('#education').offset().top;
console.log('eduSect is ' + eduSect + 'px from top');
// var edu = document.getElementById('education');
// console.log(edu.offsetTop);



var body = document.body,
	html = document.documentElement;

// height of the page
var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
console.log('body.scrollHeight is ' + body.scrollHeight);
console.log('body.offsetHeight is ' + body.offsetHeight);
console.log('html.clientHeight is ' + html.clientHeight);
console.log('html.scrollHeight is ' + html.scrollHeight);
console.log('html.offsetHeight is ' + html.offsetHeight);
console.log('the page height is ' + height + 'px');

// the window jQuery element
var $window = $(window);           


$(document).scroll(function(){

	console.log('the window height is ' + $window.height() + 'px');

	// the top of the window
	var windowTop = $window.scrollTop();
	console.log('windowTop: the top of the window is ' + windowTop + 'px from the top of the page.');

	// the bottom of the window         
	var windowBottom = windowTop + $window.height(); 
	console.log('windowBottom: = windowTop + $window.height() = the window bottom is ' + windowBottom + 'px from the top of the page.');

	// 25% of the window height
	var oneQuarter = $window.height() * 0.25;
	console.log('oneQuarter: = $window.height() * 0.25 = of the window height is ' + oneQuarter + 'px');

	var oneHalf = $window.height() * 0.5;

	// the top 25% of the window
	var top25 = windowTop + oneQuarter;
	console.log('top25: = windowTop + oneQuarter = % of the window is ' + top25 + 'px');

	console.log('profileSect = ' + profileSect);
	console.log('profileSect + top25 = ' + (profileSect + oneQuarter));

	console.log('***********************************');

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
*/