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
            menuTouch()
        });
        var homeModeSwiper = new Swiper('.home-mode-swiper-container', {
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.home-mode-swiper-pagination',
                clickable: true,
            },
        })
        var homeAdvantageSwiper = new Swiper('.home-advantage-swiper-container', {
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.home-advantage-swiper-pagination',
                clickable: true,
            },
        })
    },
    initAction: function() {
        $(".home-advantage-item").click(function() {
            return
            let that = $(this)
            that.find(".home-advantage-item-desc").toggle()
            that.find(".home-advantage-item-icon").toggle()
            that.find(".home-advantage-item-title").toggle()
            that.find(".home-advantage-item-content").toggle()
            if(that.hasClass("active")) {
                that.removeClass("active")
                that.css("background", "#fff")
            }else {
                that.addClass("active")
                that.css("background", that.find(".home-advantage-item-icon").css("background"))
                setTimeout(function() {
                    that.removeClass("active")
                    that.css("background", "#fff")
                    that.find(".home-advantage-item-desc").toggle()
                    that.find(".home-advantage-item-icon").toggle()
                    that.find(".home-advantage-item-title").toggle()
                    that.find(".home-advantage-item-content").toggle()
                }, 4000);
            }
        })
    },
}
$(function() {
    homeHandler.init();
    homeHandler.initAction();
})