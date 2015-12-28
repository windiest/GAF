var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');
var http = require('http');
//var dns = require('dns');


//var imgsObj = require('./Array/ImgArray');
var imgsObj = require('./Array/ImgArrayHttp');
//var imgsObj = require('./Array/BaiduHeaderImgArray');
var imgs = imgsObj.imgs;

function quickCrawlImg() {
	init();
	var i = 0;
	for (i = 0; i < imgs.length; i++) {
		console.log(i + "/" + imgs.length);
		console.log(imgs[i]);
		request(imgs[i]).pipe(fs.createWriteStream('./InsCrawlImg/dff' + i + '.jpg'));
	}
}

function quickCrawlImgOut(i) {
	url = imgs;
	http.get(url[i], function (res) {
		var imgData = "";
		res.setEncoding("binary");
		res.on("data", function (chunk) {
			imgData += chunk;
		});
		res.on("end", function () {
			fs.writeFile("./InsCrawlImg/" + i + ".png", imgData, "binary", function (err) {
				if (err) {
					console.log(i + ".png " + "down fail");
				}
				console.log(i + ".png " + "down success");
			});
		});
	});
}

function slowCrawlImg(i) {
	//console.log(i + "/" + imgs.length);
	console.log("link:" + imgs[i]);
	request(imgs[i]).pipe(fs.createWriteStream('./InsCrawlImg/dff' + i + '.jpg'));
	//console.log(request(imgs[i]));
	if (i < imgs[i]) {
		clearInterval();
	}
}

function htmlCrawl() {
	request.get('', function (error, response, result) {
		//console.log(result);
		$ = cheerio.load(result);
		var divs = $('');
		console.log(divs);

	});
}

function run(cb, prarm) {
	if (prarm) {
		var i = prarm;
	} else {
		var i = 0;
	}
	setInterval(
		function () {
			console.log("progress rate:" + i + "/" + imgs.length);
			cb(i);
			i++;
		}, 1000)
}


function readFile() {
	fs.readFile('./www.instagram.com-1451121958567.log', function (err, logData) {
		if (err) throw err;
		var text = logData.toString();
		console.log(text);
	});
}

function mkdir() {
	if (fs.exists("./InsCrawlImg", function (exists) {
		exists ? console.log("img folder exists") : create();
	})){};

		function create() {
			console.log("img folder create");
			fs.mkdir("./InsCrawlImg");
			}
}

function init(){
	mkdir();
}

(function option(params) {
	var options = process.argv;
	for (var o = 0; o < options.length; o++) {
		if (options[o] == "s") {
			var prarm = options[3];
			run(slowCrawlImg, prarm);
		} else if (options[o] == "q") {
			var prarm = options[3];
			quickCrawlImg(prarm);
		} else if (options[o] == "qo") {
			var prarm = options[3];
			run(quickCrawlImgOut, prarm);
		}
	}
})();