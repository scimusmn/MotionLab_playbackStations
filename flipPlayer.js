function flipPlayer(containerID){
	var cntnr = $(containerID);
	
	var flip = new flipbook(cntnr);
	
	setInterval(flip.drawFrame,50);
	setInterval(flip.idle,50);
	flip.init();

	var bgDiv = document.createElement("div");
	bgDiv.class = "slider-background";
	bgDiv.style.width = 512+"px";
	cntnr.appendChild(bgDiv);
	var slide = new imgSlider(bgDiv,flip);
	slide.connect();
	
	this.update = function(event){
		slide.update(event);
	}
	
	this.onmouseup = function(event){
		slide.clickUp();
	}
	
	this.clickUp = function(){
		slide.clickup();
	}
};

visitorCaps = new flipPlayer("visitor-caps2");