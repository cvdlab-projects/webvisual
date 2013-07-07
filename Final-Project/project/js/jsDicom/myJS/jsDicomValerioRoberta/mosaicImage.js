	var blockSize = 1;
	var stringa_presa = "";

	//blockSize = dimensione del blocco
	//y_n_coordinates = booleano che indica se si vogliono
	//le coordinate in una stringa/funzione che poi
	//verra' eseguita in plasm
	function mosaicImage(blockSize, y_n_coordinates) {
		
		if(y_n_coordinates === null || y_n_coordinates === undefined)
		y_n_coordinates = false;
		
		var canvasOrigin = document.getElementById("canvas_segm");
		
		var w = canvasOrigin.width;
		var h = canvasOrigin.height;

		var ctxOrigin = canvasOrigin.getContext("2d");

		//data: image data that contains original image	
		var data = ctxOrigin.getImageData(0,0,w,h).data;

		var canvasDestination = document.getElementById('canvas_blockDecomp');
		var ctxDestination = canvasDestination.getContext("2d");

		//imgData: a new image data that will contains the image pixelled
		var imgData = ctxDestination.createImageData(w,h);	
  $("#block").css("background", "#fff");

		//Array of rectangles
		//A rectangle is an array as [x,y,baseLength,Height]
		//height is always = blockSizeY
		//instead baseLength is a multiple of blockSizeX
		var rectanglesArray = new Array();
		//
		var white=true;
		for (var y=0; y<h; y+=blockSize) {
			for (var x=0; x<w; x+=blockSize) {
				
				var count=0;
				var blockSizeX = blockSize;
				var blockSizeY = blockSize;
				
				//If x, point where we're, + blocksize,
				//passes the image width,
				//we readapts blocksize
				//for y it's the same
				if (x + blockSizeX > w)
					blockSizeX = w - x;
				if (y + blockSizeY > h)
					blockSizeY = h - y;
				

				for(var y1=y; y1<y+blockSizeY; y1++){
					for (var x1=x; x1<x+blockSizeX; x1++){
						
						if(y1<h && x1<w)
							if(data[(y1*4*w)+(x1*4)]===255 &&
								data[(y1*4*w)+(x1*4)+1]===255 &&
								data[(y1*4*w)+(x1*4)+2]===255)
								count++;
							
					}
				}

				if(count > (blockSizeX*blockSizeY/2)){
					if(white===false){
						rect.push(rectangleLength, blockSizeY);
						rectanglesArray.push(rect);
						
					}
					white = true;
					for(var y1=y; y1<y+blockSizeY; y1++){
						for (var x1=x; x1<x+blockSizeX; x1++){
							if(y1<h && x1<w){
								imgData.data[(y1*4*w)+(x1*4)]=255
								imgData.data[(y1*4*w)+(x1*4)+1]=255
								imgData.data[(y1*4*w)+(x1*4)+2]=255
								imgData.data[(y1*4*w)+(x1*4)+3]=255
							}
						}
					}
				}
				else{
				
					if(white===true){
						var rect = new Array();
						rect.push(x,y);
						var rectangleLength = 0;
					}
					rectangleLength+=blockSizeX;
					white=false;
					for(var y1=y; y1<y+blockSizeY; y1++){
						for (var x1=x; x1<x+rectangleLength*blockSizeX; x1++){
							if(y1<h && x1<w){
								imgData.data[(y1*4*w)+(x1*4)]=0
								imgData.data[(y1*4*w)+(x1*4)+1]=0
								imgData.data[(y1*4*w)+(x1*4)+2]=0
								imgData.data[(y1*4*w)+(x1*4)+3]=255
							}
						}
					}
				}
			}
		}
		
	var k = parametro_per_piu_immagini
	var stringaFunzione = "";
	stringa_presa = "";

		if(y_n_coordinates){
			var dist = k*5;
			var alt = (k*5)+5

			for(var i=0; i<rectanglesArray.length; i++){
				
				stringaFunzione += "DRAW(DOMAIN([[" + rectanglesArray[i][0] + "," + (rectanglesArray[i][0]+rectanglesArray[i][2]) + "], [" + rectanglesArray[i][1] + ", " + (rectanglesArray[i][1]+rectanglesArray[i][3]) + "],[" + dist + "," + alt + "]])([1,1,1]));\n";
			
			}
		}
		ctxDestination.putImageData(imgData,0,0);
		stringa_presa = stringaFunzione;

		return true;
}
	

	var img = new Image();
	img.crossOrigin = '';
	
	img.onload = function() {
		var $ = function(id) { return document.getElementById(id); };
		$('blkS').oninput = function() { $('BlockSize').innerHTML = this.value; };
		$('blkS').oninput();
		mosaicImage(1);
	};

	//onChange function
	function changedBlk(){
		blockSize = document.getElementById('blkS').value;
	    mosaicImage(parseInt(blockSize),true);
	};
	




