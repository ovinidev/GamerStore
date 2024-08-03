import { clientStorage, storage } from "./mmkv";
import { GAME_MOCK } from "@constants/mock";

describe("MMKV", () => {
	const key = "jest-test-key";

	beforeEach(() => {
		storage.clearAll();
	});

	it("should be able to set item and receive them correctly", () => {
		clientStorage.setItem(key, GAME_MOCK);

		const gameCreated = clientStorage.getItem(key);

		expect(gameCreated).toEqual(JSON.stringify(GAME_MOCK));
	});

	it("should be able to return null if item does not exist", () => {
		const storage = clientStorage.getItem("false key");

		expect(storage).toBeNull();
	});

	it("should be able to remove an item correctly", () => {
		clientStorage.setItem(key, GAME_MOCK);
		clientStorage.removeItem(key);

		const storage = clientStorage.getItem(key);

		expect(storage).toBeNull();
	});
});
