import React from "react";
import { render } from "@testing-library/react-native";
import Cart from "../app";
import { useCart } from "@hooks/useCart";
import { CART_MOCK } from "@constants/mock";

jest.mock("@hooks/useCart", () => ({
	useCart: jest.fn(),
}));

describe("Cart Component", () => {
	it("should match the snapshot when cart is not empty", () => {
		(useCart as jest.Mock).mockReturnValue(CART_MOCK);

		const { toJSON } = render(<Cart />);
		expect(toJSON()).toMatchSnapshot();
	});

	it("should match the snapshot when cart is empty", () => {
		(useCart as jest.Mock).mockReturnValue({
			data: {
				carts: [],
				totalPrice: 0,
			},
		});

		const { toJSON } = render(<Cart />);
		expect(toJSON()).toMatchSnapshot();
	});
});
