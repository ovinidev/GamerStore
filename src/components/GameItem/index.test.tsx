import { GAME_MOCK } from "@constants/mock";
import { useCart } from "@hooks/useCart";
import { fireEvent, render } from "@testing-library/react-native";
import { handleNavigateToGame } from "@utils/handleNavigateToGame";
import { GameItem } from "./index";

jest.mock("@hooks/useCart", () => ({
	useCart: jest.fn().mockReturnValue({
		addToCart: jest.fn(),
		deleteFromCart: jest.fn(),
	}),
}));

jest.mock("expo-router", () => ({
	useRouter: jest.fn().mockReturnValue({
		push: jest.fn(),
		setParams: jest.fn(),
	}),
}));

jest.mock("@utils/handleNavigateToGame", () => ({
	handleNavigateToGame: jest.fn(),
}));

const useCartMocked = useCart as jest.Mock;

describe("GameItem", () => {
	it("should be able to match the snapshot", () => {
		const { toJSON } = render(
			<GameItem data={GAME_MOCK} isInTheCart={false} />,
		);

		expect(toJSON()).toMatchSnapshot();
	});

	it("should be able to call handleUpdateCart when cart empty and the button is pressed", () => {
		const { getByTestId } = render(
			<GameItem data={GAME_MOCK} isInTheCart={false} />,
		);
		const { addToCart } = useCartMocked();

		const updateCartButton = getByTestId("update-cart-button");
		fireEvent.press(updateCartButton);

		expect(addToCart).toHaveBeenCalledWith(GAME_MOCK);
	});

	it("should be able to call handleUpdateCart when the item has in cart and the button is pressed", () => {
		const { getByTestId } = render(<GameItem data={GAME_MOCK} isInTheCart />);
		const { deleteFromCart } = useCartMocked();

		const updateCartButton = getByTestId("update-cart-button");
		fireEvent.press(updateCartButton);

		expect(deleteFromCart).toHaveBeenCalledWith(GAME_MOCK.id);
	});

	it("should be able to call handleNavigateToGame with correct parameters when pressed", () => {
		const { getByTestId } = render(<GameItem data={GAME_MOCK} isInTheCart />);
		const touchableNavigate = getByTestId("game-item-touchable");

		fireEvent.press(touchableNavigate);

		expect(handleNavigateToGame).toHaveBeenCalledWith({
			id: GAME_MOCK.id,
			router: expect.any(Object),
		});
	});
});
