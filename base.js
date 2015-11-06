//查找<a>标签中含有属性rel并值为nofollow的对象
function getInputsByType(type, p) {
		var inputs = document.getElementsByTagName('a');
		var length = inputs.length;
		var ret = [];
		for (var i = 0; i < length; i++) {
			var input = inputs[i];
			//console.log(inputs[i].rel)
			if (input.rel == type) {
				ret.push(input);
			}
		}
		var last = ret.pop();
		return last;
	}
	//传属性值 和 标签，核心是getElementsByTagName()方法，然后迭代出对象
var pwd = getInputsByType('nofollow', 'a');
//console.log(pwd[0]);
//如果没有用pop()删除并默认选择数组最后一个对象返回，则用这个来获取数组第一个对象来实现返回点击
//此方法遇上前进后退都有的按钮时失灵，因为两个按钮的属性值一致pwd[0].click();
var al = document.getElementsByClassName('btn');
var i = 2;

function follow() {
		console.log("follow")
		al[i].click();
		i += 2;
		if (i >= 104) {
			clearInterval(followSet);
			pwd.click();
		}
	}
	//经过测试，设置成100毫秒比较合理，较快会有部分相应失败
followSet = setInterval(follow, 100);
//到52后暂停
//////////////////////////////////////////////////////////
//复制粘贴分界线//
//////////////////////////////////////////////////////////
//取消 unfollow——>follow状态
function getInputsByType(type, p) {
		var inputs = document.getElementsByTagName('a');
		var length = inputs.length;
		var ret = [];
		for (var i = 0; i < length; i++) {
			var input = inputs[i];
			//console.log(inputs[i].rel)
			if (input.rel == type) {
				ret.push(input);
			}
		}
		var last = ret.pop();
		return last;
	}
	//传属性值 和 标签，核心是getElementsByTagName()方法，然后迭代出对象
var pwd = getInputsByType('nofollow', 'a');

var al = document.getElementsByClassName('btn');
var i = 3;

function Unfollow() {
	console.log("Unfollow")
	al[i].click();
	i += 2;
	if (i >= 104) {
		clearInterval(UnfollowSet);
		pwd.click();
	}
}
UnfollowSet = setInterval(Unfollow, 100);
//也是到52后暂停
//////////////////////////////////////////////////////////
//复制粘贴分界线//
//////////////////////////////////////////////////////////
//缩减关注时用的
function getInputsByType(type, p) {
		var inputs = document.getElementsByTagName('a');
		var length = inputs.length;
		var ret = [];
		for (var i = 0; i < length; i++) {
			var input = inputs[i];
			//console.log(inputs[i].rel)
			if (input.rel == type) {
				ret.push(input);
			}
		}
		var last = ret.pop();
		return last;
	}
	//传属性值 和 标签，核心是getElementsByTagName()方法，然后迭代出对象
var pwd = getInputsByType('nofollow', 'a');

var al = document.getElementsByClassName('btn');
var i = 1;

function Unfollow() {
	console.log("Unfollow")
	al[i].click();
	i += 2;
	if (i >= 102) {
		clearInterval(UnfollowSet);
		pwd.click();
	}
}
UnfollowSet = setInterval(Unfollow, 100);
//也是到52后暂停
//////////////////////////////////////////////////////////
//复制粘贴分界线//
//////////////////////////////////////////////////////////
//回关注时用的
//查找<a>标签中含有属性rel并值为nofollow的对象
function getInputsByType(type, p) {
		var inputs = document.getElementsByTagName('a');
		var length = inputs.length;
		var ret = [];
		for (var i = 0; i < length; i++) {
			var input = inputs[i];
			//console.log(inputs[i].rel)
			if (input.rel == type) {
				ret.push(input);
			}
		}
		var last = ret.pop();
		return last;
	}
	//传属性值 和 标签，核心是getElementsByTagName()方法，然后迭代出对象
var pwd = getInputsByType('nofollow', 'a');
//console.log(pwd[0]);
//如果没有用pop()删除并默认选择数组最后一个对象返回，则用这个来获取数组第一个对象来实现返回点击
//此方法遇上前进后退都有的按钮时失灵，因为两个按钮的属性值一致pwd[0].click();
var al = document.getElementsByClassName('btn');
var i = 0;

function follow() {
		console.log("follow")
		al[i].click();
		i += 2;
		if (i >= 102) {
			clearInterval(followSet);
			pwd.click();
		}
	}
	//经过测试，设置成100毫秒比较合理，较快会有部分相应失败
followSet = setInterval(follow, 100);