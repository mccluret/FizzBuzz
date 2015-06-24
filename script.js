
function givemecolor(thecolor,thetext)
    {
    return '<span style="color:'+thecolor+'>'+thetext+'</span>';
    }
		for (var x = 1; x < 101; x++){
			
			if (x % 15 === 0){
				document.write(givemecolor('green',"FizzBuzz, "));
			}
			else if (x % 5 === 0){
				document.write("Buzz, ");
			}
		    else if (x % 3 === 0){
		    	document.write("Fizz, ");
		    }
		    else {
		    	document.write(x + ", ");
		    }
		}

