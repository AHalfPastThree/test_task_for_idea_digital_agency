$('#carouselExampleControls').carousel({
    interval: 4000,
    keyboard: false,
    pause: 'hover',
    ride: 'carousel',
    wrap: false
});

$(document).ready(function(){
if ($(window).width() > 1200) {
    $('#carouselExampleControls').on('slide.bs.carousel', function (e) {
        var next_slide = e.relatedTarget;
        $(next_slide).css('display', 'block');
        var next_slide_width = $(next_slide).find("img").width();
        $(next_slide).css('display', '');
        if (next_slide_width> $(window).width()) {
            $(next_slide).find("img").remove();
            $(next_slide).addClass('hidden');
        }
    });

$('#carouselExampleControls').on('slid.bs.carousel', function (e) {
    if ($(".active").hasClass('hidden')) {
        $('#carouselExampleControls').carousel('next');
    }
});
}
});
   