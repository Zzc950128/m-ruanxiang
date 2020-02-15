var joinService = {
    api: {},
}
var joinHandler = {
    args: {},
    init: function() {
        console.log("joinHandlerInit")
        // 载入menu
        loadPage($("#menu"), "../component/menu.html", function() {
            $(".menu li").eq(8).addClass("active")
            menuTouch()
        });
        var joinadvantageSwiper = new Swiper('.join-advantage-swiper-container', {
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.join-advantage-swiper-pagination',
                clickable: true,
            },
        })
    },
    initAction: function() {},
}
$(function() {
    joinHandler.init();
})