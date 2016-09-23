var result;
var maze = [];
var mazeWidth = 20;
var mazeHeight = 20;
var percentage=0.2;


var b=document.getElementById("createamaze");

b.onclick= givemeamaze; // notice that there is no ()


function isvalidinput()
{
	//validate input before proceed

	var w=document.getElementById("colnum");
        var h=document.getElementById("rownum");
        var p=document.getElementById("percentage");	

	if (w.checkValidity() == false ||h.checkValidity() == false||p.checkValidity() == false)
	{
		document.getElementById("message").innerHTML="w"+w.validationMessage+"h"+h.validationMessage+"p"+p.validationMessage;
		removetable("mymazetableid");
		return false;
	}
	return true;
}

function givemeamaze(){

	if (isvalidinput() == false) return;  
	// there is a minor issue with validate function, commented it out now

	alert('hello Hartwick cisc380'+document.getElementById("colnum").value);
	setupinput(document.getElementById("rownum").value,
        	document.getElementById("colnum").value,
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


function removetable(id)
    {
        var tbl = document.getElementById(id);
        if(tbl) tbl.parentNode.removeChild(tbl);
    }

function displaytheboard()
{
	//Create a HTML Table element.
    	var table = document.createElement("TABLE");
	table.setAttribute("id","mymazetableid")
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

    table.addEventListener("click",addColumnHandler)

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

var table;

function columnHandler(e) {
    e = e || window.event; //for IE87
    var t = e.target || e.srcElement; //IE87
    while (t.nodeName != 'TD' && t.nodeName != 'TH' && t.nodeName != 'TABLE') {
        t = t.parentNode;
    }
    if (t.nodeName == 'TABLE') {
        return;
    }
    var c = t.parentNode.cells;
    var j = 0;
    for (var i=0; i<c.length; i++){
        if (c[i] == t) {
            j = i;
        }
    }
    alert('You clicked on row #'+(j+1)+ ' , cell content = '+t.innerHTML);
}

function addColumnHandler() {
    table = document.getElementById("tableId");
    table.onclick = columnHandler;
}



function addCellHandlers(tableId) {

  
  if(document.getElementById(tableId)!=null){
		var table = document.getElementById(tableId);
		var rows = table.getElementsByTagName('tr');
		    
		for ( var i = 1; i < rows.length; i++) {
			var numcol=rows[i].cells.length;
      alert(numcol.toString());
        
			for ( var j = 0; j < numcol; j++) {
				
        rows[i].cells[j].i=i;
        rows[i].cells[j].j=j;
        	
        //alert(j);
        
        table.rows[this.i].cell[this.j].onclick = function() {
	      alert(what);
        //what = rows[i].cells[j].innerHTML;				
				
        alert(what +i +" "+j);
        
			};
		}
	}
}
}

/*
if (window.addEventListener) {
    window.addEventListener('load', addColumnHandler, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', addColumnHandler);
} 
*/
