import { CARTS } from "@constants/entities";
import { useQuery } from "@tanstack/react-query";
import { getCartAndCalculateTotalPrice } from "@utils/getCartAndCalculateTotalPrice";

export const useGetCart = () => {
	return useQuery({
		queryKey: [CARTS],
		queryFn: getCartAndCalculateTotalPrice,
	});
};
