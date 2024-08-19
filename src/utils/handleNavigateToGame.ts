import { Router } from "expo-router";

interface HandleNavigateToGameProps {
	router: Router;
	id: number;
}

export const handleNavigateToGame = ({
	router,
	id,
}: HandleNavigateToGameProps) => {
	router.push("/details");
	router.setParams({
		id,
	});
};
