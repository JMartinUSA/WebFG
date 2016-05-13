function edit(element){
	document.getElementById(element).innerHTML = '<input type="text" id="'+element+'Text" value="'+document.getElementById(element).innerHTML+'"></input>'
	document.getElementById(element+'Edit').innerHTML = '<input type="button" value="SAVE" onclick="save('+"'"+element+"'"+')">'
}
function save(element){
	document.getElementById(element).innerHTML = document.getElementById(element+"Text").value;
	document.getElementById(element+'Edit').innerHTML = '<input type="button" value="EDIT" onclick="edit('+"'"+element+"'"+')">';
}
function goBack(){
	document.getElementById('overlayCont').innerHTML = '';
}