var template = {
	childTemplates:[
	{type: "Ti.UI.Label",bindId:"info",
		properties:color:"black",
			font:{fontFamily: "Arial",
			fontSize:"20dp",
			fontWeight:"bold" },
			left:"60dp",
			top:0,
	
		}
	},
	{
		type: "Ti.UI.Label",
		bindId:"es_info",
		properties:{
			color:"gray",
			font:{fontFamily: "Arial",
			fontSize:"14dp",
			fontWeight:"bold" },
			left:"60dp",
			top:"25dp",
	}
	},
	
	{
		type: "Ti.UI.ImageView",
		bindId:"pic",
		properties:{
			width:"50dp" ,
			height:"50dp",
			left:0,
			}
		}
]
};

var theWindow = Ti.UI.createWindow();

var listView = Ti.UI.createListView({
	tamplates:{"the Temps":template},
	defaultTemplates:"the Temps"
		
});

var fruit = Ti.UI.createListSection({
	headerTitle: "Fruie/ frutitas"
});
 var data = [
 {propeties:},{info}]
 	
fruits.setItems(data);
listView.sections = [fruit];
windw.add(listView);
window.open();
 	
