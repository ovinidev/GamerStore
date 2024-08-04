import { getCartFromStorage } from "@api/cart";
import { CART_MOCK } from "@constants/mock";
import { clientStorage } from "@services/mmkv";
import { getCartAndCalculateTotalPrice } from "./getCartAndCalculateTotalPrice";

jest.mock("@api/cart");
jest.mock("@services/mmkv");

const mockGetCartFromStorage = getCartFromStorage as jest.Mock;
const mockClientStorage = clientStorage as jest.Mocked<typeof clientStorage>;

describe("getCartAndCalculateTotalPrice", () => {
	beforeEach(() => {
		mockClientStorage.getItem.mockReset();
	});

	it("should be able to return a correctly data and total price", () => {
		mockGetCartFromStorage.mockReturnValue(CART_MOCK);

		const cart = getCartAndCalculateTotalPrice();

		expect(cart).toEqual({
			cart: CART_MOCK,
			totalPrice: 120,
		});
	});

	it("should be able to return empty when is a empty cart", () => {
		mockGetCartFromStorage.mockReturnValue([]);

		const result = getCartAndCalculateTotalPrice();

		expect(result).toEqual({
			cart: [],
			totalPrice: 0,
		});
	});

	it("should be able to return error with carts not is array", () => {
		mockGetCartFromStorage.mockReturnValue(undefined);

		expect(() => getCartAndCalculateTotalPrice()).toThrow(
			"Expected carts to be an array",
		);
	});
});
