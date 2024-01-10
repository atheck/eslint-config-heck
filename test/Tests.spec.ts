// jest/no-untyped-mock-factory
jest.mock("./React", () => ({}));

describe("Test", () => {
	// jest/expect-expect
	it("works", () => {});

	// jest/consistent-test-it
	test("instead of it", () => {
		expect(false).toBeFalsy();
	});

	// jest/lowercase-name
	it("Uppercase", () => {});

	// jest/no-commented-out-tests
	// it("commented out", () => {
	//     // arrange

	//     // act

	//     // assert

	// });

	// jest/no-conditional-expect
	it("conditional expect", () => {
		// arrange

		// act

		// assert
		if (true) {
			expect(true).toBeTruthy();
		}
	});

	it("snapshot", () => {
		expect("value").toMatchSnapshot();
		expect("value").toMatchSnapshot();
	});
});
