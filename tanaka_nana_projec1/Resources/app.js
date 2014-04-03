var mainWindow = Ti.UI.createWindow({
	name:"Main Window",
	id:1,
	backgroundColor:"#ff5588"
	//backgroundImage:,
	//backgroundRepeat:true

});

var header = Ti.UI.createView({
	backgroundColor:"#00a8b8",
	borderRadius: 5,
	borderWidth:1,
	height: 50,
	top:20,
	left:10,
	right:10,
});

var appName = Ti.UI.createLabel({
	text: "NANA:P",
	color:"#71efd3",
	font:{fontSize: "20dp", fontFamily:"Helvetica"}
	
});

var buttonRight = Ti.UI.createView({
	backgroundColor:"#8375bc",
	borderRadius: 5,
	borderWidth:1,
	height: 50,
	bottom:10,
	width:80,
	//left:90,
	right:20,
});

var leftName = Ti.UI.createLabel({
	text: "no",
	color:"#71efd3",
	font:{fontSize: "20dp", fontFamily:"Helvetica"}
});

var buttonLeft = Ti.UI.createView({
	backgroundColor:"#8375bc",
	borderRadius: 5,
	borderWidth:1,
	height: 50,
	bottom:10,
	left:20,
	width:80,
	//right:10,
});

var rightName = Ti.UI.createLabel({
	text: "yes",
	color:"#71efd3",
	font:{fontSize: "20dp", fontFamily:"Helvetica"}
	
});

var buttonMiddle = Ti.UI.createView({
	backgroundColor:"#82b8d0",
	borderRadius: 5,
	borderWidth:1,
	height: 50,
	//bottom:80,
	//width:120,
	right:15,
	left:15,
});

var middletName = Ti.UI.createLabel({
	text: "Are you HYP3?",
	color:"##a9db6c",
	font:{fontSize: "20dp", fontFamily:"Helvetica"}
	
});



header.add(appName);
buttonMiddle.add(middletName);
buttonLeft.add(leftName);
buttonRight .add(rightName);
mainWindow.add(buttonMiddle);
mainWindow.add(buttonLeft);
mainWindow.add(buttonRight);
mainWindow.add(header);
mainWindow.open();