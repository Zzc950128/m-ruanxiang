var priceService = {
    api: {
        getPrice: "../../api/price.json"
    }
}
var priceHandler = {
    args: {
        showMore: false,
    	tableData: [
    	]
    },
    init: function() {
        console.log("priceHandlerInit")
        // 载入menu
        loadPage($("#menu"), "../component/menu.html", function() {
            $(".menu li").eq(6).addClass("active")
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
            if(h + $(".header").height() > $(".price-category").offset().top){
                $(".price-fixed").show()
            }else {
                $(".price-fixed").hide()
            }
        });
        priceHandler.getPriceData()
    },
    initAction: function() {
    	$(".price-category-btn").click(function() {
    		var that = $(this)
            var index = that.attr("data-index")
            var className = "price-card-wrap" + index
            $(".price-card-wrap").removeClass("price-card-wrap0")
            $(".price-card-wrap").removeClass("price-card-wrap1")
            $(".price-card-wrap").removeClass("price-card-wrap2")
            $(".price-card-wrap").removeClass("price-card-wrap3")
            $(".price-card-wrap").removeClass("price-card-wrap4")
            $(".price-card-wrap").addClass(className)
            $(".price-category-btn").removeClass("active")
            $(".price-category-btn").each(function(i, item) {
                if($(this).attr("data-index") == index) {
                    $(this).addClass("active")
                }
            })
            $(".price-card-title").html(priceHandler.args.tableData[index].cardTitle)
            $(".price-table-title").html(priceHandler.args.tableData[index].cardTitle)
            var tips = priceHandler.args.tableData[index].cardTip
            var tipHtml = ""
            tips.forEach(function(item) {
                tipHtml += "<p>"+item+"</p>"
            })
            $(".price-card-tip").html(tipHtml)
            var lists = priceHandler.args.tableData[index].cardList
            var listHtml = ""
            listHtml += "<ul>"
            lists.forEach(function(item) {
                listHtml += '<li class="price-card-item">'+item+'</li>'
            })
            listHtml += "</ul>"
            $(".price-card-list-wrap").html(listHtml)
            var tables = priceHandler.args.tableData[index].cardTable
            var tableHtml = ""
            tables.forEach(function(item) {
                if(item.type == "title") {
                    tableHtml += '<div class="price-table-title">'+item.content+'</div>'
                }else {
                    tableHtml += '<div class="price-table-content">'+item.content+'</div>'
                    tableHtml += '<div class="price-table-result">'
                    if(item.result === "true") {
                        tableHtml += '<img src="../static/images/price/include.png" alt="支持">'
                    }else if(item.result === "false") {
                        tableHtml += '<img src="../static/images/price/not.png" alt="不支持">'
                    }else {
                        tableHtml += item.result
                    }
                    tableHtml += '</div>'
                }
            })
            $(".price-table-border").html(tableHtml)
    	})
        $(".price-table-show-more").click(function() {
            if(!priceHandler.args.showMore) {
                priceHandler.args.showMore = true
                $(".price-table-border").addClass("flod")
                $(".price-table-show-shadow").hide()
                $(".price-table-show-more").html("收起")
                $(".price-table-show-more").removeClass("flod")
            }else {
                priceHandler.args.showMore = false
                $(".price-table-border").removeClass("flod")
                $(".price-table-show-shadow").show()
                $(".price-table-show-more").html("点击加载全部")
                $(".price-table-show-more").addClass("flod")
            }
        })
    },
    getPriceData: function() {
        ajaxGet(priceService.api.getPrice, "", function(res) {
            console.log(res)
            priceHandler.args.tableData = res
            var tables = priceHandler.args.tableData[0].cardTable
            var tableHtml = ""
            tables.forEach(function(item) {
                if(item.type == "title") {
                    tableHtml += '<div class="price-table-title">'+item.content+'</div>'
                }else {
                    tableHtml += '<div class="price-table-content">'+item.content+'</div>'
                    tableHtml += '<div class="price-table-result">'
                    if(item.result === "true") {
                        tableHtml += '<img src="../static/images/price/include.png" alt="支持">'
                    }else if(item.result === "false") {
                        tableHtml += '<img src="../static/images/price/not.png" alt="不支持">'
                    }else {
                        tableHtml += item.result
                    }
                    tableHtml += '</div>'
                }
            })
            $(".price-table-border").html(tableHtml)
        }, function(err) {
            console.log(err)
        })
    }
}
$(function() {
    priceHandler.init();
    priceHandler.initAction();
})