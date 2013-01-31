function imgSlider(bg,buk){
	var bgDiv = bg;
	var handle = document.createElement('img');
	handle.src = src="assets/pngs/horzScrollLever.png";
	handle.class = "slider-handle";
	bgDiv.appendChild(handle);
	
	var buuk = buk;
	var mouseX=0;
	
	var bClicked = false;
	var value = 0;
	
	handle.onmousedown = function(e){
		bClicked=true;
		mouseX=e.clientX-handle.style.left+handle.style.marginLeft;
		console.log(e.clientX);
		return false;
	};
	
	handle.onmouseup = function(){
		bClicked=false;
	};
	
	this.changeVal = function(perc){
		handle.style.marginLeft =perc*parseInt(bgDiv.style.width) +"px";
	}

	this.update = function(e){
		if(bClicked){
			var offset = ((e.clientX-mouseX)-(bgDiv.style.left+bgDiv.style.marginLeft));
			console.log(e.clientX+"");
			if(offset>parseInt(bgDiv.style.width)-handle.width) offset=parseInt(bgDiv.style.width)-handle.width;
			else if(offset<0) offset=0;
			handle.style.marginLeft =offset +"px";
			
			buuk.changePosByPercent(offset/(parseFloat(bgDiv.style.width)-handle.width));
			buuk.stop();
		}
	};
	
	this.clickup = function(){
		bClicked=false;
	};
	
	bgDiv.onmousedown = function(e){
		mouseX = handle.width/2;
		bClicked=true;
		//handle.updatePos(e);
		return false;
	};
	
	this.connect = function(){
		buuk.imgSld = this;
	}
};

//var slider = new imgSlider($('slider'),book);
//slider.connect();

/*$('$body').onmousemove = function(e){
	slider.update(e);
}

$('$body').onmouseup = function(e){
	slider.clickup(e);
	return false;
}

$('$body').onmousedown = function(e){
	return false;
}

function mouseOut(e){
	//slider.clickup(e);
	return false;
}*/

//onmousemove="mouseMoving(event);" onmouseup="mouseUp(event);" onmousedown="mouseDown(event);" onmouseout="mouseOut(event);"
