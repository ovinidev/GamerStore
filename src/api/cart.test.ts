import {
	getCartFromStorage,
	addGameToStorageCart,
	deleteCartFromStorage,
} from "./cart";
import { Game } from "@interfaces/games";
import { clientStorage } from "@services/mmkv";
import { CART_STORAGE_KEY } from "@constants/storageKey";
import { GAME_MOCK, CART_MOCK } from "@constants/mock";

jest.mock("@services/mmkv");

const clientStorageMocked = clientStorage as jest.Mocked<typeof clientStorage>;

describe("Cart storage", () => {
	beforeEach(() => {
		clientStorageMocked.getItem.mockClear();
		clientStorageMocked.setItem.mockClear();
		clientStorageMocked.removeItem.mockClear();
	});

	describe("getCartFromStorage", () => {
		it("should be able to get cart from storage", () => {
			clientStorageMocked.getItem.mockReturnValue(JSON.stringify(CART_MOCK));

			const cart = getCartFromStorage();

			expect(cart).toEqual(CART_MOCK);
			expect(clientStorageMocked.getItem).toHaveBeenCalledWith(
				CART_STORAGE_KEY,
			);
		});

		it("should be able to return a empty array when not have cart", () => {
			clientStorageMocked.getItem.mockReturnValue(null);

			const cart = getCartFromStorage();

			expect(cart).toEqual([]);
			expect(clientStorageMocked.getItem).toHaveBeenCalledWith(
				CART_STORAGE_KEY,
			);
		});
	});

	describe("addGameToStorageCart", () => {
		it("should be able to add a new item in the cart", async () => {
			clientStorageMocked.getItem.mockReturnValue(JSON.stringify([]));

			addGameToStorageCart(GAME_MOCK);

			expect(clientStorageMocked.setItem).toHaveBeenCalledWith(
				CART_STORAGE_KEY,
				[GAME_MOCK],
			);
		});

		it("should be able to throw new error when item already exists", async () => {
			clientStorageMocked.getItem.mockReturnValue(JSON.stringify([GAME_MOCK]));

			expect(addGameToStorageCart(GAME_MOCK)).rejects.toThrow(
				"The game already exist",
			);
			expect(clientStorageMocked.setItem).not.toHaveBeenCalled();
		});
	});

	describe("deleteCartFromStorage", () => {
		it("should be able to remove a game from the cart", () => {
			clientStorageMocked.getItem.mockReturnValue(JSON.stringify(CART_MOCK));

			deleteCartFromStorage(GAME_MOCK.id);

			const newCart = CART_MOCK.filter((game) => game.id !== GAME_MOCK.id);

			expect(clientStorageMocked.setItem).toHaveBeenCalledWith(
				CART_STORAGE_KEY,
				newCart,
			);
		});

		it("should be able to throw an error if the game to be deleted does not exist in the cart", async () => {
			const nonExistentGameId = 999;
			clientStorageMocked.getItem.mockReturnValue(JSON.stringify(CART_MOCK));

			await expect(deleteCartFromStorage(nonExistentGameId)).rejects.toThrow(
				"Cart item not exists",
			);
			expect(clientStorageMocked.setItem).not.toHaveBeenCalled();
		});
	});
});
