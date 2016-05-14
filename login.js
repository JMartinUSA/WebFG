// document.getElementById('submit').addEventListener("click", submit);
var loggedIn = false;

function submit(){
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	//console.log('Username: '+username+' Password: '+password);
	checkPassword(username, password);
}

function checkPassword(username, password){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (xhttp.readyState == 4 && xhttp.status == 200){
			var isAccount = xhttp.responseText;
			isLogin(isAccount);
		}
	};
	xhttp.open("POST", "http://jaymartmedia.com/webfg/login.php?USERNAME="+username+"&PASSWORD="+password, true);
	xhttp.send();
}

function isLogin(isAccount){
	if(isAccount == 0){
		alert('We couldn\'t find any account with this Username and Password. Please try again.');
	}else if(isAccount == 1){
		onLogin();
		loggedIn = true;
	}else{
		alert('error on isAccount.. isAccount=='+isAccount);
	}
}

function onLogin(){
	List();
}
