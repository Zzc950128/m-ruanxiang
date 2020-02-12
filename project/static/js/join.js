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
        });
        var joinAdvantageSwiper = new Swiper('.join-advantage-swiper-container', {
            loop: true,
            pagination: {
                el: '.join-advantage-swiper-pagination',
            },
        })
    },
    initAction: function() {},
}
$(function() {
    joinHandler.init();
})