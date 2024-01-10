/* eslint-disable jest/expect-expect */
import {
	act,
	cleanup,
	fireEvent,
	render,
	screen,
	waitFor,
	waitForElementToBeRemoved,
} from "@testing-library/react";
import React from "react";

describe("TestingLibrary", () => {
	beforeEach(() => {
		render(<div />);
	});

	it("await-async-query", () => {
		const result = screen.findAllByPlaceholderText("name");

		expect(result).not.toBeNull();
	});

	it("await-async-utils", () => {
		const result = waitFor(() => {}, { timeout: 100 });
	});

	it("no-await-sync-events", async () => {
		// off: handled by typescript-eslint
		const button = screen.queryAllByLabelText("some-button");

		await fireEvent.click(button);
	});

	it("no-await-sync-query", async () => {
		// off: handled by typescript-eslint
		await screen.queryAllByRole("alert");
	});

	it("no-container", () => {
		const { container } = render(<div />);

		container.getElementsByClassName("test");
	});

	it("no-debugging-utils", () => {
		const utils = render(<div />);

		utils.debug();
	});

	it("no-global-regexp-flag-in-query", () => {
		screen.getByText(/hello/giu);
	});

	it("no-manual-cleanup", () => {
		cleanup();
	});

	it("no-node-access", () => {
		screen.getByText("Submit").closest("button");
	});

	it("no-promise-in-fire-event", () => {
		// off: handled by typescript
		fireEvent.click(screen.findByRole("button"));
	});

	it("no-unnecessary-act", async () => {
		await act(() => screen.getByRole("button"));
	});

	it("no-wait-for-empty-callback", async () => {
		await waitForElementToBeRemoved(() => {});
	});

	it("no-wait-for-multiple-assertions", async () => {
		await waitFor(() => {
			expect(a).toBe("a");
			expect(b).toBe("b");
		});
	});

	it("no-wait-for-side-effects", async () => {
		await waitFor(() => {
			fireEvent.keyDown(input, { key: "ArrowDown" });
			expect(b).toBe("b");
		});
	});

	it("no-wait-for-snapshot", async () => {
		await waitFor(() => expect(<div />).toMatchSnapshot());
	});

	it("prefer-explicit-assert", () => {
		screen.getByText("foo");
	});

	it("prefer-find-by", async () => {
		const submitButton = await waitFor(() =>
			screen.getByRole("button", { name: /submit/iu }),
		);
	});

	it("prefer-presence-queries", () => {
		expect(screen.queryByText("button")).not.toBeNull();
		expect(screen.getByText("loading")).toBeNull();
	});

	it("prefer-query-by-disappearance", async () => {
		await waitForElementToBeRemoved(() => screen.getByText("hello"));
		await waitForElementToBeRemoved(() => screen.findByText("hello"));
		await waitForElementToBeRemoved(screen.getByText("hello"));
	});

	it("prefer-screen-queries", () => {
		const utils = render(<div />);

		expect(utils.getByText("foo")).not.toBeNull();
	});

	it("prefer-user-event", () => {
		fireEvent.click(screen.getByText("foo"));
	});
});
