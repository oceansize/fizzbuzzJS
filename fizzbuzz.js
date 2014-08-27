function FizzBuzz(){}

FizzBuzz.prototype.divisibleByThree = function(num) {
	return num % 3 == 0;
};

FizzBuzz.prototype.divisibleByFive = function(num) {
	return num  % 5 == 0;
};

FizzBuzz.prototype.divisibleByFifteen = function(num) {
	return num % 15 == 0;
};

FizzBuzz.prototype.saysFizz = function(num) {
	if (this.divisibleByThree(num)) {return "fizz"};
};

FizzBuzz.prototype.saysBuzz = function(num) {
	if (this.divisibleByFive(num)) {return "buzz"};
};

FizzBuzz.prototype.saysFizzbuzz = function(num) {
	if (this.divisibleByFifteen(num)) {return "fizzbuzz"};
};

// This approach to Fizzbuzz is also similar to how I learned to do it in Ruby.
// However, unlike the previous approach the methods are added to the prototype
// and therefore aren't recreated every time I create a new FizzBuzz object.
// Again, getting my head wrapped wround the conceptuals means anything I write
// should be taken with a grain of salt.
// I'd be curious to know if it's possible to refactor the if statements. 