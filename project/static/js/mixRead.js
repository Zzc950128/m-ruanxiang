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
        // 达到按钮组切换固定
        $(window).scroll(function() {
            if($(this).scrollTop() == 0) {
                $(".header").css("background", "transparent")
                $(".header-icon img").attr("src", "../static/images/header/icon.png")
                $(".header-menu img").attr("src", "../static/images/header/menu.png")
            }else {
                $(".header").css("background", "#ffffff")
                $(".header-icon img").attr("src", "../static/images/header/icon-reverse.png")
                $(".header-menu img").attr("src", "../static/images/header/menu-reverse.png")
            }
        });
        var mixSystemSwiper = new Swiper('.mix-form-swiper-container', {
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.mix-form-swiper-pagination',
                clickable: true,
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