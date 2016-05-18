function Menu(){
	document.getElementById('menuCont').innerHTML = '<link rel="stylesheet" href="menu.css" />\
		<div id="transparentCover"></div>\
		<div id="menu">\
			<div id="menuTop" onclick="menuList()">List</div>\
			<div id="menuTopMid" onclick="menuPos()">POS</div>\
			<div id="menuMiddle" onclick="menuSell()">Sell</div>\
			<div id="menuBottom" onclick="menuLogout()">Logout</div>\
		</div>';
}
function menuList(){
	console.log('list');
	if(loggedIn){
		List();
		document.getElementById('overlayCont').innerHTML = '';
		document.getElementById('menuCont').innerHTML = '';
	}else{
		alert("You must be logged in to do this.");
	}
}
function menuPos(){
	console.log('pos');
	if(loggedIn){
		POS();
		document.getElementById('overlayCont').innerHTML = '';
		document.getElementById('menuCont').innerHTML = '';
	}else{
		alert("You must be logged in to do this.");
	}
}
function menuSell(){
	console.log('sell');
	if(loggedIn){
		addRegister();
		document.getElementById('overlayCont').innerHTML = '';
		document.getElementById('menuCont').innerHTML = '';
	}else{
		alert("You must be logged in to do this.");
	}
}
function menuLogout(){
	console.log('logout');
	Login();
	loggedIn = false;
	document.getElementById('overlayCont').innerHTML = '';
	document.getElementById('menuCont').innerHTML = '';
	
}