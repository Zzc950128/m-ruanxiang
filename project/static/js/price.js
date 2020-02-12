var priceService = {
    api: {},
}
var priceHandler = {
    args: {
    	tableData: [
    		{
    			cardTitle: "11111",
    			cardTip: ["1", "1"],
    			cardList: ["111", "111", "111"],
    			cardTable: [
    				{
    					type: "title", content: "title1",
    				}, {
    					type: "content", content: "title1", result: "123"
    				}, {
    					type: "content", content: "title1", result: "123"
    				}, {
    					type: "title", content: "title2", result: "12"
    				}, {
    					type: "content", content: "title2", result: "123"
    				}, {
    					type: "content", content: "title2", result: "123"
    				}, {
    					type: "content", content: "title2", result: "12"
    				}, {
    					type: "content", content: "title2", result: "123"
    				}
    			]
    		},{
    			cardTitle: "22222",
    			cardTip: ["2", "2"],
    			cardList: ["222", "222", "222"],
    			cardTable: [
    				{
    					type: "title", content: "title1",
    				}, {
    					type: "content", content: "title1", result: "123"
    				}, {
    					type: "content", content: "title1", result: "123"
    				}, {
    					type: "title", content: "title2"
    				}, {
    					type: "content", content: "title2", result: "123"
    				}, {
    					type: "content", content: "title2", result: "123"
    				}, {
    					type: "content", content: "title2", result: "12"
    				}, {
    					type: "content", content: "title2", result: "123"
    				}
    			]
    		},{
    			cardTitle: "33333",
    			cardTip: ["3", "3"],
    			cardList: ["333", "333", "333"],
    			cardTable: [
    				{
    					type: "title", content: "324",
    				}, {
    					type: "content", content: "tit14le1", result: ""
    				}, {
    					type: "content", content: "tit32143le1", result: ""
    				}, {
    					type: "title", content: "tit324le2"
    				}, {
    					type: "content", content: "tit324le2", result: ""
    				}, {
    					type: "content", content: "tit32432le2", result: "123"
    				}, {
    					type: "content", content: "3534", result: "12"
    				}, {
    					type: "content", content: "tit345le2", result: "123"
    				}
    			]
    		},{
    			cardTitle: "44444",
    			cardTip: ["4", "4"],
    			cardList: ["444", "444", "444"],
    			cardTable: [
    				{
    					type: "title", content: "title1",
    				}, {
    					type: "content", content: "title1", result: "123"
    				}, {
    					type: "content", content: "title1", result: "123"
    				}, {
    					type: "title", content: "title2"
    				}, {
    					type: "content", content: "title2", result: "123"
    				}, {
    					type: "content", content: "title2", result: ""
    				}, {
    					type: "content", content: "title2", result: "12"
    				}, {
    					type: "title", content: "title2"
    				}
    			]
    		},{
    			cardTitle: "55555",
    			cardTip: ["5", "5"],
    			cardList: ["555", "555", "555"],
    			cardTable: [
    				{
    					type: "title", content: "title1",
    				}, {
    					type: "content", content: "title1", result: "123"
    				}, {
    					type: "content", content: "title1", result: "123"
    				}, {
    					type: "content", content: "title2", result: "123"
    				}, {
    					type: "content", content: "title2", result: "123"
    				}, {
    					type: "content", content: "title2", result: "12"
    				}, {
    					type: "content", content: "title2", result: "123"
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
    		var tips = priceHandler.args.tableData[index].cardTip
    		var tipHtml = ""
    		tips.forEach(function(item) {
    			tipHtml += "<p>"+item+"</p>"
    		})
    		$(".price-card-tip").html(tipHtml)
    		var lists = priceHandler.args.tableData[index].cardList
    		var listHtml = ""
    		lists.forEach(function(item) {
    			listHtml += '<div class="price-card-item">'+item+'</div>'
    		})
    		$(".price-card-list-wrap").html(listHtml)
    		var tables = priceHandler.args.tableData[index].cardTable
    		var tableHtml = ""
    		tables.forEach(function(item) {
    			if(item.type == "title") {
    				tableHtml += '<div class="price-table-title">'+item.content+'</div>'
    			}else {
    				tableHtml += '<div class="price-table-content">'+item.content+'</div>'
    				tableHtml += '<div class="price-table-result">'+(item.result?item.result:"+")+'</div>'
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