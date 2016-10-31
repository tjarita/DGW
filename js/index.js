$(document).ready(function () {
  $('.serviceSlider').slick({
    // infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 3,
    // arrows: true,
    // dots: true,

    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});