function enter_pzno(){
	
if(document.getElementById('pno').value == 0){
	
document.getElementById('P1').style.display ="none";
	
	
}	
	
if(document.getElementById('pno').value >= 1){
	
document.getElementById('P1').style.display ="block";
	
	
}

if(document.getElementById('zno').value == 0){
	
document.getElementById('Z1').style.display ="none";
	
	
}	
	
if(document.getElementById('zno').value >= 1){
	
document.getElementById('Z1').style.display ="block";
	
	
}	
	
}

function inputChange(){
	
	if(document.getElementById('Ze').value > 1){
		
	alert('maintain the range');	
		
	}
	/*if(document.getElementById('P1r').value >8){
		
	alert('maintain the range');	
		
	}
	
	if(document.getElementById('P1r').value <-8){
		
	alert('maintain the range');	
		
	}
	
	if(document.getElementById('P1im').value >8){
		
	alert('maintain the range');	
		
	}
	
	if(document.getElementById('P1im').value -8){
		
	alert('maintain the range');	
		
	}
	if(document.getElementById('Z1r').value >8){
		
	alert('maintain the range');	
		
	}
	
	if(document.getElementById('Z1r').value <-8){
		
	alert('maintain the range');	
		
	}
	
	if(document.getElementById('Z1im').value >8){
		
	alert('maintain the range');	
		
	}
	
	if(document.getElementById('Z1im').value -8){
		
	alert('maintain the range');	
		
	}*/
	
	
}

function addp(){
	$('#poleDiv').css('display','block'); ///display pole entering box
	
	document.getElementById('clr').style.visibility="visible";
	document.getElementById('pzDiv1').style.visibility="visible";	
	document.getElementById('pltB').style.visibility="visible";
	
	///increase the values of hidden input fields in html page for setting field ids for real and imaginary parts of the poles respectively
	
      var Real_no = parseInt($('#real').val())+1;
	  var imagy_no = parseInt($('#imaginary').val())+1;
	  
	/// set the ids of the real and imaginary boxes of poles
      var real_input = "<input type='number' id='real_"+Real_no+"' style='width:35%'>";
	  var imagy_input = "<input type='number' id='imagy_"+imagy_no+"' style='width:35%'>";
	  
	 ///Append the total pole with re + jw format in html page 
	  
      $('#poleDiv').append(real_input + '<span style="font-weight:bold;font-size:20px;">+ j</span>' + imagy_input);
	  
	///change the values of the hidden input fields to new values so that for next pole input it can be increased again  
      $('#real').val(Real_no);
	  $('#imaginary').val(imagy_no);
    }
	
	function addz(){
	$('#zeroDiv').css('display','block'); ///display pole entering box
	document.getElementById('clr').style.visibility="visible";
	document.getElementById('pzDiv2').style.visibility="visible";	
	document.getElementById('pltB').style.visibility="visible";
	
	///increase the values of hidden input fields in html page for setting field ids for real and imaginary parts of the poles respectively
	
      var Real_no = parseInt($('#real2').val())+1;
	  var imagy_no = parseInt($('#imaginary2').val())+1;
	  
	/// set the ids of the real and imaginary boxes of poles
      var real_input = "<input type='number' id='real2_"+Real_no+"' style='width:35%'>";
	  var imagy_input = "<input type='number' id='imagy2_"+imagy_no+"' style='width:35%'>";
	  
	 ///Append the total pole with re + jw format in html page 
	  
      $('#zeroDiv').append(real_input + '<span style="font-weight:bold;font-size:20px;">+ j</span>' + imagy_input);
	  
	///change the values of the hidden input fields to new values so that for next pole input it can be increased again  
      $('#real2').val(Real_no);
	  $('#imaginary2').val(imagy_no);
	  
	} 
	  
	function SPP(){///S-Plane Plot
	
	var t= document.getElementById('T').value;
	
	var dataArray1 =[];///poles
	var dataArray2 =[];///zeros
	
	var dataArray3 =[];///zpoles
	var dataArray4 =[];///zzeros
	var dataArray5 =[];///circle
	
	///Entered pole numbers
	var polRno = $('#real').val();
	var polIno = $('#imaginary').val();
	
	///Entered zeros numbers
	var zeroRno = $('#real2').val();
	var zeroIno = $('#imaginary2').val();
	
	var pnor,pnoi,znor,znoi;
	
	for(var iteration = 1; iteration<= polRno; iteration++){///poles
		
		pnor = document.getElementById("real_"+ iteration).value;
		pnoi = document.getElementById("imagy_"+ iteration).value;
		dataArray1.push({x:(pnor), y:+(pnoi)});
		
		var f = pnor;
		var f1 = pnoi;
		
		///Z-plane		
		var Zp = math.pow(math.e,math.multiply(t,math.complex(f,f1)));	
	
	var Zpr = Zp.re;	
	var Zpim = Zp.im;
	
	dataArray3.push({x:+(Zpr), y:+(Zpim)});	
		
	}	

	for(var iteration2 = 1; iteration2<= zeroRno; iteration2++){///zeros
		
		znor = document.getElementById("real2_"+ iteration2).value;
		znoi = document.getElementById("imagy2_"+ iteration2).value;
		dataArray2.push({x:(znor), y:+(znoi)});
		
		var f2 = znor;
		var f3 = znoi;
		
		///z-plane
		var Zz = math.pow(math.e,math.multiply(t,math.complex(f2,f3)));
	var Zzr = Zz.re;	
	var Zzim = Zz.im;	
	
	dataArray4.push({x:+(Zzr), y:+(Zzim)});		
	}
	
		
	var x0=0;
	var y0=0;
	var r=1;
	 for (var th=0;th<=360;th=th+0.1){
	 var xc=math.multiply(r,math.cos(th));
	var yc=math.multiply(r,math.sin(th));
    dataArray5.push({x:+(xc),y:+(yc)});	
	 }
	
document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer1').style.display  = "block"; 	
	var chart1 = new CanvasJS.Chart("chartContainer1",
    {
      //exportEnabled: true, 
	  title:{
      text: "S Plane"
	  
      },
	  
	 axisX:{
        interlacedColor: "#dddbdb",
        title: "Real axis",
		                 
		maximum: 10,
		minimum: -10
      },
	     
    axisY:[
            	
	      {
            title: "Imaginary axis",
			
			maximum:10,
			minimum:-10
        },
		
		{/////poles
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    
	  
		},
		{/////zeros
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    
	  
		}
		],
	
	data:[ 
      {        
       	type: "scatter",
		markerType:"cross",
		color:"red",
		dataPoints:dataArray1
	
       },
	   
	   {        
       	type: "scatter",
		markerType:"circle",
		color:"blue",
		dataPoints:dataArray2
	
       },
	   
	   {
	   type:"line",
	   color:"black",
	   dataPoints:[
			{ x: -1000,  y:0  },
			{ x:1000 , y: 0  },
            { x:1000, y: 1000},
			{ x:0, y: 1000  },
			{ x:0 ,  y: -1000  },
			{ x:-1000, y: -1000},
			{ x:-1000, y: 1000},
			{ x:1000, y: 1000},
			{ x:1000, y: -1000},
			{ x:0 ,  y: -1000  }
	  ]
	  } 
	  ]
       
	});

	chart1.render();

document.getElementById('chartContainer2').style.display  = "block"; 	
	var chart2 = new CanvasJS.Chart("chartContainer2",
    {
      //animationEnabled: true,
	  
		  //animationDuration: 10000, 
		  zoomEnabled: true,
    zoomType: "xy",
	  title:{
      text: "Z Plane "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Real axis",
		maximum:15,
		minimum:-15
      },
    axisY: [
	      
		{/////output Y axis
		  //logarithmic: true,
            title: "Imaginary axis",
			
			maximum:15,
			//interval:0.5,
			minimum:-15,
        },
		
		{/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    
	  
		},
		{/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    
	  
		},
		{/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    
	  
		}
		],
		
	data:[ 
     
	  {        
        //type: "spline",
		type: "scatter",
		//symbol:"x",
		//color:"109DB6",
		markerType:"cross",
		color:"red",
        dataPoints:dataArray3
	
       },
	   {        
        //type: "spline",
		type: "scatter",
		//color:"109DB6",
		//markerType:"circle",
		color:"blue",
        dataPoints:dataArray4
	
       },
	    {
		   type:"bubble",
	   color:"black",
	   dataPoints:dataArray5 
	  },
	   {
		   type:"line",
	   color:"black",
	   dataPoints:[
			
			{ x: -10000,  y:0  },
			{ x:10000 , y: 0  },
            { x:10000, y: 10000},
			{ x:0, y: 10000  },
			{ x:0 ,  y: -10000  },
			{ x:-10000, y: -10000},
			{ x:-10000, y: 10000},
			{ x:10000, y: 10000},
			{ x:10000, y: -10000},
			{ x:0 ,  y: -10000  }
			
	  ]



	  }
	   
			
	   ]
       
	});

	chart2.render();

document.getElementById("exportChart").style.display = "block";
		
	}  
	
	  
	function pzShow(){
		
	document.getElementById('sem').innerHTML = "Pole-Zero Entry";	
		
	document.getElementById('AddPole').style.visibility="visible";	
	document.getElementById('AddZero').style.visibility="visible";	
	//document.getElementById('clr').style.visibility="visible";
	//document.getElementById('pzDiv').style.visibility="visible";
	
	//document.getElementById('pltB').style.visibility="visible";
	document.getElementById('zwnD').style.visibility="hidden";
	
	}  
	function zwShow(){
		
	document.getElementById('sem').innerHTML = "&zeta;, &omega;<sub>n</sub> Entry";
		
	document.getElementById('AddPole').style.visibility="hidden";	
	document.getElementById('AddZero').style.visibility="hidden";	
	document.getElementById('clr').style.visibility="visible";
	document.getElementById('pzDiv').style.visibility="hidden";
	
	document.getElementById('pltB').style.visibility="hidden";
	document.getElementById('zwnD').style.visibility="visible";
	
	}   
	  
	  

function refresh(){
/* //location.reload();	
document.getElementById('plotbucket').style.display = "none";
document.getElementById('chartContainer1').style.display = "none";
document.getElementById('chartContainer2').style.display = "none";
document.getElementById('exportChart').style.display = "none";
dataOPPoints =[];	
dataOPPoints1 =[];
dataOPPoints2 =[];
dataOPPoints3 =[];
dataOPPoints4 =[];
dataOPPoints5 =[];
dataOPPoints6 =[];
dataOPPoints7 =[];
dataOPPoints8 =[]; */

location.reload();
}

var dataOPPoints=[];	///for plotting chart
var dataOPPoints1=[];
var dataOPPoints2=[];
var dataOPPoints3=[];
var dataOPPoints4=[];
var dataOPPoints5=[];
var dataOPPoints6=[];
var dataOPPoints7=[];
var dataOPPoints8=[];









//////////////////////// SZ

function SZ(){
	
	//var P1 = document.getElementById('P1').value;
	//var P2 = document.getElementById('P2').value;
	//var Z1 = document.getElementById('Z1').value;
		
	var t= document.getElementById('T').value;
	var Par = document.getElementById('P1r').value;
	var Paim = document.getElementById('P1im').value;
	var Zar = document.getElementById('Z1r').value;
	var Zaim = document.getElementById('Z1im').value;
	
	//var Xmx=document.getElementById('Xmax').value;
	//var Xmn=document.getElementById('Xmin').value;
	//var Ymx=document.getElementById('Ymax').value;
	//var Ymn=document.getElementById('Ymin').value;
		
    var Sp = new Array();	///continous data output result storing
	var Zp = new Array();
	
	//var Xzmx=math.pow(math.e,Xmx);
	//var Xzmn=math.pow(math.e,Xmn);
//	var Yzmx=math.pow(math.e,Ymx);
//	var Yzmn=math.pow(math.e,Ymn);
	
	if(document.getElementById('pno').value > 0){
	var f = Par;
	var f1 = Paim;
	
	
	
	dataOPPoints.push({x:+(f), y:+(f1)});
	console.log("Spr="+f);
	console.log("Spim="+f1);
	
	}
	
	if(document.getElementById('zno').value > 0){
	
	var f2 = Zar;
	var f3 = Zaim;
		//for(var i=0;i<2;i++){
	//var f=P2;
	//Sp = 0;//Math.abs(yy);
	
	/// yop[f] = Math.abs(y);
	///magnitude part
	dataOPPoints2.push({x:+(f2), y:+(f3)});
	
	// to draw a square
	
	//var Ax=[-2,2,-2,2];
	//var Ay=[-2,2,-2,2];
	
	//dataOPPoints4.push({x:+(Ax),y:+(Ay)});
	
	//var T=1;
	

	
	//Zp=math.pow(math.e,f);
	
	console.log("Szr="+f2);
	console.log("Szim="+f3);
		}
	
	if(document.getElementById('pno').value > 0){
	
	var Zp = math.pow(math.e,math.multiply(t,math.complex(f,f1)));
	
	
	var Zpr = Zp.re;	
	var Zpim = Zp.im;
	
	dataOPPoints1.push({x:+(Zpr), y:+(Zpim)});
	
	console.log("Zr="+Zpr);
	console.log("Zim="+Zpim);
	}
	
	if(document.getElementById('zno').value > 0){
		
	var Zz = math.pow(math.e,math.multiply(t,math.complex(f2,f3)));
	var Zzr = Zz.re;	
	var Zzim = Zz.im;
	
	
	
	dataOPPoints3.push({x:+(Zzr), y:+(Zzim)});
	
	console.log("Zr1="+Zzr);
	console.log("Zim1="+Zzim);
	}
	
			
	
	var x0=0;
	var y0=0;
	var r=1;
	 for (var th=0;th<=360;th=th+0.1){
	 var xc=math.multiply(r,math.cos(th));
	var yc=math.multiply(r,math.sin(th));
    dataOPPoints4.push({x:+(xc),y:+(yc)});
	 }
	
	
	
	
//	f=math.add(f,0.01);

		//}
document.getElementById('plotbucket').style.display  = "block"; 
 
document.getElementById('chartContainer1').style.display  = "block"; 	
	var chart1 = new CanvasJS.Chart("chartContainer1",
    {
      //animationEnabled: true,
	  
		  //animationDuration: 10000, 
		  
		  
	  title:{
      text: "S Plane "
	  
      },
	  
	 axisX:{
        interlacedColor: "#dddbdb",
        title: "Real axis",
		                 
		maximum: 10,
		minimum: -10
      },
	 
	 
    
    axisY:[
            	
	      {/////output Y axis
		  //logarithmic: true,
            title: "Imaginary axis",
			
			maximum:10,
			//interval:0.5,
			minimum:-10
        },
		{/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    
	  
		},
		{/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    
	  
		}
		],
	
	data:[ 
      {        
        //type: "spline",
		type: "scatter",
		markerType:"cross",
		//mode:'markers',
		//marker:	{symbol:['x']},
		
		color:"red",
				
        dataPoints:dataOPPoints
	
       },
	   {        
        //type: "spline",
		type: "scatter",
		//markerSize:8,
		//markerType:"circle",
		color:"blue",
		//color:"#ed2c4e",
        dataPoints:dataOPPoints2
	
       },
	   {
		   type:"line",
	   color:"black",
	   dataPoints:[
			{ x: -1000,  y:0  },
			{ x:1000 , y: 0  },
            { x:1000, y: 1000},
			{ x:0, y: 1000  },
			{ x:0 ,  y: -1000  },
			{ x:-1000, y: -1000},
			{ x:-1000, y: 1000},
			{ x:1000, y: 1000},
			{ x:1000, y: -1000},
			{ x:0 ,  y: -1000  }
	  ]



	  }
			
		
	   
	   ]
       
	});

	chart1.render();	
	//document.getElementById("result").style.display = "block";
	/*document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});*/	




//document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer2').style.display  = "block"; 	
	var chart2 = new CanvasJS.Chart("chartContainer2",
    {
      //animationEnabled: true,
	  
		  //animationDuration: 10000, 
		  zoomEnabled: true,
    zoomType: "xy",
	  title:{
      text: "Z Plane "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Real axis",
		maximum:15,
		minimum:-15
      },
    axisY: [
	      
		{/////output Y axis
		  //logarithmic: true,
            title: "Imaginary axis",
			
			maximum:15,
			//interval:0.5,
			minimum:-15,
        },
		
		{/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    
	  
		},
		{/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    
	  
		},
		{/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    
	  
		}
		],
		
	data:[ 
     
	  {        
        //type: "spline",
		type: "scatter",
		//symbol:"x",
		//color:"109DB6",
		markerType:"cross",
		color:"red",
        dataPoints:dataOPPoints1
	
       },
	   {        
        //type: "spline",
		type: "scatter",
		//color:"109DB6",
		//markerType:"circle",
		color:"blue",
        dataPoints:dataOPPoints3
	
       },
	    {
		   type:"bubble",
	   color:"black",
	   dataPoints:dataOPPoints4 //[
			/*{ x: 1,  y:0  },
			{ x:0.9962 , y: 0.0872  },
            { x:0.9659, y: 0.2588},
			{ x:0.9397, y: 0.3420 },
			{ x:0.9063 ,  y: 0.4226 }*/
	  //]


	  },
	   {
		   type:"line",
	   color:"black",
	   dataPoints:[
			/* { x: -30,  y:0  },
			{ x:30 , y: 0  },
            { x:30, y: 30},
			{ x:0, y: 30  },
			{ x:0 ,  y: -30  },
			{ x:-30, y: -30},
			{ x:-30, y: 30},
			{ x:30, y: 30},
			{ x:30, y: -30},
			{ x:0 ,  y: -30  }*/
			
			{ x: -10000,  y:0  },
			{ x:10000 , y: 0  },
            { x:10000, y: 10000},
			{ x:0, y: 10000  },
			{ x:0 ,  y: -10000  },
			{ x:-10000, y: -10000},
			{ x:-10000, y: 10000},
			{ x:10000, y: 10000},
			{ x:10000, y: -10000},
			{ x:0 ,  y: -10000  }
			
	  ]



	  }
	   
			
	   ]
       
	});

	chart2.render();



	
	//document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	


}



//////////////////////// Damping Ratio and Natural Frequency

function ZWn(){
	
	//var P1 = document.getElementById('P1').value;
	//var P2 = document.getElementById('P2').value;
	//var Z1 = document.getElementById('Z1').value;
		
	var t= document.getElementById('T').value;
	var ZT = document.getElementById('Ze').value;
	var NF = document.getElementById('Wn').value;
	//var Zar = document.getElementById('Z1r').value;
	//var Zaim = document.getElementById('Z1im').value;
		
    var Sp = new Array();	///continous data output result storing
	var Zp = new Array();
	
	//if(document.getElementById('pno').value > 0){
	
	Par1=math.multiply(-ZT,NF);
	Paim1=math.multiply(NF,Math.sqrt(1-math.pow(ZT,2)));
	
	var f4 = Par1;
	var f5 = Paim1;
	var f6 = Par1;
	var f7 = -Paim1;
	
	dataOPPoints5.push({x:+(f4), y:+(f5)});
	dataOPPoints6.push({x:+(f6), y:+(f7)});
	console.log("Spr1="+f4);
	console.log("Spim1="+f5);
	console.log("Spr2="+f6);
	console.log("Spim2="+f7);
	
	//}
	
	
	
	//if(document.getElementById('pno').value > 0){
	
	var Zp1 = math.pow(math.e,math.multiply(t,math.complex(f4,f5)));
	var Zp2 = math.pow(math.e,math.multiply(t,math.complex(f6,f7)));
	
	var Zpr1 = Zp1.re;	
	var Zpim1 = Zp1.im;
	var Zpr2 = Zp2.re;
	var Zpim2 = Zp2.im;
	
	dataOPPoints7.push({x:+(Zpr1), y:+(Zpim1)});
	dataOPPoints8.push({x:+(Zpr2), y:+(Zpim2)});
	
	console.log("Zr1="+Zpr1);
	console.log("Zim1="+Zpim1);
	console.log("Zr2="+Zpr2);
	console.log("Zim2="+Zpim2);
	//}
	
	
	
	var x0=0;
	var y0=0;
	var r=1;
	 for (var th=0;th<=360;th=th+0.1){
	 var xc=math.multiply(r,math.cos(th));
	var yc=math.multiply(r,math.sin(th));
    dataOPPoints4.push({x:+(xc),y:+(yc)});
	 }
	
	
	
	
//	f=math.add(f,0.01);

		//}
document.getElementById('plotbucket').style.display  = "block"; 
 
document.getElementById('chartContainer1').style.display  = "block"; 	
	var chart1 = new CanvasJS.Chart("chartContainer1",
    {
      //animationEnabled: true,
	  
		  //animationDuration: 10000, 
	  title:{
      text: "S Plane "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Real axis",
		maximum:10,
		minimum:-10
      },
    axisY:[
            	
	      {/////output Y axis
		  //logarithmic: true,
            title: "Imaginary axis",
			
			maximum:10,
			//interval:1,
			minimum:-10,
        },
		{/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    
	  
		},
		
		{/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    
	  
		}
		],
		
	data:[ 
      {        
        //type: "spline",
		type: "scatter",
		markerType:"cross",
		//mode:'markers',
		//marker:	{symbol:['x']},
		
		color:"red",
				
        dataPoints:dataOPPoints5
	
       },
	   {        
        //type: "spline",
		type: "scatter",
		markerType:"cross",
		//markerSize:8,
		//markerType:"circle",
		color:"blue",
		//color:"#ed2c4e",
        dataPoints:dataOPPoints6
	
       },
	   {
		   type:"line",
	   color:"black",
	   dataPoints:[
			{ x: -1000,  y:0  },
			{ x:1000 , y: 0  },
            { x:1000, y: 1000},
			{ x:0, y: 1000  },
			{ x:0 ,  y: -1000  },
			{ x:-1000, y: -1000},
			{ x:-1000, y: 1000},
			{ x:1000, y: 1000},
			{ x:1000, y: -1000},
			{ x:0 ,  y: -1000  }
	  ]



	  }
			
		
	   
	   ]
       
	});

	chart1.render();	
	//document.getElementById("result").style.display = "block";
	/*document.getElementById("exportChart").style.display = "block";
	document.getElementById("exportChart").addEventListener("click",function(){
	chart.exportChart({format: "jpg"})});*/	




//document.getElementById('plotbucket').style.display  = "block"; 
document.getElementById('chartContainer2').style.display  = "block"; 	
	var chart2 = new CanvasJS.Chart("chartContainer2",
    {
      //animationEnabled: true,
	  
		  //animationDuration: 10000, 
		  zoomEnabled: true,
    zoomType: "xy",
	  title:{
      text: "Z Plane "
	  
      },
		  
	  title:{
      text: "Z Plane "
	  
      },
	  
	  axisX:{
        interlacedColor: "#dddbdb",
        title: "Real axis",
		maximum:15,
		minimum:-15
      },
    axisY: [
	      
		{/////output Y axis
		  //logarithmic: true,
            title: "Imaginary axis",
			
			maximum:15,
			//interval:0.5,
			minimum:-15,
        },
		
		{/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    
	  
		},
		{/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    
	  
		},
		{/////input y axis invisible
			gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    
	  
		}
		],
		
	data:[ 
     
	  {        
        //type: "spline",
		type: "scatter",
		//symbol:"x",
		//color:"109DB6",
		markerType:"cross",
		color:"red",
        dataPoints:dataOPPoints7
	
       },
	   {        
        //type: "spline",
		type: "scatter",
		markerType:"cross",
		//color:"109DB6",
		//markerType:"circle",
		color:"blue",
        dataPoints:dataOPPoints8
	
       },
	    {
		   type:"bubble",
	   color:"black",
	   dataPoints:dataOPPoints4 //[
			/*{ x: 1,  y:0  },
			{ x:0.9962 , y: 0.0872  },
            { x:0.9659, y: 0.2588},
			{ x:0.9397, y: 0.3420 },
			{ x:0.9063 ,  y: 0.4226 }*/
	  //]


	  },
	   {
		   type:"line",
	   color:"black",
	   dataPoints:[
			{ x: -10000,  y:0  },
			{ x:10000 , y: 0  },
            { x:10000, y: 10000},
			{ x:0, y: 10000  },
			{ x:0 ,  y: -10000  },
			{ x:-10000, y: -10000},
			{ x:-10000, y: 10000},
			{ x:10000, y: 10000},
			{ x:10000, y: -10000},
			{ x:0 ,  y: -10000  }
	  ]



	  }
	   
			
	   ]
       
	});

	chart2.render();



	
	//document.getElementById("result").style.display = "block";
	document.getElementById("exportChart").style.display = "block";
	

}

function saveAs(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}

function saveImg(){
html2canvas(document.querySelector('#plotbucket')).then(function(canvas) {

        saveAs(canvas.toDataURL(), 'Plot.png');
    }); 
	
	
}