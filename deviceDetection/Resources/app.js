var deviceWidth = Ti.Platform.displayCaps.platformWidth;
var deviceHeight = Ti.Platform.displayCaps.platformHeight;


var win = Ti.UI.createWindow({
	backgroundColor: "#fff",
	
});


var newView = Ti.UI.createView({
	width: deviceWidth*.25,
	height:100,
	backgroundColor: "#00ff00"
	//left:10,
	//top:15,
});

var asName = Ti.Platform.asName;
var version =Ti.Platform.version;

console.log("width: " + deviceWidth);
console.log("height: "+ deviceHeight);
alert("The OS is " + asName + "and the version is " + version);


win.add(newView);

win.open();

