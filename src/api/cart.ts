import { CART_STORAGE_KEY } from "@constants/storageKey";
import { Game } from "@interfaces/games";
import { storage } from "@services/mmkv";

export const getCarts = () => {
	const carts = storage.getString(CART_STORAGE_KEY);

	return carts ? carts : [];
};

export const addCarts = async (game: Game) => {
	const carts = storage.getString(CART_STORAGE_KEY);

	const newCarts = carts && [...carts, game];

	storage.set(CART_STORAGE_KEY, JSON.stringify(newCarts));
};

export const deleteCart = async (id: number) => {
	const carts = storage.getString(CART_STORAGE_KEY);

	const cartsInJson: Game[] = carts && JSON.parse(carts);

	const newCarts = cartsInJson.filter((cart) => cart.id !== id);

	storage.set(CART_STORAGE_KEY, JSON.stringify(newCarts));
};
