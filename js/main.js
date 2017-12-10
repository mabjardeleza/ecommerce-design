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

// Lightbox from W3 Schools 
// https://www.w3schools.com/howto/howto_js_lightbox.asp

var slideIndex = 1;
var slides = document.getElementsByClassName("slide");

$(document).on('click', '.ProductPage-gallery-image', function() {
    var slideIndex = $(this).data('lightbox-target') - 1;
    showSlides(slideIndex);
    $('#lightbox').css('display', 'flex');
});

$(document).on('click', '.js-lightbox-close', function() {
    $('#lightbox').css('display', 'none');
});

$(document).on('click', '.js-lightbox-prev', function() {
    slideIndex > 0 ? slideIndex-- : slideIndex = slides.length-1;
    showSlides(slideIndex);
});

$(document).on('click', '.js-lightbox-next', function() {
    slideIndex < slides.length-1 ? slideIndex++ : slideIndex = 0;
    showSlides(slideIndex);
});

function showSlides(n) {
    slideIndex = n;
    $('.slide').each(function(i) {
        i == slideIndex ? $(this).show() : $(this).hide();
    });
}