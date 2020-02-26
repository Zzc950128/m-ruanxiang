var aboutService = {
    api: {
        // getQuestion: "/api/question.json",
        // getTrend: "/api/trend.json"
        getQuestion: "/api/site/article-list",
        getTrend: "/api/site/article-list"
    },
}
var aboutHandler = {
    args: {},
    init: function() {
        console.log("aboutHandlerInit")
        // 载入menu
        loadPage($("#menu"), "/component/menu.html", function() {
            $(".menu li").eq(10).addClass("active")
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
        aboutHandler.getQuestionList()
        aboutHandler.getTrendList()
    },
    initAction: function() {
        $(".about-help-more-btn").click(function() {
            window.location.href = window.location.origin+"/document.html"
        })
    },
    getQuestionList: function() {
        ajaxGet(aboutService.api.getQuestion, {
            page: 1,
            category: 1
        }, function(res) {
            var items = res.items
            var questionHtml = ""
            questionHtml += '<div class="about-help-question-item">被窝读书简介</div>'
            for(var i = 0; i < items.length; i++) {
                questionHtml += '<div class="about-help-question-item" data-category="'+items[i].category+'" data-id="'+items[i].id+'">'+items[i].title+'</div>'
            }
            $(".about-help-question-content").html(questionHtml)
            $(".about-help-question-item").click(function() {
                window.location.href = window.location.origin+"/document.html"+($(this).attr("data-category")?("?category="+$(this).attr("data-category")+"&id="+$(this).attr("data-id")):"")
            })
        }, function(err) {
            console.log(err)
        })
    },
    getTrendList: function() {
        ajaxGet(aboutService.api.getTrend, {
            page: 1,
            category: 6
        }, function(res) {
            var items = res.items
            var trendHtml = ""
            for(var i = 0; i < items.length; i++) {
                trendHtml += '<div class="about-help-trends-content-wrap clearfix">' +
                                '<div class="about-help-trends-content" data-category="'+items[i].category+'" data-id="'+items[i].id+'">'+items[i].title+'</div>' +
                                '<div class="about-help-trends-date">'+items[i].date+'</div>' +
                            '</div>'
            }
            $(".about-help-trends").html(trendHtml)
            $(".about-help-trends-content").click(function() {
                window.location.href = window.location.origin+"/document.html"+($(this).attr("data-category")?("?category="+$(this).attr("data-category")+"&id="+$(this).attr("data-id")):"")
            })
        }, function(err) {
            console.log(err)
        })
    }
}
$(function() {
    aboutHandler.init();
    aboutHandler.initAction()
})