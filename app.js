const express = require('express')
const app = express()
const fs = require('fs');

app.use(express.static('project'))


app.get('/getArticleList',function(req,res){
	let query = req.query
	let data = JSON.parse(fs.readFileSync("./project/api/articleList.json").toString())
	let page = data.totalCount % 10 == 0 ? parseInt(data.totalCount / 10) : parseInt(data.totalCount / 10) + 1
	if(query.page == page) {
		res.send({
			totalCount: data.totalCount,
			items: data.items.slice(0, 5)
		})
	}else {
		res.send({
			totalCount: data.totalCount,
			items: data.items
		})
	}
})

app.listen(3000, () => console.log('app listening on port 3000!'))