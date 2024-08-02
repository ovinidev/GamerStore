import { Game } from "@interfaces/games";
import { clientStorage, storage } from "./mmkv";

describe("MMKV", () => {
	const key = "jest-test-key";
	const value: Game = {
		title: "Game Beta",
		description: "A thrilling game",
		genre: "Action",
		id: 1,
		image: "image-url",
		platform: "PC",
		price: 59.99,
		release_date: "2024-08-01",
	};

	beforeEach(() => {
		storage.clearAll();
	});

	it("should be able to set item and receive them correctly", () => {
		clientStorage.setItem(key, value);

		const gameCreated = clientStorage.getItem(key);

		expect(gameCreated).toEqual(JSON.stringify(value));
	});

	it("should be able to return null if item does not exist", () => {
		const storage = clientStorage.getItem("false key");

		expect(storage).toBeNull();
	});

	it("should be able to remove an item correctly", () => {
		clientStorage.setItem(key, value);
		clientStorage.removeItem(key);

		const storage = clientStorage.getItem(key);

		expect(storage).toBeNull();
	});
});
