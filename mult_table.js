$(document).ready( function() {
  $("#m_form").submit( function() {
   
    $("#result").empty();
    
    
    var rows = ($("#max_h").val() - $("#min_h").val()) + 2;
    var columns = ($("#max_v").val() - $("#min_v").val()) + 2;

    //check for hipster values
    if ( rows-2 <= 0 || columns-2 <= 0 ) {
    	alert("Error: Max values must be greater than Min values");
    }
    
    var appendStr = ""; //assign appendStr as a string

    //2 for loops iterate and concat table rows and columns to "appendStr"
    //which is appended to the DOM when all "tr's" and "td's" are added
    for( var i = 0; i < Math.abs(rows); i++){
    	appendStr = appendStr.concat("<tr>");
	     
		for( var j = 0; j < Math.abs(columns); j++){
			//appendStr = appendStr.concat("<td>");

			if ( i === 0 && j === 0 ) {
				appendStr = appendStr.concat("<th></th>");
			}

			else if ( i === 0 ) {
				appendStr = appendStr.concat("<th>");
				appendStr = appendStr.concat( (j-1 + $("#min_h").numVal()).toString() );
				appendStr = appendStr.concat("</th>");
			}

			else if ( j === 0 ) {
				appendStr = appendStr.concat("<th>");
				appendStr = appendStr.concat( (i-1 + $("#min_v").numVal()).toString() );
				appendStr = appendStr.concat("</th>");
			}

			else {
				appendStr = appendStr.concat("<td>");
				appendStr = appendStr.concat( ((i-1 + $("#min_v").numVal()) * (j-1 + $("#min_h").numVal())).toString() );
				appendStr = appendStr.concat("</td>");
			}
			     
			//appendStr = appendStr.concat("</td>");

		}
     	appendStr = appendStr.concat("</tr>");
    }

    $("#result").append(appendStr); //append the DOM (only once for performance reasons)
    //for the sake of practice DOM targetting
    // $("#result tr:first td").css("background-color", "black");
    // $("#result tr td:first").each( function() {
    // 	$(this).css("background-color", "green");
    // });
  });
   
});

jQuery.fn.numVal = function() {
	return parseInt($(this).val());
}
