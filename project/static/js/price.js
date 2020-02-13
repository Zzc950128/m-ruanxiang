var priceService = {
    api: {},
}
var priceHandler = {
    args: {
    	tableData: [
    		{
    			cardTitle: "自选版",
    			cardTip: ["多终端自由搭配", "部分加密授权"],
    			cardList: ["原生IOS端APP", "原生安卓端APP", "公众号、分销体系、H5"],
    			cardTable: [
    				{
    					type: "title", content: "内容管理",
    				}, {
    					type: "content", content: "小说、漫画管理", result: "true"
    				}, {
    					type: "content", content: "男女双频切换", result: "true"
    				}, {
    					type: "title", content: "运营管理"
    				}, {
    					type: "content", content: "阅读付费", result: "true"
    				}, {
    					type: "content", content: "章节试读", result: "true"
    				}, {
    					type: "content", content: "ASO", result: "联系销售"
    				}, {
    					type: "content", content: "其他定制需求", result: "联系销售"
    				}
    			]
    		},{
    			cardTitle: "APP版",
    			cardTip: ["多终端自由搭配", "部分加密授权"],
    			cardList: ["原生IOS端APP", "原生安卓端APP", "公众号、分销体系、H5"],
    			cardTable: [
    				{
    					type: "title", content: "内容管理",
    				}, {
    					type: "content", content: "小说、漫画管理", result: ""
    				}, {
    					type: "content", content: "男女双频切换", result: "true"
    				}, {
    					type: "title", content: "运营管理"
    				}, {
    					type: "content", content: "阅读付费", result: "true"
    				}, {
    					type: "content", content: "章节试读", result: ""
    				}, {
    					type: "content", content: "ASO", result: "联系销售"
    				}, {
    					type: "content", content: "其他定制需求", result: "联系销售"
    				}
    			]
    		},{
    			cardTitle: "旗舰版",
    			cardTip: ["多终端自由搭配", "部分加密授权"],
    			cardList: ["原生IOS端APP", "原生安卓端APP", "公众号、分销体系、H5"],
    			cardTable: [
    				{
    					type: "title", content: "内容管理",
    				}, {
    					type: "content", content: "小说、漫画管理", result: ""
    				}, {
    					type: "content", content: "男女双频切换", result: "true"
    				}, {
    					type: "title", content: "运营管理"
    				}, {
    					type: "content", content: "阅读付费", result: "true"
    				}, {
    					type: "content", content: "章节试读", result: "true"
    				}, {
    					type: "content", content: "ASO", result: "联系销售"
    				}, {
    					type: "content", content: "其他定制需求", result: "联系销售"
    				}
    			]
    		},{
    			cardTitle: "企业源码版",
    			cardTip: ["多终端自由搭配", "部分加密授权"],
    			cardList: ["原生IOS端APP", "原生安卓端APP", "公众号、分销体系、H5"],
    			cardTable: [
    				{
    					type: "title", content: "内容管理",
    				}, {
    					type: "content", content: "小说、漫画管理", result: "true"
    				}, {
    					type: "content", content: "男女双频切换", result: "true"
    				}, {
    					type: "title", content: "运营管理"
    				}, {
    					type: "content", content: "阅读付费", result: "联系销售"
    				}, {
    					type: "content", content: "章节试读", result: ""
    				}, {
    					type: "content", content: "其他定制需求", result: "联系销售"
    				}, {
    					type: "title", content: "阅读付费"
    				}
    			]
    		},{
    			cardTitle: "源码定制版",
    			cardTip: ["多终端自由搭配", "部分加密授权"],
    			cardList: ["555", "555", "555"],
    			cardTable: [
    				{
    					type: "title", content: "内容管理",
    				}, {
    					type: "content", content: "阅读付费", result: ""
    				}, {
    					type: "content", content: "其他定制需求", result: ""
    				}, {
    					type: "content", content: "阅读付费", result: "true"
    				}, {
    					type: "content", content: "章节试读", result: "true"
    				}, {
    					type: "content", content: "运营管理", result: "联系销售"
    				}, {
    					type: "content", content: "运营管理", result: "联系销售"
    				}
    			]
    		}
    	]
    },
    init: function() {
        console.log("priceHandlerInit")
        // 载入menu
        loadPage($("#menu"), "../component/menu.html", function() {
            $(".menu li").eq(6).addClass("active")
        });
    },
    initAction: function() {
    	$(".price-category-btn").click(function() {
    		var that = this
            var index = $(".price-category-btn").index(that)
            $(".price-category-btn").removeClass("active")
            $(".price-category-btn").eq(index).addClass("active")
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
                    tableHtml += '<div class="price-table-result '+(item.result==="true"?"active":"")+'">'+(item.result?item.result=="true"?"&#10003":item.result:" ")+'</div>'
                }
            })
            $(".price-table-border").html(tableHtml)
    	})
    },
}
$(function() {
    priceHandler.init();
    priceHandler.initAction();
})