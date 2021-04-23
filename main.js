$(document).ready(() => {

    var header = $('#stickyNavbar'),
		scrollPrev = 0;

    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
    
        if ( scrolled > 80 && scrolled > scrollPrev ) {
            header.addClass('out');
            $("#catalogMenu").addClass("outing")
        } else {
            header.removeClass('out');
            $("#catalogMenu").removeClass("outing")
        }
        scrollPrev = scrolled;
    });
})