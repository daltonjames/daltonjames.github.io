//Dalton James, Dalton_James@student.uml.edu   
//UMass Lowell Computer Science
//Student in Jesse Heines GUI Programming I
//    
//File: mult_table.js
//Created: 10/21/2014
//   
//Description: makes the dynamic multiplication table with input to the html form 
//Updated: 10/24/2014

//wait for html to be ready
$(document).ready( function() {
  $("#m_form").submit( function() {
   
    //emptys the table so the table does not stack on a mutiple submits
    $("#result").empty();
    $("#error_msg").empty();
    
    //sets rows and columns to be the number of rows and columns
    //needed for the dynamic table
    var rows = ($("#max_v").val() - $("#min_v").val()) + 2;
    var columns = ($("#max_h").val() - $("#min_h").val()) + 2;

    
    //check for error values in if statements
    
    //checks if all of the values are set
    if($("#max_v").val() === "" || $("#min_v").val() === "" || $("#max_h").val() === "" || $("#min_h").val() === ""){
      //console.log("NaN");
      var error_message = "all values must be set";      
      $("#error_msg").append(error_message);
      return;  
    }
    
    //error for min being greater than max rows
    if ( rows-2 < 0 ) {
      //console.log("ERROR-min row greater than max row");
      var error_message = "min row greater than max row";
      $("#error_msg").append(error_message);
      return;        
    }
    
    //error for min being greater than max columns
    if( columns-2 < 0 ) {
      //console.log("ERROR-min column greater than max column");          
      var error_message = "min column greater than max column";      
      $("#error_msg").append(error_message);
      return; 
    }
    
    //appendStr used to build the table
    var appendStr = ""; 

    //2 for loops iterate and concat table rows and columns to "appendStr"
    //which is appended to the DOM when all "tr's" and "td's" are added
    
    //this loop runs for the number of rows needed
    for( var i = 0; i < Math.abs(rows); i++){
    	appendStr = appendStr.concat("<tr>");
	     
                //this loop runs for the number of columns needed per row
		for( var j = 0; j < Math.abs(columns); j++){
			//appendStr = appendStr.concat("<td>");

                        //checks for the first cell of the table
			if ( i === 0 && j === 0 ) {
				appendStr = appendStr.concat("<th></th>");
			}

                        //checks for the first row which will be headers
			else if ( i === 0 ) {
				appendStr = appendStr.concat("<th>");
				appendStr = appendStr.concat( (j-1 + $("#min_h").numVal()).toString() );
				appendStr = appendStr.concat("</th>");
			}

                        //checks for first column which will also be headers
			else if ( j === 0 ) {
				appendStr = appendStr.concat("<th>");
				appendStr = appendStr.concat( (i-1 + $("#min_v").numVal()).toString() );
				appendStr = appendStr.concat("</th>");
			}

                        //all other cells will use td tags
			else {
				appendStr = appendStr.concat("<td>");
				appendStr = appendStr.concat( ((i-1 + $("#min_v").numVal()) * (j-1 + $("#min_h").numVal())).toString() );
				appendStr = appendStr.concat("</td>");
			}
			     
		}
     	appendStr = appendStr.concat("</tr>");
    }

    //append the table fully contained in a string to the DOM 
    $("#result").append(appendStr); 
    
    // DOM targetting before changing some of the jquery
    // $("#result tr:first td").css("background-color", "black");
    // $("#result tr td:first").each( function() {
    // 	$(this).css("background-color", "green");
    // });
  });
   
});

//takes a string (of a number) and returns a number
//mainly used to make code above easier to read due to line size
jQuery.fn.numVal = function() {
	return parseInt($(this).val());
};
