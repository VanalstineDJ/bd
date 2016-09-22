var result;
var maze = [];
var mazeWidth = 20;
var mazeHeight = 20;
var percentage=0.2;


var b=document.getElementById("createamaze");

b.onclick= givemeamaze; // notice that there is no ()

function isvalidinput()
{
	var w=document.getElementById("colnum");
        var h=document.getElementById("rownum");
        var p=document.getElementById("percentage");	

	if (w.checkValidity() == false ||h.checkValidity()==false||p.checkValidity()==false)
	{
		document.getElementById("message").innerHTML="Input is invalid!";
		return false;
	}
	return true;
}

function givemeamaze(){

	if (!isvalidinput()) return;

	alert('hello Hartwick cisc380'+document.getElementById("colnum").value);
	setupinput(document.getElementById("colnum").value,
        	document.getElementById("rownum").value,
  		document.getElementById("percentage").value);
	
	//setupinput(10, 10, 0.4);
	generate();
	displaystring();
	displaytheboard();
}


function setupinput(numofrow, numofcol, ppercentage )
{
	mazeWidth=numofcol;
	mazeHeight=numofrow;
	percentage=ppercentage;

}

function displaystring()
{
	result="data is: ";
	for (var i = 0; i < mazeHeight; i++) {
	        for (var j = 0; j < mazeWidth; j++) {
			result=result+maze[i][j].toString();
        	}
	}	
    	var mymaze = document.getElementById("mymaze");
    	mymaze.innerHTML = result+"outputstring";
	
}

function displaytheboard()
{
	//Create a HTML Table element.
    	var table = document.createElement("TABLE");
    	table.border = "4";
 
	for (var i = 0; i < mazeHeight; i++) {
        	row = table.insertRow(-1);
	        for (var j = 0; j < mazeWidth; j++) {
       		     	var cell = row.insertCell(-1);
           		cell.innerHTML = maze[i][j];

/*	var createClickHandler = 
    		function(cell) 
    		{
       		return function() { 
                          var c = cell.getElementsByTagName("td")[0];
                          var id = c.innerHTML;
                          alert("id:" + id);
                          };
            	};

        cell.onclick = createClickHandler(currentRow); 
*/

	}
    }
 
    var dvTable = document.getElementById("mymaze");
    //dvTable.innerHTML = "I am amazed!!!";
    dvTable.appendChild(table);

}

function generate() 
{
for(var i = 0; i < mazeHeight; i ++){
     maze[i] = [];
     for(var j = 0; j < mazeWidth; j ++){
	if (Math.random()<percentage)
		maze[i][j] = 1;
   	else
		maze[i][j] =0;

 }
}
}

 
