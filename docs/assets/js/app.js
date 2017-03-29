(function() {
  'use strict';

  setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);

})();


//  PARALAX

// main module
/*
var paralax = (function() {
  var bg = document.querySelector('.c-image');
  var section = document.querySelector('.c-image-stars-img');
  var user = document.querySelector('.c-card');

  return {
    move: function(block, windowScroll, amount) {
      var strafe = windowScroll / -amount + '%';
      var styleBg = block.style;
      styleBg.top = strafe;
        console.log(styleBg.top);
    },
    init: function(x) {
      this.move(bg, x, 40);
    }
  }
}());

// scroll
window.onscroll = function() {
  var wScroll = window.pageYOffset;
  paralax.init(wScroll);
  console.log(paralax.move());
};
*/

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
    setTimeout(showSlides, 4000); // Change image every 2 seconds
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWF0aW5nX3BpY3R1cmUnKS5jbGFzc0xpc3QuYWRkKCdtLS1zaG93Jyk7XHJcbiAgfSwgMTAwMCk7XHJcblxyXG59KSgpO1xyXG5cclxuXHJcbi8vICBQQVJBTEFYXHJcblxyXG4vLyBtYWluIG1vZHVsZVxyXG4vKlxyXG52YXIgcGFyYWxheCA9IChmdW5jdGlvbigpIHtcclxuICB2YXIgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYy1pbWFnZScpO1xyXG4gIHZhciBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmMtaW1hZ2Utc3RhcnMtaW1nJyk7XHJcbiAgdmFyIHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYy1jYXJkJyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBtb3ZlOiBmdW5jdGlvbihibG9jaywgd2luZG93U2Nyb2xsLCBhbW91bnQpIHtcclxuICAgICAgdmFyIHN0cmFmZSA9IHdpbmRvd1Njcm9sbCAvIC1hbW91bnQgKyAnJSc7XHJcbiAgICAgIHZhciBzdHlsZUJnID0gYmxvY2suc3R5bGU7XHJcbiAgICAgIHN0eWxlQmcudG9wID0gc3RyYWZlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0eWxlQmcudG9wKTtcclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbih4KSB7XHJcbiAgICAgIHRoaXMubW92ZShiZywgeCwgNDApO1xyXG4gICAgfVxyXG4gIH1cclxufSgpKTtcclxuXHJcbi8vIHNjcm9sbFxyXG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICBwYXJhbGF4LmluaXQod1Njcm9sbCk7XHJcbiAgY29uc29sZS5sb2cocGFyYWxheC5tb3ZlKCkpO1xyXG59O1xyXG4qL1xyXG5cclxuLy8gU0xJREVSXHJcblxyXG52YXIgc2xpZGVJbmRleCA9IDA7XHJcbmZ1bmN0aW9uIHNob3dTbGlkZXMoKSB7XHJcbiAgICB2YXIgaTtcclxuICAgIHZhciBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjLXNsaWRlcl9fY29udGVudCcpO1xyXG4gICAgdmFyIGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjLXNsaWRlcl9fYnV0dG9uJyk7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIH1cclxuICAgIGZvciAoaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZG90c1tpXS5jbGFzc05hbWUgPSBkb3RzW2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcclxuICAgIH1cclxuICAgIHNsaWRlSW5kZXgrKztcclxuICAgIGlmIChzbGlkZUluZGV4PiBzbGlkZXMubGVuZ3RoKSB7c2xpZGVJbmRleCA9IDF9XHJcbiAgICBzbGlkZXNbc2xpZGVJbmRleC0xXS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICBkb3RzW3NsaWRlSW5kZXgtMV0uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xyXG4gICAgc2V0VGltZW91dChzaG93U2xpZGVzLCA0MDAwKTsgLy8gQ2hhbmdlIGltYWdlIGV2ZXJ5IDIgc2Vjb25kc1xyXG59XHJcbi8qXHJcbmZ1bmN0aW9uIHNob3dTbGlkZXMobikge1xyXG4gIGxldCBpO1xyXG4gIGxldCBzbGlkZXMgPSAkKCcuYy1zbGlkZXJfX2NvbnRlbnQnKTtcclxuICBsZXQgZG90cyA9ICQoJy5jLXNsaWRlcl9fYnV0dG9uJyk7XHJcblxyXG4gIGlmKCBuID4gc2xpZGVzLmxlbmd0aCl7XHJcbiAgICBzbGlkZUluZGV4ID0gMTtcclxuICB9XHJcbiAgaWYoIG4gPCAxKXtcclxuICAgIHNsaWRlSW5kZXggPSBzbGlkZXMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgZm9yKGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKXtcclxuICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuICBmb3IgKGkgPSAwOyBpIDwgZG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBkb3RzW2ldLmNsYXNzTmFtZSA9IGRvdHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xyXG4gIH1cclxuICBzbGlkZXNbc2xpZGVJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgZG90c1tzbGlkZUluZGV4LTFdLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcclxuXHJcbn1cclxuKi9cclxuZnVuY3Rpb24gY3VyZW50U2xpZGUobikge1xyXG4gIHNob3dTbGlkZXMoc2xpZGVJbmRleCA9IG4pO1xyXG59XHJcbmZ1bmN0aW9uIHBsdXNTbGlkZShuKSB7XHJcbiAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ICs9IG4gKTtcclxufVxyXG5zaG93U2xpZGVzKCk7XHJcbiJdfQ==
