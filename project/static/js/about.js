var aboutService = {
    api: {},
}
var aboutHandler = {
    args: {},
    init: function() {
        console.log("aboutHandlerInit")
        // 载入menu
        loadPage($("#menu"), "../component/menu.html", function() {
            $(".menu li").eq(10).addClass("active")
        });
        var aboutAdvantageSwiper = new Swiper('.about-quality-swiper-container', {
            loop: true,
            pagination: {
                el: '.about-quality-swiper-pagination',
            },
        })
    },
    initAction: function() {},
}
$(function() {
    aboutHandler.init();
})