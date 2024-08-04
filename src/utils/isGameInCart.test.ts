import { CART_MOCK } from "@constants/mock";
import { isGameInCart } from "./isGameInCart";

describe("isGameInCart", () => {
	const mockedCartWithTotalPrice = { cart: CART_MOCK, totalPrice: 120 };

	it("should be able to return true with item in cart", () => {
		const cartItem = isGameInCart({
			data: mockedCartWithTotalPrice,
			gameId: 1,
		});

		expect(cartItem).toBeTruthy();
	});

	it("should be able to return false with item not in cart", () => {
		const cartItem = isGameInCart({
			data: mockedCartWithTotalPrice,
			gameId: 999,
		});

		expect(cartItem).toBeFalsy();
	});

	it("should be able to return false when not have data", () => {
		const cartItem = isGameInCart({
			data: undefined,
			gameId: 999,
		});

		expect(cartItem).toBeFalsy();
	});
});
