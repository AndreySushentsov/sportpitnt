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
var slider = (function() {
  var counter = 1;       //счетчик слайдов
  var duration = 300;    // задержка анимации
  var inProcess = false; // анимация в процессе

  var moveSlide = function(container,direction) {
    var sliderItems = container.find('.c-slider__btn-img-item'); // находим все слайды
    var activeItem = sliderItems.filter('.active');// находим слайды с классом active
    var direction = direction == 'down' ? 100 : -100; // передаем значение свойства top


      var activeImg = activeItem;
      var activeItemChildren = activeImg.children();
      var path = activeItemChildren.attr('src');
      var mainPic = $('.c-slider__main-img');

      mainPic.attr('src', path);
      console.log();




    if (counter >= sliderItems.length) {
      counter = 0;
    }

    var reqItem = sliderItems.eq(counter);

    activeItem.animate({
      'top': direction + '%'
    }, duration);

    reqItem.animate({
      'top': 0
    }, duration, function() {
      activeItem.removeClass('active').css('top', -direction + '%');
      $(this).addClass('active');
      inProcess = false;
    });

  }
  return {
    init: function() {
      $('.c-slider__arrow').on('click', function(e) {
        e.preventDefault();

        if(!inProcess){
          inProcess = true;

          moveSlide($('.c-silder__left-btn'), 'down');
          moveSlide($('.c-slider__right-btn'), 'up');
        }

        counter ++;
      })
    }
  }
}());

var slideShow = (function () {
  var container = $('.c-silder__left-btn').find('.c-slider__btn-img-item');
  var activeItem = container.filter('.active');
  var activeItemChildren = activeItem.children();
  var path = activeItemChildren.attr('src');
  return {
    init : function() {
      $('.c-slider__arrow').on('click', function(e) {
        e.preventDefault();

      })
    }
  }
}());

$(function() {
  slider.init();
  slideShow.init();
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JlYXRpbmdfcGljdHVyZScpLmNsYXNzTGlzdC5hZGQoJ20tLXNob3cnKTtcclxuICB9LCAxMDAwKTtcclxufSkoKTtcclxuXHJcblxyXG4vLyAgUEFSQUxBWFxyXG5cclxuLy8gbWFpbiBtb2R1bGVcclxuLypcclxudmFyIHBhcmFsYXggPSAoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIGJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmMtaW1hZ2UnKTtcclxuICB2YXIgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jLWltYWdlLXN0YXJzLWltZycpO1xyXG4gIHZhciB1c2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmMtY2FyZCcpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbW92ZTogZnVuY3Rpb24oYmxvY2ssIHdpbmRvd1Njcm9sbCwgYW1vdW50KSB7XHJcbiAgICAgIHZhciBzdHJhZmUgPSB3aW5kb3dTY3JvbGwgLyAtYW1vdW50ICsgJyUnO1xyXG4gICAgICB2YXIgc3R5bGVCZyA9IGJsb2NrLnN0eWxlO1xyXG4gICAgICBzdHlsZUJnLnRvcCA9IHN0cmFmZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzdHlsZUJnLnRvcCk7XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24oeCkge1xyXG4gICAgICB0aGlzLm1vdmUoYmcsIHgsIDQwKTtcclxuICAgIH1cclxuICB9XHJcbn0oKSk7XHJcblxyXG4vLyBzY3JvbGxcclxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHdTY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgcGFyYWxheC5pbml0KHdTY3JvbGwpO1xyXG4gIGNvbnNvbGUubG9nKHBhcmFsYXgubW92ZSgpKTtcclxufTtcclxuKi9cclxuXHJcbi8vIFNMSURFUlxyXG52YXIgc2xpZGVyID0gKGZ1bmN0aW9uKCkge1xyXG4gIHZhciBjb3VudGVyID0gMTsgICAgICAgLy/RgdGH0LXRgtGH0LjQuiDRgdC70LDQudC00L7QslxyXG4gIHZhciBkdXJhdGlvbiA9IDMwMDsgICAgLy8g0LfQsNC00LXRgNC20LrQsCDQsNC90LjQvNCw0YbQuNC4XHJcbiAgdmFyIGluUHJvY2VzcyA9IGZhbHNlOyAvLyDQsNC90LjQvNCw0YbQuNGPINCyINC/0YDQvtGG0LXRgdGB0LVcclxuXHJcbiAgdmFyIG1vdmVTbGlkZSA9IGZ1bmN0aW9uKGNvbnRhaW5lcixkaXJlY3Rpb24pIHtcclxuICAgIHZhciBzbGlkZXJJdGVtcyA9IGNvbnRhaW5lci5maW5kKCcuYy1zbGlkZXJfX2J0bi1pbWctaXRlbScpOyAvLyDQvdCw0YXQvtC00LjQvCDQstGB0LUg0YHQu9Cw0LnQtNGLXHJcbiAgICB2YXIgYWN0aXZlSXRlbSA9IHNsaWRlckl0ZW1zLmZpbHRlcignLmFjdGl2ZScpOy8vINC90LDRhdC+0LTQuNC8INGB0LvQsNC50LTRiyDRgSDQutC70LDRgdGB0L7QvCBhY3RpdmVcclxuICAgIHZhciBkaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT0gJ2Rvd24nID8gMTAwIDogLTEwMDsgLy8g0L/QtdGA0LXQtNCw0LXQvCDQt9C90LDRh9C10L3QuNC1INGB0LLQvtC50YHRgtCy0LAgdG9wXHJcblxyXG5cclxuICAgICAgdmFyIGFjdGl2ZUltZyA9IGFjdGl2ZUl0ZW07XHJcbiAgICAgIHZhciBhY3RpdmVJdGVtQ2hpbGRyZW4gPSBhY3RpdmVJbWcuY2hpbGRyZW4oKTtcclxuICAgICAgdmFyIHBhdGggPSBhY3RpdmVJdGVtQ2hpbGRyZW4uYXR0cignc3JjJyk7XHJcbiAgICAgIHZhciBtYWluUGljID0gJCgnLmMtc2xpZGVyX19tYWluLWltZycpO1xyXG5cclxuICAgICAgbWFpblBpYy5hdHRyKCdzcmMnLCBwYXRoKTtcclxuICAgICAgY29uc29sZS5sb2coKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICBpZiAoY291bnRlciA+PSBzbGlkZXJJdGVtcy5sZW5ndGgpIHtcclxuICAgICAgY291bnRlciA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHJlcUl0ZW0gPSBzbGlkZXJJdGVtcy5lcShjb3VudGVyKTtcclxuXHJcbiAgICBhY3RpdmVJdGVtLmFuaW1hdGUoe1xyXG4gICAgICAndG9wJzogZGlyZWN0aW9uICsgJyUnXHJcbiAgICB9LCBkdXJhdGlvbik7XHJcblxyXG4gICAgcmVxSXRlbS5hbmltYXRlKHtcclxuICAgICAgJ3RvcCc6IDBcclxuICAgIH0sIGR1cmF0aW9uLCBmdW5jdGlvbigpIHtcclxuICAgICAgYWN0aXZlSXRlbS5yZW1vdmVDbGFzcygnYWN0aXZlJykuY3NzKCd0b3AnLCAtZGlyZWN0aW9uICsgJyUnKTtcclxuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgIGluUHJvY2VzcyA9IGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICQoJy5jLXNsaWRlcl9fYXJyb3cnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBpZighaW5Qcm9jZXNzKXtcclxuICAgICAgICAgIGluUHJvY2VzcyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgbW92ZVNsaWRlKCQoJy5jLXNpbGRlcl9fbGVmdC1idG4nKSwgJ2Rvd24nKTtcclxuICAgICAgICAgIG1vdmVTbGlkZSgkKCcuYy1zbGlkZXJfX3JpZ2h0LWJ0bicpLCAndXAnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvdW50ZXIgKys7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59KCkpO1xyXG5cclxudmFyIHNsaWRlU2hvdyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGNvbnRhaW5lciA9ICQoJy5jLXNpbGRlcl9fbGVmdC1idG4nKS5maW5kKCcuYy1zbGlkZXJfX2J0bi1pbWctaXRlbScpO1xyXG4gIHZhciBhY3RpdmVJdGVtID0gY29udGFpbmVyLmZpbHRlcignLmFjdGl2ZScpO1xyXG4gIHZhciBhY3RpdmVJdGVtQ2hpbGRyZW4gPSBhY3RpdmVJdGVtLmNoaWxkcmVuKCk7XHJcbiAgdmFyIHBhdGggPSBhY3RpdmVJdGVtQ2hpbGRyZW4uYXR0cignc3JjJyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQgOiBmdW5jdGlvbigpIHtcclxuICAgICAgJCgnLmMtc2xpZGVyX19hcnJvdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufSgpKTtcclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcbiAgc2xpZGVyLmluaXQoKTtcclxuICBzbGlkZVNob3cuaW5pdCgpO1xyXG59KTtcclxuIl19
