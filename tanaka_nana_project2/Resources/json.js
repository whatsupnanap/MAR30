//var jsonData = {
	//"minions":{
	

var myList = {
	"minion":{
		"head":"minions",
		"foot":"List of minions",
		"minions":[
				{"title" : "Kevin", "description" : "he has only 1 eye, His hair is flat hair"},
				{"title" : "Stuart", "description" : "he has only 1 eys, his hair is flat and centered."},
				{"title" : "Dave", "description" : "He has 2 eyes, his hair is falt and centered."},
				{"title" : "Jerry", "description" : "He has 2 eyes, his hair is spiky."},
]
}
};					
	
	
/*var lView = function(){
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

var listView = Ti.UI.createListView({
	backgroundColor:"#fff",
	top: 20	
});

var listSection = Ti.UI.createListSection({
	headerTitle:"Minions"
});

var sections = [listSection];

var data = [
	{properties:{title:"Kevin",  accessoryType:Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK}},
	{properties:{title:"Stuart", accessoryType:Ti.UI.LIST_ACCESSORY_TYPE_DETAIL}},	
	{properties:{title:"Dave", accessoryType:Ti.UI.LIST_ACCESSORY_TYPE_DISCLOUSURE}},
	{properties:{title:"Jerry",  accessoryType:Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK}},
],
};*/
/*var close = Ti.UI.createView({
	backgroundColor:"#333",
});

var closeButton = Ti.UI.createLabel({
	text:"back",
	font:{fontSize: 14, fontFamily:"Arial"},
	height:50,
	width:0,
	bottom: 0,
});

var closeWindow = function(){
	detailWindow.close();
};

closeButton.addEventListener("click",closeWindow);*/

//listSection.setItems(data);
//listView.sections = sections;

//mainWindow.add(listView);
//mainWindow.open();
//close.add(closeButton);
//export.gData= lView;
exports.fData=myList;
//exports = file same
//file.fuckになるon app.jss