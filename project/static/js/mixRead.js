var mixService = {
    api: {},
}
var mixHandler = {
    args: {},
    init: function() {
        console.log("mixHandlerInit")
        // 载入menu
        loadPage($("#menu"), "../component/menu.html", function() {
            $(".menu li").eq(4).addClass("active")
            menuTouch()
        });
        var mixSystemSwiper = new Swiper('.mix-form-swiper-container', {
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.mix-form-swiper-pagination',
            },
        })
    },
    initAction: function() {
    },
}
$(function() {
    mixHandler.init();
    mixHandler.initAction();
})