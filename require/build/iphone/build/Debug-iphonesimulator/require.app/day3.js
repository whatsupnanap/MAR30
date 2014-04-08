var openWindow = function(){
	
	var newWindow = Ti.UI.createWindow({
		title: "message",
		backgroundColor: "blue"
	});
	
	newWindow.open();
	
};


button.addEventListener("click",openWindow);

var message = "can you see this?";
exports.openWindow = message;
//alert(message);


win.add(button);