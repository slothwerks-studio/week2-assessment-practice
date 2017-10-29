(function() {

	var flipButton = document.getElementById("flip-button");
	flipButton.onclick = flipIt;

	function flipIt() {
	  
		var flipResult = getFlip(0,1); 
		var userInput = document.getElementById("input-box");
		var console = document.getElementById("console-box");
		var userGuess = userInput.value;
		var resultText = getResultText(userGuess, flipResult);
		console.innerHTML = "The result was " + flipResult + ".  " + resultText;
	  
	    function getResultText(guess, result) {
			var text;
			if (result == guess) {
				text = "Good guess!";
				return text;
			} else if (result !== guess) {
				text = "Too bad; try again!";
				return text;
			} else {
				text = "The coin fell down and we totally didn't see the result.";
				return text;
			}
	    }

		function getFlip(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			var result = Math.floor(Math.random() * (max - min + 1)) + min;
			if (result === 1) {
				return "heads";
			} else if (result === 0) {
				return "tails";
			} else {
				return "unknown";
			}
		}     
	  
	}

})();