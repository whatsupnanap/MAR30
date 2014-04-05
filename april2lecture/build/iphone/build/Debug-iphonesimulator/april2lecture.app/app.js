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

var rollBtn = Ti.UI.createView({
	backgroundColor:"#333",
	width: 250,
	height:60
});

var rollBtnLabel = Ti.UI.createLabel({
	text:"Roll the dice!",
	color:"#FFF",
	font:{fontSize:"14dp", fontFamily:"Helvetica"}
});

var getRoll = function(){
	var dice = [1,2,3,4,5,6];
	var rolls = [dice, dice];
	var results = [];

for(var i=0, j=rolls.length;i<j;i++){
	var theRoll = Math.floor(Math.random()*dice.length)+1;
	console.log(theRoll);
	results.push(theRoll);
}
	alert("final result is " + results);
};

rollBtn.addEventListener("click",getRoll);
rollBtn.add(rollBtnLabel);
mainWindow.add(rollBtn);
header.add(appName);
mainWindow.add(header);
//windows open
mainWindow.open();
