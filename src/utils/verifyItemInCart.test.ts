import { CART_MOCK } from "@constants/mock";
import { verifyItemInCart } from "./verifyItemInCart";

describe("verifyItemInCart", () => {
	const mockedCartWithTotalPrice = { carts: CART_MOCK, totalPrice: 120 };

	it("should be able to return true with item in cart", () => {
		const cartItem = verifyItemInCart({
			data: mockedCartWithTotalPrice,
			cartId: 1,
		});

		expect(cartItem).toBeTruthy();
	});

	it("should be able to return false with item not in cart", () => {
		const cartItem = verifyItemInCart({
			data: mockedCartWithTotalPrice,
			cartId: 999,
		});

		expect(cartItem).toBeFalsy();
	});

	it("should be able to return false when not have data", () => {
		const cartItem = verifyItemInCart({
			data: undefined,
			cartId: 999,
		});

		expect(cartItem).toBeFalsy();
	});
});
