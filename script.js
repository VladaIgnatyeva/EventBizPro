var slideIndex = 1;
showSlides(slideIndex, 'reviewsSlides');
showSlides(slideIndex, 'gallerySlides');

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n, "reviewsSlides");
}

function plusSlides2(n) {
  showSlides(slideIndex += n, "gallerySlides");
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n, "reviewsSlides");
}

function currentSlide2(n) {
  showSlides(slideIndex = n, "gallerySlides");
}

function showSlides(n, elem) {
  var i;
  var slides = document.getElementsByClassName(elem);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
