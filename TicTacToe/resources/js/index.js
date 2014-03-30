$(document).ready(function(){
  var turnof = "X"
  $("#c1").click(function(){
	console.log("Click");
	if ($(this).text() === "" || $(this).text() === " "){
	  	$(this).text(turnof);
	  	if (turnof == "X"){
		  turnof = "O"	
		}
		else{
		  turnof = "X"	
		}
	}
  });
  
  $("#c2").click(function(){
	console.log("Click");
	if ($(this).text() === "" || $(this).text() === " "){
	  	$(this).text(turnof);
	  	if (turnof == "X"){
		  turnof = "O"	
		}
		else{
		  turnof = "X"	
		}
	}
  });
  
  $("#c3").click(function(){
	console.log("Click");
	if ($(this).text() === "" || $(this).text() === " "){
	  	$(this).text(turnof);
	  	if (turnof == "X"){
		  turnof = "O"	
		}
		else{
		  turnof = "X"	
		}
	}
  });
  
  $("#c4").click(function(){
	console.log("Click");
	if ($(this).text() === "" || $(this).text() === " "){
	  	$(this).text(turnof);
	  	if (turnof == "X"){
		  turnof = "O"	
		}
		else{
		  turnof = "X"	
		}
	}
  });
  
  $("#c5").click(function(){
	console.log("Click");
	if ($(this).text() === "" || $(this).text() === " "){
	  	$(this).text(turnof);
	  	if (turnof == "X"){
		  turnof = "O"	
		}
		else{
		  turnof = "X"	
		}
	}
  });
  
  $("#c6").click(function(){
	console.log("Click");
	if ($(this).text() === "" || $(this).text() === " "){
	  	$(this).text(turnof);
	  	if (turnof == "X"){
		  turnof = "O"	
		}
		else{
		  turnof = "X"	
		}
	}
  });
  
  $("#c7").click(function(){
	console.log("Click");
	if ($(this).text() === "" || $(this).text() === " "){
	  	$(this).text(turnof);
	  	if (turnof == "X"){
		  turnof = "O"	
		}
		else{
		  turnof = "X"	
		}
	}
  });
  
  $("#c8").click(function(){
	console.log("Click");
	if ($(this).text() === "" || $(this).text() === " "){
	  	$(this).text(turnof);
	  	if (turnof == "X"){
		  turnof = "O"	
		}
		else{
		  turnof = "X"	
		}
	}
  });
  
  $("#c9").click(function(){
	console.log("Click");
	if ($(this).text() === "" || $(this).text() === " "){
	  	$(this).text(turnof);
	  	if (turnof == "X"){
		  turnof = "O"	
		}
		else{
		  turnof = "X"	
		}
	}
  });
  
  
  
  var checkIfExistsAWinner = function(){
	var toreturn;
    if ( $("#c1").text() == "X" && $("#c2").text() == "X" && $("#c3").text() == "X") {
	  toreturn = "Xwins-(c1, c2, c3)";	
    }
    else if ( $("#c4").text() == "X" && $("#c5").text() == "X" && $("#c6").text() == "X") {
	  toreturn = "Xwins-(c4, c5, c6)";	
    }
    else if ( $("#c7").text() == "X" && $("#c8").text() == "X" && $("#c9").text() == "X") {
	  toreturn = "Xwins-(c4, c5, c6)";	
    }
    else if ( $("#c1").text() == "X" && $("#c4").text() == "X" && $("#c7").text() == "X") {
	  toreturn = "Xwins-(c1, c4, c7)";	
    }
    else if ( $("#c2").text() == "X" && $("#c5").text() == "X" && $("#c8").text() == "X") {
	  toreturn = "Xwins-(c2, c5, c8)";	
    }
    else if ( $("#c3").text() == "X" && $("#c6").text() == "X" && $("#c9").text() == "X") {
	  toreturn = "Xwins-(c3, c6, c9)";	
    }
	else if ( $("#c3").text() == "X" && $("#c5").text() == "X" && $("#c7").text() == "X") {
	  toreturn = "Xwins-(c3, c5, c7)";	
    }
    else if ( $("#c1").text() == "X" && $("#c5").text() == "X" && $("#c9").text() == "X") {
	  toreturn = "Xwins-(c1, c5, c9)";	
    }
    
    else if ( $("#c1").text() == "O" && $("#c2").text() == "O" && $("#c3").text() == "O") {
	  toreturn = "Owins-(c1, c2, c3)";	
    }
    else if ( $("#c4").text() == "O" && $("#c5").text() == "O" && $("#c6").text() == "O") {
	  toreturn = "Owins-(c4, c5, c6)";	
    }
    else if ( $("#c7").text() == "O" && $("#c8").text() == "O" && $("#c9").text() == "O") {
	  toreturn = "Owins-(c4, c5, c6)";	
    }
    else if ( $("#c1").text() == "O" && $("#c4").text() == "O" && $("#c7").text() == "O") {
	  toreturn = "Owins-(c1, c4, c7)";	
    }
    else if ( $("#c2").text() == "O" && $("#c5").text() == "O" && $("#c8").text() == "O") {
	  toreturn = "Owins-(c2, c5, c8)";	
    }
    else if ( $("#c3").text() == "O" && $("#c6").text() == "O" && $("#c9").text() == "O") {
	  toreturn = "Owins-(c3, c6, c9)";	
    }
	else if ( $("#c3").text() == "O" && $("#c5").text() == "O" && $("#c7").text() == "O") {
	  toreturn = "Owins-(c3, c5, c7)";	
    }
    else if ( $("#c1").text() == "O" && $("#c5").text() == "O" && $("#c9").text() == "O") {
	  toreturn = "Owins-(c1, c5, c9)";	
    }
    
    /*else{
	  toreturn = "draw";	
    }*/
    else if ($("#c1").text() !== "" && $("#c2").text() !== "" && $("#c3").text() !== "" && $("#c4").text() !== "" && $("#c5").text() !== "" && $("#c6").text() !== "" && $("#c7").text() !== "" && $("#c8").text() !== "" && $("#c9").text() !== ""){
	  toreturn = "draw";
	}
	else{
	  toreturn = "existsAvaibleMovements";
	}
    
    return toreturn;
  }
  
  setInterval(function(){
	 console.log("time");
     if(checkIfExistsAWinner() !== "existsAvaibleMovements" || checkIfExistsAWinner() !== "draw"){
	   if(checkIfExistsAWinner().match("c1") !== null){
	      $("#c1").css("background-color", "#2EFE2E");
      }
       if(checkIfExistsAWinner().match("c2") !== null){
	      $("#c2").css("background-color", "#2EFE2E");
      }
       if(checkIfExistsAWinner().match("c3") !== null){
	      $("#c3").css("background-color", "#2EFE2E");
      }
       if(checkIfExistsAWinner().match("c4") !== null){
	      $("#c4").css("background-color", "#2EFE2E");
      }
       if(checkIfExistsAWinner().match("c5") !== null){
	      $("#c5").css("background-color", "#2EFE2E");
      }
       if(checkIfExistsAWinner().match("c6") !== null){
	      $("#c6").css("background-color", "#2EFE2E");
      }
       if(checkIfExistsAWinner().match("c7") !== null){
	      $("#c7").css("background-color", "#2EFE2E");
      }
       if(checkIfExistsAWinner().match("c8") !== null){
	      $("#c8").css("background-color", "#2EFE2E");
      }
       if(checkIfExistsAWinner().match("c9") !== null){
	      $("#c9").css("background-color", "#2EFE2E");
      }
      if (checkIfExistsAWinner().match("Owin") != null){
	    alert("'O' is the winner");
	    window.location.reload();  
	  }
	  if (checkIfExistsAWinner().match("Xwin") != null){
	    alert("'X' is the winner");
	    window.location.reload();  
	  }
	  if (checkIfExistsAWinner().match("draw") != null){
	    alert("It was a draw.");
	    window.location.reload();  
	  }
	}
  }, 500);
  
});
