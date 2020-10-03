window.setTimeout(function() {
  // your code here
	



var cap = prompt("Enter battery capacity in AH");

var volt = prompt("Enter VOLTAGE RATING OF THE BATTERY");

var p1 = prompt("Enter the power rating of device 1");

var p2 = prompt("Enter the power rating of device 2");

var p3 = prompt("Enter the power rating of device 3");

var p4 = prompt("Enter the power rating of device 4");

var t = (volt*0.8)/(p1+p2+p3+p4);

var time = alert("Back up time availabe =" + t + " Hours");

}, 500);


