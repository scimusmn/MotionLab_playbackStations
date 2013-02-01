function flipPlayer(containerID){
	var cntnr = $(containerID);
	
	var flip = new flipbook(cntnr);
	
	setInterval(flip.drawFrame,50);
	setInterval(flip.idle,50);
	flip.init();

	var bgDiv = document.createElement("div");
	bgDiv.style.width = 512+"px";
	bgDiv.className = "slider-background";
	
	cntnr.appendChild(bgDiv);
	var slide = new imgSlider(bgDiv,flip);
	slide.connect();
	
	/*this.onMouseMove = function(event){
		slide.onMouseMove(event);
	}
	
	this.onmouseup = function(event){
		slide.clickUp();
	}
	
	this.clickUp = function(){
		slide.clickup();
	}*/
	
	this.show = function(){
		cntnr.style.display = 'inline'
	}
	
	this.hide = function(){
		cntnr.style.display = 'none'
	}
	
	this.changeSet = function(dirName){
		flip.changeDir(dirName);
	}
	
	this.onload = function(){
		
	}
};

var visitorCaps = new flipPlayer("visitor-caps");
var celebCaps = new flipPlayer("celeb-caps");

celebCaps.changeSet("default_2/");