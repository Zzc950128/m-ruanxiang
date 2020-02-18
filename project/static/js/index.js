var homeService = {
    api: {},
}
var homeHandler = {
    args: {
        homeModeSwiper: null,
        homeAdvantageSwiper: null,

    },
    init: function() {
        console.log("homeHandlerInit")
        // 载入menu
        loadPage($("#menu"), "../component/menu.html", function() {
            $(".menu li").eq(0).addClass("active")
            menuTouch()
        });
        homeHandler.args.homeModeSwiper = new Swiper('.home-mode-swiper-container', {
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
        homeHandler.args.homeAdvantageSwiper = new Swiper('.home-advantage-swiper-container', {
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
            var index = $(this).attr("data-index")
            var flag = false
            $(".home-advantage-item").each(function() {    
                if($(this).attr("data-index") == index) {
                    if($(this).hasClass('active')) {
                        $(this).removeClass('active')
                        flag = true
                    }else {
                        $(this).addClass('active')
                    }
                    $(this).find(".home-advantage-item-desc").toggle()
                    $(this).find(".home-advantage-item-icon").toggle()
                    $(this).find(".home-advantage-item-title").toggle()
                    $(this).find(".home-advantage-item-content").toggle()
                }else {
                    if($(this).hasClass('active')) {                    
                        $(this).removeClass('active')
                        $(this).find(".home-advantage-item-desc").toggle()
                        $(this).find(".home-advantage-item-icon").toggle()
                        $(this).find(".home-advantage-item-title").toggle()
                        $(this).find(".home-advantage-item-content").toggle()
                    }
                }
            })
            // console.log(flag)
            if(flag) {
                homeHandler.args.homeAdvantageSwiper.autoplay.start()
            }else {
                homeHandler.args.homeAdvantageSwiper.autoplay.stop()
            }
        })
    },
}
$(function() {
    homeHandler.init();
    homeHandler.initAction();
})