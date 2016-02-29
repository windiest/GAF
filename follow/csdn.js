//获取当前所在的url地址
var user = {
	'name':'AutumnsWind',
};
var userUrl = user.name;
console.log('CSDN博客主人为:'+userUrl);
var url = window.location.href;
console.log('CSDN博客地址为:'+url);
var array = [
      "http://blog.csdn.net/qq_27080247/article/details/49942991",
	  "http://blog.csdn.net/qq_27080247/article/details/50735380",
	  "http://blog.csdn.net/qq_27080247/article/details/50735471",
	  "http://blog.csdn.net/qq_27080247/article/details/50747418",
	  "http://blog.csdn.net/qq_27080247/article/details/50749228",
	  "http://blog.csdn.net/qq_27080247/article/details/50754432",
	  "http://blog.csdn.net/qq_27080247/article/details/50754476",
	  "http://blog.csdn.net/qq_27080247/article/details/50754578",
	  "http://blog.csdn.net/qq_27080247/article/details/50757259",
	  "http://blog.csdn.net/qq_27080247/article/details/50757288",
	  "http://blog.csdn.net/qq_27080247/article/details/50757308",
	  "http://blog.csdn.net/qq_27080247/article/details/50757345",
	  "http://blog.csdn.net/qq_27080247/article/details/50757449"
      ];
console.log('总共需要处理的网址数目为:'+array.length);
var num = 0;//指针
setInterval(linkTo,500);
function linkTo(){
for(i=0;i<array.length;i++){
if(url==array[i]){
	if(i==(array.length-1)){
		//如果到了数组末端则重新返回
		window.location.href = array[0]
		console.log('运行到当前数组第几个:'+'0'+'/'+array.length);
	}else{
		console.log('运行到当前数组第几个:'+i+'/'+array.length);
		window.location.href = array[i+1]
	}
}else{
	//出错则重新开始
	//window.location.href = array[0];
}}
}
