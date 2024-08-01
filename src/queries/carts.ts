import { getCarts } from "@api/cart";
import { CARTS } from "@constants/entities";
import { useQuery } from "@tanstack/react-query";

export const useCarts = () => {
	return useQuery({
		queryKey: [CARTS],
		queryFn: getCarts,
	});
};
