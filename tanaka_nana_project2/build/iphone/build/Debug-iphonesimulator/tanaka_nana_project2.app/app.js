//main window
var mainWindow = Ti.UI.createWindow({
	backgroundColor : "#fff"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

//１個目のボタン buttons 
var minion = Ti.UI.createView({
	backgroundColor:"#333",
	width: 250,
	height:60,
	top:140,
});

var minionBtnLabel = Ti.UI.createLabel({
	text:"abcd",
	color:"#FFF",
	font:{fontSize:"14dp", fontFamily:"Helvetica"}
});

//2個目のボタン
var others = Ti.UI.createView({
	backgroundColor:"#333",
	width: 250,
	height:60
});

var othersBtnLabel = Ti.UI.createLabel({
	text:"Others",
	color:"#FFF",
	font:{fontSize:"14dp", fontFamily:"Helvetica"}
});

//minionの名前
//var minionsData = [{
	
	

/*var minionData = require("json");
	alert("got this");*/
	//console.log(file.msg);

//var file = require("json");
//console.log(file.msg);

var table = Ti.UI.createTableView({
	top : 20
});

//２ページ目作成 minion
var getData = function() {
	var minionData = require("json");
	var detailWindow2 = Ti.UI.createWindow({
		backgroundColor : "#fff",
		title: this.title
	});
	var detailText2 = Ti.UI.createLabel({
		text : this.desc,
		font:{fontsize:"18pd", fontFamily:"Arial"}
	});
	detailWindow2.add(detailText2);
	//detailWindow2.add(table);
	navWindow.openWindow(detailWindow2);
};


var getData2 = function() {
	var minionData = require("json");
	//alert("got this");
	var detailWindow = Ti.UI.createWindow({
		backgroundColor : "#fff",
		title: this.title
	});
	var detailText = Ti.UI.createLabel({
		text : this.desc,
		font:{fontsize:"18pd", fontFamily:"Arial"}
	});
	
	//detailWindow.add(close);
	detailWindow.add(detailText);
	detailWindow.add(table);
	//detailWindow.open();
	navWindow.openWindow(detailWindow);
};




/*var minionData = require("json");
	alert("got this");*/

/*var minionsSection = Ti.UI.createTableViewSection({
	headTitle : "minions",
	footerTitle : "minions"
});
for (var i = 0, j = minionsData.length; i < j; i++) {
	var theRow = Ti.UI.createTableViewRow({
		title : minionsData[i].title,
		desc:minionsData[i].description,
		hasDetail:true,
		hasChild:true
	});
	minionsSection.add(theRow);
	theRow.addEventListener("click", getData);
};*/

/*var mySections = [];
for(var i in "minionData"){
	
	//make the tableViewSections
	var tableSection = Ti.UI.createTableViewSection({
		headerTitle:jsonData[i].head,
		footerTitle:jsonData[i].foot
		
	});
	for(var j=0, k=myList[i].items.length; j<k; j++){
		var tableRow = Ti.UI.createTableViewRow({
			title:jsonData[i].items[j].title,
			desc:jsonData[i].items[j].description,
			hasDetail:true
		});
		tableRow.addEventListener("click",getData);
		tableSection.add(tableRow);
	}
	mySections.push(tableSection);
}*/

//backボタン ここでくりっくを
minion.addEventListener("click",getData2);
others.addEventListener("click",getData);

//iPhone用と伝えている
var askName = Ti.Platform.osname;
if (askName === "iphone") {
	table.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};


//var mySections = [minionsSection];



mainWindow.add(table);
//table.setData(mySections);
//detailWindow.add(table);

//main windowにたされたやつら
minion.add(minionBtnLabel);
mainWindow.add(minion);
others.add(othersBtnLabel);
mainWindow.add(others);

navWindow.open();
//mainWindow.open();