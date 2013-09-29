//MATTEO RICCARDI - matricola 465553
//Luigi Caccia Dominioni - two lamps

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


lamp1=T([0])([5])(Lamp1());
lamp2=T([0])([-5])(Lamp2());

DRAW(lamp1)
DRAW(lamp2)
