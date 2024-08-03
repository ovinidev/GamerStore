import {
	axiosInstance,
	getGamesByIdFromApi,
	getGamesFromApi,
} from "@api/games";
import { GAMES } from "@constants/entities";
import { useQuery } from "@tanstack/react-query";

export const useGames = () => {
	return useQuery({
		queryKey: [GAMES],
		queryFn: () => getGamesFromApi(axiosInstance),
	});
};

export const useGameById = (id: number) => {
	return useQuery({
		queryKey: [GAMES, { id }],
		queryFn: () => getGamesByIdFromApi(axiosInstance, id),
	});
};
