
function set(val)
{
	document.getElementById("outputbox").value=val;
}//This function sets the output value in the text box.


function cal(val)
{
	document.getElementById("outputbox").value+=val;
} // print the elements on the text display box as soon as the number is clicked.


function evalAndGiveError() 
{ 
	try 
	{ 
	  set(	 

		eval(document.getElementById("outputbox").value)		

	     ) 
	} //eval function calculates the output value and then passess it to the set function which sets the value in display box else catches exception

	catch(e) 
	{
	  set('Error Occured.'); 
	} //try the above function,if fails give the exception.
}









