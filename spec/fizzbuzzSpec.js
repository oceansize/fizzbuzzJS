// describe 'class' or the thing I'm creating
describe("Fizzbuzz", function() {

	//describe the method I want to test...
	describe('divisibleByThree', function() {

		//set it blocks/expectations
		it('knows if a number is divisible by three', function() {
			//set 'output' tentacle to hold the method (see Eloquent JS for explanation)
			var output = fizzBuzz.divisibleByThree(3);
			expect(output).toBe(true);
		});

		it('knows if a number is not divisible by three', function() {
			//add new logic to the 'output' tentacle
			var output = fizzBuzz.divisibleByThree(4)
			expect(output).toBe(false);
		});
	});

	//describe a new method I want to use on Fizzbuzz
	describe('divisibleByFive', function() {

		//set it blocks/expectations
		it('knows if a number is divisible by five', function() {
			//just to prove a point, the name of the tentacle can be anything
			var pants = fizzBuzz.divisibleByFive(5);
			expect(pants).toBe(true);
		});

		it('knows if a number is not divisible by five', function() {
			var output = fizzBuzz.divisibleByFive(6);
			expect(output).toBe(false);
		});
	});

	//describe my new method
	describe('divisibleByFifteen', function() {

		//set my it block/expectations
		it('knows if a number is divisible by fifteen', function() {
			//declare new tentacle
			var output = fizzBuzz.divisibleByFifteen(15);
			expect(output).toBe(true);
		});

		it('knows if a number is not divisible by fifteen', function() {
			var output = fizzBuzz.divisibleByFifteen(16);
			expect(output).toBe(false);
		});
	});

	describe('saysFizz', function() {

		//set my it block/expectations for my new method
		it('returns "fizz" if the number is divisible by three', function() {
			//declare new tentacle
			var output = fizzBuzz.saysFizz(3);
			expect(output).toEqual("fizz");
		});
	});

	describe('saysBuzz', function() {

		//set my it block/expectation for my new method
		it('returns "buzz" if the number is divisible by five', function() {
			//make my new tentacle with my new method
			var output = fizzBuzz.saysBuzz(5);
			expect(output).toEqual("buzz");
		});
	});

	describe('saysFizzBuzz', function() {
		
		//set my it block/expectation etc
		it('returns "fizzbuzz" if the number is divisible by fifteen', function() {
			//new tentacle etc
			var output = fizzBuzz.saysFizzBuzz(15);
			expect(output).toEqual("fizzbuzz");
		});
	});
});