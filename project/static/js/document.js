var documentService = {
    api: {
        getArticleList: "../../api/articleList.json",
        getArticle: "../../api/articleData.json"
    },
}
var documentHandler = {
    args: {
        currentPage: 1,
        totalCount: 0,
        totalPage: 0,
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
            $(".document-article-content").hide()
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
        $(".document-article-pagination-head").click(function() {
            if(documentHandler.args.currentPage != 1) {
                documentHandler.args.currentPage = 1
                documentHandler.getArticleList()
            }
        })
        $(".document-article-pagination-left").click(function() {
            if(documentHandler.args.currentPage != 1 && documentHandler.args.totalPage > 1) {
                documentHandler.args.currentPage = documentHandler.args.currentPage - 1
                documentHandler.getArticleList()
            }
        })
        $(".document-article-pagination-right").click(function() {
            if(documentHandler.args.currentPage != documentHandler.args.totalPage && documentHandler.args.totalPage > 1) {
                documentHandler.args.currentPage = documentHandler.args.totalPage
                documentHandler.getArticleList()
            }
        })
        $(".document-article-pagination-end").click(function() {
            if(documentHandler.args.currentPage != documentHandler.args.totalPage) {
                documentHandler.args.currentPage = documentHandler.args.totalPage
                documentHandler.getArticleList()
            }
        })
        $(".document-article-content-back").click(function() {
            $(".document-article-content").hide()
            $(".document-article-list-wrap").show()
            $(".document-article-pagination").show()
        })
    },
    getArticleList() {
        console.log("getArticleList")
        ajaxGet(documentService.api.getArticleList, {
            category: documentHandler.args.currentCategory,
            page: documentHandler.args.currentPage
        }, function(res) {
            console.log(res)
            documentHandler.args.totalCount = res.totalCount
            documentHandler.args.totalPage = documentHandler.args.totalCount % 10 == 0 ? parseInt(documentHandler.args.totalCount / 10) : parseInt(documentHandler.args.totalCount / 10) + 1
            documentHandler.args.articleList = res.items
            if(documentHandler.args.totalCount == 0) {
                $(".document-article-list-wrap").hide()
                $(".document-article-none").show()
                $(".document-article-pagination").hide()
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
                $(".document-article-list").click(function() {
                    var articleId = $(this).attr("data-id")
                    documentHandler.getArticleById(articleId)
                })
                var paginationHtml = ""
                if(documentHandler.args.totalCount > 50) {

                }else {
                    var page = documentHandler.args.totalPage
                    for(var i = 1; i <= page; i++) {
                        paginationHtml += '<div class="document-article-pagination-item ' + (i == documentHandler.args.currentPage?"active":"") + '" data-index="' + i + '">' + i + '</div>'
                    }
                }
                $(".document-article-pagination-list").html(paginationHtml)
                $(".document-article-pagination").show()
                $(".document-article-pagination-item").click(function() {
                    var pageIndex = $(this).attr("data-index")
                    documentHandler.args.currentPage = pageIndex;
                    documentHandler.getArticleList()
                })
            }
        }, function(err) {
            console.log(err)
        })
    },
    getArticleById: function(articleId) {
        ajaxGet(documentService.api.getArticle, {
            id: articleId,
        }, function(res) {
            // console.log(res)
            var articleHtml = ""
            articleHtml += '<div class="document-article-content-title">' + res.title + '</div>'
            articleHtml += '<div class="document-article-content-date">' + res.date + '</div>'
            articleHtml += '<div class="document-article-content-content">' + res.content + '</div>'
            $(".document-article-content-wrap").html(articleHtml)
            $(".document-article-list-wrap").hide()
            $(".document-article-pagination").hide()
            $(".document-article-content").show()
        }, function(err) {
        })
    }
}
$(function() {
    documentHandler.init();
    documentHandler.initAction();
})