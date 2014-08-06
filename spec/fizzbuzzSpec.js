describe("Disemvowler", function() {

	it("removes all lowercase vowels", function() {
		expect(disemvowel("Hello world")).toEqual("Hll wrld");
	});

	it("removes all uppercase vowels", function() {
		expect(disemvowel("Artistic Eagle")).toEqual("rtstc gl");
	});

	it("shouldn't change empty strings", function() {
		expect(disemvowel("")).toEqual("");
	});

	it("shouldn't change strings with no vowels", function() {
		expect(disemvowel("Mhmm")).toEqual("Mhmm");
	});
});