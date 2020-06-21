// [MASTER JAVASCRIPT]
//	Project     :	CHARITY TEMPLATES
//	Version     :	1.0
//	Last Change : 	02/02/2017
//	Primary Use :   CHARITY TEMPLATES

	$(document).on('ready', function() {
		"use strict"; //Start of Use Strict
		var menu_bar = $('.navbar-default');
		var menu_li = $('.navbar-default li a');
		var collapse = $('.navbar-collapse');

		//AFTER SCROLL MENU CREATED,MENU BGCOLOR AND TEXT COLOR
		var x = $("#top-nav").offset().top
		if (x > 50) {
			menu_bar.fadeIn().css({
				"background-color": "#f7f7f7",
				"color": "#666666",
				"box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"
			});
			menu_li.css({
				"color": "#666666"
			});			
				
		} 
		else {
			menu_bar.css({
				"background-color": "#f7f7f7",
				"color": "#666666",
				"box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"
			});
			menu_li.css({
				"color": "#666666"
			});			
			
			}

		$(document).on('scroll', function() {
			var y = $(this).scrollTop();
			if (y > 50) {
				menu_bar.fadeIn().css({
					"background-color": "#f7f7f7",
					"color": "#666666",
					"box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"
				});
				menu_li.css({
					"color": "#666666"
				});
				
				
			}
			else {
				menu_bar.css({
					"background-color": "#f7f7f7",
					"color": "#666666",
					"box-shadow": "0px 0px 5px rgba(0,0,0,0.3)"
				});
				menu_li.css({
					"color": "#666666"
				});	
			}
		});

		//RESPONSIVE MENU SHOW AND HIDE FUNCTION
		menu_li.on("click", function(event) {			
			if (!$(this).hasClass('dropdown-toggle')) {	
			
				var toggle = $(".navbar-toggle").is(":visible");
				if (toggle) {
				  $(".navbar-collapse").collapse('hide');
				}
			}
			event.preventDefault();
		});
		

		//RESPONSIVE MENU BGCOLOR
		$('.navbar-header button').on('click', function(e) {
			$('#bs-example-navbar-collapse-1').css({
				"background-color": "#f7f7f7"
			});
			$('#bs-example-navbar-collapse-1 li a').css({
				"color": "#666666"
			});
		});			
		
		//MENU BAR SMOOTH SCROLLING FUNCTION		
		$( "#menu-list" ).on( "click", ".pagescroll", function( event ) {					
				event.preventDefault();	
				var hash_tag= $(this).attr('href');
				$('html, body').animate({
				scrollTop: $(hash_tag).offset().top - 50
			}, 2000);	
			return false;
		});		
		
		
		//POPUP FORM
		 $(document).ready(function () {

			$('#fadeandscale').popup({
				pagecontainer: '.container',
				transition: 'all 0.3s'
			});

		});

		//Get URL parameter
		var getUrlParameter = function getUrlParameter(sParam) {
			var sPageURL = decodeURIComponent(window.location.search.substring(1)),
				sURLVariables = sPageURL.split('&'),
				sParameterName,
				i;
			for (i = 0; i < sURLVariables.length; i++) {
				sParameterName = sURLVariables[i].split('=');

				if (sParameterName[0] === sParam) {
					return sParameterName[1] === undefined ? true : sParameterName[1];
				}
			}
		};
		
		//POPUP MSG BOX
		var cancel = getUrlParameter('cancel');
		var success = getUrlParameter('success');	
		if (cancel=='true') {
			$('#fade').fadeIn();
			$('#cancel_btn').fadeIn();	
		}
		else if (success=='true') {
			$('#fade').fadeIn();
			$('#success_btn').fadeIn();	
		}
		$('.close').on('click', function() {		
			$('#fade').fadeOut();
			$('#cancel_btn').fadeOut();
			$('#success_btn').fadeOut();
		});
		
		$('#donate-btn').on('click', function() {	
			
			var amt = $('#amounts').val();
			if(amt == ""){
				$('#amounts').prop('required',true);
			}else{
				return true;
			}			
		});
		
		
		
	
		//SELECT BOX VALUE POPULATE IN TEXT BOX
		var selected_val = $("select[name=amount] option:selected").val();	
		if(selected_val != 0){
			$("#amounts").val(selected_val);
		}
		else{				
			$("#amounts").val('').attr('placeholder', 'Amount'); 
		}		
		$('#price-1').on('change', function() {
			var select_optn = $(this).val();	
			  if(select_optn != 0){
					$("#amounts").val(select_optn);				
			  }else{
				$("#amounts").val('').attr('placeholder', 'Amount');
				$("#amounts").attr('placeholder', 'Amount');
			  }
		})
		
	//SELECT BOX DISABLED AND ENABLED
		$('#amounts').on('input', function() { 
			var key_input = $(this).val();
			if(key_input=='') {
				$('#price-1').prop('disabled',false);			
			}			
			else {
				$('#price-1').prop('disabled',true );			
			}
		});	
		
		
		
		//AMOUNT VALIDATION
		$("#amounts").on('keydown',function (e) {
			// Allow: backspace, delete, tab, escape, enter and .
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
				 // Allow: Ctrl+A, Command+A
				(e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
				 // Allow: home, end, left, right, down, up
				(e.keyCode >= 35 && e.keyCode <= 40)) {
					 // let it happen, don't do anything
					 return;
			}
			// Ensure that it is a number and stop the keypress
			if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
				e.preventDefault();
			}
		});
		
			// validate signup form on keyup and submit
		$("#popup-form").validate({
		});
			
		return false;
		// End of use strict
	});