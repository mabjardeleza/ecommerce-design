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
// TODO: convert to jquery

function openModal() {
  document.getElementById('lightbox').style.display = "flex";
}

function closeModal() {
  document.getElementById('lightbox').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}