function thumbSlider(bg,thmDiv){
	var bgDiv = bg;
	
	var handle = document.createElement('img');
	handle.src = src="assets/pngs/vertScrollLever.png";
	handle.className = "slider-handle";
	bgDiv.appendChild(handle);
	
	var thumbDiv = thmDiv;
	
	
	this.changeVal = function(perc){
		handle.style.marginTop =perc*(parseInt(bgDiv.style.height)-handle.height) +"px";
	}
	
	handle.changePosition = function(posX,posY){
			if(posY>parseInt(bgDiv.style.height)-handle.height) posY=parseInt(bgDiv.style.height)-handle.height;
			else if(posY<0) posY=0;
			handle.style.marginTop =posY +"px";
			
			thumbDiv.style.marginTop = (thumbDiv.scrollHeight-thumbDiv.style.height)*(posX/(parseFloat(bgDiv.style.height)-handle.height));
	};
	
	this.clickup = function(){
		bClicked=false;
	};
	
	bgDiv.onmousedown = function(e){
		console.log(e.clientX+" "+position(bgDiv).x);
		console.log(bgDiv.style.marginLeft);
		handle.changePosition(e.clientY-(position(bgDiv).y+handle.height/2),0);
		drag.setByEventAndObj(e,handle);
		document.onmousemove = OnMouseMove;
		return false;
	};
};

thumbSlider($('celebThumbSlider'),$('celebThumbs').getElementByTagName('div'));