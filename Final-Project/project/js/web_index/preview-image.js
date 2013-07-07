var image = [];


function preview(id){

var contenitor_div = document.createElement('div');
var contenitor = document.getElementsByTagName("svg");
var same = contenitor;
document.getElementById("printResult").appendChild(same);
document.getElementById("image_container").appendChild(contenitor_div).appendChild(change_style(same));

}

function change_style(contenitor){
	contenitor.style.widht = "0.5%";
	contenitor.style.height = "0.5%";
	contenitor.style.float = "left";
	return contenitor;
}