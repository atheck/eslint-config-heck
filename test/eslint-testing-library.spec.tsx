// ESLint Testing Library Plugin Rules Test File
// Each section contains code that triggers the corresponding rule

import React from "react";
import {
	cleanup,
	fireEvent,
	render,
	screen,
	waitFor,
} from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import userEvent from "@testing-library/user-event";

function TestComponent(): React.ReactElement {
	return <div data-testid={"test-id"}>{"Hello"}</div>;
}

// testing-library/await-async-events
describe("Await Async Events", () => {
	it("does not await user event", () => {
		render(<TestComponent />);

		const element = screen.getByText("Hello");

		userEvent.click(element);
		expect(element).toBeInTheDocument();
	});
});

// testing-library/await-async-queries
describe("Await Async Queries", () => {
	it("does not await findBy", () => {
		render(<TestComponent />);

		const element = screen.findByText("Hello");

		expect(element).toBeDefined();
	});
});

// testing-library/await-async-utils
describe("Await Async Utils", () => {
	it("does not await waitFor", () => {
		render(<TestComponent />);

		waitFor(() => {
			expect(screen.getByText("Hello")).toBeInTheDocument();
		});
	});
});

// testing-library/no-container
describe("No Container", () => {
	it("uses container", () => {
		const { container } = render(<TestComponent />);

		const element = container.querySelector("div");

		expect(element).toBeInTheDocument();
	});
});

// testing-library/no-debugging-utils
describe("No Debugging Utils", () => {
	it("uses debug", () => {
		render(<TestComponent />);
		screen.debug();
		expect(true).toBe(true);
	});
});

// testing-library/no-dom-import
import { waitFor as domWaitFor } from "@testing-library/dom";

// testing-library/no-global-regexp-flag-in-query
describe("No Global Regexp Flag", () => {
	it("uses global flag", () => {
		render(<TestComponent />);

		const element = screen.getByText(/hello/gi);

		expect(element).toBeInTheDocument();
	});
});

// testing-library/no-manual-cleanup
describe("No Manual Cleanup", () => {
	afterEach(() => {
		cleanup();
	});

	it("test", () => {
		render(<TestComponent />);
		expect(screen.getByText("Hello")).toBeInTheDocument();
	});
});

// testing-library/no-node-access
describe("No Node Access", () => {
	it("accesses node properties", () => {
		render(<TestComponent />);

		const element = screen.getByText("Hello");

		expect(element.firstChild).toBeDefined();
	});
});

// testing-library/no-render-in-lifecycle
describe("No Render In Lifecycle", () => {
	beforeEach(() => {
		render(<TestComponent />);
	});

	it("test", () => {
		expect(screen.getByText("Hello")).toBeInTheDocument();
	});
});

// testing-library/no-test-id-queries
describe("No Test Id Queries", () => {
	it("uses getByTestId", () => {
		render(<TestComponent />);

		const element = screen.getByTestId("test-id");

		expect(element).toBeInTheDocument();
	});
});

// testing-library/no-unnecessary-act
describe("No Unnecessary Act", () => {
	it("wraps render in act", async () => {
		const { act } = await import("react-dom/test-utils");

		await act(async () => {
			render(<TestComponent />);
		});
		expect(screen.getByText("Hello")).toBeInTheDocument();
	});
});

// testing-library/no-wait-for-multiple-assertions
describe("No Wait For Multiple Assertions", () => {
	it("has multiple assertions in waitFor", async () => {
		render(<TestComponent />);
		await waitFor(() => {
			expect(screen.getByText("Hello")).toBeInTheDocument();
			expect(screen.getByText("Hello")).toBeVisible();
		});
	});
});

// testing-library/no-wait-for-side-effects
describe("No Wait For Side Effects", () => {
	it("has side effects in waitFor", async () => {
		render(<TestComponent />);
		await waitFor(() => {
			fireEvent.click(screen.getByText("Hello"));
			expect(true).toBe(true);
		});
	});
});

// testing-library/no-wait-for-snapshot
describe("No Wait For Snapshot", () => {
	it("has snapshot in waitFor", async () => {
		render(<TestComponent />);
		await waitFor(() => {
			expect(screen.getByText("Hello")).toMatchSnapshot();
		});
	});
});

// testing-library/prefer-explicit-assert
describe("Prefer Explicit Assert", () => {
	it("uses getBy without assertion", () => {
		render(<TestComponent />);
		screen.getByText("Hello");
	});
});

// testing-library/prefer-find-by
describe("Prefer Find By", () => {
	it("uses waitFor with getBy", async () => {
		render(<TestComponent />);
		await waitFor(() => {
			screen.getByText("Hello");
		});
	});
});

// testing-library/prefer-presence-queries
describe("Prefer Presence Queries", () => {
	it("uses getBy with toBeInTheDocument false", () => {
		render(<TestComponent />);
		expect(screen.getByText("Missing")).not.toBeInTheDocument();
	});
});

// testing-library/prefer-query-by-disappearance
describe("Prefer Query By Disappearance", () => {
	it("waits for getBy to disappear", async () => {
		render(<TestComponent />);
		await waitFor(() => {
			expect(screen.getByText("Hello")).not.toBeInTheDocument();
		});
	});
});

// testing-library/prefer-screen-queries
describe("Prefer Screen Queries", () => {
	it("uses destructured queries", () => {
		const { getByText } = render(<TestComponent />);

		expect(getByText("Hello")).toBeInTheDocument();
	});
});

// testing-library/prefer-user-event
describe("Prefer User Event", () => {
	it("uses fireEvent instead of userEvent", () => {
		render(<TestComponent />);

		const element = screen.getByText("Hello");

		fireEvent.click(element);
		expect(element).toBeInTheDocument();
	});
});

export { domWaitFor, renderHook };
