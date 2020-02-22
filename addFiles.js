const fs = require("fs")
const path = require('path')

function copy(originPath, targetPath) {
	let paths = fs.readdirSync(originPath)
	paths.forEach(function (item, index) {
		if(item != "api") {
			let _origin = path.join(originPath, item)
			let _target = path.join(targetPath, item)
			let stat = fs.lstatSync(_origin);
			if(stat.isDirectory(_origin)) {
				checkDirectory(_origin, _target);
			}else {
				checkFile(_origin, _target);
			}
		}
	})
}

function checkDirectory(origin, target) {
	fs.exists(target, function(exists) {
		if(!exists) {
			console.log("mkdir: ", target)
			fs.mkdirSync(target);
			copy(origin, target)
		}else {
			copy(origin, target)
		}
	})
}

function checkFile(origin, target) {
	fs.exists(target, function(exists) {
		if(!exists) {
			console.log("add file: ", target)
			let readStream = fs.createReadStream(origin);
			let writeStream = fs.createWriteStream(target);
			readStream.pipe(writeStream);
		}
	})
}

copy("project", "dist")
