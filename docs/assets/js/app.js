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
    var slides = $('.c-slider__content');
    var dots = $('.c-slider__button');
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
    setTimeout(showSlides, 5000); // Change image every 2 seconds
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWF0aW5nX3BpY3R1cmUnKS5jbGFzc0xpc3QuYWRkKCdtLS1zaG93Jyk7XHJcbiAgfSwgMTAwMCk7XHJcblxyXG59KSgpO1xyXG5cclxuXHJcbi8vICBQQVJBTEFYXHJcblxyXG4vLyBtYWluIG1vZHVsZVxyXG4vKlxyXG52YXIgcGFyYWxheCA9IChmdW5jdGlvbigpIHtcclxuICB2YXIgYmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYy1pbWFnZScpO1xyXG4gIHZhciBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmMtaW1hZ2Utc3RhcnMtaW1nJyk7XHJcbiAgdmFyIHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYy1jYXJkJyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBtb3ZlOiBmdW5jdGlvbihibG9jaywgd2luZG93U2Nyb2xsLCBhbW91bnQpIHtcclxuICAgICAgdmFyIHN0cmFmZSA9IHdpbmRvd1Njcm9sbCAvIC1hbW91bnQgKyAnJSc7XHJcbiAgICAgIHZhciBzdHlsZUJnID0gYmxvY2suc3R5bGU7XHJcbiAgICAgIHN0eWxlQmcudG9wID0gc3RyYWZlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0eWxlQmcudG9wKTtcclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbih4KSB7XHJcbiAgICAgIHRoaXMubW92ZShiZywgeCwgNDApO1xyXG4gICAgfVxyXG4gIH1cclxufSgpKTtcclxuXHJcbi8vIHNjcm9sbFxyXG53aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICBwYXJhbGF4LmluaXQod1Njcm9sbCk7XHJcbiAgY29uc29sZS5sb2cocGFyYWxheC5tb3ZlKCkpO1xyXG59O1xyXG4qL1xyXG5cclxuLy8gU0xJREVSXHJcblxyXG52YXIgc2xpZGVJbmRleCA9IDA7XHJcbmZ1bmN0aW9uIHNob3dTbGlkZXMoKSB7XHJcbiAgICB2YXIgaTtcclxuICAgIHZhciBzbGlkZXMgPSAkKCcuYy1zbGlkZXJfX2NvbnRlbnQnKTtcclxuICAgIHZhciBkb3RzID0gJCgnLmMtc2xpZGVyX19idXR0b24nKTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzbGlkZXNbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gICAgZm9yIChpID0gMDsgaSA8IGRvdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBkb3RzW2ldLmNsYXNzTmFtZSA9IGRvdHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgc2xpZGVJbmRleCsrO1xyXG4gICAgaWYgKHNsaWRlSW5kZXg+IHNsaWRlcy5sZW5ndGgpIHtzbGlkZUluZGV4ID0gMX1cclxuICAgIHNsaWRlc1tzbGlkZUluZGV4LTFdLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIGRvdHNbc2xpZGVJbmRleC0xXS5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XHJcbiAgICBzZXRUaW1lb3V0KHNob3dTbGlkZXMsIDUwMDApOyAvLyBDaGFuZ2UgaW1hZ2UgZXZlcnkgMiBzZWNvbmRzXHJcbn1cclxuLypcclxuZnVuY3Rpb24gc2hvd1NsaWRlcyhuKSB7XHJcbiAgbGV0IGk7XHJcbiAgbGV0IHNsaWRlcyA9ICQoJy5jLXNsaWRlcl9fY29udGVudCcpO1xyXG4gIGxldCBkb3RzID0gJCgnLmMtc2xpZGVyX19idXR0b24nKTtcclxuXHJcbiAgaWYoIG4gPiBzbGlkZXMubGVuZ3RoKXtcclxuICAgIHNsaWRlSW5kZXggPSAxO1xyXG4gIH1cclxuICBpZiggbiA8IDEpe1xyXG4gICAgc2xpZGVJbmRleCA9IHNsaWRlcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBmb3IoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG4gIGZvciAoaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGRvdHNbaV0uY2xhc3NOYW1lID0gZG90c1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XHJcbiAgfVxyXG4gIHNsaWRlc1tzbGlkZUluZGV4IC0gMV0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICBkb3RzW3NsaWRlSW5kZXgtMV0uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xyXG5cclxufVxyXG4qL1xyXG5mdW5jdGlvbiBjdXJlbnRTbGlkZShuKSB7XHJcbiAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ID0gbik7XHJcbn1cclxuZnVuY3Rpb24gcGx1c1NsaWRlKG4pIHtcclxuICBzaG93U2xpZGVzKHNsaWRlSW5kZXggKz0gbiApO1xyXG59XHJcbnNob3dTbGlkZXMoKTtcclxuIl19
