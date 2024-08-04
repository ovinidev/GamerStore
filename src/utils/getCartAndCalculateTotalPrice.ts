import { getCartFromStorage } from "@api/cart";

export const getCartAndCalculateTotalPrice = () => {
	const cart = getCartFromStorage();

	if (!Array.isArray(cart)) {
		throw new Error("Expected carts to be an array");
	}

	const total = cart.reduce((acc, item) => acc + item.price, 0);

	return { cart, totalPrice: total };
};
