var homeService = {
    api: {},
}
var homeHandler = {
    args: {},
    init: function() {
        console.log("homeHandlerInit")
        // 载入menu
        loadPage($("#menu"), "../component/menu.html", function() {
            $(".menu li").eq(0).addClass("active")
        });
        var homeModeSwiper = new Swiper('.home-mode-swiper-container', {
            loop: true,
            autoplay: {
                delay: 2000,
            },
            pagination: {
                el: '.home-mode-swiper-pagination',
            },
        })
        var homeAdvantageSwiper = new Swiper('.home-advantage-swiper-container', {
            loop: true,
            autoplay: {
                delay: 2000,
            },
            pagination: {
                el: '.home-advantage-swiper-pagination',
            },
        })
    },
    initAction: function() {},
}
$(function() {
    homeHandler.init();
})