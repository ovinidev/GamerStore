import { Game } from "@interfaces/games";

interface VerifyItemInCartProps {
	data?: {
		carts: Game[];
		totalPrice: number;
	};
	cartId: number;
}

export const verifyItemInCart = ({ data, cartId }: VerifyItemInCartProps) => {
	if (data?.carts && data.carts.length > 0) {
		const cart = data.carts.find((cart) => cart.id === cartId);

		return !!cart;
	}

	return false;
};
