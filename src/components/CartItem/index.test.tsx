import { fireEvent, render } from "@testing-library/react-native";
import { CartItem } from "./index";
import { GAME_MOCK } from "@constants/mock";
import { handleNavigateToGame } from "@utils/handleNavigateToGame";
import { useCart } from "@hooks/useCart";

jest.mock("@hooks/useCart", () => ({
	useCart: jest.fn().mockReturnValue({
		deleteFromCart: jest.fn(),
	}),
}));

jest.mock("@utils/handleNavigateToGame", () => ({
	handleNavigateToGame: jest.fn(),
}));

jest.mock("expo-router", () => ({
	useRouter: jest.fn().mockReturnValue({
		push: jest.fn(),
		setParams: jest.fn(),
	}),
}));

jest.mock("@expo/vector-icons/Feather", () => "Feather");

describe("CartItem", () => {
	it("should be able to match the snapshot", () => {
		const { toJSON } = render(<CartItem data={GAME_MOCK} />);

		expect(toJSON()).toMatchSnapshot();
	});

	it("should be able to call handleNavigateToGame with correct parameters when pressed", () => {
		const { getByTestId } = render(<CartItem data={GAME_MOCK} />);
		const touchableNavigate = getByTestId("cart-item-touchable");

		fireEvent.press(touchableNavigate);

		expect(handleNavigateToGame).toHaveBeenCalledWith({
			id: GAME_MOCK.id,
			router: expect.any(Object),
		});
	});

	it("should be able to call deleteFromCart with correct id when trash icon is pressed", () => {
		const { getByTestId } = render(<CartItem data={GAME_MOCK} />);
		const deleteFromCartButton = getByTestId("cart-item-delete-icon");

		fireEvent.press(deleteFromCartButton);

		const { deleteFromCart } = useCart();

		expect(deleteFromCart).toHaveBeenCalledWith(GAME_MOCK.id);
	});
});
