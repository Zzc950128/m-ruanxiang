var documentService = {
    api: {
        getArticle: "../../api/articleList.json",
        getArticle2: "../../api/articleList2.json"
    },
}
var documentHandler = {
    args: {
        currentPage: 1,
        totalCount: 0,
        currentCategory: 0,
        articleList: [],
    },
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
            // console.log(h, $(".document-category").offset().top)
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
            $(".document-article-list-wrap").html("")
            documentHandler.args.currentPage = 1
            documentHandler.args.totalCount = 0
            var that = $(this)
            var index = that.attr("data-index")
            documentHandler.args.currentCategory = index
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
                documentHandler.getArticleList()
                $(".document-list-desc").hide()
                $(".document-article").show()
            }
        })
    },
    getArticleList() {
        console.log("getArticleList")
        ajaxGet((documentHandler.args.currentPage == 1 ? documentService.api.getArticle : documentService.api.getArticle2), {
            category: documentHandler.args.currentCategory
        }, function(res) {
            console.log(res)
            documentHandler.args.totalCount = res.totalCount
            documentHandler.args.articleList = res.items
            if(documentHandler.args.totalCount == 0) {
                $(".document-article-list-wrap").hide()
                $(".document-article-none").show()
            }else {
                var articleHtml = ""
                documentHandler.args.articleList.forEach((item, index) => {
                    articleHtml += '<div class="document-article-list clearfix" data-id="' + item.id + '">' +
                                        '<div class="document-article-list-content">' + item.title + '</div>' +
                                        '<div class="document-article-list-date">' + item.date + '</div>' +
                                    '</div>'
                })
                $(".document-article-list-wrap").html(articleHtml)
                $(".document-article-list-wrap").show()
                $(".document-article-none").hide()
                $(".document-article-pagination").show()
            }
        }, function(err) {
            console.log(err)
        })
    }
}
$(function() {
    documentHandler.init();
    documentHandler.initAction();
})