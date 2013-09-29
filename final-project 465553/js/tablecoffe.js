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
DRAW(tablecoffe);