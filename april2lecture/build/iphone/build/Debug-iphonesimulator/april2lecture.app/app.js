var mainWindow = Ti.UI.createWindow({
	name: "Main Window",
	id: 1,
	backgroundColor:"#fff",
	backgroundImage:"dimension.png",
	backgroundRepeat: true
});

var header = Ti.UI.createView({
	backgroundColor:"#333",
	borderRadius: 5,
	borderWidth:1,
	height: 50,
	top:20,
	left:10,
	right:10,
});

var appName = Ti.UI.createLabel({
	text: "Dice game",
	color:"#fff",
	font:{fontSize: "20dp", fontFamily:"Helvetica"}
});

header.add(appName);
mainWindow.add(header);
//windows open
mainWindow.open();
