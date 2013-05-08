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
$("#upload-image").live("change", function(){
      input = this;
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#original-image').attr('src', e.target.result);
                    $("#original").css("background", "#fff");
                    //array delle immagini caricate
                    ar.push(e.target.result);
                   redrawCarosel();
                }
                

                reader.readAsDataURL(input.files[0]);
            }
        
});

//al click delle immagini nello scroll vanno in preview
$(".image-scroll img").live("click", function(){
   var image = $(this).attr("src");
  $('#original-image').attr('src', image);

});

//al click si 'Segmenta' vedo l'immagine scelta segmentata
$("#seg-image").live("click", function(){
   var image = $('#original-image').attr('src');
   $("#segment").css("background", "#fff");

   //image.SEGMENTA
   $('#segment-image').attr('src', image);

});

//al click si 'Scomponi a blocchi' vedo l'immagine scelta a blocchi
$("#blo-image").live("click", function(){
   var image = $('#original-image').attr('src');
   $("#block").css("background", "#fff");

   //image.SCOMPONI
   $('#block-image').attr('src', image);

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


});




  
