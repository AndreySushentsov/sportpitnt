(function() {
  'use strict';

  setTimeout(function() {
    document.querySelector('.greating_picture').classList.add('m--show');
  }, 1000);

})();
// добавляем класс active элементу при загрузке документа
$(window).on('load', function () {
  $('#male').addClass('active');
  $('#male_cardio').addClass('active');
  $('.male').addClass('active');
  $('.male_cardio').css({'display':'block'});
})

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

// отображаем блоки с программами на мобильных
if(width <= 463){
  $('.c-programms__category-container').css({'display':'block'});
}
// SLIDER

var slideIndex = 0;
function showSlides() {
    var i;
    var slides = document.getElementsByClassName('c-slider__content');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "flex";
    setTimeout(showSlides, 6150);
}

// переключение между категориями
$('.c-categories__item').on('click',function (e) {
  e.preventDefault();// отменяем событие по умолчанию

  var tabcontent = $('.c-programms__category-container'); // массив блоков с программами
  var tablinks = $('.c-categories__item'); // список категорий
  var id = $(this).attr('id');//передаем id данной категории
  var elem = document.getElementsByClassName(id)[0];// находим блок товаров с необходимым классом


  // скрываем блоки с товарами и подсказку
  for(i=0; i<tabcontent.length; i++){
    $(tabcontent[i]).css({'display':'none'});
  }
  // удаляем класс active у списка категорий
  for(i=0; i<tablinks.length; i++){
    $(tablinks[i]).removeClass('active');
  }

  $(this).addClass('active');// добавляем класс active элементу на который кликнули
  $(elem).css({'display':'block'}); // отображаем необходимый блок товаров
});

// переключение между программами тренировок
$('.c-programms__category-anchor').on('click', function() {
  var tabcontent = $('.c-programms__programms');
  var tablinks = $('.c-programms__category-anchor');
  var id = $(this).attr('id');
  var elem = document.getElementsByClassName(id)[0];

  // скрываем блоки с товарами
  for(i=0; i<tabcontent.length; i++){
    $(tabcontent[i]).css({'display':'none'});
  }
  // удаляем класс active у списка категорий
  for(i=0; i<tablinks.length; i++){
    $(tablinks[i]).removeClass('active');
  }

  $(this).addClass('active');// добавляем класс active элементу на который кликнули
  $(elem).css({'display':'block'}); // отображаем необходимый блок товаров
});
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyZWF0aW5nX3BpY3R1cmUnKS5jbGFzc0xpc3QuYWRkKCdtLS1zaG93Jyk7XHJcbiAgfSwgMTAwMCk7XHJcblxyXG59KSgpO1xyXG4vLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgSBhY3RpdmUg0Y3Qu9C10LzQtdC90YLRgyDQv9GA0Lgg0LfQsNCz0YDRg9C30LrQtSDQtNC+0LrRg9C80LXQvdGC0LBcclxuJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gICQoJyNtYWxlJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICQoJyNtYWxlX2NhcmRpbycpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAkKCcubWFsZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAkKCcubWFsZV9jYXJkaW8nKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7XHJcbn0pXHJcblxyXG4vL2ZpeGVkIHNpZGViYXJcclxudmFyIHBXaWR0aCA9ICQoXCIuYy1jYXRlZ29yaWVzX19tZW51XCIpLnBhcmVudCgpLmlubmVyV2lkdGgoKTtcclxuXHJcblxyXG4gJCgnLmMtY2F0ZWdvcmllc19fbWVudScpLmNzcyh7J3dpZHRoJyA6IHBXaWR0aH0pO1xyXG5cclxuICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgICBwV2lkdGggPSAkKFwiLmMtY2F0ZWdvcmllc19fbWVudVwiKS5wYXJlbnQoKS5pbm5lcldpZHRoKCk7XHJcbiAgICAgJCgnLmMtY2F0ZWdvcmllc19fbWVudScpLmNzcyh7J3dpZHRoJyA6IHBXaWR0aH0pO1xyXG4gfSk7XHJcbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcbiAgICB2YXIgc2Nyb2xsVmFsID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICBpZiAoc2Nyb2xsVmFsID49IDEpe1xyXG4gICAgICAkKCduYXYnKS5jc3MoeydiYWNrZ3JvdW5kJzogJyMyMzIzMjMnfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgJCgnbmF2JykuY3NzKHsnYmFja2dyb3VuZCc6ICd0cmFuc3BhcmVudCd9KTtcclxuICAgIH1cclxuICAgIGlmIChzY3JvbGxWYWwgPj0gMzgwKXtcclxuICAgICAgJCgnLmMtY2F0ZWdvcmllc19fbWVudScpLmNzcyh7J3Bvc2l0aW9uJzonZml4ZWQnLCdtYXJnaW4tdG9wJzonLTM4MHB4J30pO1xyXG4gICAgfWVsc2Uge1xyXG4gICAgICAkKCcuYy1jYXRlZ29yaWVzX19tZW51JykuY3NzKHsncG9zaXRpb24nOidhYnNvbHV0ZScsJ21hcmdpbi10b3AnOjB9KTtcclxuICAgIH1cclxuICB9XHJcbik7XHJcbi8vIHNtb290aCBzY3JvbGxcclxuJChcIiNzY3JvbGxTcHlcIikub24oXCJjbGlja1wiLFwiYVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIC8v0L7RgtC80LXQvdGP0LXQvCDRgdGC0LDQvdC00LDRgNGC0L3Rg9GOINC+0LHRgNCw0LHQvtGC0LrRgyDQvdCw0LbQsNGC0LjRjyDQv9C+INGB0YHRi9C70LrQtVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvL9C30LDQsdC40YDQsNC10Lwg0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YAg0LHQvtC60LAg0YEg0LDRgtGA0LjQsdGD0YLQsCBocmVmXHJcbiAgICB2YXIgaWQgID0gJCh0aGlzKS5hdHRyKCdocmVmJyksXHJcblxyXG4gICAgLy/Rg9C30L3QsNC10Lwg0LLRi9GB0L7RgtGDINC+0YIg0L3QsNGH0LDQu9CwINGB0YLRgNCw0L3QuNGG0Ysg0LTQviDQsdC70L7QutCwINC90LAg0LrQvtGC0L7RgNGL0Lkg0YHRgdGL0LvQsNC10YLRgdGPINGP0LrQvtGA0YxcclxuICAgIHRvcCA9ICQoaWQpLm9mZnNldCgpLnRvcDtcclxuICAgIHRvcCA9IHRvcCAtNzA7XHJcbiAgICAvL9Cw0L3QuNC80LjRgNGD0LXQvCDQv9C10YDQtdGF0L7QtCDQvdCwINGA0LDRgdGB0YLQvtGP0L3QuNC1IC0gdG9wINC30LAgMTUwMCDQvNGBXHJcbiAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvcH0sIDUwMCk7XHJcbn0pO1xyXG5cclxuLy9idXJnZXJcclxuJCgnLm5hdl9fYnVyZ2VyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICQodGhpcykudG9nZ2xlQ2xhc3MoJ2NoYW5nZScpO1xyXG4gICQoJy5vdmVybGF5LW5hdl9fY29udGFpbmVyJykudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcclxufSlcclxuXHJcbi8vZmxpcHAgY2FyZFxyXG4kKCcuYy1jYXJkX19jb250YWluZXInKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdmbGlwcGVkJyk7XHJcbn0pO1xyXG5cclxuLy9hY2NvcmRpb25cclxudmFyIGFjYyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjLXByb2R1Y3RzX190aXRsZVwiKTtcclxudmFyIHdpZHRoID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoO1xyXG52YXIgaTtcclxuaWYod2lkdGggPD0gNDYzKXtcclxuICBmb3IgKGkgPSAwOyBpIDwgYWNjLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGFjY1tpXS5vbmNsaWNrID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgIC8qIFRvZ2dsZSBiZXR3ZWVuIGhpZGluZyBhbmQgc2hvd2luZyB0aGUgYWN0aXZlIHBhbmVsICovXHJcbiAgICAgICAgICB2YXIgcGFuZWwgPSB0aGlzLm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgICAgIGlmIChwYW5lbC5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgICBwYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHBhbmVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgfTtcclxufTtcclxuXHJcbi8vINC+0YLQvtCx0YDQsNC20LDQtdC8INCx0LvQvtC60Lgg0YEg0L/RgNC+0LPRgNCw0LzQvNCw0LzQuCDQvdCwINC80L7QsdC40LvRjNC90YvRhVxyXG5pZih3aWR0aCA8PSA0NjMpe1xyXG4gICQoJy5jLXByb2dyYW1tc19fY2F0ZWdvcnktY29udGFpbmVyJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG59XHJcbi8vIFNMSURFUlxyXG5cclxudmFyIHNsaWRlSW5kZXggPSAwO1xyXG5mdW5jdGlvbiBzaG93U2xpZGVzKCkge1xyXG4gICAgdmFyIGk7XHJcbiAgICB2YXIgc2xpZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYy1zbGlkZXJfX2NvbnRlbnQnKTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzbGlkZXNbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gICAgc2xpZGVJbmRleCsrO1xyXG4gICAgaWYgKHNsaWRlSW5kZXg+IHNsaWRlcy5sZW5ndGgpIHtzbGlkZUluZGV4ID0gMX1cclxuICAgIHNsaWRlc1tzbGlkZUluZGV4LTFdLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIHNldFRpbWVvdXQoc2hvd1NsaWRlcywgNjE1MCk7XHJcbn1cclxuXHJcbi8vINC/0LXRgNC10LrQu9GO0YfQtdC90LjQtSDQvNC10LbQtNGDINC60LDRgtC10LPQvtGA0LjRj9C80LhcclxuJCgnLmMtY2F0ZWdvcmllc19faXRlbScpLm9uKCdjbGljaycsZnVuY3Rpb24gKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7Ly8g0L7RgtC80LXQvdGP0LXQvCDRgdC+0LHRi9GC0LjQtSDQv9C+INGD0LzQvtC70YfQsNC90LjRjlxyXG5cclxuICB2YXIgdGFiY29udGVudCA9ICQoJy5jLXByb2dyYW1tc19fY2F0ZWdvcnktY29udGFpbmVyJyk7IC8vINC80LDRgdGB0LjQsiDQsdC70L7QutC+0LIg0YEg0L/RgNC+0LPRgNCw0LzQvNCw0LzQuFxyXG4gIHZhciB0YWJsaW5rcyA9ICQoJy5jLWNhdGVnb3JpZXNfX2l0ZW0nKTsgLy8g0YHQv9C40YHQvtC6INC60LDRgtC10LPQvtGA0LjQuVxyXG4gIHZhciBpZCA9ICQodGhpcykuYXR0cignaWQnKTsvL9C/0LXRgNC10LTQsNC10LwgaWQg0LTQsNC90L3QvtC5INC60LDRgtC10LPQvtGA0LjQuFxyXG4gIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShpZClbMF07Ly8g0L3QsNGF0L7QtNC40Lwg0LHQu9C+0Log0YLQvtCy0LDRgNC+0LIg0YEg0L3QtdC+0LHRhdC+0LTQuNC80YvQvCDQutC70LDRgdGB0L7QvFxyXG5cclxuXHJcbiAgLy8g0YHQutGA0YvQstCw0LXQvCDQsdC70L7QutC4INGBINGC0L7QstCw0YDQsNC80Lgg0Lgg0L/QvtC00YHQutCw0LfQutGDXHJcbiAgZm9yKGk9MDsgaTx0YWJjb250ZW50Lmxlbmd0aDsgaSsrKXtcclxuICAgICQodGFiY29udGVudFtpXSkuY3NzKHsnZGlzcGxheSc6J25vbmUnfSk7XHJcbiAgfVxyXG4gIC8vINGD0LTQsNC70Y/QtdC8INC60LvQsNGB0YEgYWN0aXZlINGDINGB0L/QuNGB0LrQsCDQutCw0YLQtdCz0L7RgNC40LlcclxuICBmb3IoaT0wOyBpPHRhYmxpbmtzLmxlbmd0aDsgaSsrKXtcclxuICAgICQodGFibGlua3NbaV0pLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICB9XHJcblxyXG4gICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpOy8vINC00L7QsdCw0LLQu9GP0LXQvCDQutC70LDRgdGBIGFjdGl2ZSDRjdC70LXQvNC10L3RgtGDINC90LAg0LrQvtGC0L7RgNGL0Lkg0LrQu9C40LrQvdGD0LvQuFxyXG4gICQoZWxlbSkuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pOyAvLyDQvtGC0L7QsdGA0LDQttCw0LXQvCDQvdC10L7QsdGF0L7QtNC40LzRi9C5INCx0LvQvtC6INGC0L7QstCw0YDQvtCyXHJcbn0pO1xyXG5cclxuLy8g0L/QtdGA0LXQutC70Y7Rh9C10L3QuNC1INC80LXQttC00YMg0L/RgNC+0LPRgNCw0LzQvNCw0LzQuCDRgtGA0LXQvdC40YDQvtCy0L7QulxyXG4kKCcuYy1wcm9ncmFtbXNfX2NhdGVnb3J5LWFuY2hvcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gIHZhciB0YWJjb250ZW50ID0gJCgnLmMtcHJvZ3JhbW1zX19wcm9ncmFtbXMnKTtcclxuICB2YXIgdGFibGlua3MgPSAkKCcuYy1wcm9ncmFtbXNfX2NhdGVnb3J5LWFuY2hvcicpO1xyXG4gIHZhciBpZCA9ICQodGhpcykuYXR0cignaWQnKTtcclxuICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoaWQpWzBdO1xyXG5cclxuICAvLyDRgdC60YDRi9Cy0LDQtdC8INCx0LvQvtC60Lgg0YEg0YLQvtCy0LDRgNCw0LzQuFxyXG4gIGZvcihpPTA7IGk8dGFiY29udGVudC5sZW5ndGg7IGkrKyl7XHJcbiAgICAkKHRhYmNvbnRlbnRbaV0pLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gIH1cclxuICAvLyDRg9C00LDQu9GP0LXQvCDQutC70LDRgdGBIGFjdGl2ZSDRgyDRgdC/0LjRgdC60LAg0LrQsNGC0LXQs9C+0YDQuNC5XHJcbiAgZm9yKGk9MDsgaTx0YWJsaW5rcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAkKHRhYmxpbmtzW2ldKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgfVxyXG5cclxuICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTsvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgSBhY3RpdmUg0Y3Qu9C10LzQtdC90YLRgyDQvdCwINC60L7RgtC+0YDRi9C5INC60LvQuNC60L3Rg9C70LhcclxuICAkKGVsZW0pLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTsgLy8g0L7RgtC+0LHRgNCw0LbQsNC10Lwg0L3QtdC+0LHRhdC+0LTQuNC80YvQuSDQsdC70L7QuiDRgtC+0LLQsNGA0L7QslxyXG59KTtcclxuLypcclxuZnVuY3Rpb24gc2hvd1NsaWRlcyhuKSB7XHJcbiAgbGV0IGk7XHJcbiAgbGV0IHNsaWRlcyA9ICQoJy5jLXNsaWRlcl9fY29udGVudCcpO1xyXG4gIGxldCBkb3RzID0gJCgnLmMtc2xpZGVyX19idXR0b24nKTtcclxuXHJcbiAgaWYoIG4gPiBzbGlkZXMubGVuZ3RoKXtcclxuICAgIHNsaWRlSW5kZXggPSAxO1xyXG4gIH1cclxuICBpZiggbiA8IDEpe1xyXG4gICAgc2xpZGVJbmRleCA9IHNsaWRlcy5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBmb3IoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG4gIGZvciAoaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGRvdHNbaV0uY2xhc3NOYW1lID0gZG90c1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XHJcbiAgfVxyXG4gIHNsaWRlc1tzbGlkZUluZGV4IC0gMV0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICBkb3RzW3NsaWRlSW5kZXgtMV0uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xyXG5cclxufVxyXG4qL1xyXG5mdW5jdGlvbiBjdXJlbnRTbGlkZShuKSB7XHJcbiAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ID0gbik7XHJcbn1cclxuZnVuY3Rpb24gcGx1c1NsaWRlKG4pIHtcclxuICBzaG93U2xpZGVzKHNsaWRlSW5kZXggKz0gbiApO1xyXG59XHJcbnNob3dTbGlkZXMoKTtcclxuIl19
