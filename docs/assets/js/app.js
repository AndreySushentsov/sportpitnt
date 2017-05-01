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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmVhdGluZ19waWN0dXJlJykuY2xhc3NMaXN0LmFkZCgnbS0tc2hvdycpO1xyXG4gIH0sIDEwMDApO1xyXG5cclxufSkoKTtcclxuLy8g0LTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YEgYWN0aXZlINGN0LvQtdC80LXQvdGC0YMg0L/RgNC4INC30LDQs9GA0YPQt9C60LUg0LTQvtC60YPQvNC10L3RgtCwXHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICAkKCcjbWFsZScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAkKCcjbWFsZV9jYXJkaW8nKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgJCgnLm1hbGUnKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgJCgnLm1hbGVfY2FyZGlvJykuY3NzKHsnZGlzcGxheSc6J2Jsb2NrJ30pO1xyXG59KVxyXG5cclxuLy9maXhlZCBzaWRlYmFyXHJcbnZhciBwV2lkdGggPSAkKFwiLmMtY2F0ZWdvcmllc19fbWVudVwiKS5wYXJlbnQoKS5pbm5lcldpZHRoKCk7XHJcblxyXG5cclxuICQoJy5jLWNhdGVnb3JpZXNfX21lbnUnKS5jc3Moeyd3aWR0aCcgOiBwV2lkdGh9KTtcclxuXHJcbiAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCl7XHJcbiAgICAgcFdpZHRoID0gJChcIi5jLWNhdGVnb3JpZXNfX21lbnVcIikucGFyZW50KCkuaW5uZXJXaWR0aCgpO1xyXG4gICAgICQoJy5jLWNhdGVnb3JpZXNfX21lbnUnKS5jc3Moeyd3aWR0aCcgOiBwV2lkdGh9KTtcclxuIH0pO1xyXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIHNjcm9sbFZhbCA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgaWYgKHNjcm9sbFZhbCA+PSAxKXtcclxuICAgICAgJCgnbmF2JykuY3NzKHsnYmFja2dyb3VuZCc6ICcjMjMyMzIzJ30pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICQoJ25hdicpLmNzcyh7J2JhY2tncm91bmQnOiAndHJhbnNwYXJlbnQnfSk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2Nyb2xsVmFsID49IDM4MCl7XHJcbiAgICAgICQoJy5jLWNhdGVnb3JpZXNfX21lbnUnKS5jc3Moeydwb3NpdGlvbic6J2ZpeGVkJywnbWFyZ2luLXRvcCc6Jy0zODBweCd9KTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgJCgnLmMtY2F0ZWdvcmllc19fbWVudScpLmNzcyh7J3Bvc2l0aW9uJzonYWJzb2x1dGUnLCdtYXJnaW4tdG9wJzowfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4pO1xyXG4vLyBzbW9vdGggc2Nyb2xsXHJcbiQoXCIjc2Nyb2xsU3B5XCIpLm9uKFwiY2xpY2tcIixcImFcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAvL9C+0YLQvNC10L3Rj9C10Lwg0YHRgtCw0L3QtNCw0YDRgtC90YPRjiDQvtCx0YDQsNCx0L7RgtC60YMg0L3QsNC20LDRgtC40Y8g0L/QviDRgdGB0YvQu9C60LVcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy/Qt9Cw0LHQuNGA0LDQtdC8INC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINCx0L7QutCwINGBINCw0YLRgNC40LHRg9GC0LAgaHJlZlxyXG4gICAgdmFyIGlkICA9ICQodGhpcykuYXR0cignaHJlZicpLFxyXG5cclxuICAgIC8v0YPQt9C90LDQtdC8INCy0YvRgdC+0YLRgyDQvtGCINC90LDRh9Cw0LvQsCDRgdGC0YDQsNC90LjRhtGLINC00L4g0LHQu9C+0LrQsCDQvdCwINC60L7RgtC+0YDRi9C5INGB0YHRi9C70LDQtdGC0YHRjyDRj9C60L7RgNGMXHJcbiAgICB0b3AgPSAkKGlkKS5vZmZzZXQoKS50b3A7XHJcbiAgICB0b3AgPSB0b3AgLTcwO1xyXG4gICAgLy/QsNC90LjQvNC40YDRg9C10Lwg0L/QtdGA0LXRhdC+0LQg0L3QsCDRgNCw0YHRgdGC0L7Rj9C90LjQtSAtIHRvcCDQt9CwIDE1MDAg0LzRgVxyXG4gICAgJCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB0b3B9LCA1MDApO1xyXG59KTtcclxuXHJcbi8vYnVyZ2VyXHJcbiQoJy5uYXZfX2J1cmdlcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdjaGFuZ2UnKTtcclxuICAkKCcub3ZlcmxheS1uYXZfX2NvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdzaG93Jyk7XHJcbn0pXHJcblxyXG4vL2ZsaXBwIGNhcmRcclxuJCgnLmMtY2FyZF9fY29udGFpbmVyJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnZmxpcHBlZCcpO1xyXG59KTtcclxuXHJcbi8vYWNjb3JkaW9uXHJcbnZhciBhY2MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYy1wcm9kdWN0c19fdGl0bGVcIik7XHJcbnZhciB3aWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxudmFyIGk7XHJcbmlmKHdpZHRoIDw9IDQ2Myl7XHJcbiAgZm9yIChpID0gMDsgaSA8IGFjYy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBhY2NbaV0ub25jbGljayA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAvKiBUb2dnbGUgYmV0d2VlbiBoaWRpbmcgYW5kIHNob3dpbmcgdGhlIGFjdGl2ZSBwYW5lbCAqL1xyXG4gICAgICAgICAgdmFyIHBhbmVsID0gdGhpcy5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICBpZiAocGFuZWwuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgICAgcGFuZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBwYW5lbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gIH07XHJcbn07XHJcblxyXG4vLyDQvtGC0L7QsdGA0LDQttCw0LXQvCDQsdC70L7QutC4INGBINC/0YDQvtCz0YDQsNC80LzQsNC80Lgg0L3QsCDQvNC+0LHQuNC70YzQvdGL0YVcclxuaWYod2lkdGggPD0gNDYzKXtcclxuICAkKCcuYy1wcm9ncmFtbXNfX2NhdGVnb3J5LWNvbnRhaW5lcicpLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTtcclxufVxyXG4vLyBTTElERVJcclxuXHJcbnZhciBzbGlkZUluZGV4ID0gMDtcclxuZnVuY3Rpb24gc2hvd1NsaWRlcygpIHtcclxuICAgIHZhciBpO1xyXG4gICAgdmFyIHNsaWRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Mtc2xpZGVyX19jb250ZW50Jyk7XHJcbiAgICB2YXIgZG90cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Mtc2xpZGVyX19idXR0b24nKTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBzbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzbGlkZXNbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG4gICAgZm9yIChpID0gMDsgaSA8IGRvdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBkb3RzW2ldLmNsYXNzTmFtZSA9IGRvdHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xyXG4gICAgfVxyXG4gICAgc2xpZGVJbmRleCsrO1xyXG4gICAgaWYgKHNsaWRlSW5kZXg+IHNsaWRlcy5sZW5ndGgpIHtzbGlkZUluZGV4ID0gMX1cclxuICAgIHNsaWRlc1tzbGlkZUluZGV4LTFdLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgIGRvdHNbc2xpZGVJbmRleC0xXS5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XHJcbiAgICBzZXRUaW1lb3V0KHNob3dTbGlkZXMsIDYxNTApO1xyXG59XHJcblxyXG4vLyDQv9C10YDQtdC60LvRjtGH0LXQvdC40LUg0LzQtdC20LTRgyDQutCw0YLQtdCz0L7RgNC40Y/QvNC4XHJcbiQoJy5jLWNhdGVnb3JpZXNfX2l0ZW0nKS5vbignY2xpY2snLGZ1bmN0aW9uIChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpOy8vINC+0YLQvNC10L3Rj9C10Lwg0YHQvtCx0YvRgtC40LUg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y5cclxuXHJcbiAgdmFyIHRhYmNvbnRlbnQgPSAkKCcuYy1wcm9ncmFtbXNfX2NhdGVnb3J5LWNvbnRhaW5lcicpOyAvLyDQvNCw0YHRgdC40LIg0LHQu9C+0LrQvtCyINGBINC/0YDQvtCz0YDQsNC80LzQsNC80LhcclxuICB2YXIgdGFibGlua3MgPSAkKCcuYy1jYXRlZ29yaWVzX19pdGVtJyk7IC8vINGB0L/QuNGB0L7QuiDQutCw0YLQtdCz0L7RgNC40LlcclxuICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7Ly/Qv9C10YDQtdC00LDQtdC8IGlkINC00LDQvdC90L7QuSDQutCw0YLQtdCz0L7RgNC40LhcclxuICB2YXIgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoaWQpWzBdOy8vINC90LDRhdC+0LTQuNC8INCx0LvQvtC6INGC0L7QstCw0YDQvtCyINGBINC90LXQvtCx0YXQvtC00LjQvNGL0Lwg0LrQu9Cw0YHRgdC+0LxcclxuXHJcblxyXG4gIC8vINGB0LrRgNGL0LLQsNC10Lwg0LHQu9C+0LrQuCDRgSDRgtC+0LLQsNGA0LDQvNC4INC4INC/0L7QtNGB0LrQsNC30LrRg1xyXG4gIGZvcihpPTA7IGk8dGFiY29udGVudC5sZW5ndGg7IGkrKyl7XHJcbiAgICAkKHRhYmNvbnRlbnRbaV0pLmNzcyh7J2Rpc3BsYXknOidub25lJ30pO1xyXG4gIH1cclxuICAvLyDRg9C00LDQu9GP0LXQvCDQutC70LDRgdGBIGFjdGl2ZSDRgyDRgdC/0LjRgdC60LAg0LrQsNGC0LXQs9C+0YDQuNC5XHJcbiAgZm9yKGk9MDsgaTx0YWJsaW5rcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAkKHRhYmxpbmtzW2ldKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgfVxyXG5cclxuICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTsvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgSBhY3RpdmUg0Y3Qu9C10LzQtdC90YLRgyDQvdCwINC60L7RgtC+0YDRi9C5INC60LvQuNC60L3Rg9C70LhcclxuICAkKGVsZW0pLmNzcyh7J2Rpc3BsYXknOidibG9jayd9KTsgLy8g0L7RgtC+0LHRgNCw0LbQsNC10Lwg0L3QtdC+0LHRhdC+0LTQuNC80YvQuSDQsdC70L7QuiDRgtC+0LLQsNGA0L7QslxyXG59KTtcclxuXHJcbi8vINC/0LXRgNC10LrQu9GO0YfQtdC90LjQtSDQvNC10LbQtNGDINC/0YDQvtCz0YDQsNC80LzQsNC80Lgg0YLRgNC10L3QuNGA0L7QstC+0LpcclxuJCgnLmMtcHJvZ3JhbW1zX19jYXRlZ29yeS1hbmNob3InKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICB2YXIgdGFiY29udGVudCA9ICQoJy5jLXByb2dyYW1tc19fcHJvZ3JhbW1zJyk7XHJcbiAgdmFyIHRhYmxpbmtzID0gJCgnLmMtcHJvZ3JhbW1zX19jYXRlZ29yeS1hbmNob3InKTtcclxuICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XHJcbiAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGlkKVswXTtcclxuXHJcbiAgLy8g0YHQutGA0YvQstCw0LXQvCDQsdC70L7QutC4INGBINGC0L7QstCw0YDQsNC80LhcclxuICBmb3IoaT0wOyBpPHRhYmNvbnRlbnQubGVuZ3RoOyBpKyspe1xyXG4gICAgJCh0YWJjb250ZW50W2ldKS5jc3MoeydkaXNwbGF5Jzonbm9uZSd9KTtcclxuICB9XHJcbiAgLy8g0YPQtNCw0LvRj9C10Lwg0LrQu9Cw0YHRgSBhY3RpdmUg0YMg0YHQv9C40YHQutCwINC60LDRgtC10LPQvtGA0LjQuVxyXG4gIGZvcihpPTA7IGk8dGFibGlua3MubGVuZ3RoOyBpKyspe1xyXG4gICAgJCh0YWJsaW5rc1tpXSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gIH1cclxuXHJcbiAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7Ly8g0LTQvtCx0LDQstC70Y/QtdC8INC60LvQsNGB0YEgYWN0aXZlINGN0LvQtdC80LXQvdGC0YMg0L3QsCDQutC+0YLQvtGA0YvQuSDQutC70LjQutC90YPQu9C4XHJcbiAgJChlbGVtKS5jc3MoeydkaXNwbGF5JzonYmxvY2snfSk7IC8vINC+0YLQvtCx0YDQsNC20LDQtdC8INC90LXQvtCx0YXQvtC00LjQvNGL0Lkg0LHQu9C+0Log0YLQvtCy0LDRgNC+0LJcclxufSk7XHJcbi8qXHJcbmZ1bmN0aW9uIHNob3dTbGlkZXMobikge1xyXG4gIGxldCBpO1xyXG4gIGxldCBzbGlkZXMgPSAkKCcuYy1zbGlkZXJfX2NvbnRlbnQnKTtcclxuICBsZXQgZG90cyA9ICQoJy5jLXNsaWRlcl9fYnV0dG9uJyk7XHJcblxyXG4gIGlmKCBuID4gc2xpZGVzLmxlbmd0aCl7XHJcbiAgICBzbGlkZUluZGV4ID0gMTtcclxuICB9XHJcbiAgaWYoIG4gPCAxKXtcclxuICAgIHNsaWRlSW5kZXggPSBzbGlkZXMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgZm9yKGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKXtcclxuICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuICBmb3IgKGkgPSAwOyBpIDwgZG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBkb3RzW2ldLmNsYXNzTmFtZSA9IGRvdHNbaV0uY2xhc3NOYW1lLnJlcGxhY2UoXCIgYWN0aXZlXCIsIFwiXCIpO1xyXG4gIH1cclxuICBzbGlkZXNbc2xpZGVJbmRleCAtIDFdLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgZG90c1tzbGlkZUluZGV4LTFdLmNsYXNzTmFtZSArPSBcIiBhY3RpdmVcIjtcclxuXHJcbn1cclxuKi9cclxuZnVuY3Rpb24gY3VyZW50U2xpZGUobikge1xyXG4gIHNob3dTbGlkZXMoc2xpZGVJbmRleCA9IG4pO1xyXG59XHJcbmZ1bmN0aW9uIHBsdXNTbGlkZShuKSB7XHJcbiAgc2hvd1NsaWRlcyhzbGlkZUluZGV4ICs9IG4gKTtcclxufVxyXG5zaG93U2xpZGVzKCk7XHJcbiJdfQ==
