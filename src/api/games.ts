import { Game } from "@interfaces/games";
import axios from "axios";

export const axiosInstance = axios.create({
	baseURL:
		"https://gist.githubusercontent.com/ovinidev/62f6a75e0fb6786584caaead7846ee14/raw/games.json",
});

export async function getGames() {
	const { data } = await axiosInstance.get<Game[]>("");

	return data;
}
