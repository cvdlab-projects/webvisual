   //////////////////FILES READER/////////////////////////////////  
   var  images = [];


   function redrawCarosel(){
     $("#liquid").remove();
     $("#container-liquid").append('<div id="liquid" class="liquid">'
       +'<span class="previous"></span>'
       +'<div class="wrapper">'
       +'<ul class="image-scroll">'   
       +'</ul>'
       +'</div>'
       +'<span class="next"></span>'
       +'</div>');

     for (var i=0; i < images.length; i++) {
      console.log(images[i].src)

      $("#liquid").find(".image-scroll").append('<li style="height: 120px; display: block; float: left; margin-right: 9px; margin-left: 9px;"><a href="#">'
        +'<img src="'+images[i].src+'" width="88" height="126" alt="image"/>'
        +'</a></li>'
        );


    };
    $('#liquid').liquidcarousel({
      height:120,
      hidearrows: false
    });

  }

  var input = document.getElementById('input');

  var firstImg = new Image();


//function cancella(context){
  //context.clearRect(0, 0, canvas.width, canvas.height);
//}


function scaleImage(img){
  if(img.width > 500 || img.height > 500){
    img.width = img.width*43/100;
  img.height = img.height*43/100;}
return img;
}

function callback() {
  firstImg = images[0];
  firstImg1 = scaleImage(firstImg);
  //immagine originale
  prepare_canvas(firstImg1,"original","canvasOriginalImage");
  var canvas = document.getElementById("canvasOriginalImage");
  var context = canvas.getContext("2d");
  context.drawImage(firstImg1, 0, 0,firstImg1.width,firstImg1.height);
  $("#original").css("background", "#fff");

  //immagine grigia
  prepare_canvas(firstImg1,"gray","canvas_gray");
  drawImage_gray(firstImg1);
  $("#gray").css("background", "#fff");

  //immagine segmentata
  prepare_canvas(firstImg1,"divCanvas_segm","canvas_segm");
  drawImage_segm(firstImg1);
  $("#divCanvas_segm").css("background", "#fff");

}

function handle_files(event) {

  var files = this.files;

  var len = files.length;
  var i;
  var file;
  var complete = false;
  var completed = 0;

  for (i = 0; i < len; i += 1) {
    file = files[i];

    if (!file.type.match('image.*')) {
      continue;
    }

    var reader = new FileReader();

    reader.onload = (function (file) {
      return function (event) {
        var data = event.target.result;

        var img = new Image();
        img.src = data;

        images.push(img);
        completed += 1;

        if (completed === len) {
          callback();
        }
      };
    })(file);
    redrawCarosel();
    // Read in the image file as a data URL.
    reader.readAsDataURL(file);
  }
}

input.addEventListener('change', handle_files);




  ///////////////////////////////////////////////////////////// 
  $(document).ready(function() {
    $('#liquid').liquidcarousel({
      height:120,
      hidearrows: false
    });

  });



