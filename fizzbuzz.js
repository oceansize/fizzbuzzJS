var fizzBuzz = {
	says : function(num) {

		if (num % 15 == 0) {
			return "fizzbuzz";
		}

		if (num % 3 == 0) {
			return "fizz";
		}

		if (num % 5 == 0) {
			return "buzz";
		}

		return num;
	}
}

//The order in which I put the if statements matters because 15 is divisible by 3 & 5
//and therefore I need to check for divisible 15 first before going through the other numbers.
//Although a worthwhile excercise in practicng JS/Jasmine I think I'd like to try this kata a different way. 