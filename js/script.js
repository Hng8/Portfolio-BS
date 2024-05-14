$(document).ready(function() {

    let $btns = $(".project-area .buttons-group button");

    $btns.click(function(e) {

    $(".project-area .buttons-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $(".project-area .grid").isotope({
        filter: selector
    });

    return false;
    })

    $(".project-area .buttons-group #btn1").trigger("click");

    $(".project-area .grid .test-popup-link").magnificPopup({
        type:'image',
        gallery: {enabled: true}
    })

    $(".site-main .about-area .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive:{
            0: {
                item: 1
            },
            544: {
                item: 2
            }
        }
    })

    // Sticky navigation menu 

    let nav_offset_top = $(".header").height() + 50;

    function navbarFixed() {
        if($(".header").length) {
            $(window).scroll(function (){
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $(".header .main-menu").addClass("navbar_fixed");
                } else {
                    $(".header .main-menu").removeClass("navbar_fixed");
                }
            })
        }
    }

    navbarFixed();
});