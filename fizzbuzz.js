var fizzBuzz = {

	divisibleByThree : function(num) {
		return num % 3 == 0;
	},

	divisibleByFive : function(num) {
		return num % 5 == 0;
	},

	divisibleByFifteen : function(num) {
		return num % 15 == 0;
	},

	saysFizz : function(num) {
		if (this.divisibleByThree(num)) {
			return "fizz";
		}
	},

	saysBuzz : function(num) {
		if (this.divisibleByFive(num)) {
			return "buzz";
		}
	},

	saysFizzBuzz: function(num) {
		if (this.divisibleByFifteen(num)) {
			return "fizzbuzz";
		}
	}

}

// This approach to Fizzbuzz most resembles the way I know how to do it in Ruby.
// The logic is separated in separate methods that are then called on the 'Class'.
// I'm still struggling a bit with concepts in JS so I'm not sure if that last sentence is correct. 