/*var jsonData = {
	"minions":{
	

//myList = jsonData 
//var myList = [{
	//"minion":{
		"head":"minions",
		"foot":"List of minions",
		"minions":[
				{"title" : "Kevin", "description" : "he has only 1 eye, His hair is flat hair"},
				{"title" : "Stuart", "description" : "he has only 1 eys, his hair is flat and centered."},
				{"title" : "Dave", "description" : "He has 2 eyes, his hair is falt and centered."},
				{"title" : "Jerry", "description" : "He has 2 eyes, his hair is spiky."},
					
	
	
	/*var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

var listView = Ti.UI.createListView({
	backgroundColor:"#fff",
	top: 20	
});

var listSection = Ti.UI.createListSection({
	headerTitle:"minions"
});

var sections = [listSection];*/

//var data = [
	/*{properties:{title:"Kevin",  accessoryType:Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK}},
	{properties:{title:"Stuart", accessoryType:Ti.UI.LIST_ACCESSORY_TYPE_DETAIL}},	
	{properties:{title:"Dave", accessoryType:Ti.UI.LIST_ACCESSORY_TYPE_DISCLOUSURE}},
	{properties:{title:"Jerry",  accessoryType:Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK}},
	
],
},
};*/


/*listSection.setItems(data);
listView.sections = sections;

mainWindow.add(listView);
mainWindow.open();*/




/*var mySections = [];
for(var i in minions){
	//make the tableViewSections
	var tableSection = Ti.UI.createTableViewSection({
		headerTitle:myList[i].head,
		footerTitle:myList[i].foot
		
	});
	for(var j=0, k=myList[i].items.length; j<k; j++){
		var tableRow = Ti.UI.createTableViewRow({
			title:myList[i].items[j].title,
			desc:myList[i].items[j].description,
			hasDetail:true
		});
		tableRow.addEventListener("click",getData);
		tableSection.add(tableRow);
	}
	mySections.push(tableSection);
}
*/


//exports.jsonData = jsonData.js;*/


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
];

listSection.setItems(data);
listView.sections = sections;

mainWindow.add(listView);
mainWindow.open();

