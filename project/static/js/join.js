var joinService = {
    api: {},
}
var joinHandler = {
    args: {},
    init: function() {
        console.log("joinHandlerInit")
        // 载入menu
        loadPage($("#menu"), "/component/menu.html", function() {
            $(".menu li").eq(8).addClass("active")
            menuTouch()
        });
        // 达到按钮组切换固定
        $(window).scroll(function() {
            if($(this).scrollTop() == 0) {
                $(".header").css("background", "transparent")
                $(".header").removeClass("shadow")
                $(".header-icon img").attr("src", "/static/images/header/icon.png")
                $(".header-menu img").attr("src", "/static/images/header/menu.png")
            }else {
                $(".header").css("background", "#ffffff")
                $(".header").addClass("shadow")
                $(".header-icon img").attr("src", "/static/images/header/icon-reverse.png")
                $(".header-menu img").attr("src", "/static/images/header/menu-reverse.png")
            }
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