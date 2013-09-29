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
DRAW(table);