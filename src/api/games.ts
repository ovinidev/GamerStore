import { Game } from "@interfaces/games";
import axios from "axios";

export const axiosInstance = axios.create({
	baseURL:
		"https://gist.githubusercontent.com/ovinidev/62f6a75e0fb6786584caaead7846ee14/raw/games.json",
});

export const getGamesFromApi = async () => {
	const { data } = await axiosInstance.get<Game[]>("");

	return data;
};

export const getGamesByIdFromApi = async (id: number) => {
	const game = await getGamesFromApi();

	const gameById = game.find((game) => game.id === id);

	if (!gameById) {
		throw new Error("Cart not found");
	}

	return gameById;
};
