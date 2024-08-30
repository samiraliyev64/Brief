$(document).ready(function () {
    $('.carousel1').slick({
        dots: false,         
        infinite: true,      
        speed: 500,          
        slidesToShow: 4,     
        slidesToScroll: 1    
    });

    $('.carousel2').slick({
        dots: false,          
        infinite: true,      
        speed: 500,          
        slidesToShow: 4,    
        slidesToScroll: 1    
    });
    
    $('.slick-prev').hide();
    $('.slick-carousel').on('afterChange', function (event, slick, currentSlide) {
        if (currentSlide === 0) {
            $('.slick-prev').hide();
        } else {
            $('.slick-prev').show();
        }
    });

});