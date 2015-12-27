$(document).ready(function() {
	for_more = $(document);

	function for_moreImg_scroll() {
		for_more.scroll(
			function() {
				imgs = $("img");
				var imgsArray = [];
				for (i = 0; i < imgs.length; i++) {
					//console.log(imgs[i].src);
					if (imgs) {
						//console.log('"'+imgs[i].src+'"');
						//前后加入双引号放入数组
						imgsArray.push('"' + imgs[i].src + '"');
					}
				}
				console.log("------------------------------------------------------");
				console.log("图片数量:" + imgs.length);
				console.log("图片数组:" + imgsArray.length);
				console.log("图片数组:" + imgsArray);
				console.log("------------------------------------------------------");
			}
		);
	}


	function ed_c() {
		var edit_content = $(".zm-editable-content");
		console.log(edit_content[4]);
		console.log(edit_content.text());
	}

	//zm-item-answer  zm-item-expanded
	function sum() {
		var sum = $(".zm-item-answer");
		console.log(sum.find(".count").val());
		console.log("Answer" + sum.length);
		for (i = 0; i < sum.length; i++) {
			sumC = sum.find(".count")[i];
			sumA = sum.find(".author-link")[i];
			sumB = sum.find(".bio")[i];
			sumZ = sum.find(".zm-editable-content")[i];
			sumL = sum.find(".last_updated")[i];
			console.log(sumC);
			/*if(sumC.innerText!="undefined"){
				console.log(sumC.innerText);
			}else{
				console.log("No Infomation")
			}
			if(sumA.innerText!="undefined"){
				console.log(sumA.innerText);
			}else{
				console.log("No Infomation")
			}*/
			/*console.log(sumA);
			console.log(sumB);
			console.log(sumZ);
			console.log(sumL);*/
			console.log(sumC.innerText);
			console.log(sumC.innerText + sumA.innerText + sumB.innerText + sumL.innerText);
			console.log(sumZ.innerText);
			console.log(sumL.innerText);
			console.log("-----------------------------------------------------------------------------------------------------------");
		}

		//console.log(sum);
		//console.log(edit_content.text());
	}

	//zm-editable-content clearfix
	function ed_c_f() {
		var edit_content_clear = $(".zm-editable-content .clearfix").text();
		console.log(edit_content_clear);
	}

	//zg-btn-white zu-button-more
	function zu_btn_more() {
		var zu_btn_more = $(".zu-button-more");
		zu_btn_more.trigger("click");
		console.log(zu_btn_more);
	}

	function zu_btn_more() {
		var zu_btn_more = $(".zu-button-more");
		zu_btn_more.click(
			function() {
				console.log("After Click More");
				//setTimeout(ed_c(), 3000);
				//htmlobj=$.ajax({url:"https://www.zhihu.com/node/QuestionAnswerListV2",async:false});
				console.log(htmlobj);
			}
		)
	}

	function bg() {
			var bg = $(".zu-top");
			console.log(bg);
			//$(".zu-top").css("background": "linear-gradient(to bottom, #000408,#828384)");
			//$(".zu-top").css("background-color": "#98bf21");
			$(".zu-top").css({
				"color": "white",
				"background": "rgb(74, 77, 62)",
				"font-family": "Arial",
				/*"font-size": "20px",
				"padding": "5px"*/
				"border-bottom": "0px solid #044e97"
			});

			$("button,input").css({
				"color": "black",
				"background": "white",
				"font-family": "Arial",
				/*"font-size": "20px",
				"padding": "5px"*/
				"border-bottom": "0px solid #044e97",
				"border": "1px solid #5F5F5F"
			});
		}
		/*var bg = $(".zu-top");
			console.log(bg);
			bg.css("background-color": "#98bf21");
			console.log(bg.css());*/
		//for_moreImg_scroll()
	bg();
	sum();
	zu_btn_more();
	//ed_c();
});
