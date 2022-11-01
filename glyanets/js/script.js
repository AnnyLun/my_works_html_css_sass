$(document).ready(function () {
    $(".carousel").slick({
        appendArrows: $(".slider-arrows"),
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});

$(document).ready(function () {
  $(".carousel-advantage").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    adaptiveHeight: true,
    centerMode: true,
    mobileFirst: true,
  });
});

var helpers = {
	addZeros: function (n) {
		return (n < 10) ? '0' + n : '' + n;
	}
};

function sliderInit() {
  var $slider = $('.slider-holder');
  $slider.each(function() {
    var $sliderParent = $(this).parent();
    $(this).slick({

      dots: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            adaptiveHeight: true
          }
        }
      ]
    });

    if ($(this).find('.item').length > 1) {
      $(this).siblings('.slides-numbers').show();
    }

    $(this).on('afterChange', function(event, slick, currentSlide){
      $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1));
    });

    var sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
    $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));

  });
};

sliderInit();

var btn = $('#button-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

