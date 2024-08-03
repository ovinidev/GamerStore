import axios, { AxiosInstance } from "axios";
import { getGamesByIdFromApi, getGamesFromApi } from "./games";
import { GAMES_MOCK } from "@constants/mock";

jest.mock("axios");

const axiosMock = axios as jest.Mocked<typeof axios>;

describe("Games Api", () => {
	const mockAxiosInstance = {
		get: jest.fn().mockResolvedValue({ data: GAMES_MOCK }),
	} as unknown as AxiosInstance;

	beforeEach(() => {
		axiosMock.create.mockClear();
		axiosMock.get.mockClear();
	});

	it("should be able to fetch and return games data", async () => {
		const games = await getGamesFromApi(mockAxiosInstance);

		expect(games).toEqual(GAMES_MOCK);
	});

	it("should be able to fetch and return the game by ID", async () => {
		const gameId = GAMES_MOCK[0].id;

		const game = await getGamesByIdFromApi(mockAxiosInstance, gameId);

		expect(game).toEqual(GAMES_MOCK[0]);
	});

	it("should be able to take error when game not found", async () => {
		const gameId = 99;

		await expect(
			getGamesByIdFromApi(mockAxiosInstance, gameId),
		).rejects.toThrow("Cart not found");
	});
});
