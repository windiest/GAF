$(document).ready(function(){
for_more = $(document);
for_more.scroll(
	function(){
		imgs = $("img");
		var imgsArray = [];
		for(i=0;i<imgs.length;i++){
	    //console.log(imgs[i].src);
		if(imgs){
			//console.log('"'+imgs[i].src+'"');
			//前后加入双引号放入数组
			imgsArray.push('"'+imgs[i].src+'"');
		}
        }
		console.log("--------------------");
		console.log("图片数量:"+imgs.length);
		console.log("图片数组:"+imgsArray.length);
		console.log("图片数组:"+imgsArray);
		console.log("--------------------");
	}
);
});