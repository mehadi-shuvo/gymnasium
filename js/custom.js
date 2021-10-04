//banner slider;
$('.banner-slider').slick({
    arrows: false,
    dots: true,
});
//about video;
$('.venobox').venobox({
    bgcolor    : '#e23e3880', 
    closeBackground: '#e23e38',
    arrowsColor : '#e23e38', 
}); 

//team slider;
$('.team-slider').slick({
    arrows: false,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: false,
              autoplaySpeed: 2000,
              centerMode: true,
              centerPadding: '0px',
              
            }
        },

        {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              
            }
        },

        {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: false,
              autoplaySpeed: 2000,
              centerMode: true,
              centerPadding: '0px',
              
            }
        },

    ]
});
//testimonial slider;
$('.testimonial-slider').slick({
    arrows: false,
    slidesToShow: 2,
    dots: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              
            }
        },

        {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              
            }
        },
    ]
});
//funfact counter;
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

//brand-slider;
$('.brand-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: '<i class="fas fa-chevron-left left-arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right right-arrow"></i>',
    responsive: [
        {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              
            }
        },

        {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              
            }
        },

        {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
              autoplay: true,
              autoplaySpeed: 2000,
              centerMode: false,
              centerPadding: '0px',
            }
        },
    ]

});

















