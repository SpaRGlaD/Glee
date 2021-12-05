$(function () {


    $(".star").rateYo({
        starWidth: "11px",
        ratedFill: "#ffcc00",
        normalFill: "#d6d6d6",
        readOnly: true,
      });


    $('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    })

    $('.slider-top__inner').slick({
        dots: true,
        arrows: false,
        // autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
    })
    var containerEl1 = document.querySelector('[data-ref="container-1"]');
    var containerEl2 = document.querySelector('[data-ref="container-2"]');

    var config = {
        controls: {
            scope: 'local'
        }
    };



    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);

    // var mixer = mixitup('.product__content');
})