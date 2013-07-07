



function createTree(cluster_tree, type, description, id,name) {

    //Nascondo gli input
    /*document.getElementById('inputModelId').style.display = "none";
    document.getElementById('buttonInputModel').style.display = "none";*/
    document.getElementById('inputModelId').value = " ";

    //Recupero il div dove farò vedere il mio albero
    //var divResult = document.getElementById('printResult')

    //Recupero il div dove farò vedere la descrizione del modello
    //var divResult = document.getElementById('description')

    var children = [];
    var otherLevel = [];

    for (var cont = 0; cont < cluster_tree.length; cont++) {
        if (typeof (cluster_tree[cont]) === "number") {
            children.push(cluster_tree[cont]);
        } else {
            otherLevel.push(cluster_tree[cont]);
        }
    }
    
    //var contenitor_div = document.getElementById('preview');

    print(children, otherLevel, type, description, id, name);
    //print(children, otherLevel, type, description, id, name,contenitor_div); salva all'interno dell'image container
       
}


function print(children, lvl, type, description, id, name) {

    //Recupero il div dove farò vedere il mio albero
    

     //Recupero il div dove farò vedere la descrizione del modello
    //var divDescription = document.getElementById('description')


    //var space2WriteText = Raphael(divDescription, 500, 500);

    var divResult = document.getElementById('printResult');

    //Stampo la radice e la descrizione
    var space2Draw = Raphael(divResult, 1600, 1000);
    space2Draw.text(500, 25, "Type: " + type);
    space2Draw.text(500, 45, "Id: " + id);
    space2Draw.text(500, 65, "Name: " + name);
    space2Draw.text(500, 85, "Description: " + description);
    

    var xRadice = 180;
    var yRadice = 25;
    space2Draw.circle(xRadice, yRadice, 20).attr({fill:"white"});
    space2Draw.text(xRadice, yRadice, "root").mouseover(function () {
      

    });

    //Stampo i livelli
    var dimensionChildre = (children.length*20)+((children.length-1)*50);
    var xChildren = xRadice - (dimensionChildre / 2);
    var yChildren = yRadice + 80;
    
    for (var i = 0; i < children.length; i++) {
        var st = space2Draw.set();
        st.push(
            space2Draw.circle(xChildren, yChildren, 20).click((function (children, i) {
                return function () {
                    window.open("index-point.html?id="+i+"&type="+type+"&description="+description+
                        "&name="+name);
                    //array[i] is undefined
                    //alert("ARRAY[i]===" + children[i]);
                    //retrive(array[i]);
                }
              

            }(children, i))).mouseover(function(){
                     this.attr({'cursor':'pointer'});
                     this.attr({'opacity':'.50'});                    
                }).mouseout(function(){
                     this.attr({'opacity':'1'});
                }),
            LineRoot(xRadice, yRadice, xChildren, yChildren, space2Draw)
        );
        space2Draw.text(xChildren, yChildren, children[i]).attr({ fill: "white" });
        st.attr({ fill: "red" });
        xChildren += 50;
    }


    var xLevels = xChildren;
    var yLevels = yChildren;
    var xLvlUltimate = xChildren;
    var yLvlUltimate = yChildren;

    
 
    for (var j = 0; j < lvl.length; j++) {
        if (j === 0) {
            space2Draw.circle(xLevels, yLevels, 20).attr({ fill: "white" });;
            LineRoot(xRadice, yRadice, xChildren, yChildren, space2Draw)
            space2Draw.text(xChildren, yChildren,"level" + j  );
            var d = xLevels;
            var x = yLevels;
            var dimensionLevels = (lvl.length * 20) + ((lvl.length - 1) * 50);
            var xLevels = xChildren - (dimensionLevels / 2);
            var yLevels = yChildren + 80;
            
          
        } else {
            space2Draw.circle(xLevels, yLevels, 20).attr({ fill: "white" });;
            LineChildren(xLevels, yLevels, xChildren, yChildren, space2Draw);
            space2Draw.text(xLevels, yLevels, "level" + j);
            var d = xLevels;
            var x = yLevels;
            var dimensionLevels = (lvl.length * 20) + ((lvl.length - 1) * 50);
            var xLevels = xLevels - (dimensionLevels / 2)+20;
            var yLevels = yLevels + 80;
          
           

        }
    
        for (var a = 0; a < lvl[j].length; a++) {
                       
            var st = space2Draw.set();
            st.push(
                
                space2Draw.circle(xLevels, yLevels, 20).click((function (lvl,a,j) {
                    return function () {

                        window.open("index-point.html?id="+lvl[j][a]+"&type="+type+"&description="+description+
                        "&name="+name);
                        //array[i] is undefined
                        //alert("LVL[i][j]===" + lvl[j][a]);
                        //retrive(array[i]);
                    }


                }(lvl,a,j))).mouseover(function(){
                     this.attr({'cursor':'pointer'});
                     this.attr({'opacity':'.50'});                    
                }).mouseout(function(){
                     this.attr({'opacity':'1'});
                })
                ,
                
                LineChildren(xLevels, yLevels, xLvlUltimate, yLvlUltimate, space2Draw)
                
               
            
            );

         
            space2Draw.text(xLevels, yLevels, lvl[j][a]).attr({ fill: "white" });
            st.attr({ fill: "red" });
            xLevels += 50;
            
            
            
        }
        xLvlUltimate = xLevels;
        yLvlUltimate = yLevels;
        xChildren = d;
        yChildren = x;
       
    }



}


