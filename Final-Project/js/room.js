//MATTEO RICCARDI - matricola 465553
//Luigi Caccia Dominioni - room


/*** function that normalizes the rgb values ***/
var normalize = function(rgb){
    return [rgb[0]/255,rgb[1]/255,rgb[2]/255];
};

var circle  = function (params) {
    var r = params[0];
    var h = params[1];
    return function (dims) {
      var domain = DOMAIN([[0,2*PI], [0,r]])([dims, 1]);
      var mapping = function (v) {
        var a = v[0];
        var r = v[1];
        return [r*COS(v[0]),r*SIN(v[0])];
      };
      var circle = MAP(mapping)(domain);
      return EXTRUDE([h])(circle);
    };
  };
/***************************************COLOR*********************************/

var greensofa = normalize([0,128,128]); 
var greensofa1 = normalize([0,108,128]); 

var goldsocket=normalize([255,215,0]);
var black =normalize([50, 50, 50]);
var brown = normalize([202, 141, 72]);
var brownred = normalize([153, 51, 7]);
var glass=[171/255,205/255,239/255,0.3]
var carpetcolor = normalize([0,51,153]);
  
/***************************************ROOM*********************************/

var floor = SIMPLEX_GRID([[50],[50],[0.1]])
floor=T([0,1,2])([0,-10,-0.1])(floor)
floor=COLOR(brown)(floor)


var s1 = SIMPLEX_GRID([[0.1],[10,-7,33],[25]])
s1=T([1])([-10])(s1)
var s2 = SIMPLEX_GRID([[9,-32,9],[-50,0.1],[25]])
s2=T([1])([-10])(s2)
var s3 = SIMPLEX_GRID([[-9,+32],[-50,0.1],[-15,10]])
s3=T([1])([-10])(s3)
var s4 = SIMPLEX_GRID([[0.1],[50],[25]])
s4=T([1])([-10])(s4)
var s4=T([0,1,2])([50,0,0])(s4)
var s5 = SIMPLEX_GRID([[0.1],[-10,+7,33],[-13.525,11.475]])
s5=T([1])([-10])(s5)



var w1 = SIMPLEX_GRID([[-9,+0.4,-10.2,+0.4,-10.2,+0.4,-10,+0.4],
                    [-49.8,0.4],[15]])
w1=T([1])([-10])(w1)
w1=COLOR(black)(w1)
var w2 = SIMPLEX_GRID([[-9.4,31.2],[-49.8,0.4],[-14.6,+0.4]])
w2=T([1])([-10])(w2)
w2=COLOR(black)(w2)
var w3 = SIMPLEX_GRID([[-9.4,+10.2,-0.4,+10.2,-0.4,+10],[-49.9,0.2],[14.6]])
w3=T([1])([-10])(w3)
w3=COLOR(glass)(w3)

/***************************************CARPETS & SOCKETS*******************************/
  var carpet1 = T([0,1,2])([8,20,0.016])(COLOR(carpetcolor)(CUBOID([30,15,0.04])));

  var carpet2 =  T([0,1,2])([36,4,0.016])(COLOR(carpetcolor)(circle([7, 0.04])(50)));

  var carpets = STRUCT([carpet1,carpet2]);

  var socket1 = T([0,1,2])([50-0.125,-7.6775,0.8255])(COLOR(goldsocket)(CUBOID([0.125,0.5,0.5])));
  var socket2 = T([0,1,2])([50-0.125,13.3625,0.8255])(COLOR(goldsocket)(CUBOID([0.125,0.5,0.5])));


  var sockets = STRUCT([socket1,socket2]);


/***************************************DOOR*********************************/

var handle = CUBOID([0.01, 0.1, 0.05]);
    handle=S([0,1,2])([2.1,2.1,2.1])(handle)
    handle = T([0,1,2])([0.15,1.05,1.5])(handle);
    handle=COLOR(black)(handle)
    

    var pb = CUBOID([1.4, 2.7, 0.1]);
    pb = T([2])([-0.1])(pb);
    var pv = CUBOID([0.1,2.7,0.05]);
    var pv1 = T([0])([1.3])(pv);
    var pv2 = T([0])([0.6])(pv);
    var pv3 = T([0])([0.7])(pv);
    var pos = CUBOID([0.5, 0.1, 0.05]);
    pos = T([0])([0.1])(pos);
    var pod = T([0])([0.7])(pos);
    var pos_1 = T([1])([2.6])(pos);
    var pos_2 = T([1])([0.85])(pos);
    var pos_3 = T([1])([1.7])(pos);
    var pod_1 = T([1])([2.6])(pod);
    var pod_2 = T([1])([0.85])(pod);
    var pod_3 = T([1])([1.7])(pod);
    var door = STRUCT([pb, pv, pv1, pv2, pv3,
      pos, pos_1, pos_2, pos_3,
      pod, pod_1, pod_2, pod_3]
    );
    door=COLOR(brownred)(door)
    door=R([0,2])(PI/2)(door)
    door=R([1,2])(PI/2)(door)
    door=T([0,1,2])([0.105,0,0])(door)
     door=S([0,1,2])([0.5,5,5])(STRUCT([door,handle]))













/***************************************TABLE*********************************/

function Table(){
//MATTEO RICCARDI - matricola 465553
//Luigi Caccia Dominioni - table


/*** function that normalizes the rgb values ***/
normalize = function(rgb){
    return [rgb[0]/255,rgb[1]/255,rgb[2]/255];
    }

  domain2d = DOMAIN([[0,1],[0,1]])([20,20]);
  domain2d2PI = DOMAIN([[0,1],[0,2*PI]])([70,70]);
  



  
    
/************************************************* ARRIS **********************************/
  

  var l1= BEZIER(S0)([[0.5,0,0],[0.5,0.5,0],[0,0.5,0]]);
  var l2 =  BEZIER(S0)([[0,0,0],[0,0,0]]);
  var l3 = BEZIER(S0)([[0.5,0,0.3],[0.5,0.5,0.3],[0,0.5,0.3]]);
  var l4 =  BEZIER(S0)([[0,0,0.3],[0,0,0.3]]);
  
  
  var s1= BEZIER(S1)([l1,l2]);
  var s2 = BEZIER(S1)([l3,l4]);
  var s3 = BEZIER(S1)([l1,l3]);
  

  var s1 = MAP(s1)(domain2d);
  var s2 = MAP(s2)(domain2d);
  var s3= MAP(s3)(domain2d);
  
  var arris = STRUCT([s1,s2,s3]);


/************************************************* EDGE  **********************************/


  var s1 = BEZIER(S0)([[0,0.5,0],[5,0.5,0],[7+5+1,0.5,0]]);
  var s2 = BEZIER(S0)([[0,0,0],[5,0,0],[7+5+1,0,0]]);
  var s3 = BEZIER(S0)([[0,0,0.3],[5,0,0.3],[7+5+1,0,0.3]]);
  var s4 = BEZIER(S0)([[0,0.5,0.3],[5,0.5,0.3],[7+5+1,0.5,0.3]]);
  var s12 = BEZIER(S1)([s1,s2]);
  var s23 = BEZIER(S1)([s2,s3]);
  var s34 = BEZIER(S1)([s3,s4]);
  var s12 = MAP(s12)(domain2d);
  var s23 = MAP(s23)(domain2d);
  var s34 = MAP(s34)(domain2d);
  var edge = STRUCT([s12,s23,s34]);

/************************************************ GLASS  **********************************/
 
  
  var b01 = BEZIER(S0)([[0,0,0], [7+5+1,0,0]]);
  var b11 = BEZIER(S0)([[0,0,0+0.3], [7+5+1,0,0+0.3]]);

  var b02 = BEZIER(S0)([[0,0+7+5+1,0], [7+5+1,0+7+5+1,0]]);
  var b12 = BEZIER(S0)([[0,0+7+5+1,0+0.3], [7+5+1,0+7+5+1,0+0.3]]);

  var b03 = BEZIER(S0)([[0,0,0], [0,7+5+1,0]]);
  var b13 = BEZIER(S0)([[0,0,0+0.3], [0,7+5+1,0+0.3]]);

  var b04 = BEZIER(S0)([[7+5+1,0,0], [7+5+1,7+5+1,0]]);
  var b14 = BEZIER(S0)([[7+5+1,0,0+0.3], [7+5+1,7+5+1,0+0.16]]);

  var s01 = BEZIER(S1)([b01, b02]);
  s01 = MAP(s01)(domain2d);

  var s11 = BEZIER(S1)([b11, b12]);
  s11 = MAP(s11)(domain2d);

  var sx1 = BEZIER(S1)([b01,b11]);
  sx1 = MAP(sx1)(domain2d);

  var sx2 = BEZIER(S1)([b02,b12]);
  sx2 = MAP(sx2)(domain2d);

  var sy1 = BEZIER(S1)([b03,b13]);
  sy1 = MAP(sy1)(domain2d);

  var sy2 = BEZIER(S1)([b04,b14]);
  sy2 = MAP(sy2)(domain2d);

  var glasstable = STRUCT([s01, s11, sx1, sx2, sy1, sy2]);
  
var glass=[171/255,205/255,239/255,0.3]

var cube=T([0,1])([0.5,0.5])(glasstable);
var cube=COLOR(glass)(cube)
/************************************************* BOARD **********************************/

var edge1 = T([0,1,2])([0.5,14,0.3])(R([1,2])([PI])(edge));
var edge2 = T([0])([0.5])(edge);
var edge3 = T([0,1])([14,0.5])(R([0,1])([PI/2])(edge));
var edge4 = T([1])([7+5+1.5])(R([0,1])([-PI/2])(edge));
var arris1 = T([0,1])([7+5+1.5,7+5+1.5])(arris);
var arris2 = T([0,1])([7+5+1.5,0.5])(R([0,1])([-PI/2])(arris));
var arris3 = T([0,1])([0.5,0.5])(R([0,1])([-PI])(arris));
var arris4 = T([0,1])([0.5,7+5+1.5])(R([0,1])([PI/2])(arris));


var grey = normalize([192,192,192]);
var board = COLOR(grey)(STRUCT([edge1,edge2,edge3,edge4,arris1,arris2,arris3,arris4]));
var board = STRUCT([cube,board]);
board=T([0,1,2])([0,0,7*1.5])(board)

/************************************************* LEG **********************************/




  var g1 = BEZIER(S0)([[0,3.1/4,7],[1/4,2.98/4,7],[1.8/4,0.75/4,7],[1.55/4,1.2/4,7],[1.5/4,0.1/4,7]]);
  
  var g2 = BEZIER(S0)([[-1.5/4,0.1/4,7],[-1.55/4,1.2/4,7],[-1.8/4,0.75/4,7],[-1/4,2.98/4,7],[0,3.1/4,7]]);
  
  var g3 = BEZIER(S0)([[1.5/4,0.1/4,7],[0,-0.2/4,7],[-1.5/4,0.1/4,7]]);
  

  var p1 = BEZIER(S0)([[0,3.1/8,0],[1/8,2.98/8,0],[1.8/8,0.75/8,0],[1.55/8,1.2/8,0],[1.5/8,0.1/8,0]]);
  
  var p2 = BEZIER(S0)([[-1.5/8,0.1/8,0],[-1.55/8,1.2/8,0],[-1.8/8,0.75/8,0],[-1/8,2.98/8,0],[0,3.1/8,0]]);
  
  var p3 = BEZIER(S0)([[1.5/8,0.1/8,0],[0,-0.2/8,0],[-1.5/8,0.1/8,0]]);
  
  var p=BEZIER(S0)([[-1.5/8,0.1/8,0],[-1.55/8,1.3/8,0],[-1.8/8,0.85/8,0],[-1/8,3.08/8,0],[0,5.4/8,0],[1/8,3.08/8,0],[1.8/8,0.85/8,0],[1.55/8,1.3/8,0],[1.5/8,0.1/8,0]])
  var a=MAP(p)(domain2d2PI)

  var l1 = BEZIER(S1)([g1,p1]);
  var ml1 = MAP(l1)(domain2d);
  var l2 = BEZIER(S1)([g2,p2]);
  var ml2 = MAP(l2)(domain2d);
  var l3 = BEZIER(S1)([g3,p3]);
  var ml3 = MAP(l3)(domain2d);
  var out = BEZIER(S1)([p,p3]);
  var out = MAP(out)(domain2d);

  var grey = normalize([192,192,192]);
  var leg=COLOR(grey)(STRUCT([out,ml1,ml2]))
  var leg=STRUCT([out,ml1,ml2])
  leg=S([0,1,2])([1,1,1.5])(leg)
  


var leg1 = T([0,1])([0.7,0.7])(R([0,1])([3*PI/4])(leg));
var leg2 = T([0,1])([0.66,7+5+1.28])(R([0,1])([PI/4])(leg));
var leg3 = T([0,1])([7+5+1.33,7+5+1.33])(R([0,1])([-PI/4])(leg));
var leg4 = T([0,1])([7+5+1.3,0.65])(R([0,1])([-3*PI/4])(leg));


/************************************************* TABLE **********************************/

var table = STRUCT([leg1,leg2,leg3,leg4,board]);
table=S([0,1,2])([1,1.75,1])(table)
return(table);

}









function Chair(){
//MATTEO RICCARDI - matricola 465553
//Luigi Caccia Dominioni - chair


domain2d = DOMAIN([[0,1],[0,1]])([20,20]);
/*** function that normalizes the rgb values ***/
normalize = function(rgb){
    return [rgb[0]/255,rgb[1]/255,rgb[2]/255];
    }

var ivory = normalize([255,255,240]);
var black = normalize([0,0,0]);
var glass=[171/255,205/255,239/255,0.3]
var cerulean=normalize([153,203,255]);
var white=normalize([255,255,255]);



/****************************** SEAT **********************+*********************/

c1 = BEZIER(S0)([[0, 0, 0.5],[3+2+1, 0, 0.5]]);
c2 = BEZIER(S0)([[-0.5, -0.5, 0.25],[0.5+3+2+1, -0.5, 0.25]]);
c3 = BEZIER(S0)([[0, 0, 0],[3+2+1, 0, 0]]);

c4 = BEZIER(S0)([[0, 0, 0.5],[0, 8, 0.5]]);
c5 = BEZIER(S0)([[-0.5, -0.5, 0.25],[-0.5, 0.5+8, 0.25]]);
c6 = BEZIER(S0)([[0, 0, 0],[0, 8, 0]]);

c7 = BEZIER(S0)([[0, 8, 0.5],[3+2+1, 8, 0.5]]);
c8 = BEZIER(S0)([[-0.5, 0.5+8, 0.25],[0.5+3+2+1, 0.5+8, 0.25]]);
c9 = BEZIER(S0)([[0, 8, 0],[3+2+1, 8, 0]]);

c10 = BEZIER(S0)([[3+2+1, 0, 0.5],[3+2+1, 8, 0.5]]);
c11 = BEZIER(S0)([[0.5+3+2+1, -0.5, 0.25],[0.5+3+2+1, 0.5+8, 0.25]]);
c12 = BEZIER(S0)([[3+2+1, 0, 0],[3+2+1, 8, 0]]);


var seat = T([0,1])([-(3+2+1)/2, -8/2])(STRUCT([CUBOID([3+2+1,8,0.5]),
                     MAP(BEZIER(S1)([c1,c2,c3])) (domain2d), 
                     MAP(BEZIER(S1)([c4,c5,c6])) (domain2d),
                     MAP(BEZIER(S1)([c7,c8,c9])) (domain2d),
                     MAP(BEZIER(S1)([c10,c11,c12])) (domain2d)
                 ]));


seat=COLOR(cerulean)(seat)
/****************************** LEG  ********************************************/


c1 = BEZIER(S0)([[0,0.7,8],[0.5,0.7,8]]);
c2 = BEZIER(S0)([[0,0.7,8],[0.25,0,8],[0.5,0.7,8]]);

c3 = BEZIER(S0)([[0,0.7,8/2],[0.5,0.7,8/2]]);
c4 = BEZIER(S0)([[0,0.7,8/2],[0.25,0,8/2],[0.5,0.7,8/2]]);

c5 = BEZIER(S0)([[0,0.4,0],[0.5,0.4,0]]);
c6 = BEZIER(S0)([[0,0.4,0],[0.25,0,0],[0.5,0.4,0]]);

c7 = BEZIER(S0)([[0,0.7,3*16/4],[0.5,0.7,3*16/4]]);
c8 = BEZIER(S0)([[0,0.7,3*16/4],[0.25,0,3*16/4],[0.5,0.7,3*16/4]]);

c9 = BEZIER(S0)([[0,0.7,8/2],[0.5,0.7,8/2]]);
c10 = BEZIER(S0)([[0,0.7,8/2],[0.25,0,8/2],[0.5,0.7,8/2]]);

c11 = BEZIER(S0)([[0,0.4,0],[0.5,0.4,0]]);
c12 = BEZIER(S0)([[0,0.4,0],[0.25,0,0],[0.5,0.4,0]]);

c13 = BEZIER(S0)([[0,0.4-0.5,16],[0.5,0.4-0.5,16]]);
c14 = BEZIER(S0)([[0,0.4-0.5,16],[0.25,0-0.5,16],[0.5,0.4-0.5,16]]);

var leg1 = STRUCT([ MAP(BEZIER(S1) ([c1,c2])) (domain2d),
          MAP(BEZIER(S1)([c1,c3]))(domain2d),
          MAP(BEZIER(S1)([c2,c4]))(domain2d),
          MAP(BEZIER(S1)([c5,c6]))(domain2d), 
          MAP(BEZIER(S1)([c3,c5]))(domain2d), 
          MAP(BEZIER(S1)([c4,c6]))(domain2d)
        ]);


var leg2 = R([0,1])([PI])(STRUCT([  MAP(BEZIER(S1)([c7,c8])) (domain2d),
                    MAP(BEZIER(S1)([c7,c9])) (domain2d), 
                  MAP(BEZIER(S1)([c8,c10])) (domain2d),  
                  MAP(BEZIER(S1)([c9,c11])) (domain2d), 
                  MAP(BEZIER(S1)([c10,c12])) (domain2d),
                   MAP(BEZIER(S1)([c13,c14])) (domain2d), 
                   MAP(BEZIER(S1)([c7,c13])) (domain2d), 
                   MAP(BEZIER(S1)([c8,c14])) (domain2d)
                 ]));

var legs = STRUCT([T([0,1,2])([-(3+2+1)/2+0.1,8/2+0.7,-8+0.5+0.1])(leg2), 
          T([0,1,2])([(3+2+1)/2+0.4,8/2+0.7,-8+0.5+0.1])(leg2),
          T([0,1,2])([-(3+2+1)/2-0.4,-8/2-0.7,-8+0.5+0.1])(leg1), 
          T([0,1,2])([(3+2+1)/2-0.1,-8/2-0.7,-8+0.5+0.1])(leg1)
         ]);



legs=COLOR(white)(legs)


/****************************** BOARDS *****************************************/

var hboard = CUBOID([(3+2+1), 0.1, 0.4]);
var vboard = CUBOID([0.1, 8, 0.4]);


c1 = BEZIER(S0)([[-(3+2+1)/2,0,0],[0,0.5,0],[(3+2+1)/2,0,0]]);
c2 = BEZIER(S0)([[-(3+2+1)/2,0,0.6],[0,0.5,0.6],[(3+2+1)/2,0,0.6]]);

c3 = BEZIER(S0)([[-(3+2+1)/2,0.1,0],[0,0.5+0.1,0],[(3+2+1)/2,0.1,0]]);
c4 = BEZIER(S0)([[-(3+2+1)/2,0.1,0.6],[0,0.5+0.1,0.6],[(3+2+1)/2,0.1,0.6]]);

var uboard = R([1,2])([-PI/18])(
                STRUCT([MAP(BEZIER(S1)([c1,c2])) (domain2d), 
                    MAP(BEZIER(S1)([c3,c4])) (domain2d),
                    MAP(BEZIER(S1)([c1,c3])) (domain2d),
                      MAP(BEZIER(S1)([c2,c4])) (domain2d)
                    ]));


var boards = STRUCT([T([0,1,2])([-(3+2+1)/2, -8/2-0.2, -3*8/8])(hboard), 
          T([0,1,2])([-(3+2+1)/2-0.2, -8/2, -4*8/8])(vboard), 
          T([0,1,2])([-(3+2+1)/2-0.2, -8/2, -2*8/8])(vboard), 
          T([0,1,2])([-(3+2+1)/2, 8/2+0.1, -3*8/8])(hboard), 
          T([0,1,2])([+(3+2+1)/2+0.1, -8/2, -4*8/8])(vboard), 
          T([0,1,2])([+(3+2+1)/2+0.1, -8/2, -2*8/8])(vboard), 
          T([1,2])([8/2+0.2, 5*8/8])(uboard), 
          T([1,2])([8/2+0.7, 7*8/8+0.7])(uboard)
          ]);
boards=COLOR(white)(boards)

/****************************** CHAIR *******************************************/

var chair = STRUCT([seat, legs, boards]);
chair=T([2])([7.5])(chair)
chair=S([0,1,2])([0.9,0.9,0.9])(chair)
return chair;
}











function Sofa(){
//MATTEO RICCARDI - matricola 465553
//Luigi Caccia Dominioni - divan

/*** function that normalizes the rgb values ***/
var normalize = function(rgb){
    return [rgb[0]/255,rgb[1]/255,rgb[2]/255];
};

/*** function that create the knots for NUBS ***/
function knot(Points){
  length= Points.length +3;
  var array = []
  
            for (i = 0; i <= length- 4 ; i++) {
                if(i<2)array[i]=0;
                  else array[i] = i-2;
                };
  array[length-1] = length-3
  array[length-2] = length-3
  array[length-3] = length-3
  
  return array
}


domain1d = DOMAIN([[0,1]])([20]);
  domain2d = DOMAIN([[0,1],[0,1]])([20,20]);
  domain2d2PI = DOMAIN([[0,1],[0,2*PI]])([70,70]);


var greensofa = normalize([0,128,128]); 
var greensofa1 = normalize([0,108,128]); 

/*************************************** ARMREST *********************************/

var p1 = [[0,0,0],[0,0,2+3+2],[0,0,2+3+2],
          [0,5,2+3+2],[0,5,2+3+2],[0,5,12],
          [0,5,12],[0,8,12],[0,8,12],
          [0,8,0],[0,8,0],[0,0,0]
          ]

var p2 = [[1,0,0],[1,0,2+3+2],[1,0,2+3+2],
          [1,5,2+3+2],[1,5,2+3+2],[1,5,12],
          [1,5,12],[1,8,12],[1,8,12],
          [1,8,0],[1,8,0],[1,0,0]
          ]
          
var p3 = [[0.5,-0.5,0],[0.5,-0.5,2+3+2.5],[0.5,-0.5,2+3+2.5],
          [0.5,4.5,2+3+2.5],[0.5,4.5,2+3+2.5],[0.5,4,12],
          [0.5,4,12],[0.5,8,12],[0.5,8,12],
          [0.5,8,0],[0.5,8,0],[0.5,-0.5,0]
          ]


var n1 = knot(p1)
var n2 = knot(p2)
var n3 = knot(p3)

var l1 = NUBS(S0)(2)(n1)(p1);
var l2 = NUBS(S0)(2)(n2)(p2);
var l3 = NUBS(S0)(2)(n3)(p3);

var c1 = MAP(l1)(domain1d);
var c2 = MAP(l2)(domain1d);
var c3 = MAP(l3)(domain1d);

var s1 = BEZIER(S1)([l1,[0,6,6]])
var s2 = BEZIER(S1)([l1,l3,l2])
var s3 = BEZIER(S1)([l2,[1,6,6]])

var s1 = MAP(s1)(domain2d)
var s2 = MAP(s2)(domain2d)
var s3 = MAP(s3)(domain2d)

var armrest= STRUCT([s1,s2,s3])


/*************************************** CUSHION *********************************/


var p1 = [[0,0,0],[0,2.5,-0.4],[0,1+4,0],
          [0,1+4,0],[0,1+4.2,0.75],[0,1+4,1.5],
          [0,1+4,1.5],[0,2.5,1.9],[0,0,1.5],[0,0,1.5],
          [0,-0.2,0.75],[0,0,0]
          ]

var p2 = [[2+3+2,0,0],[2+3+2,2.5,-0.4],[2+3+2,1+4,0],
          [2+3+2,1+4,0],[2+3+2,1+4.2,0.75],[2+3+2,1+4,1.5],
          [2+3+2,1+4,1.5],[2+3+2,2.5,1.9],[2+3+2,0,1.5],
          [2+3+2,0,1.5],[2+3+2,-0.2,0.75],[2+3+2,0,0]
          ]

var n1 = knot(p1)
var n2 = knot(p2)

var l1 = NUBS(S0)(2)(n1)(p1);
var l2 = NUBS(S0)(2)(n2)(p2);

var c1 = MAP(l1)(domain1d);
var c2 = MAP(l2)(domain1d);

var s1 = BEZIER(S1)([l1,l2])
var s2 = BEZIER(S1)([l2,[2+3+2,2.5,0.75]])
var s3 = BEZIER(S1)([l1,[0,2.5,0.75]])

var s1 = MAP(s1)(domain2d)
var s2 = MAP(s2)(domain2d)
var s3 = MAP(s3)(domain2d)

var cushion = S([1])([0.97])(STRUCT([s1,s2,s3]))

/*************************************** BACKREST *********************************/


var p1 = [[0,0,0],[0,0,4.5],[0,0,4.5],[0,2,5+5+1],
          [0,2,5+5+1],[0,3,5+5+1],[0,3,5+5+1],
          [0,3,0],[0,3,0],[0,0,0]
          ]

var p2 = [[2+3+2,0,0],[2+3+2,0,4.5],[2+3+2,0,4.5],
          [2+3+2,2,5+5+1],[2+3+2,2,5+5+1],[2+3+2,3,5+5+1],
          [2+3+2,3,5+5+1],[2+3+2,3,0],[2+3+2,3,0],
          [2+3+2,0,0]
          ]

var n1 = knot(p1)
var n2 = knot(p2)

var l1 = NUBS(S0)(2)(n1)(p1);
var l2 = NUBS(S0)(2)(n2)(p2);

var c1 = MAP(l1)(domain1d);
var c2 = MAP(l2)(domain1d);

var s1= BEZIER(S1)([l1,l2])
var s1 = MAP(s1)(domain2d)

var base1 = CUBOID([2+3+2.1,1+4,3.4])
var base2= CUBOID([2+3+2,1,0.98])



/*************************************** SOFA *********************************/

var sofa = S([2])([0.8])(COLOR(greensofa)(STRUCT([T([0,2])([1,3.5])(cushion),T([0])([1])(base1),S([0,1,2])([1.1665,1,1.00085])(T([0,1,2])([0.1235,2+3+2,5+5+1.01])(base2)),T([0,1])([1.1,5])(s1)])))
var sofa1= S([2])([0.8])(COLOR(greensofa1)(STRUCT([T([0])([1])(base1),T([0,1])([1.1,4.8])(s1)])))


var sofa=STRUCT([sofa,T([0,1,2])([7.15,0,0])(sofa),T([0,1,2])([14.3,0,0])(sofa)])
var sofa1=STRUCT([sofa1,T([0,1,2])([2+3+2,0,0])(sofa1),T([0,1,2])([14,0,0])(sofa1)])

sofa1=S([0,1,2])([1,0.90,1])(sofa1)
sofa1=T([0,1,2])([0,0.92,0])(sofa1)

armrest=COLOR(greensofa)(S([0,1,2])([1.01,1.00001,0.800])(armrest))


var sofa = STRUCT([T([0])([0.139])(armrest),T([0])([21.6])(armrest),sofa,sofa1])
  
return sofa
}
  
















/*************************************** TABLE COFFE**********************************/
function Tablemini(){
//MATTEO RICCARDI - matricola 465553
//Luigi Caccia Dominioni - table coffe

/*** function that normalizes the rgb values ***/
var normalize = function(rgb){
    return [rgb[0]/255,rgb[1]/255,rgb[2]/255];
    };
/*** function that normalizes the rgb values and trasparance ***/
var normalizetrasp = function(rgb){
    return [rgb[0]/255,rgb[1]/255,rgb[2]/255,rgb[3]/10];
    };
/***************************************COLOR*********************************/

var black = normalize([0,0,0]);
var glass = normalizetrasp([185,211,238, 3]);
var glass2 =normalize([198,226,255]);
var grey = normalize([52, 52, 52]);


/***************************************DOMAIN*********************************/


var domain2PI = DOMAIN([[0,1],[0,2*PI]])([45,45])
var domain2d = DOMAIN([[0,1],[0,1]])([30,30]);





/***************************************BOARD*********************************/


    var c1 = CUBOID([11.1, 0.45, 0.02]);
  var c2 = T([1])([7.1])(c1);
  var c3 = CUBOID([0.45, 7.1, 0.02]);
  var c4 = T([0])([11.1])(c3);
  var cx1 = CUBOID([11.1, 0.2, 0.32]);
  var cx2 = T([1])([7.1])(cx1);
  var cy1 = CUBOID([0.2, 7.1, 0.32]);
  var cy2 = T([0])([11.1])(cy1);
  
  var b_1 = STRUCT([c1, c2]);
  b_1 = T([1,2])([-0.45/2, 3+0.14-0.08])(b_1);
  b_1 = COLOR(glass2)(b_1);
  var b_2 = STRUCT([c3, c4]);
  b_2 = T([0,2])([-0.45/2, 3+0.14-0.08])(b_2);
  b_2 = COLOR(glass2)(b_2);
  var b_3 = STRUCT([cx1, cx2]);
  b_3 = T([1,2])([-0.2/2, 3+0.14-0.08-0.32])(b_3);
  b_3 = COLOR(grey)(b_3);
  b_4 = STRUCT([cy1, cy2]);
  b_4 = T([0,2])([-0.2/2, 3+0.14-0.08-0.32])(b_4);
  b_4 = COLOR(grey)(b_4);

  var b = STRUCT([b_1, b_2, b_3, b_4]);
  

/*************************************** GLASS  **********************************/


    var c01 = BEZIER(S0)([[0,0,3+0.14], [6*2,0,3+0.14]]);
  var c11 = BEZIER(S0)([[0,0,3+0.3], [6*2,0,3+0.3]]);

  var c02 = BEZIER(S0)([[0,4*2,3+0.14], [6*2,4*2,3+0.14]]);
  var c12 = BEZIER(S0)([[0,4*2,3+0.30], [6*2,4*2,3+0.30]]);

  var c03 = BEZIER(S0)([[0,0,3+0.14], [0,4*2,3+0.14]]);
  var c13 = BEZIER(S0)([[0,0,3+0.3], [0,4*2,3+0.3]]);

  var c04 = BEZIER(S0)([[6*2,0,3+0.14], [6*2,4*2,3+0.14]]);
  var c14 = BEZIER(S0)([[6*2,0,3+0.30], [6*2,4*2,3+0.30]]);

  var s01 = BEZIER(S1)([c01, c02]);
  s01 = MAP(s01)(domain2d);

  var s11 = BEZIER(S1)([c11, c12]);
  s11 = MAP(s11)(domain2d);

  var sx1 = BEZIER(S1)([c01,c11]);
  sx1 = MAP(sx1)(domain2d);

  var sx2 = BEZIER(S1)([c02,c12]);
  sx2 = MAP(sx2)(domain2d);

  var sy1 = BEZIER(S1)([c03,c13]);
  sy1 = MAP(sy1)(domain2d);

  var sy2 = BEZIER(S1)([c04,c14]);
  sy1 = MAP(sy2)(domain2d);

  var t = STRUCT([s01, s11, sx1, sx2, sy1, sy2]);
  t = COLOR(glass)(t);
  t = T([0,1])([-0.9/2, -0.9/2])(t);


/*************************************** LEG **********************************/

  
    
  var l1 = [[0,0,0],[0.23,0,0]];
  var l2 = [[0.17+0.05,0,0],[0.23,0,0.04*2]];
  var l3 = [[0.17+0.05,0,0.04*2],[0,0,0.04*2]];
  var l1 = BEZIER(S0)(l1);
  var l2 = BEZIER(S0)(l2);
  var l3 = BEZIER(S0)(l3);
  var l1 = MAP(ROTATIONAL_SURFACE(l1))(domain2PI);
  var l2 = MAP(ROTATIONAL_SURFACE(l2))(domain2PI);
  var l3 = MAP(ROTATIONAL_SURFACE(l3))(domain2PI);
  var disk = STRUCT([l1,l2,l3]);
  base=COLOR(black)(disk)
   var l = CYL_SURFACE([0.45/2,3+0.06])([32,2]);
    var base = T([2])([3+0.06])(base);
  var leg = STRUCT([l,base, disk]);

var p1=leg;
var p2 = T([1])([5.1+2])(p1);
var p3 = T([0])([1.1+12-2])(p2);
var p4 = T([1])([-5.1+2-4])(p3);

var p = STRUCT([p1,p2,p3,p4]);
/*************************************** TABLE COFFE **********************************/

var tablecoffe = STRUCT([p, b, t]);
return tablecoffe;

}









/***************************************LAMP 1*********************************/
function Lamp1(){
//MATTEO RICCARDI - matricola 465553
//Luigi Caccia Dominioni - lamp1

/*** function that normalizes the rgb values ***/
normalize = function(rgb){
    return [rgb[0]/255,rgb[1]/255,rgb[2]/255];
};


/*** function that creates the sphere ***/
sphere = function (r) {
  domain = DOMAIN([[0, PI], [0, 2*PI]])([50,50]);
  mapping = function (v) {
    x = v[0];
    y = v[1];
    return [r*SIN(x)*COS(y), r/2*SIN(x)*SIN(y), r*COS(x)];
  };
  model = MAP(mapping)(domain);
  return model;
};


/***************************************DOMAIN*********************************/


domain2d = DOMAIN([[0,1], [0,1]])([20, 20]);
domain3d = DOMAIN([[0,1], [0,1], [0,1]])([20, 20, 20]);
/***************************************COLOR*********************************/

grey = normalize([60,62,67]);
gold = normalize([255,215,0]);
yellow= normalize([250,200,6])
black = normalize([0,0,0]);
slate = normalize([112,128,144]); 

/***************************************THE SHADE*********************************/


c1_s = BEZIER(S0)([[1.5,0,0],[1.5,-2,0],[-1.5,-2,0],[-1.5,0,0]])
c2_s = BEZIER(S0)([[0.225,0,1.5*2],[0.225,-0.18-0.1,1.5*2],[-0.225,-0.18-0.1,1.5*2],[-0.225,0,1.5*2]])
c3_s =BEZIER(S0)([[0.1,0,1.5*2+.1],[0.1,-0.15,1.5*2+.1],[-0.1,-0.15,1.5*2+.1],[-0.1,0,1.5*2+.1]])
c4_s = BEZIER(S0)([[0.1,0,1.5*2+.1],[0.1,0.15,1.5*2+.1],[-0.1,0.15,1.5*2+.1],[-0.1,0,1.5*2+.1]])


s1_s = MAP(BEZIER(S1)([c1_s,c2_s]))(domain2d)
s2_s = MAP(BEZIER(S1)([c2_s,c3_s]))(domain2d)
s3_s = MAP(BEZIER(S1)([c4_s,c3_s]))(domain2d)
s4_s=S([1])([-1])(s1_s)
s5_s=S([1])([-1])(s2_s)

shade = STRUCT([s1_s,s2_s,s3_s,s4_s,s5_s])
shade=COLOR(slate)(shade)
/************************************************* TORCH **********************************/
torch = COLOR(yellow)(sphere(2));
torch=S([0,1,2])([0.25,0.25,0.25])(torch)
torch=R([1,2])(-PI/2)(T([1])([-1.4+0.4-0.7])(torch))
cover=STRUCT([shade,torch])
/*************************************************TUBE & BASE**********************************/
 
 base = DISK(1.0)(24);
 base = T([2])([25.3])(EXTRUDE([0.3])(base));
 circle = CIRCLE(0.15)(24)
 tube=EXTRUDE([22.4])(circle)
 body = STRUCT([tube,base])
 tube=T([2])([3.05])(tube);
 body = STRUCT([COLOR(gold)(tube),COLOR(grey)(base)])

/*************************************************SHADE,BULB,TUBE, BASE**********************************/
 lamp_body=STRUCT([cover,body])
lamp_body=R([1,2])(-PI)(lamp_body)
lamp_body=T([2])([20+5.6])(lamp_body)
/*************************************************WIRE**********************************/


 c_wire1 = BEZIER(S0)([[0.57,0,0.15],[2,0,0.15]]);
 c_wire2 = BEZIER(S0)([[0.57,0.03,0.15],[2,0.03,0.15]]);
 c_wire3 = BEZIER(S0)([[2.0,0,0.15],[8,-0.2,0.15],[1.5,-1,0.15],[6,-3,0.15]]);
 c_wire4 = BEZIER(S0)([[2.0,0+0.03,0.15],[8,-0.2+0.03,0.15],[1.5,-1+0.03,0.15],[6,-3+0.03,0.15]]);

 s_wire1 = CUBIC_HERMITE(S1)([c_wire1,c_wire2,[0,0,0.1],[0,0,-0.1]]);
 s_wire2 = CUBIC_HERMITE(S1)([c_wire1,c_wire2,[0,0,-0.1],[0,0,+0.1]]); 
 s_wire3 = CUBIC_HERMITE(S1)([c_wire3,c_wire4,[0,0,0.1],[0,0,-0.1]]);
 s_wire4 = CUBIC_HERMITE(S1)([c_wire3,c_wire4,[0,0,-0.1],[0,0,+0.1]]); 

 s_wire1 = MAP(s_wire1)(domain2d);
 s_wire2 = MAP(s_wire2)(domain2d);
 s_wire3 = MAP(s_wire3)(domain2d);
 s_wire4 = MAP(s_wire4)(domain2d);

 wire = STRUCT([s_wire1,s_wire2,s_wire3,s_wire4]);
 wire=COLOR(black)(wire)

/*************************************************POWER PLUG**********************************/

 power_plug1 = BEZIER(S0)([[0.5,0,0.3],[-0.2,0,0.3],[-0.2,0,-0.3],[0.5,0,-0.3]]);
 power_plug2 =  BEZIER(S0)([[0.5,0,0.3],[0.5,0,-0.3]]);
 power_plug3 = BEZIER(S0)([[0.5,0.3,0.3],[-0.2,0.3,0.3],[-0.2,0.3,-0.3],[0.5,0.3,-0.3]]);
 power_plug4 =  BEZIER(S0)([[0.5,0.3,0.3],[0.5,0.3,-0.3]]);
 plug1 = BEZIER(S0)([[0.5,0,0.2],[0.6,0,0.2],[0.7,0,0.2],[0.7,0,0.15]]);
 plug2 = BEZIER(S0)([[0.5,0,0.1],[0.6,0,0.1],[0.7,0,0.1],[0.7,0,0.15]]);

 s_presa1 = BEZIER(S1)([power_plug1,power_plug2]);
 s_presa2 = BEZIER(S1)([power_plug3,power_plug4]);
 splug1 = CUBIC_HERMITE(S1)([plug1,plug2,[0,0.15,0],[0,-0.15,0]]);
 splug2 = CUBIC_HERMITE(S1)([plug1,plug2,[0,-0.15,0],[0,0.15,0]]); 

 power_plug = COLOR(0,0,0)(TRANSLATE([0,1])([5.9,-3.15])(MAP(BEZIER(S2)([s_presa1,s_presa2]))(domain3d)));
 splug1 = MAP(splug1)(domain2d);
splug2 = MAP(splug2)(domain2d);

splug = STRUCT([splug1,splug2]);
splug=STRUCT([T([0,1])([5.9,-2.99])(splug),T([0,1,2])([5.9,-2.99,-0.28])(splug)])
splug = COLOR(grey)(splug);

plug = T([1,2])([0.08,0.15])(STRUCT([power_plug,splug]));

/***************************************LAMP1*************************************/


lamp1 = STRUCT([lamp_body,wire,plug]) 
return lamp1;
}


/***************************************LAMP 2*********************************/

function Lamp2(){

//MATTEO RICCARDI - matricola 465553
//Luigi Caccia Dominioni - lamp2

/*** function that normalizes the rgb values ***/
normalize = function(rgb){
    return [rgb[0]/255,rgb[1]/255,rgb[2]/255];
};


/*** function that creates the sphere ***/
sphere = function (r) {
  domain = DOMAIN([[0, PI], [0, 2*PI]])([50,50]);
  mapping = function (v) {
    x = v[0];
    y = v[1];
    return [r*SIN(x)*COS(y), r/2*SIN(x)*SIN(y), r*COS(x)];
  };
  model = MAP(mapping)(domain);
  return model;
};


/***************************************DOMAIN*********************************/


domain2d = DOMAIN([[0,1], [0,1]])([20, 20]);
domain3d = DOMAIN([[0,1], [0,1], [0,1]])([20, 20, 20]);
/***************************************COLOR*********************************/

grey = normalize([60,62,67]);
gold = normalize([255,215,0]);
yellow= normalize([250,200,6])
black = normalize([0,0,0]);
slate = normalize([112,128,144]); 

/***************************************THE SHADE*********************************/


c1_s = BEZIER(S0)([[1.5,0,0],[1.5,-2,0],[-1.5,-2,0],[-1.5,0,0]])
c2_s = BEZIER(S0)([[0.225,0,1.5*2],[0.225,-0.18-0.1,1.5*2],[-0.225,-0.18-0.1,1.5*2],[-0.225,0,1.5*2]])
c3_s =BEZIER(S0)([[0.1,0,1.5*2+.1],[0.1,-0.15,1.5*2+.1],[-0.1,-0.15,1.5*2+.1],[-0.1,0,1.5*2+.1]])
c4_s = BEZIER(S0)([[0.1,0,1.5*2+.1],[0.1,0.15,1.5*2+.1],[-0.1,0.15,1.5*2+.1],[-0.1,0,1.5*2+.1]])


s1_s = MAP(BEZIER(S1)([c1_s,c2_s]))(domain2d)
s2_s = MAP(BEZIER(S1)([c2_s,c3_s]))(domain2d)
s3_s = MAP(BEZIER(S1)([c4_s,c3_s]))(domain2d)
s4_s=S([1])([-1])(s1_s)
s5_s=S([1])([-1])(s2_s)

shade = STRUCT([s1_s,s2_s,s3_s,s4_s,s5_s])
shade=COLOR(slate)(shade)
/************************************************* TORCH **********************************/
torch = COLOR(yellow)(sphere(2));
torch=S([0,1,2])([0.25,0.25,0.25])(torch)
torch=R([1,2])(-PI/2)(T([1])([-1.4+0.4-0.7])(torch))

cover=STRUCT([(T([1])([0.1])(shade)),torch])
cover=R([1,2])(-PI/2)(cover)
cover=T([0,1,2])([0.475,-2.4,2.75])(cover)
/*************************************************TUBE & BASE**********************************/
 
 base = DISK(1.0)(24);
 base = T([2])([25.3])(EXTRUDE([0.3])(base));
 circle = CIRCLE(0.15)(24)
 tube=EXTRUDE([22.4])(circle)
 body = STRUCT([tube,base])
 tube=T([2])([3.05])(tube);
 sfere=sphere(0.16)
sfere=R([1,2])(-PI/2)(sfere)
sfere=COLOR(gold)(T([0,1,2])([0,0,3.075])(sfere))

 body = STRUCT([COLOR(gold)(tube),COLOR(grey)(base),sfere])

/*************************************************SHADE,BULB,TUBE, BASE**********************************/
 lamp_body=STRUCT([T([0,1,2])([-0.022225,0,0])(cover),body])
lamp_body=R([1,2])(-PI)(lamp_body)
lamp_body=T([2])([20+5.6])(lamp_body)
/*************************************************WIRE**********************************/


 c_wire1 = BEZIER(S0)([[0.57,0,0.15],[2,0,0.15]]);
 c_wire2 = BEZIER(S0)([[0.57,0.03,0.15],[2,0.03,0.15]]);
 c_wire3 = BEZIER(S0)([[2.0,0,0.15],[8,-0.2,0.15],[1.5,-1,0.15],[6,-3,0.15]]);
 c_wire4 = BEZIER(S0)([[2.0,0+0.03,0.15],[8,-0.2+0.03,0.15],[1.5,-1+0.03,0.15],[6,-3+0.03,0.15]]);

 s_wire1 = CUBIC_HERMITE(S1)([c_wire1,c_wire2,[0,0,0.1],[0,0,-0.1]]);
 s_wire2 = CUBIC_HERMITE(S1)([c_wire1,c_wire2,[0,0,-0.1],[0,0,+0.1]]); 
 s_wire3 = CUBIC_HERMITE(S1)([c_wire3,c_wire4,[0,0,0.1],[0,0,-0.1]]);
 s_wire4 = CUBIC_HERMITE(S1)([c_wire3,c_wire4,[0,0,-0.1],[0,0,+0.1]]); 

 s_wire1 = MAP(s_wire1)(domain2d);
 s_wire2 = MAP(s_wire2)(domain2d);
 s_wire3 = MAP(s_wire3)(domain2d);
 s_wire4 = MAP(s_wire4)(domain2d);

 wire = STRUCT([s_wire1,s_wire2,s_wire3,s_wire4]);
 wire=COLOR(black)(wire)

/*************************************************POWER PLUG**********************************/

 power_plug1 = BEZIER(S0)([[0.5,0,0.3],[-0.2,0,0.3],[-0.2,0,-0.3],[0.5,0,-0.3]]);
 power_plug2 =  BEZIER(S0)([[0.5,0,0.3],[0.5,0,-0.3]]);
 power_plug3 = BEZIER(S0)([[0.5,0.3,0.3],[-0.2,0.3,0.3],[-0.2,0.3,-0.3],[0.5,0.3,-0.3]]);
 power_plug4 =  BEZIER(S0)([[0.5,0.3,0.3],[0.5,0.3,-0.3]]);
 plug1 = BEZIER(S0)([[0.5,0,0.2],[0.6,0,0.2],[0.7,0,0.2],[0.7,0,0.15]]);
 plug2 = BEZIER(S0)([[0.5,0,0.1],[0.6,0,0.1],[0.7,0,0.1],[0.7,0,0.15]]);

 s_presa1 = BEZIER(S1)([power_plug1,power_plug2]);
 s_presa2 = BEZIER(S1)([power_plug3,power_plug4]);
 splug1 = CUBIC_HERMITE(S1)([plug1,plug2,[0,0.15,0],[0,-0.15,0]]);
 splug2 = CUBIC_HERMITE(S1)([plug1,plug2,[0,-0.15,0],[0,0.15,0]]); 

 power_plug = COLOR(0,0,0)(TRANSLATE([0,1])([5.9,-3.15])(MAP(BEZIER(S2)([s_presa1,s_presa2]))(domain3d)));
 splug1 = MAP(splug1)(domain2d);
splug2 = MAP(splug2)(domain2d);

splug = STRUCT([splug1,splug2]);
splug=STRUCT([T([0,1])([5.9,-2.99])(splug),T([0,1,2])([5.9,-2.99,-0.28])(splug)])
splug = COLOR(grey)(splug);

plug = T([1,2])([0.08,0.15])(STRUCT([power_plug,splug]));

/***************************************LAMP2*************************************/


lamp2 = STRUCT([lamp_body,wire,plug]) 
return lamp2;
}

/****************************** FINAL ROOM ************************************/

var chair=S([0,1,2])([0.65,0.65,0.65])(Chair());
chair1=T([0,1,2])([5,16.5,0])(chair)
chair2=T([0,1,2])([5,0,0])(R([0,1])(PI)(chair))
chair3=T([0,1,2])([8,0.35,0])(STRUCT([R([0,1])(PI/2)(chair2),T([0,1,2])([0,6,0])(R([0,1])(PI/2)(chair2))]))
chair4=T([0,1,2])([18,0.35,0])(STRUCT([R([0,1])(PI/2)(chair1),T([0,1,2])([0,6,0])(R([0,1])(PI/2)(chair1))]))

c=STRUCT([chair1,chair2,chair3,chair4])

var t=S([0,1,2])([0.65,0.65,0.65])(Table());

table=R([0,1])(-PI/2)(t)
table=T([0,1,2])([15,32,0])(table)

chairs=R([0,1])(-PI/2)(c)
chairs=T([0,1,2])([15,32,0])(chairs)


sofa=S([0,1,2])([0.65,0.65,0.65])(Sofa());
sofa=R([0,1])(-PI/2)(sofa)
sofa=T([0,1,2])([44,12,0])(sofa)


tablemini=S([0,1,2])([0.75,0.75,0.75])(Tablemini());
tablemini=R([0,1])(-PI/2)(tablemini)
tablemini=T([0,1,2])([33,8.5,0])(tablemini)

lamp1=S([0,1,2])([0.65,0.65,0.65])(Lamp1());
lamp1=T([0,1,2])([45.875,15.5,0])(lamp1)


lamp2=S([0,1,2])([0.65,0.65,0.65])(Lamp2());
lamp2=T([0,1,2])([45.875,-5.5,0])(lamp2)



var finalRoom = T([3])([-0.04])(STRUCT([door,floor,s1,s2,s3,s4,s5,w1,w2,w3,sockets,carpets]))
DRAW(table)
DRAW(chairs)
DRAW(sofa)
DRAW(tablemini)
DRAW(lamp1)
DRAW(lamp2)
DRAW(finalRoom)
