import { CART_STORAGE_KEY } from "@constants/storageKey";
import { Game } from "@interfaces/games";
import { clientStorage } from "@services/mmkv";

// TODO: Tratamento de erros
export const getCartFromStorage = (): Game[] => {
	const cart = clientStorage.getItem(CART_STORAGE_KEY);

	return cart ? (JSON.parse(cart) as unknown as Game[]) : [];
};

export const addToCartFromStorage = async (game: Game) => {
	const cart = getCartFromStorage();

	const gameAlreadyInCart = cart.find((cart) => cart.id === game.id);

	if (gameAlreadyInCart) throw new Error("The game already exist");

	const cartParsed = cart ? cart : [];

	const newCart = [...cartParsed, game];

	clientStorage.setItem(CART_STORAGE_KEY, newCart);
};

export const deleteCartFromStorage = async (id: number) => {
	const cart = getCartFromStorage();

	const newCarts = cart.filter((cart) => cart.id !== id);

	clientStorage.setItem(CART_STORAGE_KEY, newCarts);
};
