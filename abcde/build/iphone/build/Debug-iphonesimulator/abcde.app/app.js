//ListView is similar Table View
//ListSection are similar to TableViewSection
//ListItem is similar to TableViewRow'
	//There is no such thing Ti.UI.createListItem();これわないらしい。

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

var listView = Ti.UI.createListView({
	backgroundColor:"#fff",
	top: 20	
});

var listSection = Ti.UI.createListSection({
	headerTitle:"Cars"
});

var sections = [listSection];

var data = [
	{properties:{title:"Ford", image:"Ford.png", accessoryType:Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK}},
	{properties:{title:"Mazda", image:"Mazda.png",accessoryType:Ti.UI.LIST_ACCESSORY_TYPE_DETAIL}},	
	{properties:{title:"Mitsubishi", image:"Mitsubishi.png",accessoryType:Ti.UI.LIST_ACCESSORY_TYPE_DISCLOUSURE}},
];

listSection.setItems(data);
listView.sections = sections;

listView.addEventListener("itemclick",function(e){
	//console.log(e);
	var item = listSection.getItemAt(e.itemIndex);
	//console.log(item);
	if(item.properties.accessoryType === Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK){
		item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_NONE;
		item.properties.color = "black";
	}else{
	item.properties.accessoryType === Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK;
	item.properties.color = "grey";
	
	}
	listSection.updateItemAt(e.itemIndex, item);
		
});


mainWindow.add(listView);
mainWindow.open();