// ESLint Jest Plugin Rules Test File
// Each section contains code that triggers the corresponding rule

// jest/no-untyped-mock-factory
jest.mock("./eslint-core", () => ({}));

// jest/consistent-test-it
describe("Consistent Test It", () => {
	test("should use it instead of test", () => {
		expect(true).toBe(true);
	});
});

// jest/expect-expect
describe("Expect Expect", () => {
	it("has no assertions", () => {
		const value = 1 + 1;
	});
});

// jest/no-alias-methods
describe("No Alias Methods", () => {
	it("uses alias methods", () => {
		expect(1).toBeCalled();
		expect([]).toBeEmpty();
	});
});

// jest/no-commented-out-tests
describe("Commented Out Tests", () => {
	// it('commented out test', () => {
	//   expect(true).toBe(true);
	// });

	it("actual test", () => {
		expect(true).toBe(true);
	});
});

// jest/no-conditional-expect
describe("Conditional Expect", () => {
	it("has conditional expect", () => {
		if (true) {
			expect(1).toBe(1);
		}
	});
});

// jest/no-conditional-in-test
describe("Conditional In Test", () => {
	it("has conditional logic", () => {
		const value = true ? 1 : 2;

		if (value === 1) {
			console.log("one");
		}
		expect(value).toBe(1);
	});
});

// jest/no-confusing-set-timeout
describe("Confusing Set Timeout", () => {
	it("sets timeout in test", () => {
		jest.setTimeout(10000);
		expect(true).toBe(true);
	});
});

// jest/no-deprecated-functions
describe("Deprecated Functions", () => {
	it("uses deprecated function", () => {
		jest.resetModuleRegistry();
		expect(true).toBe(true);
	});
});

// jest/no-identical-title
describe("Identical Title", () => {
	it("same title", () => {
		expect(1).toBe(1);
	});

	it("same title", () => {
		expect(2).toBe(2);
	});
});

// jest/no-interpolation-in-snapshots
describe("Interpolation In Snapshots", () => {
	it("has interpolation", () => {
		const value = "test";

		expect(value).toMatchSnapshot(`snapshot ${value}`);
	});
});

// jest/no-jasmine-globals
describe("Jasmine Globals", () => {
	it("uses jasmine globals", () => {
		jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
		expect(true).toBe(true);
	});
});

// jest/no-mocks-import
import mockData from "./__mocks__/data";

// jest/no-test-prefixes
describe("Test Prefixes", () => {
	xdescribe("skipped describe", () => {
		it("test", () => {
			expect(true).toBe(true);
		});
	});

	xit("skipped test", () => {
		expect(true).toBe(true);
	});
});

// jest/no-test-return-statement
describe("Test Return Statement", () => {
	it("returns a value", () => {
		expect(true).toBe(true);

		return true;
	});
});
describe("Padding Around Describe", () => {
	it("no padding before describe", () => {
		expect(true).toBe(true);
	});
});
describe("Another Describe Without Padding", () => {
	it("test", () => {
		expect(true).toBe(true);
	});
});

// jest/padding-around-test-blocks
describe("Padding Around Test", () => {
	it("first test", () => {
		expect(1).toBe(1);
	});
	it("second test without padding", () => {
		expect(2).toBe(2);
	});
});

// jest/prefer-called-with
describe("Prefer Called With", () => {
	it("checks if called", () => {
		const mockFn = jest.fn();

		mockFn("arg");
		expect(mockFn).toHaveBeenCalled();
	});
});

// jest/prefer-comparison-matcher
describe("Prefer Comparison Matcher", () => {
	it("uses comparison in toBe", () => {
		expect(5 > 3).toBe(true);
	});
});

// jest/prefer-each
describe("Prefer Each", () => {
	it("test case 1", () => {
		expect(1 * 2).toBe(2);
	});

	it("test case 2", () => {
		expect(2 * 2).toBe(4);
	});

	it("test case 3", () => {
		expect(3 * 2).toBe(6);
	});
});

// jest/prefer-ending-with-an-expect
describe("Prefer Ending With Expect", () => {
	it("does not end with expect", () => {
		const value = 1;

		expect(value).toBe(1);
		console.log("after expect");
	});
});

// jest/prefer-equality-matcher
describe("Prefer Equality Matcher", () => {
	it("uses equality check in toBe", () => {
		expect(1 === 1).toBe(true);
	});
});

// jest/prefer-expect-resolves
describe("Prefer Expect Resolves", () => {
	it("uses then instead of resolves", async () => {
		await expect(Promise.resolve(1)).resolves.toBe(1);
		await Promise.resolve(1).then((value) => {
			expect(value).toBe(1);
		});
	});
});

// jest/prefer-hooks-in-order
describe("Prefer Hooks In Order", () => {
	afterEach(() => {});
	beforeEach(() => {});

	it("test", () => {
		expect(true).toBe(true);
	});
});

// jest/prefer-hooks-on-top
describe("Prefer Hooks On Top", () => {
	it("test before hook", () => {
		expect(true).toBe(true);
	});

	beforeEach(() => {});
});

// jest/prefer-jest-mocked
describe("Prefer Jest Mocked", () => {
	it("uses type assertion instead of jest.mocked", () => {
		const mockFn = jest.fn() as jest.Mock;

		expect(mockFn).toBeDefined();
	});
});

// jest/prefer-lowercase-title
describe("Prefer Lowercase Title", () => {
	it("Uppercase Title", () => {
		expect(true).toBe(true);
	});
});

// jest/prefer-mock-promise-shorthand
describe("Prefer Mock Promise Shorthand", () => {
	it("uses long form", () => {
		const mockFn = jest.fn().mockImplementation(() => Promise.resolve(1));

		expect(mockFn).toBeDefined();
	});
});

// jest/prefer-snapshot-hint
describe("Prefer Snapshot Hint", () => {
	it("has multiple snapshots without hints", () => {
		expect("value1").toMatchSnapshot();
		expect("value2").toMatchSnapshot();
	});
});

// jest/prefer-spy-on
describe("Prefer Spy On", () => {
	it("assigns mock to property", () => {
		const obj = { method: (): number => 1 };

		obj.method = jest.fn();
		expect(obj.method).toBeDefined();
	});
});

// jest/prefer-strict-equal
describe("Prefer Strict Equal", () => {
	it("uses toEqual instead of toStrictEqual", () => {
		expect({ a: 1 }).toEqual({ a: 1 });
	});
});

// jest/prefer-to-be
describe("Prefer To Be", () => {
	it("uses toEqual for primitives", () => {
		expect(1).toEqual(1);
		expect(null).toEqual(null);
		expect(undefined).toEqual(undefined);
	});
});

// jest/prefer-to-contain
describe("Prefer To Contain", () => {
	it("uses toEqual with includes", () => {
		expect([1, 2, 3].includes(2)).toEqual(true);
	});
});

// jest/prefer-to-have-been-called-times
describe("Prefer To Have Been Called Times", () => {
	it("uses manual length check", () => {
		const mockFn = jest.fn();

		mockFn();
		mockFn();
		expect(mockFn.mock.calls.length).toBe(2);
	});
});

// jest/prefer-to-have-length
describe("Prefer To Have Length", () => {
	it("uses toBe with length", () => {
		expect([1, 2, 3].length).toBe(3);
	});
});

// jest/prefer-todo
describe("Prefer Todo", () => {
	it.skip("unimplemented test", () => {});
});

// jest/require-hook
describe("Require Hook", () => {
	const setup = (): void => {};

	setup();

	it("test", () => {
		expect(true).toBe(true);
	});
});

// jest/require-to-throw-message
describe("Require To Throw Message", () => {
	it("expects throw without message", () => {
		expect(() => {
			throw new Error("error");
		}).toThrow();
	});
});

// jest/require-top-level-describe
it("test outside describe", () => {
	expect(true).toBe(true);
});

// jest/valid-describe-callback
describe("Valid Describe Callback", async () => {
	it("test", () => {
		expect(true).toBe(true);
	});
});

// jest/valid-expect
describe("Valid Expect", () => {
	it("has no matcher", () => {
		expect(true);
	});
});

// jest/valid-expect-in-promise
describe("Valid Expect In Promise", () => {
	it("does not return promise", () => {
		Promise.resolve().then(() => {
			expect(true).toBe(true);
		});
	});
});

// jest/valid-title
describe("", () => {
	it("test", () => {
		expect(true).toBe(true);
	});
});

export { mockData };
