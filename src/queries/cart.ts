import { getCartFromApi } from "@api/cart";
import { CARTS } from "@constants/entities";
import { useQuery } from "@tanstack/react-query";

export const useGetCart = () => {
	return useQuery({
		queryKey: [CARTS],
		queryFn: () => {
			const carts = getCartFromApi();

			const total = carts.reduce((acc, item) => acc + item.price, 0);

			return { carts, totalPrice: total };
		},
	});
};
