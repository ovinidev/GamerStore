import axios, { AxiosInstance } from "axios";
import { getGameByIdFromApi, getGamesFromApi } from "./games";
import { GAMES_MOCK } from "@constants/mock";

jest.mock("axios");

const axiosMocked = axios as jest.Mocked<typeof axios>;

describe("Games Api", () => {
	const mockAxiosInstance = {
		get: jest.fn().mockResolvedValue({ data: GAMES_MOCK }),
	} as unknown as AxiosInstance;

	beforeEach(() => {
		axiosMocked.create.mockClear();
		axiosMocked.get.mockClear();
	});

	it("should be able to fetch and return games data", async () => {
		const games = await getGamesFromApi(mockAxiosInstance);

		expect(games).toEqual(GAMES_MOCK);
	});

	it("should be able to fetch and return the game by ID", async () => {
		const gameId = GAMES_MOCK[0].id;

		const game = await getGameByIdFromApi(mockAxiosInstance, gameId);

		expect(game).toEqual(GAMES_MOCK[0]);
	});

	it("should be able to take error when game not found", async () => {
		const gameId = 99;

		await expect(getGameByIdFromApi(mockAxiosInstance, gameId)).rejects.toThrow(
			"Game not found",
		);
	});
});
