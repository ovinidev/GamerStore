import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Button } from ".";

describe("Button", () => {
	describe("Render button tests", () => {
		it("should bea ble to render correctly with children", () => {
			const { getByText } = render(<Button>Button</Button>);

			expect(getByText("Button")).toBeTruthy();
		});

		it("should be able to handle onPress event", () => {
			const mockPressHandler = jest.fn();
			const { getByText } = render(
				<Button onPress={mockPressHandler}>Test</Button>,
			);

			fireEvent.press(getByText("Test"));

			expect(mockPressHandler).toHaveBeenCalled();
		});

		it("should forward props to TouchableOpacity", () => {
			const { getByLabelText } = render(
				<Button accessibilityLabel="button test">Test</Button>,
			);
			const buttonElement = getByLabelText("button test");

			expect(buttonElement).toBeTruthy();
		});
	});

	describe("Button Snapshots", () => {
		it("should be able to match the snapshot with default props", () => {
			const { toJSON } = render(<Button>Test</Button>);

			expect(toJSON()).toMatchSnapshot();
		});
	});
});
