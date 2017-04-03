(function() {
  'use strict';

  setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);

})();

$('.nav__burger').click(function () {
  $(this).toggleClass('change');
  $('.overlay-nav__container').toggleClass('show');
})

// SLIDER

var slideIndex = 0;
function showSlides() {
    var i;
    var slides = document.getElementsByClassName('c-slider__content');
    var dots = document.getElementsByClassName('c-slider__button');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 6150); // Change image every 2 seconds
}


/*
function showSlides(n) {
  let i;
  let slides = $('.c-slider__content');
  let dots = $('.c-slider__button');

  if( n > slides.length){
    slideIndex = 1;
  }
  if( n < 1){
    slideIndex = slides.length;
  }

  for(i = 0; i < slides.length; i++){
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = 'flex';
  dots[slideIndex-1].className += " active";

}
*/
function curentSlide(n) {
  showSlides(slideIndex = n);
}
function plusSlide(n) {
  showSlides(slideIndex += n );
}
showSlides();


// paralax

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWF0aW5nX3BpY3R1cmUnKS5jbGFzc0xpc3QuYWRkKCdtLS1zaG93Jyk7XHJcbiAgfSwgMTAwMCk7XHJcblxyXG59KSgpO1xyXG5cclxuJCgnLm5hdl9fYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICQodGhpcykudG9nZ2xlQ2xhc3MoJ2NoYW5nZScpO1xyXG4gICQoJy5vdmVybGF5LW5hdl9fY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcclxufSlcclxuXHJcbi8vIFNMSURFUlxyXG5cclxudmFyIHNsaWRlSW5kZXggPSAwO1xyXG5mdW5jdGlvbiBzaG93U2xpZGVzKCkge1xyXG4gICAgdmFyIGk7XHJcbiAgICB2YXIgc2xpZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYy1zbGlkZXJfX2NvbnRlbnQnKTtcclxuICAgIHZhciBkb3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYy1zbGlkZXJfX2J1dHRvbicpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgZG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRvdHNbaV0uY2xhc3NOYW1lID0gZG90c1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XHJcbiAgICB9XHJcbiAgICBzbGlkZUluZGV4Kys7XHJcbiAgICBpZiAoc2xpZGVJbmRleD4gc2xpZGVzLmxlbmd0aCkge3NsaWRlSW5kZXggPSAxfVxyXG4gICAgc2xpZGVzW3NsaWRlSW5kZXgtMV0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgZG90c1tzbGlkZUluZGV4LTFdLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcclxuICAgIHNldFRpbWVvdXQoc2hvd1NsaWRlcywgNjE1MCk7IC8vIENoYW5nZSBpbWFnZSBldmVyeSAyIHNlY29uZHNcclxufVxyXG5cclxuXHJcbi8qXHJcbmZ1bmN0aW9uIHNob3dTbGlkZXMobikge1xyXG4gIGxldCBpO1xyXG4gIGxldCBzbGlkZXMgPSAkKCcuYy1zbGlkZXJfX2NvbnRlbnQnKTtcclxuICBsZXQgZG90cyA9ICQoJy5jLXNsaWRlcl9fYnV0dG9uJyk7XHJcblxyXG4gIGlmKCBuID4gc2xpZGVzLmxlbmd0aCl7XHJcbiAgICBzbGlkZUluZGV4ID0gMTtcclxuICB9XHJcbiAgaWYoIG4gPCAxKXtcclxuICAgIHNsaWRlSW5kZXggPSBzbGlkZXMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgZm9yKGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKXtcclxuICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuICBmb3IgKGkgPSAwOyBpIDwgZG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBkb3RzW2ldLmNsYXNzTmFtZSA9IGRvdHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xyXG4gIH1cclxuICBzbGlkZXNbc2xpZGVJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgZG90c1tzbGlkZUluZGV4LTFdLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcclxuXHJcbn1cclxuKi9cclxuZnVuY3Rpb24gY3VyZW50U2xpZGUobikge1xyXG4gIHNob3dTbGlkZXMoc2xpZGVJbmRleCA9IG4pO1xyXG59XHJcbmZ1bmN0aW9uIHBsdXNTbGlkZShuKSB7XHJcbiAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ICs9IG4gKTtcclxufVxyXG5zaG93U2xpZGVzKCk7XHJcblxyXG5cclxuLy8gcGFyYWxheFxyXG4iXX0=
