import { handleNavigate } from "./handleNavigate";
import { Router } from "expo-router";

describe("handleNavigate", () => {
	let mockRouter: Router;

	beforeEach(() => {
		mockRouter = {
			push: jest.fn(),
			setParams: jest.fn(),
		} as unknown as Router;
	});

	it("should be able navigate to the correct route and set params", () => {
		const id = 123;
		handleNavigate({ router: mockRouter, id });

		expect(mockRouter.push).toHaveBeenCalledWith(`/${id}`);
		expect(mockRouter.setParams).toHaveBeenCalledWith({ id });
	});
});
