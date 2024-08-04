import { CART_STORAGE_KEY } from "@constants/storageKey";
import { Game } from "@interfaces/games";
import { clientStorage } from "@services/mmkv";

export const getCartFromStorage = (): Game[] => {
	const cart = clientStorage.getItem(CART_STORAGE_KEY);

	return cart ? (JSON.parse(cart) as unknown as Game[]) : [];
};

const updateCart = (cart: Game[]) => {
	clientStorage.setItem(CART_STORAGE_KEY, cart);
};

export const addToCartFromStorage = async (game: Game) => {
	const cart = getCartFromStorage();

	const gameAlreadyInCart = cart.find((cart) => cart.id === game.id);

	if (gameAlreadyInCart) throw new Error("The game already exist");

	const newCart = [...cart, game];

	updateCart(newCart);
};

export const deleteCartFromStorage = async (id: number) => {
	const cart = getCartFromStorage();

	const isCartItemExists = cart.find((cart) => cart.id === id);

	if (!isCartItemExists) throw new Error("Cart item not exists");

	const newCarts = cart.filter((cart) => cart.id !== id);

	updateCart(newCarts);
};
