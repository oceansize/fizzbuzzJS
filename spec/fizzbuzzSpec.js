// describe the thing I'm creating
describe("Fizzbuzz", function() {

	//create tentacle for the instance 'fizzBuzz'
	var fizzBuzz;

	beforeEach(function() {
		//declare fizzBuzz as a new instance of FizzBuzz
		fizzBuzz = new FizzBuzz();
	});
	//describe my new method
	describe('divisibleByThree', function() {

		//set my it block/expection
		it('knows if a number is divisible by three', function() {
			expect(fizzBuzz.divisibleByThree(3)).toBe(true);
		});

		it('knows if a number is not divisible by three', function() {
			expect(fizzBuzz.divisibleByThree(4)).toBe(false);
		});
	});

	describe('divisibleByFive', function() {

		it('knows if a number is divisible by five', function() {
			expect(fizzBuzz.divisibleByFive(5)).toBe(true);
		});

		it('knows if a number is not divisible by five', function() {
			expect(fizzBuzz.divisibleByFive(6)).toBe(false);
		});
	});

	describe('divisibleByFifteen', function() {

		it('knows if a number is divisible by fifteen', function() {
			expect(fizzBuzz.divisibleByFifteen(15)).toBe(true);
		});

		it('knows if a number is not divisible by fifteen', function() {
			expect(fizzBuzz.divisibleByFifteen(16)).toBe(false);
		});
	})

	describe('saysFizz', function() {
		it('says "fizz" if the number is divisible by three', function() {
			expect(fizzBuzz.saysFizz(3)).toEqual("fizz");
		});
	});

	describe('saysBuzz', function() {
		it('says "buzz" if the number is divisible by five', function() {
			expect(fizzBuzz.saysBuzz(5)).toEqual("buzz");
		});
	});

	describe('saysFizzbuzz', function() {
		it('says "fizzbuzz" if the number is divisible by fifteen', function() {
			expect(fizzBuzz.saysFizzbuzz(15)).toEqual("fizzbuzz");
		});
	})
});