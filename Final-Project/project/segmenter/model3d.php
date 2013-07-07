<!DOCTYPE HTML>
<html>
  <head>
    <style>
      body {
        margin: 0px;
        padding: 0px;
      }
    </style>
  </head>
  <body>
    <canvas id="myCanvas" width="1050" height="600"></canvas>
    <script>
		
      function loadImages(sources, callback) {
        var images = {};
        var loadedImages = 0;
        var numImages = 0;
        // get num of sources
        for(var src in sources) {
          numImages++;
        }
        for(var src in sources) {
          images[src] = new Image();
          images[src].onload = function() {
            if(++loadedImages >= numImages) {
              callback(images);
            }
          };
          images[src].src = sources[src];
        }
      }
      var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

      var sources = {
		<?php
				$origin = $_POST['dataurl']; 
				$url = explode(",", $origin); 
				$counter = count($url);
				$effective_counter = $counter/2;
				
				$k=0;
				for($i = 0; $i < $effective_counter; $i = $i + 2){
					$name = "foto_" . $k . ":";
					echo $name;
					print("'" . $url[$i] . "," . $url[$i+1] . "',\n");
					$k++;
				}			
		?>
      };

	  function drawImage_func(imageObj,h,stringa) {
		context.drawImage(imageObj, 0, 0);	
		
		var x=0;
		var y=0;
		
		//Creation of a long Array with every pixel.
        var imageData = context.getImageData(x, y, imageObj.width, imageObj.height);
        var data = imageData.data;
		
		//Populate the Textarea with the coordinates
			
		//Thresholding values MIN-MAX
		var  mini 	= 255;
		
		var h_factor = 3;
		var tallness = h;
		
		var j = 0;
		
        for(var i = 0; i < data.length; i += 4) {
			
			//Function for resetting the value of the X-axis every time it touches the max width of the image
			if(j==imageObj.width){j=0};
		  
			 // red
			 r = data[i]
			 // green
			 g = data[i + 1]
			 // blue
			 b = data[i + 2]
			 
			 var v = 0;
			 if(r > 3 && g > 3 && b > 3){
				//Make white the out of range
					y_1 = Math.floor(Math.floor(i/imageObj.width)/4);
					x_1 = j;
					
					v = 255;
					
					var value_r = 1/255 * r;
					var value_g = 1/255 * g;
					var value_b = 1/255 * b;

					stringa += "T([1,2,3])([" + x_1 + "," + y_1  + "," + tallness + "])(COLOR([" + value_r + "," + value_g + "," + value_b + ",0.5])(CUBOID([1,1,1]))),";
			 } 
			 else{
			 		
					
					//console.log("T([1,2,3])([" + x_1 + "," + y_1  + "," + h + "])(CUBOID([1,1,1])),");
			}  
			
			
			
			 data[i] = v; data[i+1] = v; data[i+2] = v;	
			
			  
			 //Incrementing the value of the axis
			 j++;

        }
		
		
        // overwrite original image
        context.putImageData(imageData, x, y);
		return stringa;
	  }
	  
		
      loadImages(sources, function(images) {
	  
				  var stringa = '';
				  <?php
							$origin = $_POST['dataurl']; 
							$url = explode(",", $origin); 
							$counter = count($url);
							$effective_counter = $counter/2;
							
							$k=0;						
							$h_factor = $k;
							for($i = 0; $i < $effective_counter; $i = $i + 2){
								$name = "foto_" . $k;
								echo 'stringa += drawImage_func(images.' . $name . ',' . $h_factor .',stringa);';
								$k = $k + 1;
								$h_factor = $h_factor + 3;
							}			
					?>
				
				alert("COMPUTAZIONE FINITA");
			
			stringa += "])\nVIEW(a)";
			
			var target_coo = document.getElementById("dt_coo");
			target_coo.value = "from pyplasm import *\nc = CUBOID([1,1,3]);\na = STRUCT([";
			target_coo.value += stringa;
      });
	
    </script>
	
	<textarea rows="15" id="dt_coo" name="dt_coo" style="width: 90%"></textarea>
  </body>
</html>