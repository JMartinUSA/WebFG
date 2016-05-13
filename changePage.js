function Login(){
	document.getElementById('container').innerHTML = '<div id="loginPanel">\
				<div id="inputArea">\
					Welcome to WebFG<br>\
					Username:<input type="text" id="username" />\
					Password:<input type="password" id="password" />\
					<input type="button" id="submit" value="login" onclick="submit();" />\
				</div>\
			</div>';
}
function List(){
	document.getElementById('container').innerHTML = '\
			<div id="header"><input type="text" id="searchText"></input><input type="button" value="Search" onclick="searchList()"><input type="button" value="Clear" onclick="pullList();clearSearch();"></div>\
			<div id="scroll"\
			</div>';
			pullList();
}
function Overlay(ID,NAME,CAT,DAYS,NIGHTS,ADMITTED,TOTAL,NOTE){
	document.getElementById('overlayCont').innerHTML = '<link rel="stylesheet" href="overlay.css">\
			<div id="overlay">\
				<div id="top">\
					<div id="left">\
						<div class="overlayText">Name:&nbsp</div>\
						<div class="overlayText">Category:&nbsp</div>\
						<div class="overlayText">Days:&nbsp</div>\
						<div class="overlayText">Nights:&nbsp</div>\
					</div>\
					<div id="center">\
						<div class="overlayText" id="ovName">'+NAME+'</div>\
						<div class="overlayText" id="ovCat">'+CAT+'</div>\
						<div class="overlayText" id="ovDays">'+DAYS+'</div>\
						<div class="overlayText" id="ovNights">'+NIGHTS+'</div>\
					</div>\
					<div id="right">\
						<div class="overlayText" id="ovNameEdit"><input type="button" value="EDIT" onclick="edit(\'ovName\');"></div>\
						<div class="overlayText" id="ovCatEdit"><input type="button" value="EDIT" onclick="edit(\'ovCat\');"></div>\
						<div class="overlayText" id="ovDaysEdit"><input type="button" value="EDIT" onclick="edit(\'ovDays\');"></div>\
						<div class="overlayText" id="ovNightsEdit"><input type="button" value="EDIT" onclick="edit(\'ovNights\');"></div>\
					</div>\
				</div>\
				<div id="bottom">\
					<div id="left">\
						Admitted:<br>\
						<br>\
						Total:\
					</div>\
					<div id="right">\
						<div id="admitted">\
							<div class="minus">-</div>\
							<div class="number">'+ADMITTED+'</div>\
							<div class="plus">+</div>\
						</div>\
						<br>\
						<br>\
						<div id="total">\
							<div class="minus">-</div>\
							<div class="number">'+TOTAL+'</div>\
							<div class="plus">+</div>\
						</div>\
					</div>\
					<div id="buttons">\
						<div id="note">'+NOTE+'</div>\
						<div id="editNote">\
							<input type="button" value="Edit Note">\
						</div>\
						<div id="cancel" onclick="goBack();">Cancel</div>\
						<div id="submit">Submit</div>\
					</div>\
				</div>\
			</div>'
}