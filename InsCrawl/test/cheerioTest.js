var http = require("http");
var cheerio = require("cheerio");
// Utility function that downloads a URL and invokes
// callback with the data.
function download(url, callback) {
  http.get(url, function(res) {
    var data = "";
    res.on('data', function (chunk) {
      data += chunk;
    });
    res.on("end", function() {
      callback(data);
    });
  }).on("error", function() {
    callback(null);
  });
}

//url = "http://www.china-b.com/YUimages/ct-f-logo-j.jpg";
//download(url,console.log);


var url = "http://it.china-b.com/web/htmlcss/20090819/142134_1.html"
 
download(url, function(data) {
  if (data) {
    //console.log(data);
 
    var $ = cheerio.load(data);
    $("div").each(function(i, e) {
        console.log($(e).attr("src"));
      });
 
    console.log("done");
  }
  else console.log("error");  
});
