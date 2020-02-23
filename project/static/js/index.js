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
        $(".video").click(function() {
            $("#video")[0].pause()
            $(".video").hide()
        })
        $(".home-banner-btn.second").click(function() {
            $(".video").show()
        })
        $(".home-help-more-btn").click(function() {
            window.location.href = window.location.origin+"/page/document.html"
        })
        $(".home-function-more-btn").click(function() {
            window.location.href = window.location.origin+"/page/price.html"
        })
        $(".home-help-question-item, .home-help-trends-content").click(function() {
            window.location.href = window.location.origin+"/page/document.html"+($(this).attr("data-category")?("?category="+$(this).attr("data-category")+"&id="+$(this).attr("data-id")):"")
        })
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