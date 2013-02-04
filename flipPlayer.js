function flipPlayer(containerID){
	var cntnr = $(containerID);
	
	var flip = new flipbook(cntnr);
	
	var controls = document.createElement("div");
	controls.className = "controls";
	cntnr.appendChild(controls);
	
	var playBut = document.createElement("img");
	playBut.src = "assets/pngs/playButton.png";
	playBut.className = "button";
	controls.appendChild(playBut);

	var bgDiv = document.createElement("div");
	bgDiv.style.width = 512+"px";
	bgDiv.className = "slider-background";
	controls.appendChild(bgDiv);
	
	var slide = new imgSlider(bgDiv,flip);
	
	flip.registerStopCB(function(){
		playBut.src = "assets/pngs/playButton.png";
	},this);
	
	this.init = function(){
		slide.connect();
	
		setInterval(flip.drawFrame,50);
		setInterval(flip.idle,50);
	}
	
	this.show = function(){
		cntnr.style.display = 'inline'
	}
	
	this.hide = function(){
		cntnr.style.display = 'none'
	}
	
	this.changeSet = function(dirName){
		flip.changeDir(dirName);
	}
	
	this.play = function(){
		flip.play();
		playBut.src = "assets/pngs/pauseButton.png";
	}
	
	this.pause = function(){
		flip.stop();
		playBut.src = "assets/pngs/playButton.png";
	}
	
	this.togglePlay = function(){
		if(flip.isPlaying()) playBut.src = "assets/pngs/playButton.png";
		else playBut.src = "assets/pngs/pauseButton.png";
		flip.togglePlay();
		return false;
	}
	
	this.loadSet = function(setName){
		flip.changeDir(setName);
		flip.init();
	}
	
	playBut.onmousedown = this.togglePlay;
};

var visitorCaps = new flipPlayer("visitor-caps");
var celebCaps = new flipPlayer("celeb-caps");


window.onload = function(){
	visitorCaps.loadSet("default/");
	visitorCaps.init();
	celebCaps.init();
}