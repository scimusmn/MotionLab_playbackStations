//this is a rudimentary way of creating classes in javascript. referred to as a singleton.
	//this is essentially a one-off class- you can also name the function and use that to create individual instances of the class
	
	function flipbook(cntnr){
	
	//Grab the canvas and context in which we are drawing
		var cntDiv = cntnr;
		var canvas = document.createElement("canvas");
		canvas.width="1680";
		canvas.height="1050";
		cntDiv.appendChild(canvas);
		
		var ctx = canvas.getContext("2d");
		
		var imgSld;
	
		var tiles = [];			//create the array of images which we flip through
		var nDisp=0;			//stores the value of the current image being displayed
		var bLoaded=false,
			bPlaying=false;		//keeps track of whether or not the images are loaded.
		var imgDir="default/";	//storing the name of the directory which we are currently browsing.
		var numImg = 600;
		
		var imgPad=20;


		//this is declaring member functions of the book class. The init function is used to load the images
		// from the disk, and inform the rest of the class when they are loaded. It also clears out old info. 
		
		this.init=function(){
			tiles = [];
			bLoaded=false;						
			canvas.width=canvas.width;			//this clears the html5 canvas, for some reason
			ctx.font = "bold 72px sans-serif";	//set font size and style
			ctx.textAlign = "center";
			ctx.fillText("Loading", canvas.width/2,canvas.height/2);
			for (x = 1; x <= numImg; x++) {
				ctx.clearRect(0,5*canvas.height/8,canvas.width,canvas.height/2);
				ctx.fillText(Math.round(x/(numImg/100.))+"%", canvas.width/2,3*canvas.height/4);   //display the percentage loaded text
				console.log(Math.round(x/(numImg/100.))+"%");
				var imageObj = new Image(); 												// new instance for each image
				//console.log(imgDir+x+".jpg");
				imageObj.onload = function(){
					canvas.width=imageObj.width+imgPad;			//useful if you want to adjust canvas size
					canvas.height=imageObj.height+imgPad;
				}
				//var fileName = 
				imageObj.src = imgDir+pad(x,3)+".jpg?"+Math.random();					//generate a unique name for each image, so it doesn't cache
				
					tiles.push(imageObj);										//push the new image into the array of images.
					//alert("load "+x);
				
			}
			
			bLoaded=true;
		};
		
		this.drawFrame=function(){			//display image and increment the image pointer. Should separate this into two functions.
			if(bLoaded){
				ctx.fillStyle = "rgb(150,150,150)";
				ctx.fillRect (0,0,canvas.width,canvas.height);
				ctx.drawImage(tiles[nDisp], imgPad/2,imgPad/2);
			}
		};
		
		this.idle=function(){
			if(bPlaying&&nDisp<tiles.length){
				nDisp++;
				imgSld.changeVal(nDisp/tiles.length);
			}
			else if(tiles.length<nDisp){
				bPlaying=false;
			}
		};
		
		this.togglePlay=function(){
			bPlaying=!bPlaying;
			var tog = document.getElementById("toggle");
			if(bPlaying) tog.html="pause";
			else tog.html="play";
		};
		
		this.stop=function(){
			bPlaying=false;
		}
		
		this.changePosByValue=function(val){
			nDisp=val;
		};
		
		this.changePosByPercent=function(perc){
			nDisp=Math.round(perc*(tiles.length-1));
		};
		
		this.reset=function(){
			nDisp=0;
		};
		
		this.changeDir=function(dir){
			imgDir=dir;
			this.reset();
			this.init();
		}
	};
	
	//var book = new flipbook($("visitor-caps"));
	
	//setInterval(book.drawFrame,50);
	//setInterval(book.idle,50);
	//window.onload = book.init;