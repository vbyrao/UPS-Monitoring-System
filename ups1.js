window.setTimeout(function() {
  // your code here
	



var cap = prompt("Enter battery capacity in AH");
var cap = parseInt(cap);
var volt = prompt("Enter VOLTAGE RATING OF THE BATTERY");
var volt = parseInt(volt);
var n = prompt("Enter number of devices");
var n = parseInt(n);
var p=0;
var c=0;

for (var i = 1; i <= n; i++) {
	c=prompt("Enter the POWER RATING of device "+ i);
	var c = parseInt(c);
	p = p+c;
}

alert("Total power consumption is " +p+ " W");

var time = (0.8*volt*cap)/p;

function time_convert(num)
 {
  num = num*60; 
  var hours = Math.floor(num / 60);  
  var minutes = Math.floor(num % 60);
  return hours + " hours and " + minutes+ " minutes";
          
}

alert("The estimated remaining time is "+time_convert(time));

}, 500);