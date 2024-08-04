import { Game } from "@interfaces/games";
import axios, { AxiosInstance } from "axios";

export const axiosInstance = axios.create({
	baseURL:
		"https://gist.githubusercontent.com/ovinidev/62f6a75e0fb6786584caaead7846ee14/raw/games.json",
});

export const getGamesFromApi = async (axiosInstance: AxiosInstance) => {
	const { data } = await axiosInstance.get<Game[]>("");

	return data;
};

export const getGameByIdFromApi = async (
	axiosInstance: AxiosInstance,
	id: number,
) => {
	const game = await getGamesFromApi(axiosInstance);

	const gameById = game.find((game) => game.id === id);

	if (!gameById) {
		throw new Error("Game not found");
	}

	return gameById;
};
