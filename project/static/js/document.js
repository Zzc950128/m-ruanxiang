var documentService = {
    api: {},
}
var documentHandler = {
    args: {},
    init: function() {
        console.log("documentHandlerInit")
        // 载入menu
        loadPage($("#menu"), "../component/menu.html", function() {
            $(".menu li").eq(9).addClass("active")
            menuTouch()
        });
        setTimeout(function() {
            $(".header-wrap").hide()
            $(".header-reverse-wrap").show()
        }, 0)
        // 分类固定
        $(window).scroll(function() {
            // 达到按钮组切换固定
            var h = $(this).scrollTop();
            console.log(h, $(".document-category").offset().top)
            if(h + $(".header").height() > $(".document-category").offset().top) {
                $(".document-fixed").show()
            }else {
                $(".document-fixed").hide()
            }
        });
    },
    initAction: function() {
        $(".document-category-icon").click(function() {
            if($(this).hasClass("reverse")) {
                $(this).removeClass("reverse")
                $(".document-category-title").hide()
                $(".document-category-all-list").css("display", "none")
                $(".document-category-list").show()
            }else {
                $(this).addClass("reverse")
                $(".document-category-title").show()
                $(".document-category-all-list").css("display", "flex")
                $(".document-category-list").hide()
            }
        })
        $(".document-category-item").click(function() {
            $(".document-category-icon").removeClass("reverse")
            $(".document-category-title").hide()
            $(".document-category-all-list").css("display", "none")
            $(".document-category-list").show()
            var that = $(this)
            var index = that.attr("data-index")
            $(".document-category-item").removeClass("active")
            $(".document-category-item").each(function() {
                if($(this).attr("data-index") == index) {
                    $(this).addClass("active")
                }
            })
            if(index == "0") {
                $(".document-list-desc").show()
                $(".document-article").hide()
            }else {
                $(".document-list-desc").hide()
                $(".document-article").show()
            }
        })
    },
}
$(function() {
    documentHandler.init();
    documentHandler.initAction();
})