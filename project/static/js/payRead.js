var payReadService = {
    api: {},
}
var payReadHandler = {
    args: {},
    init: function() {
        console.log("payReadHandlerInit")
        // 载入menu
        loadPage($("#menu"), "../component/menu.html", function() {
            $(".menu li").eq(2).addClass("active")
            menuTouch()
        });
        var payReadSystemSwiper = new Swiper('.pay-system-swiper-container', {
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.pay-system-swiper-pagination',
            },
        })
        var payReadFunctionSwiper = new Swiper('.pay-function-swiper-container', {
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.pay-function-swiper-pagination',
            },
        })
    },
    initAction: function() {
    },
}
$(function() {
    payReadHandler.init();
    payReadHandler.initAction();
})