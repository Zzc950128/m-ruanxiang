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
            menuTouch()
        });
        var aboutAdvantageSwiper = new Swiper('.about-quality-swiper-container', {
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.about-quality-swiper-pagination',
                clickable: true,
            },
        })
    },
    initAction: function() {},
}
$(function() {
    aboutHandler.init();
})