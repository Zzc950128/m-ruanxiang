var payReadService = {
    api: {},
}
var payReadHandler = {
    args: {},
    init: function() {
        console.log("payReadHandlerInit")
        // 载入menu
        loadPage($("#menu"), "/component/menu.html", function() {
            $(".menu li").eq(2).addClass("active")
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
        var payReadSystemSwiper = new Swiper('.pay-system-swiper-container', {
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.pay-system-swiper-pagination',
                clickable: true,
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
                clickable: true,
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