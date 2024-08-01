import { getGames } from "@api/games";
import { GAMES } from "@constants/entities";
import { useQuery } from "@tanstack/react-query";

export const useGames = () => {
	return useQuery({
		queryKey: [GAMES],
		queryFn: getGames,
	});
};
