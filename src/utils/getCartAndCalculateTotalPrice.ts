import { getCartFromStorage } from "@api/cart";

export const getCartAndCalculateTotalPrice = () => {
	const carts = getCartFromStorage();

	if (!Array.isArray(carts)) {
		throw new Error("Expected carts to be an array");
	}

	const total = carts.reduce((acc, item) => acc + item.price, 0);

	return { carts, totalPrice: total };
};
