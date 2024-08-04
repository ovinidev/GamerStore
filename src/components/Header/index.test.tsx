import { fireEvent, render } from "@testing-library/react-native";
import { useRouter } from "expo-router";
import { Header } from "./index";

jest.mock("@hooks/useCart", () => ({
	useCart: jest.fn().mockReturnValue({
		data: {
			cart: [],
		},
	}),
}));

jest.mock("expo-router", () => ({
	useRouter: jest.fn().mockReturnValue({
		push: jest.fn(),
	}),
	Stack: {
		Screen: jest.fn().mockImplementation(({ options }) => (
			<>
				{options.headerTitle?.()}
				{options.headerRight?.()}
			</>
		)),
	},
}));
const useRouteMocked = useRouter as jest.Mock;

describe("Header", () => {
	it("should be able to match the snapshot", () => {
		const { toJSON } = render(<Header />);

		expect(toJSON()).toMatchSnapshot();
	});

	it("should be able to call router.push when the shopping cart icon is pressed", () => {
		const { getByTestId } = render(<Header />);
		const router = useRouteMocked();
		const cartIcon = getByTestId("cart-button");

		fireEvent.press(cartIcon);
		expect(router.push).toHaveBeenCalledWith("/cart");
	});
});
