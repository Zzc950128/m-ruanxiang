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
    initAction: function() {
        $(".about-help-more-btn").click(function() {
            window.location.href = window.location.origin+"/page/document.html"
        })
        $(".about-help-question-item, .about-help-trends-content").click(function() {
            window.location.href = window.location.origin+"/page/document.html"+($(this).attr("data-category")?("?category="+$(this).attr("data-category")+"&id="+$(this).attr("data-id")):"")
        })
    },
}
$(function() {
    aboutHandler.init();
    aboutHandler.initAction()
})