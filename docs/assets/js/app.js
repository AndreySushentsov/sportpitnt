(function() {
  'use strict';

  setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);

})();

//fixed sidebar
var pWidth = $(".c-categories__menu").parent().innerWidth();


 $('.c-categories__menu').css({'width' : pWidth});

 $(window).resize(function(){
     pWidth = $(".c-categories__menu").parent().innerWidth();
     $('.c-categories__menu').css({'width' : pWidth});
 });
$(window).scroll(function() {
    var scrollVal = window.scrollY;
    if (scrollVal >= 1){
      $('nav').css({'background': '#232323'});
    }
    else {
      $('nav').css({'background': 'transparent'});
    }
    if (scrollVal >= 380){
      $('.c-categories__menu').css({'position':'fixed','margin-top':'-380px'});
    }else {
      $('.c-categories__menu').css({'position':'absolute','margin-top':0});
    }
  }
);
// smooth scroll
$("#scrollSpy").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    top = top -70;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 500);
});

//burger
$('.nav__burger').click(function () {
  $(this).toggleClass('change');
  $('.overlay-nav__container').toggleClass('show');
})

//flipp card
$('.c-card__container').click(function () {
    $(this).toggleClass('flipped');
});

//accordion
var acc = document.getElementsByClassName("c-products__title");
var width = document.documentElement.clientWidth;
var i;
if(width <= 463){
  for (i = 0; i < acc.length; i++) {
      acc[i].onclick = function(){
        console.log(document.documentElement.clientWidth);
          /* Toggle between hiding and showing the active panel */
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
              panel.style.display = "none";
          } else {
              panel.style.display = "block";
          }
      };
  };
};

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
    setTimeout(showSlides, 6150);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVhdGluZ19waWN0dXJlJykuY2xhc3NMaXN0LmFkZCgnbS0tc2hvdycpO1xyXG4gIH0sIDEwMDApO1xyXG5cclxufSkoKTtcclxuXHJcbi8vZml4ZWQgc2lkZWJhclxyXG52YXIgcFdpZHRoID0gJChcIi5jLWNhdGVnb3JpZXNfX21lbnVcIikucGFyZW50KCkuaW5uZXJXaWR0aCgpO1xyXG5cclxuXHJcbiAkKCcuYy1jYXRlZ29yaWVzX19tZW51JykuY3NzKHsnd2lkdGgnIDogcFdpZHRofSk7XHJcblxyXG4gJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4gICAgIHBXaWR0aCA9ICQoXCIuYy1jYXRlZ29yaWVzX19tZW51XCIpLnBhcmVudCgpLmlubmVyV2lkdGgoKTtcclxuICAgICAkKCcuYy1jYXRlZ29yaWVzX19tZW51JykuY3NzKHsnd2lkdGgnIDogcFdpZHRofSk7XHJcbiB9KTtcclxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgIHZhciBzY3JvbGxWYWwgPSB3aW5kb3cuc2Nyb2xsWTtcclxuICAgIGlmIChzY3JvbGxWYWwgPj0gMSl7XHJcbiAgICAgICQoJ25hdicpLmNzcyh7J2JhY2tncm91bmQnOiAnIzIzMjMyMyd9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAkKCduYXYnKS5jc3MoeydiYWNrZ3JvdW5kJzogJ3RyYW5zcGFyZW50J30pO1xyXG4gICAgfVxyXG4gICAgaWYgKHNjcm9sbFZhbCA+PSAzODApe1xyXG4gICAgICAkKCcuYy1jYXRlZ29yaWVzX19tZW51JykuY3NzKHsncG9zaXRpb24nOidmaXhlZCcsJ21hcmdpbi10b3AnOictMzgwcHgnfSk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICQoJy5jLWNhdGVnb3JpZXNfX21lbnUnKS5jc3Moeydwb3NpdGlvbic6J2Fic29sdXRlJywnbWFyZ2luLXRvcCc6MH0pO1xyXG4gICAgfVxyXG4gIH1cclxuKTtcclxuLy8gc21vb3RoIHNjcm9sbFxyXG4kKFwiI3Njcm9sbFNweVwiKS5vbihcImNsaWNrXCIsXCJhXCIsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgLy/QvtGC0LzQtdC90Y/QtdC8INGB0YLQsNC90LTQsNGA0YLQvdGD0Y4g0L7QsdGA0LDQsdC+0YLQutGDINC90LDQttCw0YLQuNGPINC/0L4g0YHRgdGL0LvQutC1XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8v0LfQsNCx0LjRgNCw0LXQvCDQuNC00LXQvdGC0LjRhNC40LrQsNGC0L7RgCDQsdC+0LrQsCDRgSDQsNGC0YDQuNCx0YPRgtCwIGhyZWZcclxuICAgIHZhciBpZCAgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKSxcclxuXHJcbiAgICAvL9GD0LfQvdCw0LXQvCDQstGL0YHQvtGC0YMg0L7RgiDQvdCw0YfQsNC70LAg0YHRgtGA0LDQvdC40YbRiyDQtNC+INCx0LvQvtC60LAg0L3QsCDQutC+0YLQvtGA0YvQuSDRgdGB0YvQu9Cw0LXRgtGB0Y8g0Y/QutC+0YDRjFxyXG4gICAgdG9wID0gJChpZCkub2Zmc2V0KCkudG9wO1xyXG4gICAgdG9wID0gdG9wIC03MDtcclxuICAgIC8v0LDQvdC40LzQuNGA0YPQtdC8INC/0LXRgNC10YXQvtC0INC90LAg0YDQsNGB0YHRgtC+0Y/QvdC40LUgLSB0b3Ag0LfQsCAxNTAwINC80YFcclxuICAgICQoJ2JvZHksaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogdG9wfSwgNTAwKTtcclxufSk7XHJcblxyXG4vL2J1cmdlclxyXG4kKCcubmF2X19idXJnZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgJCh0aGlzKS50b2dnbGVDbGFzcygnY2hhbmdlJyk7XHJcbiAgJCgnLm92ZXJsYXktbmF2X19jb250YWluZXInKS50b2dnbGVDbGFzcygnc2hvdycpO1xyXG59KVxyXG5cclxuLy9mbGlwcCBjYXJkXHJcbiQoJy5jLWNhcmRfX2NvbnRhaW5lcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2ZsaXBwZWQnKTtcclxufSk7XHJcblxyXG4vL2FjY29yZGlvblxyXG52YXIgYWNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImMtcHJvZHVjdHNfX3RpdGxlXCIpO1xyXG52YXIgd2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbnZhciBpO1xyXG5pZih3aWR0aCA8PSA0NjMpe1xyXG4gIGZvciAoaSA9IDA7IGkgPCBhY2MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgYWNjW2ldLm9uY2xpY2sgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XHJcbiAgICAgICAgICAvKiBUb2dnbGUgYmV0d2VlbiBoaWRpbmcgYW5kIHNob3dpbmcgdGhlIGFjdGl2ZSBwYW5lbCAqL1xyXG4gICAgICAgICAgdmFyIHBhbmVsID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICBpZiAocGFuZWwuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgcGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBwYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gIH07XHJcbn07XHJcblxyXG4vLyBTTElERVJcclxuXHJcbnZhciBzbGlkZUluZGV4ID0gMDtcclxuZnVuY3Rpb24gc2hvd1NsaWRlcygpIHtcclxuICAgIHZhciBpO1xyXG4gICAgdmFyIHNsaWRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Mtc2xpZGVyX19jb250ZW50Jyk7XHJcbiAgICB2YXIgZG90cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Mtc2xpZGVyX19idXR0b24nKTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzbGlkZXNbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gICAgZm9yIChpID0gMDsgaSA8IGRvdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBkb3RzW2ldLmNsYXNzTmFtZSA9IGRvdHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgc2xpZGVJbmRleCsrO1xyXG4gICAgaWYgKHNsaWRlSW5kZXg+IHNsaWRlcy5sZW5ndGgpIHtzbGlkZUluZGV4ID0gMX1cclxuICAgIHNsaWRlc1tzbGlkZUluZGV4LTFdLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIGRvdHNbc2xpZGVJbmRleC0xXS5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XHJcbiAgICBzZXRUaW1lb3V0KHNob3dTbGlkZXMsIDYxNTApO1xyXG59XHJcblxyXG5cclxuLypcclxuZnVuY3Rpb24gc2hvd1NsaWRlcyhuKSB7XHJcbiAgbGV0IGk7XHJcbiAgbGV0IHNsaWRlcyA9ICQoJy5jLXNsaWRlcl9fY29udGVudCcpO1xyXG4gIGxldCBkb3RzID0gJCgnLmMtc2xpZGVyX19idXR0b24nKTtcclxuXHJcbiAgaWYoIG4gPiBzbGlkZXMubGVuZ3RoKXtcclxuICAgIHNsaWRlSW5kZXggPSAxO1xyXG4gIH1cclxuICBpZiggbiA8IDEpe1xyXG4gICAgc2xpZGVJbmRleCA9IHNsaWRlcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBmb3IoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG4gIGZvciAoaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGRvdHNbaV0uY2xhc3NOYW1lID0gZG90c1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XHJcbiAgfVxyXG4gIHNsaWRlc1tzbGlkZUluZGV4IC0gMV0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICBkb3RzW3NsaWRlSW5kZXgtMV0uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xyXG5cclxufVxyXG4qL1xyXG5mdW5jdGlvbiBjdXJlbnRTbGlkZShuKSB7XHJcbiAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ID0gbik7XHJcbn1cclxuZnVuY3Rpb24gcGx1c1NsaWRlKG4pIHtcclxuICBzaG93U2xpZGVzKHNsaWRlSW5kZXggKz0gbiApO1xyXG59XHJcbnNob3dTbGlkZXMoKTtcclxuIl19
