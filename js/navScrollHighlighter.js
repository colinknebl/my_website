var scroller = {

	homeHeight: function(){
		return $('#home').innerHeight();
	},

	homeTop50: function(){
		return scroller.homeHeight() * 0.5;
	},

	profileHeight: function(){
		return $('#profile').innerHeight();
	},

	profileTop50: function(){
		return scroller.profileHeight() + (scroller.homeHeight() * 0.5);
	},

	languagesHeight: function(){
		return $('#languages').innerHeight();
	},

	languagesTop: function(){
		return ($('#home').innerHeight()) + ($('#profile').innerHeight());
	},

	languagesTop50: function(){
		return scroller.languagesTop() + (scroller.languagesHeight() * 0.5);
	},

	skillsHeight: function(){
		return $('#skills').innerHeight();
	},

	skillsTop: function(){
		return ($('#home').innerHeight()) + ($('#profile').innerHeight()) + ($('#languages').innerHeight());
	},

	skillsTop50: function(){
		return scroller.skillsTop() + (scroller.skillsHeight() * 0.5);
	},

	portfolioHeight: function(){
		return $('#portfolio').innerHeight();
	},

	portfolioTop: function(){
		return ($('#home').innerHeight()) + ($('#profile').innerHeight()) + ($('#languages').innerHeight()) + ($('#skills').innerHeight());
	},

	portfolioTop50: function(){
		return scroller.portfolioTop() + (scroller.portfolioHeight() * 0.5);
	},

	educationHeight: function(){
		return $('#education').innerHeight();
	},

	educationTop: function(){
		return ($('#home').innerHeight()) + ($('#profile').innerHeight()) + ($('#languages').innerHeight()) + ($('#skills').innerHeight()) + $('#portfolio').innerHeight();
	},

	educationTop50: function(){
		return scroller.educationTop() + (scroller.educationHeight() * 0.5);
	},

	windowHeight: function(){
		var body = document.body,
		html = document.documentElement;
		// height of the page
		var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
		return height;
	},

	windowTop: function(){ 
		return $(window).scrollTop();
	},

	windowBottom: function(){
		return scroller.windowTop() + $(window).innerHeight();
	},

	navIcons: function(){
		return $('#nav-list').children();
	},

	removeActiveIcons: function(){
		$('#nav-list').find('.active-icon').removeClass('active-icon');
	},

	scroll: function(){
		
		var windowTop = scroller.windowTop();
		var windowBottom = scroller.windowBottom();

		if ((windowTop >= 0) && (windowTop <= scroller.homeTop50())) {
			var h = $('#nav-list').children().eq(0).children();
			if (h.hasClass('active-icon') !== true) {
				scroller.removeActiveIcons();
				h.addClass('active-icon');
			}
		}
		else if ((windowTop >= scroller.homeHeight()) && (windowTop <= scroller.profileTop50())) {
			var p = $('#nav-list').children().eq(1).children();
			if (p.hasClass('active-icon') !== true) {
				scroller.removeActiveIcons();
				p.addClass('active-icon');
			}
		}
		else if ((windowTop >= scroller.languagesTop()) && (windowTop <= scroller.languagesTop50())) {
			var l = $('#nav-list').children().eq(2).children();
			if (l.hasClass('active-icon') !== true) {
				scroller.removeActiveIcons();
				l.addClass('active-icon');
			}
		}
		else if ((windowTop >= scroller.skillsTop()) && (windowTop <= scroller.skillsTop50())) {
			var s = $('#nav-list').children().eq(3).children();
			if (s.hasClass('active-icon') !== true) {
				scroller.removeActiveIcons();
				s.addClass('active-icon');
			}
		}
		else if ((windowTop >= scroller.portfolioTop()) && (windowTop <= scroller.portfolioTop50())) {
			var pf = $('#nav-list').children().eq(4).children();
			if (pf.hasClass('active-icon') !== true) {
				scroller.removeActiveIcons();
				pf.addClass('active-icon');
			}
		}
		else if ((windowTop >= scroller.educationTop()) && (windowTop <= scroller.educationTop50())) {
			var e = $('#nav-list').children().eq(5).children();
			if (e.hasClass('active-icon') !== true) {
				scroller.removeActiveIcons();
				e.addClass('active-icon');
			}
		}
		else if (windowBottom === scroller.windowHeight()) {
			var c = $('#nav-list').children().eq(6).children();
			if (c.hasClass('active-icon') !== true) {
				scroller.removeActiveIcons();
				c.addClass('active-icon');
			}
		}
	},
};

$(window).resize(function(){

	if ($('#social-icons').css('display') === 'block') {
		$(document).scroll(scroller.scroll);
	}

});

$(window).trigger('resize');