function retriveIdCluster() {

    var queryString = location.search;
    var id;
    if (queryString) {
        id = queryString.split("?");
        id = id[1].split("=");
        id = id[1].split("&");
        alert(id[0]);
        return id[0];

       
    } else {

        alert("Id del Cluster non trovato nel query string");
        
    }

}


function retrieveCluster() {

    var idCluster = retriveIdCluster();
     $(function () {
        $.ajax({ //'http://localhost:28017/ilariomaiolodb/documents/?filter_type=cluster&id=' + idCluster.toString(),
            url: 'http://localhost:28017/test/documents/?filter_type=cluster&filter_id=' + idCluster.toString(),
            type: 'get',
            dataType: 'jsonp',
            jsonp: 'jsonp', // mongod is expecting the parameter name to be called "jsonp"
            success: function (data) {

                var result = data["rows"][0];
                var vertices = result["vertices"];
                var v_attributes = result["v_attributes"];
                var vertices_transformation = result["vertices_transformation"];

                if (typeof (vertices) === "undefined" || typeof (v_attributes) === "undefined" || typeof (vertices_transformation) === "undefined") {
                    alert("SI E' VERIFICATO UN ERRORE!");

                } else {



                   var a =  coordsTransformation(vertices, vertices_transformation);

                   Draw(a, v_attributes);
                    }
 
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                //console.log('error', errorThrown);
				alert("SI E' VERIFICATO UN ERRORE DI RETE")
            }
        });
  
    });

}


function Draw(vertici, attributiVertici) {
    for (var i = 0; i < vertici.length ; i++) {
        var ar = [];
        ar.push(vertici[i])
        var point = POLYPOINT(ar);
        var pointC = COLOR(attributiVertici[i])(point);
        DRAW(pointC);
    }
}




function coordsTransformation(retrivedVertices, retrivedMatrix) {
    var result = [];
        var vertices = retrivedVertices;
        var matrix = retrivedMatrix;
        if (!isIdentity(matrix)) {
            for (var i = 0; i < vertices.length; i++) {
                vertices[i] = matrixVectorProduct(matrix, vertices[i]);
                result.push(vertices[i]);
            };
        } else {

            result = vertices;

        }
        
        return result;
        //callback(vertices);

    
}


//implementation of the product between matrix and vector
function matrixVectorProduct(matrix, vertices) {
    var resultVector = initializeVector(vertices.length);
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < vertices.length; j++) {
            resultVector[i] += matrix[i][j] * vertices[j];

        };
    };
    return resultVector;
}


//initialize the vector result for the product operation
function initializeVector(vectorSize) {
    var vector = [];
    for (var i = 0; i < vectorSize; i++) {
        vector.push(0);
    };
    return vector;
}

//check the identity of a matrix 
function isIdentity(matrix) {
    var isIdentity = true;
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] !== 1 && i === j || matrix[i][j] !== 0 && i !== j)
                isIdentity = false;
        };
    };
    return isIdentity;
}
