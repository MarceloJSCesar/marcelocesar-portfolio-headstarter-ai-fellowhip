$(function(){
	"use strict";

	/*=========================================================================
		Initializing stellar.js Plugin
	=========================================================================*/
	$('.section').stellar({
		horizontalScrolling: false
	});
	
	
	$(window).on('load', function(){
	
		$('body').addClass('loaded');
	
		
		/*=========================================================================
			Portfolio Grid
		=========================================================================*/
		var grid = $('#portfolio-grid');
		grid.shuffle({
			itemSelector: '.item'
		});
		
		$('#portfolio-filters > ul > li > a').on('click', function (e) {
			e.preventDefault();
			var groupName = $(this).attr('data-group');
			$('#portfolio-filters > ul > li > a').removeClass('active');
			$(this).addClass('active');
			grid.shuffle('shuffle', groupName );
		});
		
		$('a.image-link').magnificPopup({
			type: 'image',
			removalDelay: 300,
			mainClass: 'mfp-fade',
			gallery: {
				enabled: true
			}
		});
	
	});
	
	
	
	/*=========================================================================
		Links Navigation System
	=========================================================================*/
	$('.front-person-links > ul > li > a[data-section]').on('click', function(e){
		e.preventDefault();
		var section = $('#' + $(this).data('section'));
		
		if( section.size() != 0 ){
			
			$('body').addClass('section-show');
			
			section.addClass('active');
		
		}
		
	});
	$('.close-btn').on('click', function(){
		$('body').removeClass('section-show');
		$('section.active').removeClass('active');
	});
	
	
	
	/*=========================================================================
		Testimonials Slider
	=========================================================================*/
	$('.testimonials-slider').owlCarousel({
		singleItem: true
	});
	
	
	
	/*=========================================================================
		Skill Bar's Percent Initialization from attribute data-percent
	=========================================================================*/
	$('.skill-bar').each(function(){
		var $this = $(this),
			percent = parseInt( $this.data('percent'), 10 );
		
		$this.find('.bar').css('width', percent + '%');
	});
	
	
	
	
	/*=========================================================================
		Contact Form
	=========================================================================*/
	(function() {
		emailjs.init({
			publicKey: "qV6rIdcKBNqJABdII",
		  }); 
	})();
	
	window.onload = function() {
		document.getElementById('contact-form').addEventListener('submit', function(event) {
			event.preventDefault();
	
			// Collect data from the form fields
			var name = document.getElementById('Name');
			var email = document.getElementById('Email');
			var phone = document.getElementById('Phone');
			var website = document.getElementById('Website');
			var message = document.getElementById('Message');

			// Define the parameters to send to EmailJS
			var templateParams = {
				"from_name": name.value,
				"from_email": email.value,
				"phone": phone.value,
				"website": website.value,
				"message": message.value,
			};
	
			emailjs.send('service_3p9jcq7', 'template_2c1wbyq', templateParams)
				.then(function(response) {
					document.getElementById('contact-form-result').innerHTML =
						"<div class='form-group' >\
							<div class='alert alert-success alert-dismissible' role='alert'> \
								<button type='button' class='close' data-dismiss='alert' aria-label='Close' > \
									<i class='ion-ios-close-empty' ></i> \
								</button> \
								<strong>Message Sent!</strong> We'll be in touch as soon as possible\
							</div>\
						</div>";
					document.getElementById('contact-form').reset();
				}, function(error) {
					document.getElementById('contact-form-result').innerHTML =
						"<div class='form-group' >\
							<div class='alert alert-danger alert-dismissible' role='alert'> \
								<button type='button' class='close' data-dismiss='alert' aria-label='Close' > \
									<i class='ion-ios-close-empty' ></i> \
								</button> \
								<strong>Error!</strong> Sorry, an error occurred. Try again.\
							</div>\
						</div>";
				});
		});
	};
	
	
});