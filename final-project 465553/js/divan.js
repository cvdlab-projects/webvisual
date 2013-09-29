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
DRAW(sofa)
  
