var localWindow = require("anotherfile");

var mainWindow = Ti.UI.createWindow({
	name:"Main Window",
	id:1,
	backgroundColor:"#ffffff"

});


var buttonMiddle = Ti.UI.createView({
	backgroundColor:"#82b8d0",
	borderRadius: 5,
	borderWidth:1,
	height: 100,
	//bottom:80,
	//width:120,
	right:15,
	left:15,
});



//console.log(localWindow.message);
console.log(localWindow.getChange.animal[0]);
//質問文ここ
var middletName = Ti.UI.createLabel({
	//text: localWindow.getChange.animal[],
	color:"##a9db6c",
	font:{fontSize: "20dp", fontFamily:"Helvetica"}
	
});

buttonMiddle.add(middletName);
mainWindow.add(buttonMiddle);
mainWindow.open();