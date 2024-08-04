import { Game } from "@interfaces/games";

interface IsGameInCartProps {
	data?: {
		cart: Game[];
		totalPrice: number;
	};
	gameId: number;
}

export const isGameInCart = ({ data, gameId }: IsGameInCartProps) => {
	if (data?.cart && data.cart.length > 0) {
		const cart = data.cart.find((cart) => cart.id === gameId);

		return !!cart;
	}

	return false;
};
