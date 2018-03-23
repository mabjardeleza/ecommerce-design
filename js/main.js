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

$(document).on('click', '.js-choose-variant', function() {
    $('.ProductPage-product-size.selected').removeClass('selected');
    $(this).addClass('selected');
});

$(document).on('click', '.js-choose-swatch', function() {
    $('.ProductPage-product-swatch.selected').removeClass('selected');
    $(this).addClass('selected');
});

// Carousel

var slideIndex = 0;
var page = 'ProductPage';
if ($('.ExperiencesPage').length) {
    page = 'ExperiencesPage';
}
var slides = document.getElementsByClassName(page + "-banner-image");
changeSlides(slideIndex);

$(document).on('click', '.js-lightbox-prev', function() {
    slideIndex > 0 ? slideIndex-- : slideIndex = slides.length-1;
    changeSlides(slideIndex);
});

$(document).on('click', '.js-lightbox-next', function() {
    slideIndex < slides.length-1 ? slideIndex++ : slideIndex = 0;
    changeSlides(slideIndex);
});

function changeSlides(n) {
    slideIndex = n;
    $('.' + page + '-banner-image').each(function(i) {
        i == slideIndex ? $(this).show() : $(this).hide();
    });
}

// Lightbox from W3 Schools 
// https://www.w3schools.com/howto/howto_js_lightbox.asp

// var slideIndex = 1;
// var slides = document.getElementsByClassName("slide");

// $(document).on('click', '.ProductPage-gallery-image', function() {
//     var slideIndex = $(this).data('lightbox-target') - 1;
//     showSlides(slideIndex);
//     $('#lightbox').css('display', 'flex');
// });

// $(document).on('click', '.js-lightbox-close', function() {
//     $('#lightbox').css('display', 'none');
// });

// $(document).on('click', '.js-lightbox-prev', function() {
//     slideIndex > 0 ? slideIndex-- : slideIndex = slides.length-1;
//     showSlides(slideIndex);
// });

// $(document).on('click', '.js-lightbox-next', function() {
//     slideIndex < slides.length-1 ? slideIndex++ : slideIndex = 0;
//     showSlides(slideIndex);
// });

// function showSlides(n) {
//     slideIndex = n;
//     $('.slide').each(function(i) {
//         i == slideIndex ? $(this).show() : $(this).hide();
//     });
// }