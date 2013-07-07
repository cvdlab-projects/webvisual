function retriveJsonDocument() {
    clearDivResult();
    $(function () {
        var value = document.getElementById('inputModelId').value;
        $.ajax({ //'http://localhost:28017/ilariomaiolodb/documents/?filter_id=modello'.concat(value),
            url:'http://localhost:28017/test/documents/?filter_id=modello'.concat(value),
            type: 'get',
            dataType: 'jsonp',
            jsonp: 'jsonp', // mongod is expecting the parameter name to be called "jsonp"
            success: function (data) {
                
                //if the document doesn't exist launch an alert
                if (typeof (data["rows"][0]) === "undefined") {
                    alert("doesn't exist a model with id : " + value)
                } else {

                    //Retrive clusters_tree 
                    var clustersTree = data["rows"][0]["clusters_tree"];
                    var type = data["rows"][0]["type"];
                    var description = data["rows"][0]["description"];
                    var id = data["rows"][0]["id"];
                    var name = data["rows"][0]["name"];

                    //Print tree
                    createTree(clustersTree, type, description, id, name);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log('error', errorThrown);
            }
        });
    }); 
}

function clearDivResult() {
    var divResult = document.getElementById("printResult");
    var svg = document.getElementsByTagName("svg")[0];
    if(svg==null)
        return false;
    else{
    divResult.removeChild(svg);
    }
}
