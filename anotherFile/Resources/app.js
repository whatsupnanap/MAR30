var mainnWindow = Ti.UI.createWindow({
	name:"Main Window",
	id:1,
	backgroundColor:"#ffffff"
	
});



//ぼたんのテキストno
var leftName = Ti.UI.createLabel({
	text: "BACK",
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


//ぼたんのテキストyes 
var rightName = Ti.UI.createLabel({
	text: "NEXT",
	color:"#71efd3",
	font:{fontSize: "20dp", fontFamily:"Helvetica"}
	
});



var openWindow = function(){
	
	var newWindow = Ti.UI.createWindow({
		title: "message",
		backgroundColor: "white"
	});
	
	newWindow.open();
	
};

button.addEventListener("click",openWindow);

var msg = getChange
var getChange = function(){
	var animal = [dog,cat,bitch,pig,mouse,rabbit];
	var janimal = [inu, neko,kuso on-nah, buta, nezueme,ugh-sir-gee];
	var results = [];

exports.openWindow = message;
alert(message);

win.add(button);
//getRollがgetchange, diceがanimal, rollがjanimal from april2lecture diceが
var getChange = function(){
	var animal = [dog,cat,bitch,pig,mouse,rabbit];
	var janimal = [inu, neko,kuso on-nah, buta, nezueme,ugh-sir-gee];
	var results = [];
	



buttonLeft.add(leftName);
mainnWindow.add(buttonLeft);
buttonRight .add(rightName);
mainnWindow.add(buttonRight);
