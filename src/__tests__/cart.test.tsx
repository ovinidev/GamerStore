import { CART_MOCK } from "@constants/mock";
import { useCart } from "@hooks/useCart";
import { render } from "@testing-library/react-native";
import Cart from "../app/cart";

jest.mock("expo-router", () => ({
	Stack: {
		Screen: "Screen",
		Navigator: "Navigator",
	},
	useRouter: jest.fn().mockReturnValue({
		push: jest.fn(),
		setParams: jest.fn(),
	}),
}));

jest.mock("@hooks/useCart", () => ({
	useCart: jest.fn().mockReturnValue({
		data: jest.fn(),
	}),
}));

describe("Cart page", () => {
	it("should be able to match the snapshot when cart is not empty", async () => {
		(useCart as jest.Mock).mockReturnValue(CART_MOCK);

		const { toJSON } = render(<Cart />);

		expect(toJSON()).toMatchSnapshot();
	});

	it("should be able to match the snapshot when cart is empty", () => {
		(useCart as jest.Mock).mockReturnValue({
			data: {
				cart: [],
				totalPrice: 0,
			},
		});

		const { toJSON } = render(<Cart />);

		expect(toJSON()).toMatchSnapshot();
	});
});
