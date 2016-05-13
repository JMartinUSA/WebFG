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
			<div id="header"><div id="headerWrapper"><input type="text" id="searchText"></input><input type="button" value="Search" onclick="searchList()"><input type="button" value="Clear" onclick="pullList();clearSearch();"></div></div>\
			<div id="scroll"\
			</div>';
			pullList();
}
function Overlay(ID,FNAME,LNAME,CAT,DAYS,NIGHTS,ADMITTED,TOTAL,RV,NOTE){
	assignValues(ID,FNAME,LNAME,CAT,DAYS,NIGHTS,ADMITTED,TOTAL,RV,NOTE);
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
						<div class="overlayText" id="ovName"><div id="ovNameF">'+FNAME+'</div><div id="ovNameL">'+LNAME+'</div></div>\
						<div class="overlayText" id="ovCat">'+CAT+'</div>\
						<div class="overlayText" id="ovDays">'+DAYS+'</div>\
						<div class="overlayText" id="ovNights">'+NIGHTS+'</div>\
					</div>\
					<div id="right">\
						<div class="overlayText" id="ovNameEdit"><input type="button" id="ovNameEditButton" value="EDIT" onclick="edit(\'ovName\');"></div>\
						<div class="overlayText" id="ovCatEdit"><input type="button" id="ovCatEditButton" value="EDIT" onclick="edit(\'ovCat\');"></div>\
						<div class="overlayText" id="ovDaysEdit"><input type="button" id="ovDaysEditButton" value="EDIT" onclick="edit(\'ovDays\');"></div>\
						<div class="overlayText" id="ovNightsEdit"><input type="button" id="ovNightsEditButton" value="EDIT" onclick="edit(\'ovNights\');"></div>\
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
							<div class="minus" onclick="admittedMinus();">-</div>\
							<div class="number" id="numAdmitted">'+ADMITTED+'</div>\
							<div class="plus" onclick="admittedPlus();">+</div>\
						</div>\
						<br>\
						<br>\
						<div id="total">\
							<div class="minus" onclick="totalMinus();">-</div>\
							<div class="number" id="numTotal">'+TOTAL+'</div>\
							<div class="plus" onclick="totalPlus();">+</div>\
						</div>\
					</div>\
					<div id="buttons">\
						<div id="ovNote">'+NOTE+'</div>\
						<div id="ovNoteEdit"><input type="button" id="ovNoteEditButton" value="Edit Note" onclick="edit(\'ovNote\');"></div>\
						<div id="cancel" onclick="goBack();">Cancel</div>\
						<div id="submit" onclick="submitChanges();">Submit</div>\
					</div>\
				</div>\
			</div>'
}