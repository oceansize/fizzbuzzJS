// describe 'class' or the thing I'm creating
describe("Fizzbuzz", function() {

	//describe the method I want to test...
	describe('says', function() {

		//set expectations...
		it('declares input number', function() {
			//set 'actual' tentacle to hold the method (see Eloquent JS for explanation)
			var actual = fizzBuzz.says(1);
			expect(actual).toEqual(1);
		});

		it('declares "fizz" if the number is divisible by 3', function() {
			//set 'actual' tentacle to hold method with new functionality/logic
			//the logic is contained within the entire 'says' method
			//as opposed to separating the logic into different methods
			var actual = fizzBuzz.says(3);
			expect(actual).toEqual("fizz");
		});

		it('declares "buzz" if the number is divisible by 5', function() {
			//similar to above, set 'actual' to hold new functionality/logic
			var actual = fizzBuzz.says(5);
			expect(actual).toEqual("buzz");
		})

		it('declares "fizzbuzz" if the number is divisible by 15', function() {
			var actual = fizzBuzz.says(15);
			expect(actual).toEqual("fizzbuzz");
		})
	});

});