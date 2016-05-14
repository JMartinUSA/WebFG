function amountMinus(){
	document.getElementById('addAmountNumber').innerHTML = (Number(document.getElementById('addAmountNumber').innerHTML))-1;
}
function amountPlus(){
	document.getElementById('addAmountNumber').innerHTML = (Number(document.getElementById('addAmountNumber').innerHTML))+1;
}
function editNote(){
	document.getElementById('addNoteText').innerHTML = '<textarea id="textAreaValue">'+document.getElementById('addNoteText').innerHTML+'</textarea>';
	document.getElementById('addNoteButtonWrapper').innerHTML = '<input type="button" id="addNoteButton" value="Save Note" onclick="saveNote();">';
}
function saveNote(){
	document.getElementById('addNoteText').innerHTML = document.getElementById('textAreaValue').value;
	document.getElementById('addNoteButtonWrapper').innerHTML = '<input type="button" id="addNoteButton" value="Edit Note" onclick="editNote();">';
}
function toggleThis(element){
	if(element.title == "false"){
		element.style.background = 'green';
		element.title = "true";
	}else if(element.title == "true"){
		element.style.background = 'black';
		element.title = "false";
	}
}
function addCancel(){
	List();
}
function addSubmit(){
	var addDays

	var added = {
		FNAME:document.getElementById('addFNameText').value,
		LNAME:document.getElementById('addLNameText').value,
		CAT:document.getElementById('addCatText').value,

	}
}
