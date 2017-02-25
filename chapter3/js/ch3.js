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
		that.countDisplaySpan.html(count);	
	}
	,countDisplaySpan
	,sectionADiv
	,myNewSpan1
	,myNewSpan2;

console.log("woah console printing");

$('#messageDisplay').text(msg);

that.countDisplaySpan = $('#countDisplay');
that.countDisplaySpan.html(count);				

sectionADiv = $('#sectionA');
myNewSpan1 = $('<span></span>');
myNewSpan1.text("this is a test");
sectionADiv.append(myNewSpan1);

myNewSpan2 = $('<span></span>');
myNewSpan2.text("this is another test");
myNewSpan2.attr('class', 'exciting');
sectionADiv.append(myNewSpan2);