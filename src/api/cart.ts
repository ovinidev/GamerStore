import { CART_STORAGE_KEY } from "@constants/storageKey";
import { Game } from "@interfaces/games";
import { clientStorage } from "@services/mmkv";

export const getCartFromApi = (): Game[] => {
	const cart = clientStorage.getItem(CART_STORAGE_KEY);

	return cart ? (JSON.parse(cart) as unknown as Game[]) : [];
};

export const addToCartFromApi = async (game: Game) => {
	const cart = getCartFromApi();

	const gameAlreadyInCart = cart.find((cart) => cart.id === game.id);

	if (gameAlreadyInCart) throw new Error("The game already exist");

	const cartParsed = cart ? cart : [];

	const newCart = [...cartParsed, game];

	clientStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));
};

export const deleteCartFromApi = async (id: number) => {
	const cart = getCartFromApi();

	const newCarts = cart.filter((cart) => cart.id !== id);

	clientStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCarts));
};
