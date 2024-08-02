import { Router } from "expo-router";

interface HandleNavigateProps {
	router: Router;
	id: number;
}

export const handleNavigate = ({ router, id }: HandleNavigateProps) => {
	router.push(`/${id}`);
	router.setParams({
		id,
	});
};
