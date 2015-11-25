//获取当前所在的url地址
var user = {
	'name':'AutumnsWind',
};
var userUrl = user.name;
console.log('github账户为:'+userUrl);
var url = window.location.href;
var array = [
      "GAF",
      "directory_helper",
      "Front-end-tutorial",
      "Front-end-questions-to-the-interview-stage",
      "array_helper",
      "html_helper",
      "form_helper",
      "file_helper",
      "email_helper",
      "download_helper",
      "date_helper",
      "captcha_helper",
      "cookie_helper",
      "SlimPHP",
      "Emoji-cheat-sheet",
      "Turing",
      "symfony",
      "CodeIgniter",
      "october",
      "laravel",
      "dmca",
      "cdyhyV1",
      "thinkphp",
      "fuel",
      "haha",
      "ha",
      "hahahaha",
      "hahaha",
      "angular-demo",
      "ZARA-API",
      "greenhat",
      "Wechat-Circle-of-friends-Released-video",
      "mobilethebayview",
      "mario",
      "fatfree",
      "es6tutorial",
      "src",
      "flight",
      "node-lessons",
      "pyj",
      "MarkDownView",
      "English-Edition-Imperlal-Springs",
      "ecoForum",
      "Angular-multiple-choice-question",
      "imperial-palace-new8062",
      "SpringFestival",
      "wilddog",
      "wedding-imperialspring",
      "huaxing-bank",
      "cdfh",
      "factory-function",
      "less",
      "hyt",
      "lbt",
      "cdyhy",                 
      "suning",
      "learnR",
      "LazyPHP",
      "bugfreejs",
      "android-tech-frontier",
      "mongoose_crud",
      "leiphp",
      "BTCChinaTrade"
      ];
console.log('总共需要处理的网址数目为:'+array.length);
var starJQ = $('.js-toggler-target');
//寻找Watch的input type="radio"并点击选取
var watchJQ = $('#do_subscribed');
//输出star选择器详情
//console.log(starJQ);
//选取第二个，既为Watching，第一个为Not watching,第三个为Ingore
console.log(watchJQ);
watchJQ.trigger("click");
//对star按钮进行点击
starJQ.trigger("click");
//输出当前url地址
console.log('当前网站地址为'+url);
//遍历地址uri数组
for(i=0;i<=array.length;i++){
	//对数组array进行拼接网页前缀https://github.com/AutumnsWind/
	var url_array = 'https://github.com/'+userUrl+'/'+array[i];
	console.log('组装后的链接为:'+url_array);
	if(url==url_array){
		console.log('你所在的数组位置为:array['+i+']');
		console.log('将打开的下一个网址为'+array[i+1]);
		//跳转到下一个目标链接
		window.location.href = 'https://github.com/'+userUrl+'/'+array[i+1];
		//console.log('https://github.com/AutumnsWind/'+array[i+1]);
	}else if(url==url_array){
		//找不到要处理的网址
		console.log("error,can't not find url from array");
	};
};