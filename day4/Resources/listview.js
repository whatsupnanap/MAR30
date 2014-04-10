//ListView is similar Table View
//ListSection are similar to TableViewSection
//ListItem is similar to TableViewRow'
	//There is no such thing Ti.UI.createListItem();これわないらしい。

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#fff"
});

var listView = Ti.UI.createListView({
	backgroundColor:"#fff"
});

var listSection = Ti.UI.createListSection({
	headerTitle:"Cars"
});

var sections = [listSections];

var data = [
	{properties:{title:"Ford", image:"Ford.png"}},
	{properties:{title:"Mazda", image:"Mazda.png"}},	
	{properties:{title:"Mitsubishi", image:"Mitsubishi.png"}},
];

listSections.setItem(data);
listView.section = sections;




mainWindow.add(listView);
mainWindow.open();
