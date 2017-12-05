// Sidebar Animation

var animationend = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

$(document).click(function(event) { 
    if(!$(event.target).closest('#sidebar').length && !$(event.target).closest('.js-cart-open').length) {
        if($('#sidebar').is(':visible')) {
	        $('#sidebar').addClass('animated slideOutRight').one(animationend, function() {
	        	$('#sidebar').hide().removeClass('animated slideOutRight');
	        });
        }
    }    
});

$(document).on('click', '.js-cart-open', function() {
    if(!$('#sidebar').is(':visible')) {
        $('#sidebar').addClass('animated slideInRight').show().one(animationend, function() {
        	$('#sidebar').removeClass('animated slideInRight');
        });
    }
});