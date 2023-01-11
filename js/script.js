/**
 * WEBSITE: https://dvision.academy
 * FACEBOOK: https://www.facebook.com/datavisionacademy
 */

(function ($) {
	'use strict';

	// Preloader js    
	$(window).on('load', function () {
		$('.preloader').fadeOut(700);
	});

	// Sticky Menu
	$(window).scroll(function () {
		var height = $('.top-header').innerHeight();
		if ($('header').offset().top > 10) {
			$('.top-header').addClass('hide');
			$('.navigation').addClass('nav-bg');
			$('.navigation').css('margin-top', '-' + height + 'px');
		} else {
			$('.top-header').removeClass('hide');
			$('.navigation').removeClass('nav-bg');
			$('.navigation').css('margin-top', '-' + 0 + 'px');
		}
	});
	// navbarDropdown
	if ($(window).width() < 992) {
		$('.navigation .dropdown-toggle').on('click', function () {
			$(this).siblings('.dropdown-menu').animate({
				height: 'toggle'
			}, 300);
		});
	}

	// Background-images
	$('[data-background]').each(function () {
		$(this).css({
			'background-image': 'url(' + $(this).data('background') + ')'
		});
	});

	//Hero Slider
	$('.hero-slider').slick({
		autoplay: true,
		autoplaySpeed: 7500,
		pauseOnFocus: false,
		pauseOnHover: false,
		infinite: true,
		arrows: true,
		fade: true,
		prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-angle-left\'></i></button>',
		nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-angle-right\'></i></button>',
		dots: true
	});
	$('.hero-slider').slickAnimation();

	// venobox popup
	$(document).ready(function () {
		$('.venobox').venobox();
	});


	// filter
	$(document).ready(function () {
		var containerEl = document.querySelector('.filtr-container');
		var filterizd;
		if (containerEl) {
			filterizd = $('.filtr-container').filterizr({});
		}
		//Active changer
		$('.filter-controls li').on('click', function () {
			$('.filter-controls li').removeClass('active');
			$(this).addClass('active');
		});
	});

	//  Count Up
	function counter() {
		var oTop;
		if ($('.count').length !== 0) {
			oTop = $('.count').offset().top - window.innerHeight;
		}
		if ($(window).scrollTop() > oTop) {
			$('.count').each(function () {
				var $this = $(this),
					countTo = $this.attr('data-count');
				$({
					countNum: $this.text()
				}).animate({
					countNum: countTo
				}, {
					duration: 1000,
					easing: 'swing',
					step: function () {
						$this.text(Math.floor(this.countNum));
					},
					complete: function () {
						$this.text(this.countNum);
					}
				});
			});
		}
	}
	$(window).on('scroll', function () {
		counter();
	});

})(jQuery);

//Save Subscribers
async function saveNewPerson() {
	if (document.getElementById("newsletter").value != null && document.getElementById("newsletter").value != '') {
		const person = new Parse.Object("Person");

		person.set("email", document.getElementById("newsletter").value);
		try {
			let result = await person.save()
			console.log('New subscriber created with objectId: ' + result.id);
			document.getElementById("newsletter").value = '';
			document.getElementById("response").innerHTML = 'Thanks for subscribining to our newsletter. We will get in touch with you soon.';
		} catch (error) {
			console.log('Failed to save new subscriber, with error code: ' + error.message);
			document.getElementById("response").innerHTML = 'You were not subscribed';
		}
	} else {
		console.log('No Email id entered, with error code: ');
		document.getElementById("response").innerHTML = 'No Email id entered';
	}

}

//Get subscribers
async function retrievePerson() {
	const query = new Parse.Query("Person");

	try {
		const person = await query.find();
		$.each(person, function (r) {
			$("#subscription").append("<tr><td>" + person[r].id + "</td><td>" + person[r].attributes.email + "</td><td>" + person[r].attributes.createdAt + "</td><td>" + person[r].attributes.updatedAt + "</td></tr>");
		});
	} catch (error) {
		alert(`Failed to retrieve the object, with error code: ${error.message}`);
	}
}

async function retrieveFeedback() {
	const query = new Parse.Query("Feedback");
	try {
		const feedback = await query.find();
		$.each(feedback, function (r) {
			$("#feedback").append("<tr><td>" + feedback[r].id
				+ "</td><td>" + feedback[r].attributes.name
				+ "</td><td>" + feedback[r].attributes.mail
				+ "</td><td>" + feedback[r].attributes.contact
				+ "</td><td>" + feedback[r].attributes.country
				+ "</td><td>" + feedback[r].attributes.course
				+ "</td><td>" + feedback[r].attributes.createdAt
				+ "</td><td>" + feedback[r].attributes.updatedAt
				+ "</td><td>" + feedback[r].attributes.rate
				+ "</td><td>" + feedback[r].attributes.feedback
				+ "</td></tr>");
		});
	} catch (error) {
		alert(`Failed to retrieve the object, with error code: ${error.message}`);
	}
}

async function retrieveSupport() {
	const query = new Parse.Query("Support");
	try {
		const support = await query.find();
		$.each(support, function (r) {
			$("#support").append("<tr><td>" + support[r].id
				+ "</td><td>" + support[r].attributes.name
				+ "</td><td>" + support[r].attributes.email
				+ "</td><td>" + support[r].attributes.subject
				+ "</td><td>" + support[r].attributes.createdAt
				+ "</td><td>" + support[r].attributes.updatedAt
				+ "</td><td>" + support[r].attributes.message
				+ "</td></tr>");
		});
	} catch (error) {
		alert(`Failed to retrieve the object, with error code: ${error.message}`);
	}
}

async function retrieveApplication() {
	const query = new Parse.Query("Application");
	try {
		const application = await query.find();
		$.each(application, function (r) {
			$("#application").append("<tr><td>" + application[r].id
				+ "</td><td>" + application[r].attributes.name
				+ "</td><td>" + application[r].attributes.mail
				+ "</td><td>" + application[r].attributes.contact
				+ "</td><td>" + application[r].attributes.country
				+ "</td><td>" + application[r].attributes.createdAt
				+ "</td><td>" + application[r].attributes.updatedAt
				+ "</td><td>" + application[r].attributes.course
				+ "</td></tr>");
		});
	} catch (error) {
		alert(`Failed to retrieve the object, with error code: ${error.message}`);
	}
}

//Save support
async function saveNewSupport() {
	if (document.getElementById("name").value != null && document.getElementById("name").value != '') {
		if (document.getElementById("mail").value != null && document.getElementById("mail").value != '') {
			if (document.getElementById("subject").value != null && document.getElementById("subject").value != '') {
				if (document.getElementById("message").value != null && document.getElementById("message").value != '') {
					const support = new Parse.Object("Support");
					support.set("name", document.getElementById("name").value);
					support.set("email", document.getElementById("mail").value);
					support.set("subject", document.getElementById("subject").value);
					support.set("message", document.getElementById("message").value);
					try {
						let result = await support.save()
						console.log('New support created with objectId: ' + result.id);
						document.getElementById("name").value = '';
						document.getElementById("mail").value = '';
						document.getElementById("subject").value = '';
						document.getElementById("message").value = '';
						document.getElementById("response").innerHTML = 'Thanks for submitting your message. We will get in touch with you soon.';
					} catch (error) {
						console.log('Failed to save new support, with error code: ' + error.message);
						document.getElementById("response").innerHTML = 'Your support ticket was not created';
					}
				} else {
					console.log('No message entered, with error code: ');
					document.getElementById("response").innerHTML = 'No message entered';
				}
			}
			else {
				console.log('No subject entered, with error code: ');
				document.getElementById("response").innerHTML = 'No subject entered';
			}
		}
		else {
			console.log('No Email Id entered, with error code: ');
			document.getElementById("response").innerHTML = 'No Email id entered';
		}
	}
	else {
		console.log('No name entered, with error code: ');
		document.getElementById("response").innerHTML = 'No name entered';
	}
}

//Save application
async function saveNewApplication() {
	if (document.getElementById("name").value != null && document.getElementById("name").value != '') {
		if (document.getElementById("mail").value != null && document.getElementById("mail").value != '') {
			if (document.getElementById("contact").value != null && document.getElementById("contact").value != '') {
				if (document.getElementById("country").value != null && document.getElementById("country").value != '') {
					if (document.getElementById("course").value != null && document.getElementById("course").value != '') {
						const application = new Parse.Object("Application");
						application.set("name", document.getElementById("name").value);
						application.set("mail", document.getElementById("mail").value);
						application.set("contact", document.getElementById("contact").value);
						application.set("country", document.getElementById("country").value);
						application.set("course", document.getElementById("course").value);
						try {
							let result = await application.save()
							console.log('New application created with objectId: ' + result.id);
							document.getElementById("name").value = '';
							document.getElementById("mail").value = '';
							document.getElementById("contact").value = '';
							document.getElementById("country").value = '';
							document.getElementById("course").value = '';
							document.getElementById("response").innerHTML = 'Your application has been submitted. We will get in touch with you soon.';
						} catch (error) {
							console.log('Failed to save new application, with error code: ' + error.message);
							document.getElementById("response").innerHTML = 'The application could not be submitted';
						}
					} else {
						console.log('No course entered, with error code: ');
						document.getElementById("response").innerHTML = 'No course entered';
					}
				}
				else {
					console.log('No country entered, with error code: ');
					document.getElementById("response").innerHTML = 'No country entered';
				}
			} else {
				console.log('No contact entered, with error code: ');
				document.getElementById("response").innerHTML = 'No contact entered';
			}
		}
		else {
			console.log('No Email Id entered, with error code: ');
			document.getElementById("response").innerHTML = 'No email id entered';
		}
	}
	else {
		console.log('No name entered, with error code: ');
		document.getElementById("response").innerHTML = 'No name entered';
	}
}

//Save feedback
async function saveNewFeedback() {
	if (document.getElementById("name").value != null && document.getElementById("name").value != '') {
		if (document.getElementById("mail").value != null && document.getElementById("mail").value != '') {
			if (document.getElementById("contact").value != null && document.getElementById("contact").value != '') {
				if (document.getElementById("country").value != null && document.getElementById("country").value != '') {
					if (document.getElementById("course").value != null && document.getElementById("course").value != '') {
						if (document.getElementById("rate").value != null && document.getElementById("rate").value != '') {
							if (document.getElementById("feedback").value != null && document.getElementById("feedback").value != '') {
								const feedback = new Parse.Object("Feedback");
								feedback.set("name", document.getElementById("name").value);
								feedback.set("mail", document.getElementById("mail").value);
								feedback.set("contact", document.getElementById("contact").value);
								feedback.set("country", document.getElementById("country").value);
								feedback.set("course", document.getElementById("course").value);
								feedback.set("rate", document.getElementById("rate").value);
								feedback.set("feedback", document.getElementById("feedback").value);
								try {
									let result = await feedback.save()
									console.log('New feedback created with objectId: ' + result.id);
									document.getElementById("name").value = '';
									document.getElementById("mail").value = '';
									document.getElementById("contact").value = '';
									document.getElementById("country").value = '';
									document.getElementById("course").value = '';
									document.getElementById("rate").value = '';
									document.getElementById("feedback").value = '';
									document.getElementById("response").innerHTML = 'Your feedback has been submitted. We appreciate you for these feedbacks.';
								} catch (error) {
									console.log('Failed to save new feedback, with error code: ' + error.message);
									document.getElementById("response").innerHTML = 'The feedback could not be submitted';
								}
							} else {
								console.log('No feedback entered, with error code: ');
								document.getElementById("response").innerHTML = 'No feedback entered';
							}
						} else {
							console.log('No rate entered, with error code: ');
							document.getElementById("response").innerHTML = 'No rate entered';
						}
					} else {
						console.log('No course entered, with error code: ');
						document.getElementById("response").innerHTML = 'No course entered';
					}
				} else {
					console.log('No country entered, with error code: ');
					document.getElementById("response").innerHTML = 'No country entered';
				}
			} else {
				console.log('No contact entered, with error code: ');
				document.getElementById("response").innerHTML = 'No contact entered';
			}
		} else {
			console.log('No Email Id entered, with error code: ');
			document.getElementById("response").innerHTML = 'No email id entered';
		}
	}
	else {
		console.log('No name entered, with error code: ');
		document.getElementById("response").innerHTML = 'No name entered';
	}
}

async function loadData() {
	retrieveApplication();
	retrievePerson();
	retrieveSupport();
	retrieveFeedback();
}

//Save Subscribers
async function saveNewComment() {
	if (document.getElementById("name").value != null && document.getElementById("name").value != '') {
		if (document.getElementById("mail").value != null && document.getElementById("mail").value != '') {
			if (document.getElementById("comment").value != null && document.getElementById("comment").value != '') {
				const comment = new Parse.Object("Comment");
				comment.set("name", document.getElementById("name").value);
				comment.set("mail", document.getElementById("mail").value);
				comment.set("comment", document.getElementById("comment").value);
				try {
					let result = await comment.save()
					document.getElementById("name").value = '';
					document.getElementById("mail").value = '';
					document.getElementById("comment").value = '';
					document.getElementById("response").innerHTML = 'Thanks for reading the blog and dropping your comment';
				} catch (error) {
					document.getElementById("response").innerHTML = 'You comment was not submitted.';
				}
			}else {
				document.getElementById("comment").innerHTML = 'No comment entered';
			}
		}else {
			document.getElementById("mail").innerHTML = 'No mail entered';
		}
	}else {
		document.getElementById("name").innerHTML = 'No full name entered';
	}
}