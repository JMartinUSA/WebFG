var ovValues = {
	ID:'',
	FNAME:'',
	LNAME:'',
	CAT:'',
	DAYS:'',
	NIGHTS:'',
	ADMITTED:'',
	TOTAL:'',
	NOTE:'',
}
function assignValues(ID,FNAME,LNAME,CAT,DAYS,NIGHTS,ADMITTED,TOTAL,RV,NOTE){
	ovValues.ID = ID;
	console.log(ovValues.ID);
	ovValues.FNAME = FNAME;
	ovValues.LNAME = LNAME;
	ovValues.CAT = CAT;
	ovValues.DAYS = DAYS;
	ovValues.NIGHTS = NIGHTS;
	ovValues.ADMITTED = ADMITTED;
	ovValues.TOTAL = TOTAL;
	ovValues.RV = RV;
	ovValues.NOTE = NOTE;
}
function saveValues(){
	ovValues.FNAME = document.getElementById('ovNameF').innerHTML;
	ovValues.LNAME = document.getElementById('ovNameL').innerHTML;
	ovValues.CAT = document.getElementById('ovCat').innerHTML;
	ovValues.DAYS = document.getElementById('ovDays').innerHTML;
	ovValues.NIGHTS = document.getElementById('ovNights').innerHTML;
	ovValues.ADMITTED = document.getElementById('numAdmitted').innerHTML;
	ovValues.TOTAL = document.getElementById('numTotal').innerHTML;
	ovValues.NOTE = document.getElementById('ovNote').innerHTML;
}

function edit(element){
	if(element == 'ovName'){
		document.getElementById(element+'F').innerHTML = '<input type="text" id="'+element+'FText" value="'+document.getElementById(element+'F').innerHTML+'"></input>'
		document.getElementById(element+'L').innerHTML = '<input type="text" id="'+element+'LText" value="'+document.getElementById(element+'L').innerHTML+'"></input>'
	}else if(element == 'ovNote'){
		document.getElementById(element).innerHTML = '<textarea id="'+element+'Text">'+document.getElementById(element).innerHTML+'</textarea>'
	}else{
		document.getElementById(element).innerHTML = '<input type="text" id="'+element+'Text" value="'+document.getElementById(element).innerHTML+'"></input>'
	}

	document.getElementById(element+'Edit').innerHTML = '<input type="button" id="'+element+'EditButton" value="SAVE" onclick="save('+"'"+element+"'"+')">'
}
function save(element){
	if(element == 'ovName'){
		document.getElementById(element+'F').innerHTML = document.getElementById(element+"FText").value;
		document.getElementById(element+'L').innerHTML = document.getElementById(element+"LText").value; 
	}else{
	document.getElementById(element).innerHTML = document.getElementById(element+"Text").value;
	}

	document.getElementById(element+'Edit').innerHTML = '<input type="button" id="'+element+'EditButton" value="EDIT" onclick="edit('+"'"+element+"'"+')">';
}
function goBack(){
	document.getElementById('overlayCont').innerHTML = '';
}
function submitChanges(){
	var a = ['ovName','ovCat','ovDays','ovNights','ovNote'];
	for(i=0;i<a.length;i++){
		if(document.getElementById(a[i]+'EditButton').value == 'SAVE'){
			save(a[i]);
		}
	}
	saveValues();
	overlayUpdatePHP();
	pullList();
	goBack();
}

//plus minus
function admittedMinus(){
	document.getElementById('numAdmitted').innerHTML = (Number(document.getElementById('numAdmitted').innerHTML)-1);
	ovValues.ADMITTED = Number(document.getElementById('numAdmitted').innerHTML);
	console.log(ovValues.ADMITTED);
}
function admittedPlus(){
	document.getElementById('numAdmitted').innerHTML = (Number(document.getElementById('numAdmitted').innerHTML)+1);
	ovValues.ADMITTED = Number(document.getElementById('numAdmitted').innerHTML);
	console.log(ovValues.ADMITTED);
}
function totalMinus(){
	document.getElementById('numTotal').innerHTML = (Number(document.getElementById('numTotal').innerHTML)-1);
	ovValues.TOTAL = Number(document.getElementById('numTotal').innerHTML);
	console.log(ovValues.TOTAL);
}
function totalPlus(){
	document.getElementById('numTotal').innerHTML = (Number(document.getElementById('numTotal').innerHTML)+1);
	ovValues.TOTAL = Number(document.getElementById('numTotal').innerHTML);
	console.log(ovValues.TOTAL);
}