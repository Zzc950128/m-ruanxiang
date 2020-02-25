var documentService = {
    api: {
        getArticleList: "/api/getArticleList",
        getArticle: "/api/articleData.json"
    },
}
var documentHandler = {
    args: {
        currentPage: 1,
        totalCount: 0,
        totalPage: 0,
        currentCategory: 0,
        articleList: [],
        urlArgs: {},
        offsetTop: null,
    },
    init: function() {
        console.log("documentHandlerInit")
        // 载入menu
        loadPage($("#menu"), "/component/menu.html", function() {
            $(".menu li").eq(9).addClass("active")
            menuTouch()
        });
        setTimeout(function() {
            $(".header-wrap").hide()
            $(".header-reverse-wrap").show()
        }, 0)
        documentHandler.args.offsetTop = $(".document-category").offset().top
        // 分类固定
        $(window).scroll(function() {
            // 达到按钮组切换固定
            var h = $(this).scrollTop();
            if(h + $(".header").height() > documentHandler.args.offsetTop) {
                $(".document-category").addClass("fixed")
            }else {
                $(".document-category").removeClass("fixed")
            }
        });
        var documentCategorySwiper = new Swiper('.document-category-swiper-container', {
            slidesPerView: 4,
            hashNavigation: true,
        })
        documentHandler.args.urlArgs.category = getUrlParam("category")
        documentHandler.args.urlArgs.id = getUrlParam("id")
        if(documentHandler.args.urlArgs.category) {
            documentHandler.args.currentCategory = documentHandler.args.urlArgs.category
            $(".document-category-item").removeClass("active")
            $(".document-category-item").each(function() {
                if($(this).attr("data-index") == documentHandler.args.urlArgs.category) {
                    $(this).addClass("active")
                }
            })
            documentHandler.getArticleList(true)
        }
        if(documentHandler.args.urlArgs.id) {
            documentHandler.getArticleById(documentHandler.args.urlArgs.id)
        }
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
            var that = $(this)
            var index = that.attr("data-index")
            documentHandler.args.currentCategory = index
            documentHandler.args.currentPage = 1
            documentHandler.args.totalCount = 0
            $(".document-category-icon").removeClass("reverse")
            $(".document-category-title").hide()
            $(".document-category-all-list").css("display", "none")
            $(".document-category-list").show()
            $(".document-article-list-wrap").html("")
            $(".document-article-content").hide()
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
            }else {
                console.log("已经是首页")
            }
        })
        $(".document-article-pagination-left").click(function() {
            if(documentHandler.args.currentPage != 1 && documentHandler.args.totalPage > 1) {
                documentHandler.args.currentPage = documentHandler.args.currentPage - 1
                documentHandler.getArticleList()
            }else {
                console.log("已经是首页")
            }
        })
        $(".document-article-pagination-right").click(function() {
            if(documentHandler.args.currentPage != documentHandler.args.totalPage && documentHandler.args.totalPage > 1) {
                documentHandler.args.currentPage = parseInt(documentHandler.args.currentPage) + 1
                documentHandler.getArticleList()
            }else {
                console.log("已经是尾页")
            }
        })
        $(".document-article-pagination-end").click(function() {
            if(documentHandler.args.currentPage != documentHandler.args.totalPage) {
                documentHandler.args.currentPage = documentHandler.args.totalPage
                documentHandler.getArticleList()
            }else {
                console.log("已经是尾页")
            }
        })
        $(".document-article-content-back").click(function() {
            $(".document-article-content").hide()
            $(".document-article-list-wrap").show()
            $(".document-article-pagination").show()
        })
    },
    getArticleList: function(flag) {
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
                // documentHandler.args.articleList.forEach((item, index) => {})
                for(var i = 0; i < documentHandler.args.articleList.length; i++) {
                    articleHtml += '<div class="document-article-list clearfix" data-id="' + documentHandler.args.articleList[i].id + '">' +
                                        '<div class="document-article-list-content">' + documentHandler.args.articleList[i].title + '</div>' +
                                        '<div class="document-article-list-date">' + documentHandler.args.articleList[i].date + '</div>' +
                                    '</div>'
                }
                $(".document-article-list-wrap").html(articleHtml)
                $(".document-article-list-wrap").show()
                $(".document-article-none").hide()
                $(".document-article-list").click(function() {
                    var articleId = $(this).attr("data-id")
                    documentHandler.getArticleById(articleId)
                })
                var paginationHtml = ""
                if(documentHandler.args.totalCount > 50) {
                    var page = documentHandler.args.totalPage
                    var currentPage = documentHandler.args.currentPage
                    console.log(currentPage)
                    var arr = []
                    $(".document-article-pagination-item").each(function() {
                        arr.push($(this).attr("data-index"))
                    })
                    console.log(arr)
                    if(arr.indexOf(currentPage.toString()) == -1) {
                        console.log("has not index")
                        if(currentPage <= 3) {
                            for(var i = 1; i <= 3; i++) {
                                paginationHtml += '<div class="document-article-pagination-item ' + (i == documentHandler.args.currentPage?"active":"") + '" data-index="' + i + '">' + i + '</div>'
                            }
                            paginationHtml += '<div class="document-article-pagination-item" data-index="0">...</div>'
                            paginationHtml += '<div class="document-article-pagination-item" data-index="' + page + '">' + page + '</div>'
                        }else if(page - currentPage >= 3) {
                            for(var i = currentPage - 2; i <= currentPage; i++) {
                                paginationHtml += '<div class="document-article-pagination-item ' + (i == documentHandler.args.currentPage?"active":"") + '" data-index="' + i + '">' + i + '</div>'
                            }
                            paginationHtml += '<div class="document-article-pagination-item" data-index="0">...</div>'
                            paginationHtml += '<div class="document-article-pagination-item" data-index="' + page + '">' + page + '</div>'
                        }else {
                            for(var i = page - 4; i <= page; i++) {
                                paginationHtml += '<div class="document-article-pagination-item ' + (i == documentHandler.args.currentPage?"active":"") + '" data-index="' + i + '">' + i + '</div>'
                            }
                        }
                    }else {
                        console.log("has index")
                        $(".document-article-pagination").show()
                        $(".document-article-pagination-item").removeClass("active")
                        $(".document-article-pagination-item").each(function() {
                            if($(this).attr("data-index") == documentHandler.args.currentPage && $(this).attr("data-index") != 0) {
                                $(this).addClass("active")
                            }
                        })
                        return
                    }
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
                    if(pageIndex != 0) {
                        documentHandler.args.currentPage = pageIndex;
                        documentHandler.getArticleList()
                    }
                })
            }
            if(flag) {
                $(".document-list-desc").hide()
                $(".document-article").show()
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
            articleHtml += '<div class="document-article-content-content"></div>'
            $(".document-article-content-wrap").html(articleHtml)
            $(".document-article-content-content").html(res.content)
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