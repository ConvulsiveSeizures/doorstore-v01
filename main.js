$(document).ready(() => {

    var header = $('#stickyNavbar'),
		scrollPrev = 0;

    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
    
        if ( scrolled > 350 && scrolled > scrollPrev ) {
            header.addClass('position-fixed');
        } else {
            header.removeClass('position-fixed');
        }
        scrollPrev = scrolled;

        if (scrolled > 300) {
            $("#catalogToFixed").addClass("toFixedTop")
        } else {
            $("#catalogToFixed").removeClass("toFixedTop")
        }
    });



    //catalog filter
    let catArray = []
    $(".catalogMenuBtn").on("click", (e) => {
        let isAlreadyExist = false
        catArray.map((i, index) => {
            if (i == e.target.dataset.typeId) {
                catArray.splice(index, 1)
                isAlreadyExist = true
            }
        })
        if (!isAlreadyExist) {
            catArray.unshift(e.target.dataset.typeId)
        }
    })
})