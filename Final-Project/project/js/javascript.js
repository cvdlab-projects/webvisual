  //slideshow menu high on right
$('document').ready(function(){
 $('#show').click(function(){
    $('#menu').slideDown("slow");
    });
  });

  //visualization canvass plasm.js
  var p;
    $(function () {
      console.log('Starting PLaSM for Web-Index...');
      p = new Plasm('plasm', 'plasm-inspector');
      fun.PLASM(p);
    });

  
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-30496335-1']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script');
      ga.type = 'text/javascript';
      ga.async = true;
      ga.src = 'http://www.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(ga, s);
    })();
    

  // visualization molecule
function showmolecole() {

		// Builds a circle

		var CIRCLE_PLANE = function (r) {

		var mapcircle = function (v) {
		alpha = v[0];
		r = v[1];
		return [r*COS(alpha), r*SIN(alpha)];
		}
		dom2D = PROD1x1([INTERVALS(2*PI)(36), INTERVALS(r)(1)]);

		return MAP(mapcircle)(dom2D);
		}

		// Builds a cylinder colored black

		var CYLINDER = function (r,h) {

		var surface = CIRCLE_PLANE(r);
		var cylinder = EXTRUDE([h])(surface);
		cylinder = COLOR([0,0,0])(R([0,2])(PI/2)(cylinder));
		return cylinder;
		}

		//function spheres where passed translate coordinate and color inside
		//red spheres
		var redSphere = function(tx,ty,tz){

			var domainf=DOMAIN([[0,PI],[0,2*PI]])([36,36]);
			var mappingRedBlack=function(v){ 
			var a=v[0]; 
			var b=v[1]; 
			var u=0.5*SIN(a)*COS(b); 
			var v=0.5*SIN(a)*SIN(b); 
			var w=0.5*COS(a); 
		return[u,v,w];}; 

		var sphereA=MAP(mappingRedBlack)(domainf);
		sphereA= COLOR([1,0,0])(sphereA);
			sphereA = T([0,1,2])([tx,ty,tz])(sphereA);
		return sphereA;

	}
		//black spheres
		var blackSphere = function(tx,ty,tz){

			var domainf=DOMAIN([[0,PI],[0,2*PI]])([36,36]);
			var mappingRedBlack=function(v){ 
			var a=v[0]; 
			var b=v[1]; 
			var u=0.5*SIN(a)*COS(b); 
			var v=0.5*SIN(a)*SIN(b); 
			var w=0.5*COS(a); 
		return[u,v,w];}; 

		var sphereA=MAP(mappingRedBlack)(domainf);
		sphereA= COLOR([0,0,0])(sphereA);
			sphereA = T([0,1,2])([tx,ty,tz])(sphereA);
		return sphereA;

	}
		//green spheres
		var greenSphere = function(tx,ty,tz){

			var domainf=DOMAIN([[0,PI],[0,2*PI]])([36,36]);
			var mappingRedBlack=function(v){ 
			var a=v[0]; 
			var b=v[1]; 
			var u=0.35*SIN(a)*COS(b); 
			var v=0.35*SIN(a)*SIN(b); 
			var w=0.35*COS(a); 
		return[u,v,w];}; 

		var sphereA=MAP(mappingRedBlack)(domainf);
		sphereA= COLOR([0,1,0])(sphereA);
			sphereA = T([0,1,2])([tx,ty,tz])(sphereA);
		return sphereA;

	}
		//azure spheres
		var azureSphere = function(tx,ty,tz){

			var domainf=DOMAIN([[0,PI],[0,2*PI]])([36,36]);
			var mappingRedBlack=function(v){ 
			var a=v[0]; 
			var b=v[1]; 
			var u=0.2*SIN(a)*COS(b); 
			var v=0.2*SIN(a)*SIN(b); 
			var w=0.2*COS(a); 
		return[u,v,w];}; 

		var sphereA=MAP(mappingRedBlack)(domainf);
		sphereA= COLOR([0,0.5,1])(sphereA);
			sphereA = T([0,1,2])([tx,ty,tz])(sphereA);
		return sphereA;

	}

	var sphere1 = redSphere(0,0,0);
	var sphere4 = redSphere(-2,0,1.2);
	var sphere5 = redSphere(-1.7,0,3.5);
	var sphere7 = redSphere(2.5,0,3.3);
	var sphere9 = redSphere(3.8,0,0);
	var sphere13 = redSphere(0.7,0,5.8);
	var sphere18 = redSphere(-5.6,0,2.5);
	var sphere20 = redSphere(-5.4,0,-0.8);

	var sphere3 = blackSphere(2.3,0,0.9);
	var sphere6 = blackSphere(0.5,0,4.4);
	var sphere17 = blackSphere(-4,0,4.2);
	var sphere19 = blackSphere(-4.6,0,0.6);

	var sphere2 = greenSphere(-0.2,0.5,-1.7);
	var sphere8 = greenSphere(4,0.5,3.8);

	var sphere10 = azureSphere(4.3,0,-1.7);
	var sphere11 = azureSphere(5,-1,0);
	var sphere12 = azureSphere(5.5,0,0);
	var sphere14 = azureSphere(1.6,0,6.3);
	var sphere15 = azureSphere(0.6,-1,7.4);
	var sphere16 = azureSphere(-0.4,0,6.5);
	var sphere21 = azureSphere(-5.2,-1,-2);
	var sphere22 = azureSphere(-5.8,-1,-2.5);
	var sphere23 = azureSphere(-7.1,1,-0.8);
	var sphere24 = azureSphere(-7.4,0,2.6);

	var sphere1Angle = T([1])([1])(STRUCT([sphere21,sphere22,sphere23]));
	var sphere2Angle = T([1])([1])(STRUCT([sphere10,sphere11,sphere12]));
	var sphere3Angle = T([1])([1])(STRUCT([sphere14,sphere15,sphere16]));

	var sphereTotal = STRUCT([sphere1Angle,sphere2Angle,sphere3Angle,sphere9,sphere1,sphere20,sphere13,sphere4,sphere5,sphere7,sphere18,sphere2,sphere8,sphere3,sphere6,sphere17,sphere19,sphere24]);
		
		DRAW(sphereTotal);

//distance from 2 points with 3 variables
var distance = function(p1,p2) {

		p1x = p1[0];
		p1y = p1[1];
		p1z = p1[2];


		p2x = p2[0];
		p2y = p2[1];
		p2z = p2[2];

		
		var distance3D = Math.sqrt( Math.pow((p2x-p1x),2) + Math.pow((p2y-p1y),2) + Math.pow((p2z-p1z),2) );
		return distance3D;
	}

//cylinders that represent ties from molecules

	var c19_4 = CYLINDER(0.03,distance([-4.6,0,0.6],[-2,0,1.2]));
	c19_4 = R([0,2])(-PI/13)(c19_4);
	c19_4 = T([0,2])([-4.6,0.6])(c19_4);

	var c20_19 = CYLINDER(0.03,distance([-5.4,0,-0.8],[-4.6,0,0.6]));
	c20_19 = R([0,2])(-PI/3)(c20_19);
	c20_19 = T([0,1,2])([-5.4,0,-0.8])(c20_19);

	var c1_4 = CYLINDER(0.03,distance([0,0,0],[-2,0,1.2]));
	c1_4 = R([0,2])(PI/6)(c1_4);
	c1_4 = T([0,1,2])([-2,0,1.2])(c1_4);

	var c1_3 = CYLINDER(0.03,distance([0,0,0],[2.3,0,0.9]));
	c1_3 = R([0,2])(-1.13*PI)(c1_3);
	c1_3 = T([0,1,2])([2.3,0,0.9])(c1_3);

	var c9_3 = CYLINDER(0.03,distance([3.8,0,0],[2.3,0,0.9]));
	c9_3 = R([0,2])(PI/6)(c9_3);
	c9_3 = T([0,1,2])([2.3,0,0.9])(c9_3);

	var c7_3 = CYLINDER(0.03,distance([2.5,0,3.3],[2.3,0,0.9]));
	c7_3 = R([0,2])(PI/1.9)(c7_3);
	c7_3 = T([0,1,2])([2.5,0,3.3])(c7_3);

	var c7_6 = CYLINDER(0.03,distance([2.5,0,3.3],[0.5,0,4.4]));
	c7_6 = R([0,2])(2.15*PI)(c7_6);
	c7_6 = T([0,1,2])([0.5,0,4.4])(c7_6);

	var c5_6 = CYLINDER(0.03,distance([-1.7,0,3.5],[0.5,0,4.4]));
	c5_6 = R([0,2])(PI/1.15)(c5_6);
	c5_6 = T([0,1,2])([0.5,0,4.4])(c5_6);

	var c6_13 = CYLINDER(0.03,distance([0.5,0,4.4],[0.7,0,5.8]));
	c6_13 = R([0,2])(PI/1.85)(c6_13);
	c6_13 = T([0,1,2])([0.7,0,5.8])(c6_13);

	var c5_17 = CYLINDER(0.03,distance([-1.7,0,3.5],[-4,0,4.2]));
	c5_17 = R([0,2])(PI/9)(c5_17);
	c5_17 = T([0,1,2])([-4,0,4.2])(c5_17);

	var c19_18 = CYLINDER(0.03,distance([-4.6,0,0.6],[-5.6,0,2.5]));
	c19_18 = R([0,2])(PI/3)(c19_18);
	c19_18 = T([0,1,2])([-5.6,0,2.5])(c19_18);

	var c18_17 = CYLINDER(0.03,distance([-5.6,0,2.5],[-4,0,4.2]));
	c18_17 = R([0,2])(-PI/4)(c18_17);
	c18_17 = T([0,1,2])([-5.6,0,2.5])(c18_17);

	var c18_17Double = T([0])([-0.2])(c18_17);

	var c4_5 = CYLINDER(0.03,distance([-2,0,1.2],[-1.7,0,3.5]));
	c4_5 = R([0,2])(PI/1.9)(c4_5);
	c4_5 = T([0,1,2])([-1.7,0,3.5])(c4_5);

	var c4_5Double = T([0])([-0.2])(c4_5);
 	
	var c1_2 = CYLINDER(0.03,distance([0,0,0],[-0.2,0.5,-1.7]));
	c1_2 = R([0,2])(-PI/2.2)(c1_2);
	c1_2 = R([0,1])(7*PI/2)(c1_2);
	c1_2 = T([0,1,2])([-0.2,0.5,-1.7])(c1_2);

	var c1_2Double = T([0])([0.2])(c1_2);

	var c7_8 = CYLINDER(0.03,distance([2.5,0,3.3],[4,0.5,3.8]));
	c7_8 = R([0,2])(PI/1.15)(c7_8);
	c7_8 = R([0,1])(PI/8)(c7_8);
	c7_8 = T([0,1,2])([4,0.5,3.8])(c7_8);

	var c7_8Double = T([2])([0.2])(c7_8);

	var c18_24 = CYLINDER(0.03,distance([-5.6,0,2.5],[-7.4,0,2.6]));
	c18_24 = R([0,2])(2*PI/0.2)(c18_24);
	c18_24 = T([0,1,2])([-7.4,0,2.6])(c18_24);

	var c7_8 = CYLINDER(0.03,distance([2.5,0,3.3],[4,0.5,3.8]));
	c7_8 = R([0,2])(PI/1.15)(c7_8);
	c7_8 = R([0,1])(PI/8)(c7_8);
	c7_8 = T([0,1,2])([4,0.5,3.8])(c7_8);

	var c20_22 = CYLINDER(0.03,distance([-5.4,0,-0.8],[-5.8,0,-2.5]));
	c20_22 = R([0,2])(PI/1.75)(c20_22);
	c20_22 = T([0,1,2])([-5.4,0,-0.8])(c20_22);
	
	var c11_9 = CYLINDER(0.03,distance([5,0,0],[3.8,0,0]));
	c11_9 = R([0,2])(2*PI)(c11_9);
	c11_9 = T([0,1,2])([3.8,0,0])(c11_9);
	
	var c13_15 = CYLINDER(0.03,distance([0.7,0,5.8],[0.6,0,7.4]));
	c13_15 = R([0,2])(PI/2.1)(c13_15);
	c13_15 = T([0,1,2])([0.6,0,7.4])(c13_15);
	
	var c10_9 = CYLINDER(0.03,distance([4.3,1,-1.7],[3.8,0,0]));
	c10_9 = R([0,2])(PI/3.3)(c10_9);
	c10_9 = R([0,1])(PI/2.7)(c10_9);
	c10_9 = T([0,1,2])([3.8,0,0])(c10_9);
	
	var c9_12 = CYLINDER(0.03,distance([3.8,0,0],[5.5,1,0]));
	c9_12 = R([0,2])(2*PI)(c9_12);
	c9_12 = R([0,1])(PI/6)(c9_12);
	c9_12 = T([0,1,2])([3.8,0,0])(c9_12);
	
	var c13_14 = CYLINDER(0.03,distance([0.7,0,5.8],[1.6,1,6.3]));
	c13_14 = R([0,2])(-PI/9.1)(c13_14);
	c13_14 = R([0,1])(PI/4.2)(c13_14);
	c13_14 = T([0,1,2])([0.7,0,5.8])(c13_14);

	var c13_16 = CYLINDER(0.03,distance([0.7,0,5.8],[-0.4,1,6.5]));
	c13_16 = R([0,2])(-PI/1.15)(c13_16);
	c13_16 = R([0,1])(-PI/4.2)(c13_16);
	c13_16 = T([0,1,2])([0.7,0,5.8])(c13_16);

	var c20_23 = CYLINDER(0.03,distance([-5.4,0,-0.8],[-7.1,2,-0.8]));
		c20_23 = R([0,2])(PI)(c20_23);
		c20_23 = R([0,1])(-PI/3.7)(c20_23);
		c20_23 = T([0,1,2])([-5.4,0,-0.8])(c20_23);
		DRAW(c20_23);

	var c20_21 = CYLINDER(0.03,distance([-5.4,0,-0.8],[-5.2,0,-2]));
	c20_21 = R([0,2])(PI/2.2)(c20_21);
	c20_21 = T([0,1,2])([-5.4,0,-0.8])(c20_21);
	DRAW(c20_21);

	ties = STRUCT([c19_4,c20_19,c1_4,c1_3,c9_3,c7_3,c7_6,c5_6,c6_13,c5_17,c19_18,c18_17,c18_17Double,c4_5,c4_5Double,c1_2,c1_2Double,c7_8,c7_8Double,c18_24,c20_22,c11_9,c10_9,c13_15,c9_12,c13_14,c13_16,c20_23,c20_21]);

	DRAW(ties);
}