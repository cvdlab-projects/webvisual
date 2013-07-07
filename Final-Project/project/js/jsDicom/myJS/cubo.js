

 var ar = [];

//mette immgini nello scroll
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

 for (var i=0; i < ar.length; i++) {

  $("#liquid").find(".image-scroll").append('<li style="height: 120px; display: block; float: left; margin-right: 9px; margin-left: 9px;"><a href="#">'
    +'<img src="'+ar[i]+'" width="88" height="126" alt="image"/>'
    +'</a></li>'
    );


};
$('#liquid').liquidcarousel({
  height:120,
  hidearrows: false
});

}

//upload di varie immagini
$("#upload-image").live("change", function(event){
     // input = this;
     if (!event) {
      event = window.event;
    }
    var files = event.target.files; 
          //  if (input.files && input.files[0]) {
           var i;
           for (i=0; i <files.length; i++){
            var reader = new FileReader();
            var file = files[i];
            reader.onload = function (event) {
             var picFile = event.target;
             console.log(i);
             $('#original-image').attr('src', event.target.result);
             $("#original").css("background", "#fff");
             ar.push(event.target.result);

             redrawCarosel();
           }
           reader.readAsDataURL(file);

         }




        //    }
        
      });

//al click di una immagine dello scroll, và in preview original-image
$(".image-scroll img").live("click", function(){
 var image = $(this).attr("src");
 $('#original-image').attr('src', image);

});



//al click si 'Scomponi a blocchi' vedo l'immagine scelta decomposta a blocchi
$("#blo-image").live("click", function(){
 var image = $('#original-image').attr('src');
 $("#block").css("background", "#fff");

   //image.SCOMPONI
   $('#block-image').attr('src', image);

 });


//al click si 'Segmenta' vedo l'immagine scelta segmentata
$("#bottoneSegmenta").live("click", function(){
   var image = $('#original-image').attr('src'); //passo l'src dell'immagine originale
   $("#segm").css("background", "#fff");
   var imageObj = new Image();
   imageObj.src = image;

   //image.SEGMENTA
   drawImage_segm(imageObj)
  // $('#divCanvas_1').attr('src', canvas);



});


_this = this;
//fai immagine in 3D preso l'array di immagini caricate
$("#cubo").live("click",function() {
  console.log(_this.ar);
  var x = CUBE([3]);
  return DRAW(x);
});


$(document).ready(function() {
  $('#liquid').liquidcarousel({
    height:120,
    hidearrows: false
  });

  $("#load").live("click", function(){
 });


});




