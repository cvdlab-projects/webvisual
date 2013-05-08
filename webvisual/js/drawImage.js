

draw = function(){
    
    var div_plasm = $("div#plasm > canvas");
    var div_image = $("<div id='image'><canvas>Errore</canvas></div>");
    
    //new canvas
    div_image.css("width","50%");
    div_image.css("height","50%");
    div_image.css("float","left");
    div_image.css("border","solid 1px #ccc");
    div_image.css("margin-left","625px");
    
    
    //plasm.js
    div_plasm.css("width","50%");
    div_plasm.css("height","50%");
    $('div#plasm').css("float","left");
    
    //add to document
    div_image.appendTo("div.split");
    $('div#image > canvas').css("position","absolute");
    /*var canvas = $("div#image > canvas") ;
    var img = new Image();
    var ctx = canvas.getContext(); 
    img.src= "image/molecola.png"
    ctx.drawImage(img);   */ 
          
          };
   
        
      


