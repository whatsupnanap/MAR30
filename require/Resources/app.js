var win = Ti.UI.createWindow({
	backgroundColor: "#FFF"
});

var button = Ti.UI.createView({
	width: 100,
	height: 50,
	backgroundColor: "#ff0000"
});


var localWindow = require("day3");

console.log(localWindow.message);

win.add(button);

win.open();
