var freeService = {
    api: {},
}
var freeHandler = {
    args: {},
    init: function() {
        console.log("freeHandlerInit")
        // 载入menu
        loadPage($("#menu"), "../component/menu.html", function() {
            $(".menu li").eq(3).addClass("active")
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
        var freeSystemSwiper = new Swiper('.free-system-swiper-container', {
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.free-system-swiper-pagination',
                clickable: true,
            },
        })
    },
    initAction: function() {
    },
}
$(function() {
    freeHandler.init();
    freeHandler.initAction();
})