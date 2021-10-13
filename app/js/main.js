$(function (){

      $('.slider__inner').slick({
          arrows: false,
          dots: true,
          centerMode: true,
          focusOnSelect: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1350,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
              }
            },
              {
                breakpoint: 1050,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 2,
                }
              },
              
              {
                breakpoint: 630,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
    });

      $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active')
      });

});