var homeService = {
    api: {
        // getQuestion: "/api/question.json",
        // getTrend: "/api/trend.json"
        getQuestion: "/api/site/article-list",
        getTrend: "/api/site/article-list"
    },
}
var homeHandler = {
    args: {
        homeModeSwiper: null,
        homeAdvantageSwiper: null,

    },
    init: function() {
        console.log("homeHandlerInit")
        // 载入menu
        loadPage($("#menu"), "/component/menu.html", function() {
            $(".menu li").eq(0).addClass("active")
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
        homeHandler.getQuestionList()
        homeHandler.getTrendList()
    },
    initAction: function() {
        $(".video").click(function(e) {
            $("#video")[0].pause()
            $(".video").hide()
        })
        $(".video-wrap").click(function(e) {
            e.stopPropagation()
        })
        $(".home-banner-btn.second").click(function() {
            $(".video").show()
        })
        $(".home-help-more-btn").click(function() {
            window.location.href = window.location.origin+"/document.html"
        })
        $(".home-function-more-btn").click(function() {
            window.location.href = window.location.origin+"/price.html"
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
    getQuestionList: function() {
        ajaxGet(homeService.api.getQuestion, {
            page: 1,
            category: 1
        }, function(res) {
            var items = res.items
            var questionHtml = ""
            questionHtml += '<div class="home-help-question-item">被窝读书简介</div>'
            for(var i = 0; i < items.length; i++) {
                questionHtml += '<div class="home-help-question-item" data-category="'+items[i].category+'" data-id="'+items[i].id+'">'+items[i].title+'</div>'
            }
            $(".home-help-question-content").html(questionHtml)
            $(".home-help-question-item").click(function() {
                window.location.href = window.location.origin+"/document.html"+($(this).attr("data-category")?("?category="+$(this).attr("data-category")+"&id="+$(this).attr("data-id")+"#"+$(this).attr("data-category")):"")
            })
        }, function(err) {
            console.log(err)
        })
    },
    getTrendList: function() {
        ajaxGet(homeService.api.getTrend, {
            page: 1,
            category: 6
        }, function(res) {
            var items = res.items
            var trendHtml = ""
            for(var i = 0; i < items.length; i++) {
                trendHtml += '<div class="home-help-trends-content-wrap clearfix">' +
                                '<div class="home-help-trends-content" data-category="'+items[i].category+'" data-id="'+items[i].id+'">'+items[i].title+'</div>' +
                                '<div class="home-help-trends-date">'+items[i].date+'</div>' +
                            '</div>'
            }
            $(".home-help-trends").html(trendHtml)
            $(".home-help-trends-content").click(function() {
                window.location.href = window.location.origin+"/document.html"+($(this).attr("data-category")?("?category="+$(this).attr("data-category")+"&id="+$(this).attr("data-id")+"#"+$(this).attr("data-category")):"")
            })

        }, function(err) {
            console.log(err)
        })
    }
}
$(function() {
    homeHandler.init();
    homeHandler.initAction();
})