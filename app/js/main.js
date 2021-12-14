$(function () {



    $('.related__items-swiper').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
    });

    $('.product-tabs__top-item').on('click', function (e) {
        e.preventDefault();
        $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
        $(this).addClass('product-tabs__top-item--active');

        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active');
    });

    $('.details-slider__thumb').slick({
        asNavFor: '.details-slider__big',
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        draggable: false,
    });
    $('.details-slider__big').slick({
        asNavFor: '.details-slider__thumb',
        draggable: false,
        arrows: false,
        fade: true
    });


    $('.details-info__num').styler();


    $(".star").rateYo({
        starWidth: "11px",
        spacing: "7px",
        ratedFill: "#ffcc00",
        normalFill: "#d6d6d6",
        readOnly: true,
    });
    $(".star__product").rateYo({
        starWidth: "17px",
        spacing: "13px",
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
});


// $(document).ready(function () {
//     $('.product-item__link').click(function () {
//         if (!$('.product-item__link').hasClass('openDone')) {
//             $('.product-item__link').addClass('openDone');
//             $('.product-item__add').css("transform", "translateX(0)");
//         }
//         else {
//             $('.product-item__link').removeClass('openDone');
//             $('.product-item__add').css("transform", "translateX(-200%)");
//         }
//    });
// });


document.querySelector('.product-item__link').onmouseenter = () => {
    document.querySelector('.product-item__add').style.display = 'block';
}
document.querySelector('.product-item__add').onmouseleave = () => {
    document.querySelector('.product-item__add').style.display = 'none';
}




// $(document).ready(function () {
//     $('.product-item__link').click(function () {
//         if (!$('.product-item__link').hasClass('openDone')) {
//              $('.product-item__link').removeClass('openDone');
//             $('.product-item__add').css("left", "-999px");
//         }
//         else {
//            $('.product-item__link').addClass('openDone');
//             $('.product-item__add').css("left", "0px");
//         }
//    });
// });




