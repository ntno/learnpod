'use strict';
var that = this
	,msg = "hi, friend!"
	,count = 0
	,printMessage = function(){
		console.log(that.msg);
	}
	,printCount = function(){
		console.log(that.count);
	}
	,incrementCount = function(){
		that.count = that.count + 1;
	}
	,countDisplaySpan;

console.log("woah console printing");
$('#messageDisplay').text(msg);
