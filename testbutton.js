window.onload = function(){
	var a = $("showAllButton");
	a.onclick = showAll;	
}

var clickNum = 0;

function showAll(){

if (clickNum++ > 0)
{
	return;
}

var a_area = $("showAllArea");


var tButton = document.createElement("button");
tButton.innerHTML = "(1) Test whether these three sides can form a triangle";
tButton.onclick = triangle;
a_area.appendChild(tButton);
a_area.appendChild(document.createElement("br"));

var rtButton = document.createElement("button");
rtButton.innerHTML = "(2) Test whether these three sides can form a right triangle";
rtButton.onclick = righttriangle;
a_area.appendChild(rtButton);
a_area.appendChild(document.createElement("br"));

var bButton = document.createElement("button");
bButton.innerHTML = "(3) Test both (1) and (2)";
bButton.onclick = doBoth;
a_area.appendChild(bButton);
a_area.appendChild(document.createElement("br"));

var clearButton = document.createElement("button");
clearButton.innerHTML = "(4) Clear Result!"
clearButton.onclick = clear;
a_area.appendChild(clearButton);

}

function triangle() {

var side1 = $("side1");
var side2 = $("side2");
var side3 = $("side3"); 
var result = $("result");

if((parseInt(side1.value) + parseInt(side2.value) > side3.value) && (parseInt(side1.value) + parseInt(side3.value) > side2.value) && (parseInt(side2.value) + parseInt(side3.value) > side1.value)) 
{
	result.innerHTML = "These three sides can form a triangle!";
}

else
{
result.innerHTML = "These three sides cannot form a triangle!";
}

}

function righttriangle() {

var side1 = $("side1");
var side2 = $("side2");
var side3 = $("side3");
var result2 = $("result2");

if((Math.pow(side1.value, 2) == Math.pow(side2.value, 2) + Math.pow(side3.value, 2)) || (Math.pow(side2.value, 2) == Math.pow(side1.value, 2) + Math.pow(side3.value, 2)) || (Math.pow(side3.value, 2) == Math.pow(side1.value, 2) + Math.pow(side2.value, 2)))
{

	result2.innerHTML = "These three sides can form a right triangle!";

}

else
{

	result2.innerHTML = "These three sides cannot form a right triangle!";

}

}

function doBoth() {
	triangle();
	righttriangle();

}

function clear() {
	var empty1 = $("result");
	var empty2 = $("result2");
	var clear = "	";

	empty1.innerHTML = clear;
	empty2.innerHTML = clear;

}



