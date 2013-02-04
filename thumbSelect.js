function setPointer(setName,flp){
	var flipPlr = flp;
	var folderName = setName;
	var thumb = document.createElement('img');
	
	thumb.src = folderName+"/thumb.jpg?"+Math.random();
	thumb.id = folderName;
	
	thumb.onclick = function(){
		flipPlr.loadSet(folderName+"/");
		thumbClick();
	}
	
	this.getFolderName = function(){
		return folderName;
	}
	
	this.getElement = function(){
		return thumb;
	}
}

function thumbClick(){
	var selEl = $('.playback');
	for(var i=0; i<selEl.length; i++){
		selEl[i].style.display = "table-row";
	}
	for(var i=0; i<$('.select').length; i++){
		$('.select')[i].style.display="none";
	}
}

function setGroup(flp){
	var flipPlr = flp;
	var sets = [];
	
	var rows = 3;
	var columns = 7;
	
	var thumbTable = document.createElement('table');
	
	for(var i=0; i<rows; i++){
		var newRow = document.createElement('tr');
		for(var j=0; j<columns; j++){
			var newCell = document.createElement('td');
			newRow.appendChild(newCell);
		}
		thumbTable.appendChild(newRow);
	}
	
	$('thumbs').appendChild(thumbTable);
	
	this.addOrChangeSet = function(setName){
		/*var exists = false;
		var newSet = new setPointer(setName,flipPlr);
		var curNum = sets.length;
		for(var i=0; i<sets.length; i++){
			if(sets[i].getFolderName()==setName) exists=true,sets[i]=newSet;
		}
		if(!exists){
			sets.push(newSet);
		}*/
		if($(setName)) thumb.src = setName+"/thumb.jpg?"+Math.random();
		else{
			var newSet = new setPointer(setName,flipPlr);
			var curNum = sets.length;
			var curCell = thumbTable.getElementsByTagName("tr")[Math.floor(curNum/columns)].getElementsByTagName("td")[curNum%columns];
			curCell.appendChild(newSet.getElement());
		}
	}
	
	
}

var visGroup = new setGroup(visitorCaps);