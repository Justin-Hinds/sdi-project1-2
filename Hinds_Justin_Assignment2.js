//alert("JavaScript works!");

// Justin Hinds
// SDI 1501
// Project 2
// The End of Crota

// global variables
var strClass = " Warlock "; // string
var haveDarkBelow = true ; // bolean
var damageOutput = 150; // number
var crota =10000

// Functions
var getDps = function(damage){
	var dps = damage * 5
	for(dps < crota){
	crota -= dps
	console.log("Crota is down to " + crota + "hit Points!");
	};
	return dps;
}; // Number Function




//Main code
//getDps(damageOutput)
//console.log(getDps(damageOutput))
getDps(damageOutput)