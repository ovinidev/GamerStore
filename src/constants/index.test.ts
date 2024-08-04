import { CARTS, GAMES } from "./entities";
import { CART_MOCK, GAMES_MOCK, GAME_MOCK } from "./mock";
import { STALE_TIME } from "./staleTime";
import { CART_STORAGE_KEY } from "./storageKey";

describe("Constants", () => {
	test('CARTS should be "carts"', () => {
		expect(CARTS).toBe("carts");
	});

	test('GAMES should be "games"', () => {
		expect(GAMES).toBe("games");
	});

	test("GAME_MOCK should be the correct game object", () => {
		expect(GAME_MOCK).toEqual({
			title: "Game Beta",
			description: "A thrilling game",
			genre: "Action",
			id: 1,
			image: "image-url",
			platform: "PC",
			price: 60,
			release_date: "2024-08-01",
		});
	});

	test("GAMES_MOCK should be the correct array of game objects", () => {
		expect(GAMES_MOCK).toEqual([
			{
				title: "Game Beta",
				description: "A thrilling game",
				genre: "Action",
				id: 1,
				image: "image-url",
				platform: "PC",
				price: 60,
				release_date: "2024-08-01",
			},
			{
				title: "Game Alpha",
				description: "A thrilling game",
				genre: "Action",
				id: 2,
				image: "image-url",
				platform: "PC",
				price: 60,
				release_date: "2024-08-01",
			},
		]);
	});

	test("CART_MOCK should be the correct array of game objects", () => {
		expect(CART_MOCK).toEqual([
			{
				title: "Game Beta",
				description: "A thrilling game",
				genre: "Action",
				id: 1,
				image: "image-url",
				platform: "PC",
				price: 60,
				release_date: "2024-08-01",
			},
			{
				title: "Game Alpha",
				description: "A thrilling game",
				genre: "Action",
				id: 2,
				image: "image-url",
				platform: "PC",
				price: 60,
				release_date: "2024-08-01",
			},
		]);
	});

	test("STALE_TIME should be correct", () => {
		const TEN_SECONDS = 10 * 1000;
		expect(STALE_TIME).toBe(1000 * TEN_SECONDS);
	});

	test('CART_STORAGE_KEY should be "@cart"', () => {
		expect(CART_STORAGE_KEY).toBe("@cart");
	});
});
