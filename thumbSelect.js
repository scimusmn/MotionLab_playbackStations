function setPointer(setName,flp){
	var flipPlr = flp;
	var folderName = setName;
	var thumb = document.createElement('img');
	var visitorMode = true;
	var celebCallback;
	
	thumb.src = folderName+"/thumb.jpg?"+Math.random();
	thumb.id = folderName;
	thumb.className = "thumbnail";
	
	thumb.onmousedown = function(){
		if(visitorMode){
			thumb.style.border = "5px solid #cccc00"
			thumb.src = "assets/pngs/thumbBG.png";
		}
		else {
			celebCallback.resetSelected();
			thumb.style.border = "5px solid #cccc00"
		}
	}
	
	thumb.onmouseup = function(){
		if(visitorMode){
			thumb.style.border = "5px solid #cccccc"
			thumb.src = folderName+"/thumb.jpg?"+Math.random();
			thumbClick();
		}
		flipPlr.loadSet(folderName+"/")
	}
	
	this.resetBorderColor = function(){
		thumb.style.border = "5px solid #cccccc"
	}
	
	this.setCelebMode = function(celebCB){
		console.log("celeb mode!");
		visitorMode=false;
		celebCallback = celebCB;
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

function setGroup(flp,parent,rws,clm,asTable){
	var flipPlr = flp;
	var sets = [];
	var elements = [];
	
	var rows = rws;
	var columns = clm;
	var visitorMode = true;
	var tableMode = asTable;
	
	if(asTable){
		var thumbTable = document.createElement('table');
		
		
		for(var i=0; i<rows; i++){
			var newRow = document.createElement('tr');
			for(var j=0; j<columns; j++){
				var newCell = document.createElement('td');
				newRow.appendChild(newCell);
				elements.push(newCell);
			}
			thumbTable.appendChild(newRow);
		}
		
		parent.appendChild(thumbTable);
	}
	else {
		var topDiv = document.createElement('div');
		for(var i=0; i<rows; i++){
			var newRow = document.createElement('div');
			for(var j=0; j<columns; j++){
				var newCell = document.createElement('span');
				newRow.appendChild(newCell);
				elements.push(newCell);
			}
			topDiv.appendChild(newRow);
		}
		
		parent.appendChild(topDiv);
	};
	
	this.setCelebMode = function(){
		visitorMode=false;
		flipPlr.celebMode();
		for(var i=0; i<sets.length; i++){
			sets[i].setCelebMode(this.resetSelected());
		}
	}
	
	this.resetSelected = function(){
		for(var i=0; i<sets.length; i++){
			sets[i].resetBorderColor();
		}
	}
	
	this.addOrChangeSet = function(setName){
		if($(setName)) thumb.src = setName+"/thumb.jpg?"+Math.random();
		else{
			var newSet = new setPointer(setName,flipPlr);
			if(!visitorMode) newSet.setCelebMode(this);
			var curNum = sets.length;
			sets.push(newSet);
			var curCell = elements[curNum];
			curCell.appendChild(newSet.getElement());
		}
	}
	
	
}

var visGroup = new setGroup(visitorCaps,$('thumbs'),3,7,true);
var celebGroup = new setGroup(celebCaps,$('celebThumbs'),20,1,false);

celebGroup.setCelebMode();